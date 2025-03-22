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
          alt="gorra"
          height="500"
          width="350"
        />
      </div>
      <div class="col" id="formulario">
        <h2>Completa el formulario y recibe una gorra de regalo</h2>
        <form id="formulario-descarga" @submit.prevent="handleSubmit">
          <input type="text" v-model="nombre" placeholder="Nombre" />
          <input type="email" v-model="email" placeholder="Email" />
          <button
            type="submit"
            id="boton-formulario"
            class="btn btn-primary btn-lg"
          >
            Descargar la demo
          </button>
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
      email: ''
    };
  },
  methods: {
    handleSubmit() {
      // Verifica si el formulario está vacío
      if (!this.nombre.trim() || !this.email.trim()) {
        alert('Por favor, complete todos los campos del formulario.');
        return; // Detiene la ejecución si el formulario está incompleto
      }
      // Verifica si el formulario tiene datos
      if (this.nombre.trim() !== '' || this.email.trim() !== '') {
        // Aquí puedes agregar la lógica para procesar la descarga
        alert('¡Gracias por descargar Valorant Mario Bros!');
        // lógica de envío del formulario
      console.log('Nombre:', this.nombre);
      console.log('Email:', this.email);
        // Limpia el formulario
        this.nombre = '';
        this.email = '';
      }
    }
  }
};
</script>
