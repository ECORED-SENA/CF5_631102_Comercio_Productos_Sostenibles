<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Producción sostenible

    p(data-aos="fade-up") Para garantizar el avance y sostenibilidad de las sociedades modernas es necesario que las organizaciones giren su producción hacia un enfoque de consumo y producción que contribuya a reducir los efectos ambientales negativos de los sistemas de producción, distribución y consumo, pues según datos de la ONU (2015) “el progreso económico y social conseguido durante el último siglo ha estado acompañado de una degradación medioambiental que está poniendo en peligro los mismos sistemas de los que depende el desarrollo futuro (y ciertamente, la supervivencia)”. 

    .row.mt-5.cont_backgroundt2_1.pb-5.p-4(style="position:relative;background-color:#EBE3F9;")
      .col-md-4(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema2/2.svg" data-aos="fade-right" style="display:inline;position:relative;")
      .col-md-8(style="place-self:center;")
        p(data-aos="fade-up" style="position:relative;") Para lo cual, se deben tener en cuenta las etapas del ciclo de vida de los productos y servicios, promoviendo al mismo tiempo, la calidad de vida de los seres humanos
        p.mt-4(data-aos="fade-up" style="position:relative;") En esa medida, para aliviar la presión sobre los ecosistemas se deben formular y aplicar políticas de sostenibilidad económica, social y ambiental. A su vez, es necesario que las organizaciones trabajen en la gestión de una normativa de producción sostenible que propenda por la reutilización de subproductos resultantes de la cadena productiva. En ese sentido, es necesario que las organizaciones fomenten la innovación ecológica para generar una producción más limpia dentro de la concepción de ciclo de vida en la cadena de fabricación (ONU Medio Ambiente, 2017).  
        p.mt-4.mb-0(data-aos="fade-up" style="position:relative;") La producción sostenible es la manera en que las organizaciones ponen a disposición las políticas para la preservación del medio ambiente y se acogen a las normativas y principios de sostenibilidad en el marco jurídico de la producción sostenible establecido por los países.

    p.mt-5(data-aos="fade-up") En el siguiente recurso podrá conocer la relación de la producción sostenible con el uso responsable de los recursos naturales:

    SlyderC.mt-5(:datos="datosSlyder1")

    .titulo-segundo.mt-5
      h2#t_2_1 2.1  Beneficios en la producción

    p(data-aos="fade-up") La producción sostenible trae beneficios a mediano y largo plazo, no solo para la organización en lo que se refiere al uso razonable del capital en la compra de materias primas que tendrán mejor uso en la fabricación y mayor rentabilidad en el manejo y desempeño económico, a la par de esto, los efectos positivos de la producción sostenible se representan en el aprovechamiento eficaz de los recursos porque se disminuyen los desechos y la contaminación, incentiva el reciclaje innovando en la reutilización, lo que es conducente a generar empleos en los mercados secundarios (ONU, 2017), así como posibilita nuevas oportunidades de negocio, aunado a esto, los beneficios de la producción se traducen en los gastos operacionales de las empresas en los que tiene que ver el consumo responsable de agua y energía eléctrica, dotándolas de capacidades para mejorar la competitividad del mercado moderno.

    h5.mt-5(data-aos="fade-up" style="color:#EA3584;") A continuación conocerá los beneficios de la producción sostenible:

    .tarjeta.cont_slyder1.p-4.mt-4
      SlyderA(tipo="b")
        .row.col-md-10.m-auto
          .col-md-7.mb-4.mb-md-0(style="place-self:center")
            h5 Los beneficios de la producción 
            p En torno a la sostenibilidad también se ven reflejados con el cambio administrativo–operativo de algunas organizaciones, pues con el uso de herramientas tecnológicas como las TIC, las empresas han prescindido del consumo de papel, de lugares físicos para el trabajo, ya que se puede hacer en línea.
          .col-md-5(style="place-self:center")
            figure
              img(src='@/assets/curso/tema2/8.svg')
        .row.col-md-10.m-auto
          .col-md-7.mb-4.mb-md-0(style="place-self:center")
            h5 Lo cual hace que los gases de efecto invernadero 
            p En lo que tiene que ver con el traslado de personas a sus lugares de trabajo disminuya, pues los trabajos online o remotos contribuyen a la reducción de material particulado por la descongestión urbana en movilidad y uso de transporte público o privado.  
          .col-md-5(style="place-self:center")
            figure
              img(src='@/assets/curso/tema2/9.png')
        .row.col-md-10.m-auto
          .col-md-7.mb-4.mb-md-0(style="place-self:center")
            h5 Es decir
            p Ya las personas no se trasladan a sus lugares de trabajo, sino que se innova en nuevas pautas de producción que permiten el consumo sostenible en cuanto a servicios como transporte, uso de combustibles fósiles y gasto de energía en equipos de cómputo encendidos las 24 horas del día. 
          .col-md-5(style="place-self:center")
            figure
              img(src='@/assets/curso/tema2/10.png')



</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
    datosSlyder1: [
      {
        titulo:
          'La producción sostenible está relacionada con el uso responsable de los recursos naturales, con el consumo equitativo de materiales tóxicos y la reducción de las emisiones de gases de efecto invernadero, que produce la transformación de los bienes tangibles y los contaminantes que producen a lo largo del ciclo de vida.',
        texto: '',
        imagen: require('@/assets/curso/tema2/3.jpg'),
      },
      {
        titulo:
          'Como lo sustenta la ONU (2017), el uso sostenible de los recursos debe tenerse en cuenta en todas las etapas de la cadena de valor, desde la contratación y el diseño, la fabricación, el transporte y la utilización hasta el final de la vida útil y la reutilización. ',
        texto: '',
        imagen: require('@/assets/curso/tema2/4.jpg'),
      },
      {
        titulo:
          'La producción sostenible se relaciona con el consumo responsable, porque a medida que se consume de forma desmesurada la producción incrementa, lo que a largo plazo trae escasez creciente por el aumento de la demanda. ',
        texto: '',
        imagen: require('@/assets/curso/tema2/5.jpg'),
      },
      {
        titulo:
          'Una manera de tener un consumo responsable es que el consumo de bienes manufacturados y servicios se dé en un contexto y ambiente sano y ecológicamente equilibrado, que garantice recursos para las sociedades futuras.',
        texto: '',
        imagen: require('@/assets/curso/tema2/6.jpg'),
      },
    ],
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
<style lang="sass">
.cont_backgroundt2_1:before
  position: absolute
  content: ''
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema2/1.svg)
  background-repeat: no-repeat
  background-size: 1550px
  background-position: center
.slyder-c__content__header h3
  font-weight: 500
  line-height: 20px
  font-size: 16px
.slyder__btn
  background-color: #6826CC
  color: white
.slyder__btn
  background-color: #6826CC
  color: white
.cont_slyder1
  background: url(../assets/curso/tema2/7.svg)
  background-size: cover
  background-position: center
</style>
