<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p Los contenidos digitales forman parte de las actividades cotidianas de comunicación, formación, producción, administración y prestación de servicios. Fotografías, videos, audios, documentos electrónicos, publicaciones en plataformas digitales y materiales generados mediante sistemas de inteligencia artificial circulan continuamente entre personas y organizaciones. Sin embargo, disponer de un archivo no significa conocer con certeza su origen, las transformaciones que ha experimentado o las condiciones bajo las cuales fue producido. Por esta razón, el componente formativo Caracterización de contenidos digitales y mecanismos de procedencia orienta al aprendiz hacia la identificación de evidencias que permitan reconstruir, de manera técnica y responsable, información relacionada con la creación, modificación y circulación de un activo digital. 

    .bloque-texto-g.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/intro/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El desarrollo parte del reconocimiento de los contenidos digitales y avanza hacia la comprensión de procedencia, trazabilidad, metadatos, fuentes de información y mecanismos básicos de preservación. Mediante situaciones aplicadas y procedimientos de inspección, el aprendiz fortalece la capacidad para preservar una copia de trabajo, identificar posibles fuentes de origen, extraer metadatos, clasificar evidencias y registrar la información inicial de un análisis. Estas capacidades son relevantes en contextos educativos, administrativos, comunicacionales y productivos en los que la información digital debe utilizarse con criterios de seguridad, responsabilidad y trazabilidad.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 
        

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
