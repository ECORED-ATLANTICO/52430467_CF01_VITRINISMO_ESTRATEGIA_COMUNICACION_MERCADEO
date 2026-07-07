<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Historia del escaparatismo

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema1/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0.p-4.rounded-4
        p.mb-4 El escaparatismo es una estrategia de comunicación visual utilizada en los establecimientos comerciales para exhibir productos de forma atractiva y captar la atención de los consumidores. A través de elementos como iluminación, color, distribución y ambientación, las vitrinas buscan fortalecer la imagen de marca y estimular las ventas.
        p.mb-0 Actualmente, el escaparatismo hace parte del merchandising y del marketing visual, debido a su influencia en la experiencia de compra y en el comportamiento del consumidor.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1 Evolución
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") El escaparatismo surgió como una forma básica de mostrar productos en vitrinas comerciales. Con el crecimiento del comercio y de los grandes almacenes, las exhibiciones comenzaron a incorporar elementos decorativos y estrategias visuales para atraer clientes. En la actualidad, el escaparatismo integra tecnologías digitales, experiencias sensoriales y visual merchandising para generar mayor impacto comercial.

    .bg_img_1.mb-0

      .row.justify-content-center.align-items-center.mb-4
        .col-8.col-lg-4.mb-3.mb-lg-3(data-aos="zoom-out-up")
          figure
            img(src='@/assets/curso/tema1/img_3.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-12 col-lg-6").p-2.rounded-3
              .tarjeta-img-titulo
                .tarjeta-img-titulo__imagen
                  figure.mb-0
                    img(src='@/assets/curso/tema1/img_4.png', class="img-fluid")
                .tarjeta-img-titulo__contenido
                  h5.tarjeta-img-titulo__titulo.mb-3 Tradicional
                  p.mb-0 Exhibición básica de productos con limitada organización visual.
                  p.mb-0 #[strong Ejemplo comercial:] tiendas de barrio con productos ubicados en vitrinas sencillas.
              .tarjeta-img-titulo
                .tarjeta-img-titulo__imagen
                  figure.mb-0
                    img(src='@/assets/curso/tema1/img_5.png', class="img-fluid")
                .tarjeta-img-titulo__contenido
                  h5.tarjeta-img-titulo__titulo.mb-3 Comercial
                  p.mb-0 Incorporación de decoración, iluminación y organización visual en vitrinas.
                  p.mb-0 #[strong Ejemplo comercial:] almacenes de ropa que utilizan maniquíes y elementos decorativos.
              .tarjeta-img-titulo
                .tarjeta-img-titulo__imagen
                  figure.mb-0
                    img(src='@/assets/curso/tema1/img_6.png', class="img-fluid")
                .tarjeta-img-titulo__contenido
                  h5.tarjeta-img-titulo__titulo.mb-3 Estratégico
                  p.mb-0 Integración de merchandising, comunicación visual y experiencia del consumidor.
                  p.mb-0 #[strong Ejemplo comercial:] tiendas como Zara organizan vitrinas según temporadas y campañas comerciales.
              .tarjeta-img-titulo
                .tarjeta-img-titulo__imagen
                  figure.mb-0
                    img(src='@/assets/curso/tema1/img_7.png', class="img-fluid")
                .tarjeta-img-titulo__contenido
                  h5.tarjeta-img-titulo__titulo.mb-3 Digital
                  p.mb-0 Uso de tecnología, pantallas y experiencias visuales interactivas.
                  p.mb-0 #[strong Ejemplo comercial:] tiendas como Nike utilizan pantallas digitales y recursos audiovisuales en vitrinas.

    .bloque-texto-g.bloque-texto-g--inverso.color-terciario-10.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img_8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por ejemplo, marcas como Zara y Apple Store utilizan escaparates minimalistas y modernos para fortalecer su identidad visual. El interior de una tienda Apple Premium Reseller con diseño minimalista, mesas de exhibición y estanterías organizadas con dispositivos electrónicos. La distribución abierta, la iluminación uniforme y la pantalla promocional del iPhone facilitan la interacción del cliente con los productos y mejoran la experiencia de compra.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2 Importancia
    .mb-0 

    p.mb-4(data-aos="zoom-in-right") El escaparatismo es importante porque constituye el primer contacto visual entre el consumidor y el establecimiento comercial. Una adecuada exhibición permite atraer clientes, comunicar promociones y fortalecer la imagen de marca. Además, contribuye a diferenciar el negocio frente a la competencia y favorece las decisiones de compra mediante estímulos visuales. 
    p.mb-5(data-aos="zoom-in-right") Entre los principales aspectos relacionados con la importancia del escaparatismo se destacan los siguientes:

    /////falta componente 

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.3 Tendencias
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_13.png', class="img-fluid") 
      .col-12.col-lg-7
        p.mb-4(data-aos="zoom-in-right") Las tendencias actuales del escaparatismo se orientan hacia la creación de experiencias visuales innovadoras y tecnológicas que permitan generar mayor interacción entre el consumidor y el punto de venta. Las empresas implementan recursos como iluminación LED, pantallas digitales, vitrinas temáticas y estrategias de marketing sensorial para fortalecer la exhibición comercial y mejorar la experiencia de compra.
        .tarjeta.color-primario-5.p-4.px-5.rounded-4.mb-0(data-aos="zoom-in-right")
          p.mb-0 Asimismo, el escaparatismo contemporáneo incorpora diseños minimalistas y el uso de materiales sostenibles como parte de las nuevas estrategias de comunicación visual. Estas tendencias buscan optimizar la organización de los espacios comerciales, fortalecer la identidad visual de las marcas y generar ambientes más atractivos para los consumidores.

    p.mb-3(data-aos="zoom-in-right") Entre las principales tendencias del escaparatismo se encuentran:

    .bg_img_2.mb-0

      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-8.order-2.order-lg-1
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-12 col-lg-6").p-2.rounded-3
              .tarjeta-img-titulo
                .tarjeta-img-titulo__imagen
                  figure.mb-0
                    img(src='@/assets/curso/tema1/img_15.png', class="img-fluid")
                .tarjeta-img-titulo__contenido
                  h5.tarjeta-img-titulo__titulo.mb-3 Escaparatismo digital
                  p.mb-0 Utiliza pantallas, recursos interactivos y herramientas tecnológicas para generar experiencias visuales innovadoras.
              .tarjeta-img-titulo
                .tarjeta-img-titulo__imagen
                  figure.mb-0
                    img(src='@/assets/curso/tema1/img_16.png', class="img-fluid")
                .tarjeta-img-titulo__contenido
                  h5.tarjeta-img-titulo__titulo.mb-3 Diseño minimalista
                  p.mb-0 Emplea composiciones simples, ordenadas y modernas que facilitan la visualización de los productos.
              .tarjeta-img-titulo
                .tarjeta-img-titulo__imagen
                  figure.mb-0
                    img(src='@/assets/curso/tema1/img_17.png', class="img-fluid")
                .tarjeta-img-titulo__contenido
                  h5.tarjeta-img-titulo__titulo.mb-3 Marketing sensorial
                  p.mb-0 Integra estímulos visuales y emocionales para fortalecer la experiencia del consumidor dentro del establecimiento comercial
              .tarjeta-img-titulo
                .tarjeta-img-titulo__imagen
                  figure.mb-0
                    img(src='@/assets/curso/tema1/img_18.png', class="img-fluid")
                .tarjeta-img-titulo__contenido
                  h5.tarjeta-img-titulo__titulo.mb-3 Escaparates temáticos
                  p.mb-0 Desarrolla ambientaciones visuales relacionadas con campañas comerciales, temporadas o eventos especiales.
        .col-8.col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2(data-aos="zoom-out-up")
          figure
            img(src='@/assets/curso/tema1/img_19.png', class="img-fluid")

    p.mb-0(data-aos="zoom-in-right") El escaparatismo ha evolucionado desde simples vitrinas comerciales hasta convertirse en una estrategia de comunicación visual y mercadeo que influye en la experiencia del consumidor y en el posicionamiento de las marcas dentro del mercado.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
