<template>
  <section id="descarga" class="container text-center">
    <div class="row">
      <div class="col">
        <p>
          Lanzaremos un DLC que sumerge a los agentes del battle royal en el icónico
          universo de Mario Bros. Este nuevo contenido ofrece una experiencia de
          juego única, combinando la mecánica táctica de Valorant con la
          estética y los personajes del popular juego de Nintendo.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img
          src="../assets/mocks/gorra_hongo.jpg"
          alt="Gorra de Mario Bros con hongo icónico"
          height="500"
          width="350"
        />
      </div>
      <div class="col" id="formulario">
        <h2>Completa el formulario y recibe una gorra de regalo</h2>
        <form id="formulario-descarga" @submit.prevent="handleSubmit">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" v-model="nombre" placeholder="Nombre" />
          <span v-if="errores.nombre" class="error">{{ errores.nombre }}</span>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Email" />
          <span v-if="errores.email" class="error">{{ errores.email }}</span>
          <button
            type="submit"
            id="boton-formulario"
            class="btn btn-primary btn-lg"
          >
            Descargar la demo
          </button>
          <div v-if="exito" class="exito">¡Gracias por descargar Valorant Mario Bros!</div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Descarga',
  data() {
    return {
      nombre: '',
      email: '',
      errores: {},
      exito: false
    };
  },
  methods: {
    handleSubmit() {
      this.errores = {};
      this.exito = false;
      if (!this.nombre.trim()) {
        this.errores.nombre = 'El nombre es obligatorio.';
      }
      if (!this.email.trim()) {
        this.errores.email = 'El email es obligatorio.';
      } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.email)) {
        this.errores.email = 'El email no es válido.';
      }
      if (Object.keys(this.errores).length > 0) {
        return;
      }
      // Simula el envío del formulario
      this.exito = true;
      // lógica de envío del formulario
      console.log('Nombre:', this.nombre);
      console.log('Email:', this.email);
      // Limpia el formulario
      this.nombre = '';
      this.email = '';
    }
  }
};
</script>

<style scoped>
.error {
  color: #fff;
  background: #c40001;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
}
.exito {
  color: #fff;
  background: #28a745;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 12px;
  display: block;
}
</style>
