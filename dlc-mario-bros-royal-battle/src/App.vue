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
import Inicio from './components/Inicio.vue'
import Descarga from './components/Descarga.vue'
import Informacion from './components/Informacion.vue'
import Noticias from './components/Noticias.vue'
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