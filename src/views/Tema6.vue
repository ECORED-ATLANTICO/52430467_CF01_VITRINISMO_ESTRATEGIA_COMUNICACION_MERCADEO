<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Leyes de Gestalt

    .tarjeta--bg-img.color-primario-10.rounded-0.p-0.mb-0.overflow-hidden(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0.h-100
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0.align-self-stretch.d-none.d-lg-block
          figure.p-0.m-0.h-100
            img(src='@/assets/curso/tema6/img_1.png', class="img-fluid w-100 h-100 object-fit-cover").p-0
        .col-12.col-lg-7.p-5.px-4
          p.mb-3 Las leyes de Gestalt corresponden a un conjunto de principios de percepción visual que explican cómo las personas organizan e interpretan imágenes, formas y elementos visuales dentro de un espacio. Estas leyes son utilizadas en el vitrinismo y el visual merchandising para diseñar exhibiciones organizadas, atractivas y fáciles de interpretar por los consumidores.
          p.mb-0 En los espacios comerciales, la aplicación de las leyes de Gestalt permite destacar productos, organizar vitrinas y fortalecer la comunicación visual dentro del punto de venta.

    Separador

    #t_6_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.1 Concepto y principios de Gestalt
    .mb-0 

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema6/img_2.png')
      .bloque-texto-t__texto.col-10.mb-0.p-4.rounded-4
        .row.justify-content-center.align-items-center.mb-0
          .col-12.col-lg-10.order-2.order-lg-1.mb-0
            p.mb-0 La teoría Gestalt plantea que las personas perciben los elementos visuales como un conjunto organizado y no de manera aislada. Esto significa que el consumidor interpreta colores, formas y objetos según la relación visual existente entre ellos.
          .col-3.col-lg-2.mb-3.mb-lg-0.order-1.order-lg-2
            figure
              img(src='@/assets/curso/tema6/img_3.svg', class="img-fluid p-4") 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-5(data-aos="flip-left") 
        p.mb-0 Entre los principales principios de Gestalt utilizados en el vitrinismo se encuentran la proximidad, semejanza, continuidad, figura y fondo, cierre. Estos principios permiten mejorar la organización visual y facilitar la percepción de los productos dentro de las vitrinas y espacios comerciales.
      .col-12.col-lg-10.mb-5(data-aos="flip-left") 
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 6.
          |  Principios de Gestalt
        .tabla-a.mb-0(data-aos="flip-left")
          table
            caption 
              p.mb-0 Nota. Adaptada de Arnheim (2008).
            thead
              tr
                th.col-auto.col-lg-2 Principio
                th.col-auto.col-lg-auto Aplicación visual
                th.col-auto.col-lg-auto Aplicación comercial
            tbody
              tr
                td.text-start Proximidad
                td.text-start Agrupa elementos cercanos visualmente.
                td.text-start Permite organizar productos similares dentro de vitrinas y exhibiciones.
              tr.bg-table-01
                td.text-start Semejanza
                td.text-start Relaciona elementos con colores, formas o tamaños similares.
                td.text-start Facilita la identificación de categorías y líneas de productos.
              tr
                td.text-start Continuidad
                td.text-start Genera recorridos visuales organizados.
                td.text-start Orienta la mirada del consumidor hacia productos estratégicos.
              tr.bg-table-01
                td.text-start Figura y fondo
                td.text-start Destaca elementos principales sobre otros secundarios.
                td.text-start Resalta promociones o productos de mayor interés comercial.
              tr
                td.text-start Cierre
                td.text-start Completa visualmente figuras incompletas.
                td.text-start Genera creatividad e impacto visual en vitrinas comerciales.
      .col-12.col-lg-10.mb-0
        .tarjeta.color-terciario-5.p-4.rounded-4.mb-0(data-aos="zoom-in-right")
          p.mb-0 Por ejemplo, tiendas como Apple Store utilizan espacios organizados, iluminación y exhibiciones minimalistas para facilitar la percepción visual y destacar los productos dentro del establecimiento.

    Separador

    #t_6_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.2 Aplicación de las leyes de Gestalt 
    .mb-0 

    p.mb-4(data-aos="zoom-in-right") Las leyes de Gestalt constituyen principios de la percepción visual que orientan la organización de los elementos en una exhibición. Se aplican en vitrinas y exhibiciones comerciales para organizar productos de forma estratégica y generar armonía visual dentro del punto de venta. Estas herramientas permiten captar la atención del consumidor y fortalecer las estrategias de comunicación visual. Entre las mas importantes tenemos:

    .bg_img_20.mb-0
      .row.justify-content-center.align-items-start.mb-4
        .col-8.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure
            img(src='@/assets/curso/tema6/img_5.png', class="img-fluid")
        .col-12.col-lg-8.mb-0(data-aos="zoom-in-right")
          AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-acento-contenido-10")
            div(titulo="Proximidad")
              p.mb-0 Los elementos cercanos entre sí son percibidos como un grupo. En vitrinas comerciales se utiliza para organizar productos relacionados y facilitar su identificación visual.
            div(titulo="Semejanza")
              p.mb-0 Los elementos con colores, formas o tamaños similares tienden a percibirse como parte de una misma categoría. Esta ley permite generar coherencia visual dentro de la exhibición comercial.
            div(titulo="Continuidad")
              p.mb-0 El ojo humano sigue líneas y recorridos visuales de manera natural. En el vitrinismo se aplica para dirigir la mirada del consumidor hacia productos estratégicos dentro del punto de venta
            div(titulo="Figura y fondo")
              p.mb-0 Permite diferenciar un elemento principal de otros secundarios dentro de una composición visual. Se utiliza para destacar promociones, productos o mensajes comerciales importantes

    .bg_img_21.mb-0
      .row.justify-content-center.align-items-start.mb-4
        .col-12.col-lg-8.order-2.order-lg-1.mb-0(data-aos="zoom-in-right")
          AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-acento-contenido-10")
            div(titulo="Cierre")
              p.mb-0 Las personas tienden a completar visualmente figuras incompletas. Esta ley se utiliza en exhibiciones creativas para generar curiosidad e impacto visual en el consumidor.
            div(titulo="Simetría")
              p.mb-0 Los elementos organizados de forma equilibrada generan sensación de orden y armonía visual. Su aplicación mejora la percepción estética de vitrinas y espacios comerciales.
            div(titulo="Pregnancia o buena forma")
              p.mb-0 El cerebro interpreta más fácilmente las formas simples, organizadas y equilibradas. En exhibiciones comerciales se utiliza para facilitar la comprensión visual de los productos y mensajes
            div(titulo="Destino común")
              p.mb-0 Los elementos que parecen dirigirse hacia una misma dirección son percibidos como relacionados. En vitrinas y exhibiciones ayuda a crear sensación de movimiento y dinamismo visual.
        .col-8.col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2(data-aos="flip-left")
          figure
            img(src='@/assets/curso/tema6/img_7.png', class="img-fluid")

    .tarjeta.color-terciario-5.p-4.rounded-4.mb-0(data-aos="zoom-in-right")
      p.mb-0 Por ejemplo, empresas como IKEA utilizan recorridos visuales organizados y exhibiciones temáticas para orientar al consumidor y fortalecer la experiencia dentro del establecimiento comercial.

    Separador

    #t_6_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.3 Organización visual de espacios y productos
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_10.png', class="img-fluid") 
      .col-12.col-lg-7
        .tarjeta.color-secundario-10.p-4.rounded-4.mb-4(data-aos="zoom-in-right")
          p.mb-0 La organización visual corresponde a la distribución estratégica de productos, iluminación, colores y elementos decorativos dentro de vitrinas y espacios comerciales. Su objetivo es generar armonía visual, facilitar el recorrido del consumidor y fortalecer la exhibición de productos.
        p.mb-0(data-aos="zoom-in-right") Una adecuada organización visual mejora la percepción del establecimiento y contribuye a la experiencia de compra del consumidor dentro del punto de venta. Las leyes de Gestalt permiten comprender cómo los consumidores interpretan visualmente las exhibiciones comerciales y los espacios de venta. Su aplicación estratégica en el vitrinismo facilita la organización visual, fortalece la comunicación comercial y mejora la experiencia del consumidor dentro del establecimiento.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-5(data-aos="flip-left") 
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
          h5 Tabla 7.
          |  Elementos de organización visual
        .tabla-a.mb-0(data-aos="flip-left")
          table
            caption 
              p.mb-0 Nota. Adaptada de Pegler, (2018).
            thead
              tr
                th.col-auto.col-lg-2 Elemento
                th.col-auto.col-lg-auto Función
                th.col-auto.col-lg-auto Aplicación en vitrinismo
            tbody
              tr
                td.text-start Iluminación
                td.text-start Resalta productos y espacios específicos.
                td.text-start Destaca vitrinas y productos promocionales.
              tr.bg-table-01
                td.text-start Distribución
                td.text-start Organiza el recorrido visual del consumidor.
                td.text-start Facilita circulación y visualización de productos.
              tr
                td.text-start Color
                td.text-start Genera emociones y percepción visual.
                td.text-start Refuerza campañas comerciales e identidad de marca.
              tr.bg-table-01
                td.text-start Jerarquía visual
                td.text-start Prioriza elementos importantes.
                td.text-start Destaca productos estratégicos o lanzamientos.
              tr
                td.text-start Escenografía
                td.text-start Ambienta y fortalece la exhibición comercial.
                td.text-start Genera experiencias visuales atractivas en vitrinas.

    .bg_img_22.mb-0 
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-12.col-lg-10.mb-5
          .tarjeta--bg-img.color-primario-10.rounded-3.p-3.px-5.overflow-hidden
            .row.align-items-center.mb-0
              .col-8.col-md-4.col-lg-2.mx-auto.text-center.p-4
                figure.m-0
                  img(src="@/assets/curso/tema2/img_24.svg")
              .col-12.col-md-8.col-lg-10.p-4
                .row.justify-content-between.align-items-center.g-3
                  .col-12.col-sm
                    p.mb-0.fw-bold Ir al siguiente video donde se explican las leyes de Gestalt y su aplicación en la percepción visual, la organización de elementos y la comunicación visual dentro de vitrinas y espacios comerciales.
                  .col-12.col-sm-auto
                    a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=pgPljQiSAZY&t=34s" target="_blank" rel="noopener noreferrer")
                      span Ver video
                      i.fa-solid.fa-circle-play.ms-2(aria-hidden="true")

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8
          .tarjeta.color-acento-contenido.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-5.mb-lg-0.mb-3
                figure
                  img(src="@/assets/curso/tema4/img_13.png", class="img-fluid w-100")
              .col-12.col-lg-7.mb-lg-0
                h2.text-white.mb-5 Pódcast
                TarjetaAudio.color-acento-botones.rounded-4.mb-0.p-3.px-4(
                  texto="Las leyes de Gestalt: estrategias para aumentar las ventas y la productividad en los negocios"
                  :audio="require('@/assets/curso/tema4/img_13.png')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = True")
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
</template>

<script>
export default {
  name: 'Tema6',
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
