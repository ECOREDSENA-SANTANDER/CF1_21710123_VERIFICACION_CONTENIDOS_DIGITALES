<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Proceso inicial de identificación de evidencias de procedencia

    .bloque-texto-g.color-secundario.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t7/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los conceptos desarrollados se integran en una secuencia práctica que articula los cinco saberes: preservar, identificar, extraer, clasificar y registrar. Cada acción prepara la siguiente y evita emitir conclusiones antes de disponer de información suficiente.

    .bg-fondo-1.tarjeta.p-4.pt-5.mb-4(data-aos="fade")
      SlyderA(tipo="b")
        .row.align-items-center.justify-content-center
          .col-lg-5.col-11
            h5 Preservación de la copia de trabajo
            p El procedimiento comienza con la recepción del contenido, la conservación de una referencia de su estado inicial y la creación de una copia destinada al análisis. Se asigna un identificador y se registra la fuente inmediata y la fecha de recepción. Esta práctica reduce modificaciones accidentales y establece una base mínima de trazabilidad.
          .col-lg-5.col-11.d-none.d-lg-block
            img(src='@/assets/curso/temas/t7/slide1.png', alt='')
        .row.align-items-center.justify-content-center
          .col-lg-5.col-11
            h5 Identificación de las fuentes de origen
            p Después de preservar el archivo, se examinan la fuente de obtención, publicaciones anteriores, repositorios, registros institucionales y fuentes primarias o secundarias. El resultado no siempre será encontrar al creador original. Cuando la evidencia es insuficiente, la conclusión metodológicamente correcta es declarar que no fue posible establecer el origen con la información disponible, en lugar de atribuirlo sin sustento.
          .col-lg-5.col-11.d-none.d-lg-block
            img(src='@/assets/curso/temas/t7/slide2.png', alt='')
        .row.align-items-center.justify-content-center
          .col-lg-5.col-11
            h5 Extracción de metadatos
            p La copia de trabajo se inspecciona mediante herramientas adecuadas al tipo de archivo. Se registran formato, fechas, dispositivo, software, autor declarado, dimensiones o duración, descripción, ubicación, derechos e identificadores cuando estén disponibles. También se registra la herramienta utilizada, porque diferentes aplicaciones pueden mostrar los mismos campos de manera distinta. El principio es extraer primero e interpretar después.
          .col-lg-5.col-11.d-none.d-lg-block
            img(src='@/assets/curso/temas/t7/slide3.png', alt='')
        .row.align-items-center.justify-content-center
          .col-lg-5.col-11
            h5 Clasificación de las evidencias de procedencia
            p Las evidencias se organizan según naturaleza, fuente y nivel de trazabilidad. Pueden clasificarse como técnicas, documentales, contextuales, declarativas, de fuente o criptográficas. Para fines pedagógicos puede emplearse una escala cualitativa de trazabilidad siempre que se definan criterios claros. Por ejemplo, un registro de repositorio institucional puede presentar una trazabilidad mayor que un mensaje reenviado sin autor, mientras que un campo de autoría dentro de metadatos constituye una evidencia declarativa que requiere contraste.
          .col-lg-5.col-11.d-none.d-lg-block
            img(src='@/assets/curso/temas/t7/slide4.png', alt='')
        .row.align-items-center.justify-content-center
          .col-lg-5.col-11
            h5 Registro de la información inicial del análisis
            p El proceso concluye consolidando archivo analizado, copia de trabajo, fuente inmediata, fuentes adicionales, metadatos, evidencias, inconsistencias, información ausente, herramientas y limitaciones. En esta fase deben evitarse afirmaciones absolutas como “el contenido es verdadero” o “el archivo es falso”. Una formulación responsable describe qué se identificó y qué queda pendiente de validación. Por ejemplo, puede indicarse que se localizaron metadatos y una publicación institucional consistente, pero que aún no se ha ejecutado una validación criptográfica de integridad.
          .col-lg-5.col-11.d-none.d-lg-block
            img(src='@/assets/curso/temas/t7/slide5.png', alt='')


</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
