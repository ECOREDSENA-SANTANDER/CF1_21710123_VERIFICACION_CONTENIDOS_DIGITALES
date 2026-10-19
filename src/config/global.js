export default {
  global: {
    Name: 'Caracterización de contenidos digitales y mecanismos de procedencia',
    Description:
      'El componente desarrolla criterios y procedimientos iniciales para reconocer, preservar, clasificar y registrar evidencias de procedencia en imágenes, audios, videos y documentos digitales, integrando metadatos, fuentes de información, trazabilidad y manejo responsable.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
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
        titulo:
          'Contenidos digitales: naturaleza, características y ciclo de vida',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y características de los contenidos digitales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos y formatos de contenidos digitales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Contenidos originales, derivados, compuestos y sintéticos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Ciclo de vida de los contenidos digitales',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Procedencia y trazabilidad de contenidos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Origen y trazabilidad de los contenidos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Atribución, autenticidad técnica e integridad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Procedencia, autenticidad y límites frente a la veracidad',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Metadatos como evidencia de procedencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto, función y tipos de metadatos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Metadatos EXIF',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Metadatos XMP e IPTC',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Campos de creación, edición e identificación',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Persistencia, eliminación y alteración de metadatos',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Fuentes primarias y secundarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Clasificación de las fuentes',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Autoridad, actualidad, contexto y propósito',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Criterios para valorar la confiabilidad de las fuentes',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Preservación de evidencias digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Copia de trabajo e identificación del archivo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Registro inicial y trazabilidad',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Tratamiento responsable de evidencias digitales',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Seguridad y normativa aplicada a contenidos digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo:
          'Proceso inicial de identificación de evidencias de procedencia',
        desarrolloContenidos: true,
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
  glosario: [
    {
      termino: 'Activo digital',
      significado:
        'Recurso representado en formato digital que posee valor para una persona u organización y puede requerir identificación, protección, conservación y gestión.',
    },
    {
      termino: 'Atribución',
      significado:
        'Relación establecida o declarada entre un contenido y una persona, organización, dispositivo, aplicación o sistema al que se asigna su creación o transformación.',
    },
    {
      termino: 'Autenticidad técnica',
      significado:
        'Condición mediante la cual determinadas características de identidad, procedencia o estado pueden comprobarse utilizando evidencias o mecanismos técnicos.',
    },
    {
      termino: 'Contenido compuesto',
      significado:
        'Activo construido mediante la integración de elementos provenientes de diferentes contenidos.',
    },
    {
      termino: 'Contenido derivado',
      significado:
        'Contenido generado mediante modificación, transformación, conversión o adaptación de otro activo preexistente.',
    },
    {
      termino: 'Contenido digital',
      significado:
        'Información representada mediante datos que puede crearse, procesarse, almacenarse, distribuirse o consultarse con sistemas tecnológicos.',
    },
    {
      termino: 'Contenido original',
      significado:
        'Activo correspondiente a una etapa inicial identificada dentro de un proceso de creación o captura, cuya condición debe sustentarse mediante evidencias.',
    },
    {
      termino: 'Contenido sintético',
      significado:
        'Contenido producido o transformado total o parcialmente mediante procesos computacionales, incluidos sistemas de inteligencia artificial generativa.',
    },
    {
      termino: 'Evidencia de procedencia',
      significado:
        'Dato, registro, metadato, fuente, documento o mecanismo técnico que aporta información útil para establecer el posible origen o historial de transformación.',
    },
    {
      termino: 'EXIF',
      significado:
        'Estándar de metadatos utilizado principalmente en imágenes digitales para registrar información técnica de captura.',
    },
    {
      termino: 'Fuente primaria',
      significado:
        'Fuente directamente relacionada con la creación, custodia, almacenamiento o publicación inicial de un contenido.',
    },
    {
      termino: 'Fuente secundaria',
      significado:
        'Fuente que reproduce, interpreta, referencia o redistribuye un contenido obtenido de otra fuente.',
    },
    {
      termino: 'Integridad',
      significado:
        'Propiedad relacionada con la conservación de los datos respecto de un estado tomado como referencia.',
    },
    {
      termino: 'IPTC',
      significado:
        'Estándar de metadatos utilizado en contextos profesionales y editoriales para describir, administrar e intercambiar información asociada con fotografías y otros contenidos.',
    },
    {
      termino: 'Metadatos',
      significado:
        'Datos estructurados que describen características técnicas, descriptivas, administrativas o contextuales de un archivo.',
    },
    {
      termino: 'Preservación digital',
      significado:
        'Acciones destinadas a mantener una referencia adecuada del contenido y reducir alteraciones durante almacenamiento, inspección o análisis.',
    },
    {
      termino: 'Procedencia digital',
      significado:
        'Información disponible acerca del origen de un activo y de las acciones o transformaciones registradas durante su ciclo de vida.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad para seguir y documentar el recorrido de un contenido mediante fuentes, registros, identificadores, metadatos, versiones u otras evidencias.',
    },
    {
      termino: 'Veracidad',
      significado:
        'Correspondencia entre una afirmación o representación y los hechos reales a los que hace referencia; debe diferenciarse de autenticidad técnica y procedencia.',
    },
    {
      termino: 'XMP',
      significado:
        'Plataforma extensible de metadatos utilizada para incorporar y administrar información descriptiva, administrativa, técnica y de derechos en distintos archivos digitales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Camera & Imaging Products Association. (2023). About Exif 3.0.',
      link: '',
    },
    {
      referencia:
        'Chandra, B., Dunietz, J., Roberts, K., Lee, Y., Fontana, P., & Awad, G. (2024). Reducing risks posed by synthetic content: An overview of technical approaches to digital content transparency (NIST AI 100-4). National Institute of Standards and Technology.',
      link: '',
    },
    {
      referencia:
        'Coalition for Content Provenance and Authenticity. (2026a). C2PA Specification (Version 2.4).',
      link: '',
    },
    {
      referencia:
        'Coalition for Content Provenance and Authenticity. (2026b). Content Credentials: C2PA technical specification (Version 2.4).',
      link: '',
    },
    {
      referencia:
        'Coalition for Content Provenance and Authenticity. (2026c). Security considerations (Version 2.4).',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2022). Information security, cybersecurity and privacy protection - Information security management systems - Requirements (ISO/IEC 27001:2022).',
      link: '',
    },
    {
      referencia:
        'International Press Telecommunications Council. (2025). IPTC Photo Metadata Standard 2025.1.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andres Bonza Reyes ',
          cargo: 'Experto temático ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero ',
          cargo: 'Evaluadora instruccional  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Marcos Yamid Rubiano Avellaneda',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
