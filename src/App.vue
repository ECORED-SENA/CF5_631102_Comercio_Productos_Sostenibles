<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>
<style lang="sass">
.banner-interno
  height: 114px
.banner-interno__fondo
  background-image: url(assets/curso/fondo_tema.png) !important
.banner-principal .tarjeta
  background-position: inherit !important
.titulo-principal__numero
  background-color: #EA3584 !important
.titulo-principal__numero span
  color: #fff !important
.curso-main-container > .container
  overflow-x: clip !important
.titulo-segundo:after
  border-left-color: #EA3584 !important
.banner-principal p, .banner-principal h1, .banner-principal h2, .banner-principal h3, .banner-principal h4, .banner-principal h5, .banner-principal h6
  color: #12263F !important
.banner-principal-decorativo-1
  top: 20% !important
  right: 65% !important
  -webkit-animation: float1 3.5s ease-in-out infinite alternate
  animation: float1 3.5s ease-in-out infinite alternate
.banner-principal-decorativo-2
  top: 75% !important
  right: 15% !important
  -webkit-animation: float1 3.5s ease-in-out infinite alternate
  animation: float1 3.5s ease-in-out infinite alternate
.banner-interno__titulo__icono
  background-color: #12263F
.banner-interno__titulo h1, .banner-interno__titulo h2, .banner-interno__titulo h3, .banner-interno__titulo h4, .banner-interno__titulo h5, .banner-interno__titulo h6
  color: #12263F
</style>
