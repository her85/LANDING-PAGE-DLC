<template>
    <section id="descarga" class="container text-center">
      <div class="row">
        <div class="col">
          <p>
            Lanzaremos un DLC que sumerge a los agentes de Valorant en el icónico universo de Mario Bros. Este nuevo contenido ofrece una experiencia de juego única, combinando la mecánica táctica de Valorant con la estética y los personajes del popular juego de Nintendo.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img src="../assets/mocks/gorra_hongo.jpg" alt="gorra" height="500" width="350" />
        </div>
        <div class="col" id="formulario">
          <h2>Completa el formulario y recibe una gorra de regalo</h2>
          <form id="formulario-descarga">
            <input type="text" id="nombre" placeholder="Nombre" />
            <input type="email" id="email" placeholder="Email" />
            <button type="submit" id="boton-formulario" class="btn btn-primary btn-lg">Descargar la demo</button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Descarga'
  }
  </script>