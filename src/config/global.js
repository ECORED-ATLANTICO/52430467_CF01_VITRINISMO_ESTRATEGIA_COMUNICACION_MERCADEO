export default {
  global: {
    Name: 'Fundamentos del vitrinismo',
    Description:
      'El componente formativo aborda los fundamentos del vitrinismo y la comunicación visual aplicados al punto de venta como estrategias de <em>merchandising</em> y exhibición comercial. Analiza elementos como el escaparatismo, la exhibición de productos, el <em>merchandising</em>, los medios visuales, la percepción visual y las leyes de Gestalt, con el propósito de fortalecer la presentación de productos y la experiencia visual del consumidor dentro de los espacios comerciales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Historia del escaparatismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Evolución',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tendencias',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Exhibición de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Zonas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Niveles',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Técnicas',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Usos',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '<em>Merchandising</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Aplicabilidad',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Visual <em>merchandising</em>',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Medios visuales y comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fundamentos visuales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Teoría visual',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Percepción visual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Dinámicas visuales',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Comportamiento visual del consumidor',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Leyes de Gestalt',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto y principios de Gestalt',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Aplicación de las leyes de Gestalt',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Organización visual de espacios y productos',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Composición visual',
      significado:
        'Distribución organizada de elementos dentro de una exhibición comercial.',
    },
    {
      termino: 'Comunicación visual',
      significado:
        'Transmisión de mensajes mediante imágenes, colores, formas y elementos gráficos.',
    },
    {
      termino: 'Consumidor',
      significado:
        'Persona que adquiere o utiliza productos y servicios dentro del mercado.',
    },
    {
      termino: 'Contraste visual',
      significado:
        'Diferencia entre elementos visuales utilizada para generar impacto y destacar productos.',
    },
    {
      termino: 'Dinámica visual',
      significado:
        'Organización de elementos visuales para dirigir la atención del consumidor.',
    },
    {
      termino: 'Escaparatismo',
      significado:
        'Estrategia visual utilizada para exhibir productos de manera atractiva en vitrinas comerciales.',
    },
    {
      termino: 'Escenografía comercial',
      significado:
        'Ambientación visual utilizada para fortalecer la presentación de productos y marcas.',
    },
    {
      termino: 'Exhibición comercial',
      significado:
        'Presentación organizada de productos dentro de un establecimiento comercial.',
    },
    {
      termino: 'Experiencia de compra',
      significado:
        'Sensaciones y percepciones generadas en el consumidor durante el proceso comercial.',
    },
    {
      termino: '<em>Gestalt</em>',
      significado:
        'Teoría de percepción visual basada en la organización de elementos como un conjunto integrado.',
    },
    {
      termino: 'Identidad visual',
      significado:
        'Conjunto de elementos gráficos que representan la imagen de una marca o empresa.',
    },
    {
      termino: 'Iluminación comercial',
      significado:
        'Uso estratégico de la luz para destacar productos y espacios de exhibición.',
    },
    {
      termino: 'Jerarquía visual',
      significado:
        'Organización de elementos según su nivel de importancia dentro de una exhibición.',
    },
    {
      termino: '<em>Marketing</em> visual',
      significado:
        'Estrategias de comunicación apoyadas en recursos visuales para atraer consumidores.',
    },
    {
      termino: '<em>Merchandising</em>',
      significado:
        'Conjunto de estrategias utilizadas para presentar productos y estimular las ventas en el punto de venta.',
    },
    {
      termino: 'Percepción visual',
      significado:
        'Proceso mediante el cual las personas interpretan estímulos visuales en su entorno.',
    },
    {
      termino: 'Punto de venta',
      significado:
        'Espacio físico o digital donde se realiza la comercialización de productos o servicios.',
    },
    {
      termino: 'Teoría del color',
      significado:
        'Estudio del efecto de los colores sobre las emociones y percepciones de las personas.',
    },
    {
      termino: 'Vitrinismo',
      significado:
        'Técnica de organización visual aplicada en vitrinas y espacios comerciales para atraer consumidores.',
    },
    {
      termino: '<em>Visual merchandising</em>',
      significado:
        'Aplicación de elementos visuales y estéticos para mejorar la exhibición comercial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Editorial GG. (2016). <em>Visual merchandising</em>. Editorial Gustavo Gili.',
      link:
        'https://editorialgg.com/media/catalog/product/9/7/9788425228681_inside.pdf',
    },
    {
      referencia:
        'Heller, E. (2004). <em>Psicología del color: Cómo actúan los colores sobre los sentimientos y la razón</em>. Editorial Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). <em>Dirección de marketing</em> (15.ª ed.). Pearson Educación.',
      link:
        'https://www.montartuempresa.com/wp-content/uploads/2016/01/direccion-de-marketing-14edi-kotler1.pdf',
    },
    {
      referencia:
        'Martínez, D. (2017). <em>Merchandising</em>. Fundación Universitaria del Área Andina.',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/1370/Merchandising.pdf',
    },
    {
      referencia:
        'Martínez Cruz, H. (2018). <em>El arte de seducir: merchandising</em>. ECOE Ediciones.',
      link:
        'https://www.ecoeediciones.com/wp-content/uploads/2018/01/El-arte-de-seducir-1.pdf',
    },
    {
      referencia:
        'Ríos Quiñónez, M. B. (2024). Análisis del <em>merchandising</em> visual como estrategia de diseño y disposición de productos en farmacias independientes del DMQ. <em>Res Non Verba Revista Científica</em>, <em>14</em>(1), 1–17.',
      link: 'https://revistas.ecotec.edu.ec/index.php/rnv/article/view/840',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Nacional Ecosistema de Recursos Educativos Digitales (RED) - Profesional 06',
          centro: 'Centro Agroturístico - Regional Santander ',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta ',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
