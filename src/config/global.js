export default {
  global: {
    componenteFormativo: 'Productos y negocios sostenibles',
    descripcionCurso:
      'En este componente se estudian temas que ayudan a identificar oportunidades de negocios verdes, organización de productos sostenibles, uso de ficha técnica e identificación de ecoetiquetas que son requeridos para los negocios verdes, y así evitar el impacto  negativo en el medio ambiente, la comunidad o la sociedad en su conjunto, incorporando buenas prácticas que soportan el desarrollo económico de los negocios sostenibles.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Negocios verdes - ¿Qué es Mercadeo Verde (Green Marketing)?',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ventajas y desventajas del mercadeo verde',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Implementación de una estrategia de mercadeo verde en una empresa',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ejemplos de mercadeo verde en el mundo',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Factores de éxito del mercadeo verde',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Producción sostenible',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Beneficios en la producción',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Productos ecológicos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Productos biodegradables',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Productos orgánicos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Campaña ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Técnicas de recolección de información',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Envases, empaques y embalajes ecológicos o biodegradables  ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Envases ecológicos y biodegradables',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Empaques ecológicos y biodegradables',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Embalajes ecológicos y biodegradables',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Ficha técnica',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Sello ambiental',
            hash: 't_4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.6',
            titulo: 'Ecoetiquetas y declaraciones ambientales',
            hash: 't_4_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Alcaraz, S. (2019). Embalaje ecológico: Preguntas frecuentes sobre el impacto del embalaje en el medio ambiente.',
      link:
        'https://www.rajapack.es/blog-es/embalaje/embalaje-ecologico-preguntas-frecuentes/',
    },
    {
      referencia:
        'Calderón, M. & Pestana, Y. (2019). Green marketing, tendencias y su aplicación en proyectos. Universidad del   Rosario.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. ONU. (2017). ONU Medio Ambiente, abogando por el consumo y la producción sostenible.',
      link: '',
    },
    {
      referencia:
        'Ricci, T. (2020). Marketing verde e innovación. Universidad del Rosario. ',
      link:
        'https://repository.urosario.edu.co/bitstream/handle/10336/30732/RicciCastillo-TitoFederico-2020.pdf?sequence=7&isAllowed=y',
    },
    {
      referencia:
        'Hitchcock, Darcy E. (2015). The business guide to sustainability: practical strategies and tools for organizations Darcy Hitchcock and Marsha Willard. Third Edition. New York: Routledge,268 pages; 24 cm.',
      link: 'https://lccn.loc.gov/2014042052',
    },
  ],
  glosario: [
    {
      termino: 'Comercio justo',
      significado:
        'Es una forma alternativa de comercio, promovida por varias ONG, por la Organización de las Naciones Unidas (ONU) y por los movimientos sociales y políticos que promueven una relación comercial voluntaria y justa entre productores y consumidores.',
    },
    {
      termino: 'Compost',
      significado:
        'Materiales utilizados para hacer composta: restos de vegetales y frutas, cáscara de huevo, residuos de procedencia animal tallos frescos, hojas secas, entre otros,',
    },
    {
      termino: 'Desarrollo Sostenible',
      significado:
        'Desarrollo que satisface las necesidades actuales de las personas sin comprometer la capacidad de las futuras generaciones para satisfacer las suyas.',
    },
    {
      termino: 'Encuestas',
      significado:
        'Recopilación de información que es proporcionada directamente por los sujetos de estudio, con el fin de obtener actitudes, opiniones o sugerencias de ellos mismos. Así mismo, esta técnica permite aplicaciones masivas.',
    },
    {
      termino: 'Entrevistas',
      significado:
        'Técnica de recolección de información muy efectiva en la investigación cualitativa. Se define como una conversación que ofrece un propósito específico además de hablar. Es una herramienta técnica que toma la forma de un diálogo conversacional.',
    },
    {
      termino: 'Grupos focales',
      significado:
        'Consiste en que las personas llevan a cabo una reunión donde pueden opinar y solucionar un problema en específico. ',
    },
    {
      termino: 'Green Marketing o marketing green',
      significado:
        'El mercadeo verde se define como todas las actividades cuyo objetivo principal es generar y proporcionar cambios dirigidos a satisfacer las necesidades de las personas con la menor huella negativa posible hacia el medio ambiente. Este concepto presenta mucha similitud con la definición de mercadeo tradicional, con diferenciación en causar el menor impacto ambiental negativo al medio ambiente.',
    },
    {
      termino: 'Marketing',
      significado:
        'Disciplina dedicada al análisis del comportamiento de los mercados y de los consumidores. El marketing analiza la gestión comercial de las empresas, con el objetivo de captar, retener y fidelizar a los clientes a través de la satisfacción de sus necesidades.',
    },
    {
      termino: 'Producción',
      significado:
        'Elaboración de bienes y servicios en unas condiciones prefijadas.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Características del desarrollo que asegura satisfacer las necesidades de las generaciones presentes sin comprometer las necesidades de las generaciones futuras.',
    },
  ],
  complementario: [
    {
      tema: '1. 1. ¿Qué es Mercadeo Verde (Green Marketing)?',
      referencia:
        'Samper, J., Cañas, L. (2017). Acciones y prácticas de mercadeo verde en empresas colombianas (casos de estudio). Revista de Economía & Administración, 5(2), p. 139-158. ',
      tipo: 'Artículo',
      link:
        'https://www.academia.edu/3302778/ACCIONES_Y_PR%C3%81CTICAS_DE_MERCADO_VERDE_EN_EMPRESAS_COLOMBIANAS_CASOS_DE_ESTUDIO_?from=cover_page ',
    },
    {
      tema: '2. Producción sostenible',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015). Aprendamos sobre negocios verdes y sostenibles. [Vídeo].  YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rfD-UKuod18',
    },
    {
      tema: '2. Producción sostenible',
      referencia:
        'Ellen MacArthur Foundation. (2021). Rethinking Progress. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RstFV_n6wRg',
    },
    {
      tema: '3. Campaña ambiental',
      referencia:
        'Asociación Quercus. (2013) Stop Global Warming.[Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5vYsRrwusHE',
    },
    {
      tema: '4.  Envases, empaques y embalajes ecológicos o biodegradables',
      referencia:
        'Henry, J. (2010). La Línea De Empaque Del 2020: Gran Parte De Las Bases Ya Están Establecidas. Solo Necesitamos Continuar Su Desarrollo. Industria Alimenticia 21.7 28. Web.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_gale_infotracmisc_A233497912',
    },
    {
      tema: '4.5 Sello ambiental',
      referencia: 'Encolombia. (s.f.). Sello Ambiental. ',
      tipo: 'Artículo',
      link:
        'https://encolombia.com/economia/info-economica/negocios-verdes/sello-ambiental/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: '',
        centro: '',
      },
      {
        nombre: '',
        cargo: '',
        centro: '',
      },
      {
        nombre: '',
        cargo: '',
        centro: '',
      },
      {
        nombre: '',
        cargo: '',
        centro: '',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: '',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
