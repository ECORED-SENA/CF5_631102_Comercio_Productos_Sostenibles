<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Campaña ambiental

    p(data-aos="fade-up") Una campaña ambiental abarca diferentes conceptos y herramientas que sirven de guía para su desarrollo, es muy importante valorar, cuidar y conservar nuestro entorno natural.
    p.mt-4(data-aos="fade-up") A continuación se destacan algunas herramientas y conceptos:
    figure.mt-5.col-md-10.m-auto
      img(src="@/assets/curso/tema3/1.svg" data-aos="zoom-in-up")
    p.mt-5.col-md-10.m-auto.ps-3.pe-3(style="position:relative;border-left:3px #EA3584 solid;border-right:3px #EA3584 solid;" data-aos="fade-up") He aquí algunas de las formas usadas en campañas ambientales más usadas que se han ideado para intentar convencer al público de que recicle sus residuos:

    .col-md-10.m-auto.row.pb-4.pt-4.mt-5(style="border-top:3px #AFAFAF solid;")
      .col-auto(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema3/2.png" data-aos="fade-right" style="display:inline;")
      .col(style="place-self:center")
        p.mb-0(data-aos="fade-left") #[i.fas.fa-circle(style="color:#EA3584;")] Una forma muy acertada de cómo hacer hincapié en la fecha de caducidad del contenido de los alimentos aunque se ignora por completo cuándo caducará su envase.  En este ejemplo, un tarro de sardinas, el tarro no caducará hasta dentro de 4000 años. Se trata de una muestra muy sencilla que permite a la gente replantearse cómo se deshace de los envases y que puede presionar a los fabricantes para que también tengan en cuenta el diseño de sus envases.
    .col-md-10.m-auto.row.pb-4.pt-4.mt-3(style="border-top:3px #AFAFAF solid;")
      .col-auto(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema3/3.png" data-aos="fade-right" style="display:inline;")
      .col(style="place-self:center")
        p.mb-0(data-aos="fade-left") #[i.fas.fa-circle(style="color:#EA3584;")] Surfrider es una organización benéfica famosa por sus grandes campañas de concienciación y ésta no es una excepción.  Butts-n-bits es una gran ejecución de una idea sencilla. Con 200 millones de libras de colillas desechadas en los Estados Unidos cada año, en el futuro estas colillas representan todo lo que el océano podría ofrecer.
    .col-md-10.m-auto.row.pb-4.pt-4.mt-3(style="border-top:3px #AFAFAF solid;border-bottom:3px #AFAFAF solid;")
      .col-auto(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema3/4.png" data-aos="fade-right" style="display:inline;")
      .col(style="place-self:center")
        p.mb-0(data-aos="fade-left") #[i.fas.fa-circle(style="color:#EA3584;")] Aunque no es una campaña específica sobre el reciclaje, esta campaña de la agencia brasileña aborda el tema general de cómo se trata el medio ambiente en general. Esta campaña para ondazul.org.br se basa en el hecho de que poca gente piensa en las consecuencias de sus acciones cuando se trata del medio ambiente. La campaña saca a relucir las consecuencias de las acciones humanas y cómo estas acciones sólo son autodestructivas.

    br
    .titulo-segundo.mt-5
      h2#t_3_1 3.1  Técnicas de recolección de información

    figure
      img(src="@/assets/curso/tema3/5.png" data-aos="zoom-in-up")

    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mt-5.col-md-10.m-auto
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0(data-aos="fade-up") Al momento de hacer un trabajo es importante considerar las diferentes técnicas de recolección, las cuales se definen como procedimientos para la realización de actividades requeridas por el investigador y que sirven como herramientas propicias para la obtención de información relevante en una campaña ambiental. Entre las técnicas de recolección de información más utilizadas se encuentran:
        .col-lg-4.mb-4.mb-lg-0
          ul.lista-ul
            li.h5(data-aos="fade-up") 
              i.fas.fa-circle(style="color:#EA3584;")
              | Método de observación.
            li.h5(data-aos="fade-up") 
              i.fas.fa-circle(style="color:#EA3584;")
              | Cuestionarios o encuestas.
            li.h5(data-aos="fade-up") 
              i.fas.fa-circle(style="color:#EA3584;")
              | Grupos focales.
            li.h5(data-aos="fade-up") 
              i.fas.fa-circle(style="color:#EA3584;")
              | Entrevistas

    figure.mt-5
      img(src="@/assets/curso/tema3/6.svg" data-aos="fade-up" style="max-width:330px;")

    p.mt-4(data-aos="fade-up") El método de observación es el registro visual de una situación real, dichas observaciones se pueden recopilar en notas de campo o plataformas de recolección de datos y sus principales características son:

    .row.mt-5
      .col-md-4.mb-5
        div.tarjeta.text-center.indicador__container.cont_hover(style="position:relative;overflow:hidden;" @mouseover="indicadorTarjetaSlide1 = false")
          .indicador--hover(v-if="indicadorTarjetaSlide1")
          div.text-white.m-auto.cont_hover__numero(style="width:80px;background-color:#6B2EC4;border-radius:50%;font-size:42px;font-weight:bold;padding:0px 0px;border:6px #E3E3F9 solid;position:relative;bottom:-40px;z-index:1;") 1
          figure.text-center(style="position:relative")
            img(src="@/assets/curso/tema3/7.svg" data-aos="zoom-in-up")
            .cont_hover__texto Técnica de investigación básica.
      .col-md-4.mb-5
        div.tarjeta.text-center.indicador__container.cont_hover(style="position:relative;overflow:hidden;" @mouseover="indicadorTarjetaSlide1 = false")
          div.text-white.m-auto.cont_hover__numero(style="width:80px;background-color:#6B2EC4;border-radius:50%;font-size:42px;font-weight:bold;padding:0px 0px;border:6px #E3E3F9 solid;position:relative;bottom:-40px;z-index:1;") 2
          figure.text-center(style="position:relative")
            img(src="@/assets/curso/tema3/8.svg" data-aos="zoom-in-up")
            .cont_hover__texto Establece relación básica entre el observador y el objeto a observar.
      .col-md-4.mb-5
        div.tarjeta.text-center.indicador__container.cont_hover(style="position:relative;overflow:hidden;" @mouseover="indicadorTarjetaSlide1 = false")
          div.text-white.m-auto.cont_hover__numero(style="width:80px;background-color:#6B2EC4;border-radius:50%;font-size:42px;font-weight:bold;padding:0px 0px;border:6px #E3E3F9 solid;position:relative;bottom:-40px;z-index:1;") 3
          figure.text-center(style="position:relative")
            img(src="@/assets/curso/tema3/9.svg" data-aos="zoom-in-up")
            .cont_hover__texto Es el comienzo de la comprensión de la realidad.

    p.mt-3(data-aos="fade-up") Al interior de los métodos de observación se incluyen diferentes tipos:

    .row.cont_backgroundt3_1.pb-5.mt-5(style="position:relative;")
      PasosA.color-acento-contenido.col-md-10.m-auto(tipo="n")
        .row.col-md-10.m-auto
          .col-md-3.mb-4.mb-md-0(style="place-self:center")
            figure.text-center
              img(src='@/assets/curso/tema3/11.svg' data-aos="fade-left" style="position:relative;display:inline;max-width:120px")
          .col-md-9(style="place-self:center")
            h5 Observación casual
            p Incluye observaciones de rutina y no planificadas que se pueden realizar en cualquier momento del día.
        .row.col-md-10.m-auto
          .col-md-9.mb-4.mb-md-0(style="place-self:center")
            h5 Observación deliberada naturalista
            p Comprende observaciones planificadas y organizadas que tienen lugar en momentos específicos en momentos específicos.
          .col-md-3(style="place-self:center")
            figure.text-center
              img(src='@/assets/curso/tema3/12.svg' data-aos="fade-left" style="position:relative;display:inline;max-width:120px")
        .row.col-md-10.m-auto
          .col-md-3.mb-4.mb-md-0(style="place-self:center")
            figure.text-center
              img(src='@/assets/curso/tema3/13.svg' data-aos="fade-left" style="position:relative;display:inline;max-width:120px")
          .col-md-9(style="place-self:center")
            h5 Observación focalizada
            p Consiste en la observación de un aspecto determinado.
        .row.col-md-10.m-auto
          .col-md-9.mb-4.mb-md-0(style="place-self:center")
            h5 Observación participativa
            p Es aquella en la que no solo se observa pasivamente, sino que hay una interacción que ayuda a comprender otros aspectos.
          .col-md-3(style="place-self:center")
            figure.text-center
              img(src='@/assets/curso/tema3/14.svg' data-aos="fade-left" style="position:relative;display:inline;max-width:120px")
        .row.col-md-10.m-auto
          .col-md-3.mb-4.mb-md-0(style="place-self:center")
            figure.text-center
              img(src='@/assets/curso/tema3/15.svg' data-aos="fade-left" style="position:relative;display:inline;max-width:120px")
          .col-md-9(style="place-self:center")
            h5 Observación no participativa
            p Es aquella que recoge información del exterior sobre los hechos y fenómenos que se estudian sin la intervención de grupos sociales.
        .row.col-md-10.m-auto
          .col-md-9.mb-4.mb-md-0(style="place-self:center")
            h5 Observación directa
            p Es cuando el observador individual se expone a la realidad o fenómeno que intenta estudiar.
          .col-md-3(style="place-self:center")
            figure.text-center
              img(src='@/assets/curso/tema3/16.svg' data-aos="fade-left" style="position:relative;display:inline;max-width:120px")
        .row.col-md-10.m-auto
          .col-md-3.mb-4.mb-md-0(style="place-self:center")
            figure.text-center
              img(src='@/assets/curso/tema3/17.svg' data-aos="fade-left" style="position:relative;display:inline;max-width:120px")
          .col-md-9(style="place-self:center")
            h5 Observación indirecta 
            p Es cuando el observador se da cuenta de un evento o fenómeno al observar a través de observaciones que han sido realizadas anteriormente por otros.
        .row.col-md-10.m-auto
          .col-md-9.mb-4.mb-md-0(style="place-self:center")
            h5 Observación individual 
            p Se realiza de forma individual, por lo que debe hacerse sola.
          .col-md-3(style="place-self:center")
            figure.text-center
              img(src='@/assets/curso/tema3/18.svg' data-aos="fade-left" style="position:relative;display:inline;max-width:120px")
        .row.col-md-10.m-auto
          .col-md-3.mb-4.mb-md-0(style="place-self:center")
            figure.text-center
              img(src='@/assets/curso/tema3/19.svg' data-aos="fade-left" style="position:relative;display:inline;max-width:120px")
          .col-md-9(style="place-self:center")
            h5 Observación en equipo o grupo 
            p Está hecho por un grupo o varias personas que forman un grupo.
        .row.col-md-10.m-auto
          .col-md-9.mb-4.mb-md-0(style="place-self:center")
            h5 Observación estructurada
            p Se logra construyendo un sistema de guía de observación paso a paso y colocándolo en relación con todo el proceso de investigación en curso.
          .col-md-3(style="place-self:center")
            figure.text-center
              img(src='@/assets/curso/tema3/20.svg' data-aos="fade-left" style="position:relative;display:inline;max-width:120px")
        .row.col-md-10.m-auto
          .col-md-3.mb-4.mb-md-0(style="place-self:center")
            figure.text-center
              img(src='@/assets/curso/tema3/21.svg' data-aos="fade-left" style="position:relative;display:inline;max-width:120px")
          .col-md-9(style="place-self:center")
            h5 Observación abierta 
            p Se realiza libremente y no tiene una estructura organizada. Se usa cuando se quiere captar un movimiento espontáneo.
        .row.col-md-10.m-auto
          .col-md-9.mb-4.mb-md-0(style="place-self:center")
            h5 Observación semiestructurada 
            p Este tipo de observación comienza con instrucciones estructuradas, pero se aplica de manera flexible según el formato de la observación.
          .col-md-3(style="place-self:center")
            figure.text-center
              img(src='@/assets/curso/tema3/22.svg' data-aos="fade-left" style="position:relative;display:inline;max-width:120px")
        .row.col-md-10.m-auto
          .col-md-3.mb-4.mb-md-0(style="place-self:center")
            figure.text-center
              img(src='@/assets/curso/tema3/23.svg' data-aos="fade-left" style="position:relative;display:inline;max-width:120px")
          .col-md-9(style="place-self:center")
            h5 Observación participante
            p El sujeto que es observado se considera miembro del grupo que observa.

    p.mt-5(data-aos="fade-up") Como las observaciones tienen propósitos claros y bien definidos, están sujetas a comprobación por lo que deben tener un plan definido específico y un plan de trabajo claro para lograr los objetivos, también tiene el control sobre los datos tomados sistemáticamente, lo cual permite cumplir los requisitos de confiabilidad y validez, cuyos resultados se establecen por escrito.
          
    figure.mt-5
      img(src="@/assets/curso/tema3/24.svg" data-aos="fade-up" style="max-width:330px;")

    .row.cont_backgroundt3_2.pb-5.mt-5(style="position:relative;")
      p(data-aos="fade-up" style="position:relative") Este método implica recopilar información que es proporcionada directamente por los sujetos de estudio, con el fin de conocer actitudes, opiniones o sugerencias de ellos mismos, así como tener en cuenta que esta técnica permite aplicaciones masivas. Algunos de los tipos de cuestionarios son los que se observan en la siguiente tabla.

      .titulo-sexto.color-acento-contenido.mt-4(style="position:relative")
        h5 Figura 1
        span Tipos de cuestionarios, ventajas y desventajas

      .tabla-a.color-primario.mt-3(style="position:relative")
        table
          thead
            tr(style="background-color:#CFD2E1;")
              th(style="border:0;font-size:20px;") Tipos
              th(style="border:0;font-size:20px;") Descripción
              th(style="border:0;font-size:20px;") Ventajas
              th(style="border:0;font-size:20px;") Desventajas
          tbody
            tr
              td.text-center.p-4(style="background-color:#FFFAE7;border:1px #12263F solid;font-weight:bold;") Cuestionario abierto
              td.text-center.p-4.bg-white(style="border:1px #12263F solid;") Se aplica para obtener una comprensión más profunda de las opiniones de las personas sobre un tema en particular.
              td.text-center.p-4.bg-white(style="border:1px #12263F solid;") Analiza las opiniones de manera más detallada.
              td.text-center.p-4.bg-white(style="border:1px #12263F solid;") Requiere de más tiempo para responder y es más difícil de recopilar la información.
            tr
              td.text-center.p-4(style="background-color:#FFFAE7;border:1px #12263F solid;font-weight:bold;") Cuestionario cerrado
              td.text-center.p-4.bg-white(style="border:1px #12263F solid;") Está formulado de manera que al informante se le proporciona solo algunas alternativas de respuesta. 
              td.text-center.p-4.bg-white(style="border:1px #12263F solid;") Más fácil de contestar.
              td.text-center.p-4.bg-white(style="border:1px #12263F solid;") Es posible que las categorías que se ofrecen no sean relevantes o la persona no haya pensado en sus respuestas. #[br] #[br] Al proporcionar categorías al informante se está sugiriendo la respuesta.

      .row.mt-5
        .col-md-7(style="place-self:center")
          p(data-aos="fade-up" style="position:relative") Anguita, Repullo y Donado (2003), afirman, a través de un estudio de encuesta y elaboración de cuestionario, que en la planificación de una investigación que esta primera se puede establecer a partir de las siguientes etapas:
          ul.lista-ul.mt-4.ps-4(style="position:relative")
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#6826CC;")
              | Identificación del problema.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#6826CC;")
              | Determinación del diseño de investigación.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#6826CC;")
              | Especificación de las hipótesis.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#6826CC;")
              | Definición de las variables.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#6826CC;")
              | Selección de la muestra.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#6826CC;")
              | Diseño del cuestionario.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#6826CC;")
              | Organización del trabajo de campo.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#6826CC;")
              | Obtención y tratamiento de los datos.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#6826CC;")
              | Análisis de los datos e interpretación de los resultados.
        .col-md-5
          figure.text-center
            img(src="@/assets/curso/tema3/26.svg" data-aos="fade-left" style="position:relative")

    figure.mt-5
      img(src="@/assets/curso/tema3/36.svg" data-aos="fade-up" style="max-width:330px;")

    p.mt-4(data-aos="fade-up") Esta técnica consiste en que las personas llevan a cabo una reunión donde pueden opinar y solucionar un problema en específico; una de las cualidades de esta herramienta es que permite tomar diferentes perspectivas sobre un mismo tema y llegar a la mejor solución.

    .col-md-8.m-auto.mt-4.p-4(style="background-color:#F6F6F6;")
      .col-md-10.m-auto
        .titulo-sexto.color-primario(style="border-left-color:#FFBB00;")
          h5 Figura 1
          span Grupos focales
        figure.text-center.mt-4
          img(src="@/assets/curso/tema3/28.svg" data-aos="zoom-in-up")
        figcaption.mt-2(style="font-weight:500;") Nota. Tomada de https://conceptodefinicion.de/grupos-focales/ 

    .cajon.color-acento-contenido.p-4.mb-4.col-md-10.m-auto.row.mt-5(style="background-color:#FFF7FB;")
      .col-md-3(style="place-self:center")
        h5(data-aos="fade-up" style="font-size:18px;") Los grupos focales tienen grandes ventajas, dentro de las cuales se encuentran:
      .col-md-9
        ul.lista-ul.mt-4.ps-4(style="position:relative")
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#6826CC;")
            | Recopilar información de lanzamiento relevante, mejorar los productos existentes y obtener ideas para el desarrollo de nuevos productos.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#6826CC;")
            | Verificar que la selección del respectivo público objetivo y segmentos de mercado sea correcta.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#6826CC;")
            | Identificar por qué el producto está perdiendo popularidad y qué se debe cambiar para recuperar a sus espectadores.

    p.mt-5(data-aos="fade-up") Dentro de los grupos focales es importante considerar la forma en que se puede organizar y para ello, podrá conocerlo a través del siguiente recurso: 

    .p-5.mt-4(style="background-color:#F6F6F6;border-radius:15px;")
      h4.text-center(data-aos="fade-up") ¿Cómo se organiza un grupo focal?
      figure.text-center.mt-5
        img(src="@/assets/curso/tema3/29.svg" data-aos="zoom-in-up")

    figure.mt-5
      img(src="@/assets/curso/tema3/30.svg" data-aos="fade-up" style="max-width:330px;")

    p.mt-4(data-aos="fade-up") La entrevista es una técnica de recolección de información muy efectiva en la investigación cualitativa. Se define como una conversación que ofrece un propósito específico, además de hablar es una herramienta técnica que toma la forma de un diálogo conversacional.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.col-md-10.m-auto.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/31.svg')})`}"
      )
      .bloque-texto-g__texto.p-5
        h5.mb-0(data-aos="zoom-in-up") La entrevista puede realizarse de manera presencial o por teléfono, se necesita de un encuestador y un informante; es necesario conocer la información del informante para poder orientar la conversación a los temas a tratar.

    p.mt-5(data-aos="fade-up") A continuación, se relacionan los tipos de entrevista:

    .row.mt-5
      .col-md-4.p-0
        .p-5.text-center(style="background-color:#FFE0F0;border-top-left-radius:15px;border-bottom-left-radius:15px;height:100%;")
          figure.text-center
            img(src="@/assets/curso/tema3/32.svg" data-aos="zoom-in-up" style="display:inline;max-width:300px;max-height:200px;")
          h5.mt-5(data-aos="fade-up") Entrevistas estructuradas o enfocadas
          p.mt-4(data-aos="fade-up") El entrevistador parte de una lista de preguntas la cual se encuentra en orden.
      .col-md-4.p-0
        .p-5.text-center(style="background-color:#EBE3F9;height:100%;")
          figure.text-center
            img(src="@/assets/curso/tema3/33.svg" data-aos="zoom-in-up" style="display:inline;max-width:300px;max-height:200px;")
          h5.mt-5(data-aos="fade-up") Entrevistas semiestructuradas
          p.mt-4(data-aos="fade-up") El entrevistador es libre de hacer preguntas adicionales a las establecidas.
      .col-md-4.p-0
        .p-5.text-center(style="background-color:#ECEDF4;border-top-right-radius:15px;border-bottom-right-radius:15px;height:100%;")
          figure.text-center
            img(src="@/assets/curso/tema3/34.svg" data-aos="zoom-in-up" style="display:inline;max-width:300px;max-height:200px;")
          h5.mt-5(data-aos="fade-up") Entrevistas semiestructuradas
          p.mt-4(data-aos="fade-up") El entrevistador está en la libertad de realizar preguntas relacionadas a una guía con temas en específico. Se tratan varios tipos de preguntas que son generales, ejemplares, estructuradas, estructurales y contrastadas. 

    .row.mt-5
      .col-md-7
        p(data-aos="fade-up") Las entrevistas tienen diversas ventajas que posibilitan se trabaje en beneficio de los objetivos propuestos, entre ellas que se pueden utilizar en un amplio campo de aplicación donde se determinen hechos no observables como los fundamentos, puntos de vista, significados, sugerencias, opiniones, valoraciones y sensaciones; así mismo, que no hay límite de espacio y tiempo, por lo que es posible por situaciones del pasado o futuro; que tiene un tema central donde se puede orientar hacia un objetivo determinado o centrarse en un tema específico; y tiene un punto de vista propio y ajeno en el cual se obtiene información tanto propia (opiniones, motivos, etc.), como de observaciones realizadas que se refieren a una persona o suceso.
        .cajon.color-secundario.p-4.mb-4.mt-4(style="background-color:#F4F8FC;")
          p.mb-0(data-aos="fade-up") En conclusión, las diferentes técnicas de recolección de información descritas anteriormente son las estrategias que se tienen para recolectar la información y su aplicación va a depender del tipo de estudio que se desarrolle.
      .col-md-5
        figure
          img(src="@/assets/curso/tema3/35.svg" data-aos="fade-left")











</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaSlide1: true,
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
<style lang="sass">
.bloque-texto-a.color-acento-contenido
  background-color: #EA3584
.bloque-texto-a.color-acento-contenido:before
  background-color: #E8E8E8
.cont_hover__texto
  position: absolute
  background-color: rgba(227,227,249,.9)
  width: 100%
  height: 101%
  border-radius: 15px
  justify-content: center
  align-items: center
  font-size: 20px
  font-weight: bold
  padding: 25px
  display: flex
  top: 0
  transform: translateY(100%)
  transition: transform .4s ease-in-out
.cont_hover:hover .cont_hover__texto
  cursor: pointer
  transform: translateY(0%)
.cont_hover__numero
  transition: background-color .4s ease-in-out
.cont_hover:hover .cont_hover__numero
  background-color: #E3E3F9 !important
  border: 6px #6B2EC4 solid !important
  color: #12263F !important
.cont_backgroundt3_1:before
  position: absolute
  content: ''
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema3/10.svg)
  background-repeat: no-repeat
  background-size: cover
  background-position: bottom
.pasos-a.color-acento-contenido .pasos-a__circle div
  color: white
.cont_backgroundt3_2:before
  position: absolute
  content: ''
  width: 115%
  height: 100%
  left: -7%
  background: url(../assets/curso/tema3/25.svg)
  background-repeat: no-repeat
  background-size: cover
  background-position: bottom
.cajon.color-secundario:before
  background-color: #12263F
</style>
