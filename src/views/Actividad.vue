<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos del vitrinismo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la apropiación de los fundamentos del vitrinismo en un negocio.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la finalidad principal del escaparatismo dentro de un establecimiento comercial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la exhibición de productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fortalecer la comunicación visual y atraer consumidores.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Controlar inventarios.', esCorrecta: false },
            { id: 'd', texto: 'Sustituir las ventas.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El escaparatismo fortalece la comunicación visual y permite atraer la atención de los consumidores hacia los productos y marcas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué aspecto caracteriza la evolución del escaparatismo moderno?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso exclusivo de vitrinas cerradas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminación de recursos visuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Integración de tecnología y experiencias visuales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducción de la comunicación comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El escaparatismo moderno incorpora recursos tecnológicos y experiencias visuales para mejorar la interacción con el consumidor.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es uno de los objetivos principales del <em>merchandising</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la visibilidad y las ventas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir el acceso a los productos.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Eliminar promociones.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Disminuir la rotación comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El <em>merchandising</em> busca incrementar la visibilidad de los productos y estimular las ventas dentro del punto de venta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué tipo de exhibición organiza productos de arriba hacia abajo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Temática.', esCorrecta: false },
            { id: 'b', texto: 'Horizontal.', esCorrecta: false },
            { id: 'c', texto: 'Masiva.', esCorrecta: false },
            { id: 'd', texto: 'Vertical.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Correcto! La exhibición vertical organiza los productos de arriba hacia abajo para facilitar su visualización por parte del consumidor.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué función cumple la iluminación dentro de una exhibición comercial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Organizar inventarios.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Reducir la percepción visual.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Sustituir la decoración.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Destacar productos y atraer atención.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La iluminación permite destacar productos, generar ambientes atractivos y fortalecer la experiencia visual del cliente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué es la percepción visual?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La estructura financiera.', esCorrecta: false },
            {
              id: 'b',
              texto:
                'La interpretación de estímulos visuales por parte de las personas.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Los costos logísticos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Los procesos administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La percepción visual estudia la forma en que las personas interpretan imágenes, colores y demás estímulos visuales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Cuál es un elemento básico de los fundamentos visuales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Color.', esCorrecta: true },
            { id: 'b', texto: 'Nómina.', esCorrecta: false },
            { id: 'c', texto: 'Facturación.', esCorrecta: false },
            { id: 'd', texto: 'Inventario.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! El color es uno de los principales elementos de los fundamentos visuales utilizados en vitrinas y exhibiciones comerciales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué busca la teoría visual dentro del vitrinismo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir espacios comerciales.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Controlar las ventas.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Organizar estratégicamente los elementos visuales.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Sustituir la publicidad.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La teoría visual facilita la organización estratégica de los elementos para mejorar la comunicación comercial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué ley de Gestalt agrupa elementos similares por forma o color?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Continuidad.', esCorrecta: false },
            { id: 'b', texto: 'Semejanza.', esCorrecta: true },
            { id: 'c', texto: 'Cierre.', esCorrecta: false },
            { id: 'd', texto: 'Figura-fondo.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La ley de semejanza permite agrupar visualmente elementos que comparten características similares.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué representa una zona caliente dentro del punto de venta?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Área de almacenamiento.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Espacio con alta circulación de consumidores.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Zona administrativa.', esCorrecta: false },
            { id: 'd', texto: 'Área de descarga.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Las zonas calientes son espacios con alta circulación de clientes y gran potencial comercial.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Cuál es una tendencia actual del escaparatismo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Escaparatismo digital.', esCorrecta: true },
            { id: 'b', texto: 'Eliminación de vitrinas.', esCorrecta: false },
            { id: 'c', texto: 'Reducción de promociones.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Sustitución de exhibidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El escaparatismo digital utiliza pantallas, recursos interactivos y tecnologías visuales para atraer consumidores.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué permite la comunicación visual en el punto de venta?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar la interacción con usuarios y visitantes extranjeros.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar los sistemas de reservas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar el uso del español.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Clasificar hoteles por estrellas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La comunicación visual transmite mensajes comerciales mediante imágenes, colores y recursos gráficos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué empresa es reconocida por aplicar principios de teoría visual y diseño minimalista?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'DIAN.', esCorrecta: false },
            { id: 'b', texto: 'Banco de la República.', esCorrecta: false },
            { id: 'c', texto: 'Apple Store.', esCorrecta: true },
            { id: 'd', texto: 'Cámara de Comercio.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Apple Store es reconocida por aplicar principios de teoría visual y organización estratégica de espacios comerciales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué efecto puede generar el color en el consumidor?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generar emociones y atraer atención.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir el interés por los productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la percepción visual.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Sustituir la iluminación.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Los colores pueden generar emociones, influir en la percepción y captar la atención de los consumidores.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué caracteriza al <em>merchandising</em> promocional?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Reducción de exhibiciones.', esCorrecta: false },
            { id: 'b', texto: 'Eliminación de descuentos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Uso de ofertas y material publicitario.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ausencia de comunicación visual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El <em>merchandising</em> promocional utiliza ofertas, material publicitario y exhibiciones para estimular la compra.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué ley de Gestalt explica que el cerebro completa figuras incompletas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Proximidad.', esCorrecta: false },
            { id: 'b', texto: 'Cierre.', esCorrecta: true },
            { id: 'c', texto: 'Continuidad.', esCorrecta: false },
            { id: 'd', texto: 'Simetría.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La ley de cierre explica la capacidad del cerebro para completar visualmente figuras incompletas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué factor influye directamente en el comportamiento visual del consumidor?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Colores e iluminación.', esCorrecta: true },
            { id: 'b', texto: 'Nómina empresarial.', esCorrecta: false },
            { id: 'c', texto: 'Estados financieros.', esCorrecta: false },
            { id: 'd', texto: 'Contratación de personal.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Los colores y la iluminación influyen directamente en el comportamiento visual y las decisiones de compra.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué tipo de exhibición se utiliza para campañas especiales o temporadas?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Operativa.', esCorrecta: false },
            { id: 'b', texto: 'Administrativa.', esCorrecta: false },
            { id: 'c', texto: 'Temática.', esCorrecta: true },
            { id: 'd', texto: 'Financiera.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Las exhibiciones temáticas se utilizan para destacar campañas, temporadas o eventos comerciales específicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Cuál es la principal función de una vitrina comercial?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Atraer consumidores y destacar productos.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Almacenar mercancías.', esCorrecta: false },
            { id: 'c', texto: 'Realizar inventarios.', esCorrecta: false },
            { id: 'd', texto: 'Gestionar pagos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La vitrina comercial tiene como propósito atraer consumidores y destacar productos estratégicos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Por qué el vitrinismo es considerado una estrategia de mercadeo?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque fortalece la comunicación comercial y las ventas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque reemplaza la publicidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque elimina promociones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque sustituye la atención al cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El vitrinismo es una estrategia de mercadeo que fortalece la comunicación comercial y favorece las ventas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
