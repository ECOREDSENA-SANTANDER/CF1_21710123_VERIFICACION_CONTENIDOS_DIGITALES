<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Metadatos como evidencia de procedencia

    .bg-color-primario.text-white(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/1.png', alt='')
        .col-lg-7
          .p-4
            img.w-80x.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t3/2.svg', alt='')
            p.mb-0 Una parte relevante de la información útil no se encuentra en aquello que una persona ve, escucha o lee directamente. Los archivos pueden incorporar datos que describen características técnicas, administrativas, descriptivas o relacionadas con su creación. Estos datos se denominan metadatos y constituyen uno de los primeros recursos para identificar evidencias de procedencia. No obstante, deben interpretarse como evidencia potencial: algunos campos pueden modificarse, eliminarse durante la exportación o publicación, o incorporarse manualmente.


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1  Concepto, función y tipos de metadatos

    p.mb-4 Los metadatos describen características del archivo y facilitan la organización, la búsqueda, la identificación, la gestión de derechos y el registro técnico. Para este componente se agrupan en tres categorías: técnicos, descriptivos y administrativos, cuyas características y utilidad inicial se presentan en la Tabla 1.

    .row.justify-content-center.align-items-end.mb-4
      .col-lg-9(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span Concepto, función y tipos de metadatos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Tipo
                th Ejemplos
                th Utilidad inicial
            tbody
              tr
                td Técnicos
                td Dispositivo, dimensiones, código, fecha, #[em software].
                td Caracterizar generación o procesamiento.
              tr
                td Descriptivos
                td Título, descripción, autor, palabras clave.
                td Reconocer contexto y atribuciones declaradas.
              tr
                td Administrativos
                td Derechos, identificadores, restricciones, versiones.
                td Apoyar gestión y trazabilidad.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/3.png', alt='')

    p Un mismo campo puede adquirir diferente relevancia según el objetivo del análisis.


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2  Metadatos EXIF

    img.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t3/4.png', alt='')

    .row.bgcompl-2.tarjeta.align-items-center.p-4(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .col-lg-8
              .bg-color-5.p-4.mb-4
                p.mb-0 EXIF (#[em Exchangeable Image File Format]) se utiliza principalmente en fotografía digital para almacenar datos generados durante la captura. Puede incluir marca y modelo del dispositivo, fecha y hora, orientación, velocidad de obturación, apertura, sensibilidad ISO, distancia focal, dimensiones, información de lente, ubicación geográfica y #[em software]. La Camera & Imaging Products Association (CIPA, 2023) documenta la evolución de EXIF 3.0 y su papel en el intercambio de información técnica de imágenes.
              p Campos como #[em DateTimeOriginal] resultan útiles para identificar la fecha declarada de creación de una imagen, pero deben interpretarse con cautela. Los valores tradicionales de fecha EXIF no siempre contienen zona horaria y pueden verse afectados por configuraciones incorrectas del dispositivo. Del mismo modo, la presencia de un campo de #[em software] puede indicar procesamiento posterior, pero no demuestra qué tipo de modificación se realizó ni si fue engañosa. La ausencia de EXIF también es frecuente por exportación, publicación, conversión, privacidad o eliminación intencional. En consecuencia, presencia y ausencia deben evaluarse en contexto.
            .col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/5.png', alt='')



    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3  Metadatos XMP e IPTC

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/6.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t3/7.svg', alt='')
          .col-lg-10
            p.mb-0 XMP (#[em Extensible Metadata Platform]) proporciona un modelo extensible para representar y gestionar metadatos en diferentes tipos de archivos. Puede combinar propiedades provenientes de distintos esquemas y registrar, entre otros, fechas de creación y modificación, herramienta creadora, derechos o información descriptiva. Un aspecto importante es que la fecha de creación incorporada en XMP no necesariamente coincide con la fecha que muestra el sistema operativo, porque copiar un archivo puede modificar los tiempos del sistema sin alterar los metadatos internos.

    p El estándar IPTC #[em Photo Metadata] se utiliza ampliamente en contextos profesionales y editoriales para describir personas, ubicaciones, creación, identificación y derechos. La versión 2025.1 incorpora además propiedades relacionadas con sistemas de inteligencia artificial, como información sobre el #[em prompt], su autor, el sistema utilizado y la versión correspondiente (IPTC, 2025). Esta evolución evidencia que los metadatos ya no describen únicamente captura tradicional, sino también procesos de generación y transformación sintética.


    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4  Campos de creación, edición e identificación

    .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Durante la extracción pueden aparecer numerosos campos, pero el objetivo formativo no consiste en memorizar etiquetas, sino en reconocer aquellas útiles para reconstruir la procedencia. Los campos de creación pueden informar fecha, dispositivo, aplicación, autor o ubicación; los de modificación pueden revelar #[em software], fechas de actualización o identificadores de versiones; y los de identificación pueden incluir título, creador, descripción, palabras clave, derechos e identificadores. La interpretación debe comparar campos entre sí y formular preguntas sobre coherencia temporal, herramienta declarada, consistencia con la fuente y posibles contradicciones.


    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.5  Persistencia, eliminación y alteración de metadatos

    .row.justify-content-center.align-items-center
      .col-lg-6
        p Los metadatos no permanecen necesariamente unidos al contenido durante todo su ciclo de vida. Pueden conservarse, modificarse, ampliarse, eliminarse o almacenarse de manera externa. Algunas aplicaciones preservan campos existentes, mientras otras los sustituyen o descartan. La pérdida también puede responder a decisiones legítimas de privacidad, por ejemplo, eliminar coordenadas antes de compartir una fotografía. Por ello, ningún metadato debe evaluarse aislado de su origen, contexto, posibilidad de modificación y relación con otras evidencias
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/9.png', alt='')




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
