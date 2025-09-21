<template>
    <header>
      <nav aria-label="Navegación principal">
        <a class="navbar-brand" href="#inicio">
          <img src="../assets/icons/logoCrack.jpg" alt="Logo Mario Bros Battle Royal" width="90" height="45" />
        </a>
        <a href="#noticias">Noticias</a>
        <a href="#informacion">Información del juego</a>
        <a href="#descarga">Descarga</a>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>

<style scoped>

img {
  border-radius: 50%; /* Redondear la imagen */
}
nav a:focus {
  outline: 2px solid #fff;
  outline-offset: 2px;
}
</style>
