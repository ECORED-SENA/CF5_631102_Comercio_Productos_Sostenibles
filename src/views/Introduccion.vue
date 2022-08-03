<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-md-4
        figure.mb-4
          img(src="@/assets/curso/introduccion/1.png" data-aos="fade-right")
      .col-md-8
        .cajon-b.color-secundario.p-3.mb-5
          p.mb-0(data-aos="fade-left") En este componente se proporcionan elementos para desarrollar capacidades y garantizar el cumplimiento para clasificar productos sostenibles según campaña ambiental y necesidades del mercado objetivo, mediante el desarrollo de negocios verdes, productos sostenibles, campaña ambiental, envases, empaques y embalajes ecológicos. El siguiente video como proceso introductorio y contextual del componente formativo, muestra cómo algunas empresas verdes son pioneras en la sostenibilidad, lo cual servirá de punto de partida para la temática que se tratará:
    
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
