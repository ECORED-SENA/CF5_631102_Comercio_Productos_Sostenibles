<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Negocios verdes - ¿Qué es Mercadeo Verde (Green Marketing)?

    .row
      .col-md-5
        p(data-aos="fade-right" style="color:#EA3584;font-size:24px;font-weight:bold;") La expresión “mercadeo verde” se conoce también como mercadeo ambiental o mercadeo ecológico.
      .col-md-7
        p(data-aos="fade-left") Se define como todas las actividades cuyo objetivo principal es generar y proporcionar cambios dirigidos a satisfacer las necesidades de las personas, con la menor huella negativa posible hacia el medio ambiente. Este concepto presenta mucha similitud con la definición de mercadeo tradicional, con la diferencia en causar el menor impacto ambiental negativo. 




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
