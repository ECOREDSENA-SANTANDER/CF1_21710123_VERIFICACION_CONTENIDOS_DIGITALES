<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Contenidos digitales: naturaleza, características y ciclo de vida
        
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-6.p-3.p-sm-4.p-md-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La identificación de evidencias de procedencia comienza por comprender qué tipo de objeto se analiza. Una fotografía, un documento, una grabación de audio o un video pueden parecer elementos claramente diferenciados para una persona, pero desde una perspectiva técnica constituyen activos digitales organizados mediante estructuras y formatos específicos. Cada formato determina cómo se almacena la información principal y qué datos adicionales pueden acompañar al archivo. Por ello, antes de formular conclusiones sobre su origen, debe establecerse qué es el contenido, cuál es su formato, dónde fue obtenido y qué información técnica puede contener. 


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1  Concepto y características de los contenidos digitales

    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/2.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/3.svg', alt='')
          .col-lg-10
            p.mb-0 Un contenido digital puede entenderse como información representada mediante datos que puede ser creada, almacenada, procesada, reproducida o transmitida utilizando dispositivos y sistemas tecnológicos. Dentro de esta categoría se encuentran textos, fotografías, ilustraciones, documentos electrónicos, audio, video, animaciones, presentaciones y recursos multimedia. La condición digital permite que un mismo archivo sea copiado entre dispositivos o sistemas sin alterar necesariamente su contenido perceptible, aunque durante su circulación pueden cambiar propiedades técnicas o metadatos.
    
    p La posibilidad de reproducción también introduce dificultades para determinar la procedencia. Un archivo puede copiarse, descargarse, reenviarse o convertirse de formato, y cada operación puede afectar la información asociada. Por esta razón, el lugar donde se encuentra una copia no demuestra por sí solo dónde se originó. En la gestión de la información, además, los contenidos digitales pueden considerarse activos cuando poseen valor operativo, educativo, comercial, documental o comunicacional. El International Press Telecommunications Council (IPTC, 2025) resalta la importancia de los metadatos para identificar, administrar, recuperar y proteger derechos sobre contenidos visuales.

    .cajon.color-secundario.bg-color-2.p-4(data-aos='fade')
      h4.mb-2 Diferencia entre apariencia e información técnica
      p.mb-0 Un principio básico para el análisis es diferenciar entre lo que el contenido muestra y lo que el archivo informa técnicamente acerca de sí mismo. Dos imágenes visualmente idénticas pueden contener diferentes metadatos, niveles de compresión, fechas, dimensiones, perfiles de color o información de procedencia. La apariencia, por tanto, no sustituye la caracterización técnica inicial.


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2.  Tipos y formatos de contenidos digitales

    p Para fines de verificación de procedencia, resulta útil distinguir cuatro grupos funcionales: documentos, imágenes, audio y video. Las características de cada grupo y algunos de sus formatos se presentan a continuación.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/4.png', alt='')
      .col-lg-9(data-aos="fade-left")
        TabsA.color-acento-botones
          .tarjeta.bg-color-4.p-4(titulo="Documentos")
            p Los documentos digitales incluyen archivos de texto, hojas de cálculo, presentaciones y PDF; pueden conservar propiedades como autor declarado, fechas, aplicación utilizada o versión.
          .tarjeta.bg-color-4.p-4(titulo="Imágenes")
            p Las imágenes utilizan formatos como JPEG, PNG, TIFF, WebP o RAW, cuyas estructuras determinan qué metadatos pueden incorporarse.
          .tarjeta.bg-color-4.p-4(titulo="Audio")
            p Los archivos de audio, como WAV, MP3, AAC o FLAC, pueden registrar duración, tasa de muestreo, códec y campos descriptivos.
          .tarjeta.bg-color-4.p-4(titulo="Video")
            p Los videos, mediante contenedores como MP4, MOV, MKV o WebM, integran pistas de imagen y sonido junto con características técnicas específicas.

    p La extensión visible del archivo constituye una pista, pero no una prueba concluyente de su estructura. Un nombre puede modificarse sin transformar los datos internos. En un análisis, por ello, se registra inicialmente el tipo de activo, formato identificado, dimensiones o duración, fuente inmediata, nombre del archivo y presencia o ausencia de metadatos. Esta línea base permite continuar el procedimiento sin confundir identificación con autenticación.


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3.  Contenidos originales, derivados, compuestos y sintéticos

    img.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t1/5.png', alt='')

    p.mb-5 Los contenidos pueden diferenciarse según su proceso de creación. Estas diferencias permiten reconocer cuatro tipos de contenidos según la forma en que fueron generados o transformados.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t6/subt.svg', alt='')
      h3.mb-0.mx-3 Tipos de contenidos según su proceso de creación

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.bg-color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4.col-md-5.col-lg-5
              img(src='@/assets/curso/temas/t1/tarj1.svg', alt='')
          h4.text-center Contenido original
          p.mb-0 Un contenido original corresponde al activo generado inicialmente dentro de un proceso determinado; sin embargo, que un archivo sea presentado como original no demuestra que sea la primera versión existente.
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.bg-color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4.col-md-5.col-lg-5
              img(src='@/assets/curso/temas/t1/tarj2.svg', alt='')
          h4.text-center Contenido derivado
          p.mb-0 Un contenido derivado surge de la transformación de otro activo, por ejemplo, al recortar una fotografía, cambiar su tamaño, convertir su formato o comprimir un video. Estas modificaciones pueden ser legítimas y no implican necesariamente manipulación engañosa.
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.bg-color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4.col-md-5.col-lg-5
              img(src='@/assets/curso/temas/t1/tarj3.svg', alt='')
          h4.text-center Contenido compuesto
          p.mb-0 Un contenido compuesto integra elementos provenientes de diferentes activos, como sucede en una infografía que combina fotografías, texto e ilustraciones o en un video educativo que incorpora grabaciones, música y animaciones. En estos casos, cada ingrediente puede poseer su propio origen, historial y condiciones de uso.
      .col-lg-3.col-md-6.mb-3
        .tarjeta--boton.bg-color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4.col-md-5.col-lg-5
              img(src='@/assets/curso/temas/t1/tarj4.svg', alt='')
          h4.text-center Contenido sintético
          p.mb-0 Un contenido sintético es producido o transformado total o parcialmente mediante procesos computacionales, incluidos sistemas de inteligencia artificial generativa. Chandra et al. (2024) advierte que la creciente disponibilidad de contenido sintético plantea retos de transparencia, confianza y seguridad, para los cuales se estudian enfoques como procedencia, autenticación, etiquetado, marcas de agua y detección.

    p La existencia de contenido sintético no implica automáticamente engaño. Una ilustración generada para un material educativo puede ser legítima si se utiliza con transparencia. El aprendizaje, por tanto, no debe reducirse a clasificar archivos como reales o falsos, sino a identificar evidencias observables y reconocer los límites de esas evidencias.


    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4  Ciclo de vida de los contenidos digitales

    p Los contenidos digitales atraviesan diferentes etapas durante su ciclo de vida. En cada una de ellas, la información relacionada con la procedencia puede generarse, conservarse, modificarse o perderse, como se representa en la Figura 1.

    .mb-4(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido.mb-3 
        h5 Figura 1.
        span Ciclo de vida del contenido digital
      figure
        img(src='@/assets/curso/temas/t1/fig1.svg', alt='Ciclo de vida digital en siete etapas y cambios en las evidencias de procedencia durante cada una.')


    p Comprender este ciclo explica por qué la preservación inicial resulta tan importante. La copia recibida para análisis representa solo un punto de la trayectoria del contenido. Su estado puede diferir de la versión original y, por tanto, cualquier interpretación debe reconocer la posibilidad de transformaciones anteriores no documentadas.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
