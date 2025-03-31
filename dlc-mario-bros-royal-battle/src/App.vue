<template>
  <div id="app">
    <Header />
    <Inicio />
    <Descarga />
    <Informacion />
    <Noticias />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Inicio from './views/Inicio.vue'
import Descarga from './components/Descarga.vue'
import Informacion from './views/Informacion.vue'
import Noticias from './views/Noticias.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Inicio,
    Descarga,
    Informacion,
    Noticias,
    Footer
  }
}
</script>

<style>
@import './assets/css/estilo.css';
</style>