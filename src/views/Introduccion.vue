<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/introduccion/img_1.png', class="img-fluid") 
      .col-12.col-lg-7
        .row.justify-content-center.align-items-start
          .col-10
            p.mb-4(data-aos="zoom-in-right") El componente formativo Fundamentos del vitrinismo aborda el estudio de la exhibición comercial y la comunicación visual como elementos estratégicos dentro de los espacios de venta. En este contexto, el vitrinismo permite organizar y presentar productos de manera atractiva mediante el uso de recursos visuales, favoreciendo la percepción del consumidor y fortaleciendo las estrategias de <em>merchandising</em> en el punto de venta.
          .col-2
            figure
              img(src='@/assets/curso/introduccion/img_2.png', class="img-fluid d-none d-lg-block") 
        .tarjeta.color-secundario-10.p-5.rounded-4.mb-0(data-aos="zoom-in-right")
          p.mb-0 A través del desarrollo de este componente se analizan conceptos relacionados con el escaparatismo, la exhibición de productos, el <em>merchandising</em> y los medios visuales, los cuales permiten comprender la importancia de la organización visual en la presentación comercial de productos y marcas. Asimismo, se estudian elementos de percepción visual y principios de Gestalt aplicados a vitrinas y espacios comerciales, orientados a mejorar la experiencia visual y la comunicación con el consumidor.

    p.mb-0(data-aos="zoom-in-right") De igual manera, el componente integra fundamentos visuales, dinámicas de percepción y estrategias de organización espacial que contribuyen al diseño de exhibiciones comerciales más atractivas y funcionales. A lo largo del desarrollo temático se abordarán conceptos, herramientas y aplicaciones prácticas que fortalecerán la interpretación y aplicación del vitrinismo como estrategia de comunicación y mercadeo en contextos comerciales.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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
