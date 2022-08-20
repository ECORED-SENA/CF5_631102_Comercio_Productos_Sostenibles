<template lang="pug">
.linea-tiempo-a
  .linea-tiempo-a__row(
    v-for="(item,index) of datos"
    :ref="'linea-tiempo-item-'+index"
  )
    .linea-tiempo-a__content
      .linea-tiempo-a__text.p-4(style="background-color:#FFE0F0;" :class="'linea-tiempo-a__text-'+index")
        h4.mb-2(v-html="item.titulo" style="text-align:left;")
        span(v-html="item.texto" style="text-align:left;")

    .linea-tiempo-a__content
      .linea-tiempo-a__icon
        .linea-tiempo-a__icon__container
          figure
            img(:src="item.imagen")
</template>

<script>
export default {
  name: 'LineaTiempoA',
  props: {
    datos: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style lang="sass"></style>
