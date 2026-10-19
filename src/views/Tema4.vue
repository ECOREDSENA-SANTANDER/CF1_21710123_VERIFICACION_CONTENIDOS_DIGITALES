<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Fuentes primarias y secundarias

    .bloque-texto-g.color-secundario.color-acento-botones.p-3.p-sm-4.p-md-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los metadatos aportan información interna, pero establecer la procedencia también requiere examinar fuentes externas. Un archivo puede carecer de datos relevantes y, aun así, relacionarse con un repositorio institucional, registros de sistema, documentación de producción o una publicación oficial. Por ello, la identificación de la procedencia combina evidencias internas del archivo con evidencias externas verificables.


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1  Clasificación de las fuentes

    p.mb-5 Las fuentes pueden diferenciarse según su relación con la creación, custodia, publicación o redistribución del contenido.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t6/subt.svg', alt='')
      h3.mb-0.mx-3 Fuentes utilizadas para establecer la procedencia

    TabsC.color-acento-botones(data-aos="fade")
      .py-4.py-md-5(titulo="Fuente primaria")
        .row.justify-content-center
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/tab1.png', alt='')
          .col-lg-6.col-11.pt-lg-4
            p Una fuente primaria está directamente relacionada con la creación, custodia o publicación inicial del contenido, como el archivo proporcionado por su creador, un repositorio institucional, un registro del sistema o documentación del proceso de producción.
      .py-4.py-md-5(titulo="Fuente secundaria")
        .row.justify-content-center
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/tab2.png', alt='')
          .col-lg-6.col-11.pt-lg-4
            p Una fuente secundaria reproduce, interpreta, describe o redistribuye información obtenida de otras fuentes.
            p Encontrar una imagen en una página o red social demuestra que circuló allí, pero no necesariamente que ese sitio sea su origen. La tarea consiste en reconstruir progresivamente la relación entre versiones y registrar las fuentes consultadas.      


    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2  Autoridad, actualidad, contexto y propósito

    p.mb-5 No todas las fuentes aportan el mismo nivel de confianza. Para analizarlas, pueden considerarse cuatro aspectos relacionados con quién proporciona la información, cuándo se produce o publica, en qué contexto aparece y con qué finalidad se presenta.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t6/subt.svg', alt='')
      h3.mb-0.mx-3 Aspectos para analizar una fuente

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/2.png', alt='')
      .col-lg-9(data-aos="fade-left")
        TabsA.color-acento-botones
          .tarjeta.bg-color-4.p-4(titulo="Autoridad")
            p Examina quién publica o custodia la información y si existe responsabilidad institucional.
          .tarjeta.bg-color-4.p-4(titulo="Actualidad")
            p Distingue fecha de publicación, actualización, creación y acontecimiento representado.
          .tarjeta.bg-color-4.p-4(titulo="Contexto")
            p Analiza cómo se presenta el contenido y si pudo ser reutilizado fuera de su situación original.
          .tarjeta.bg-color-4.p-4(titulo="Propósito")
            p Considera si la publicación es informativa, educativa, comercial, institucional, satírica o de otra naturaleza.

    p Estos criterios ayudan a identificar posibles sesgos y necesidades de contraste sin convertir la evaluación en una clasificación absoluta de “confiable” o “no confiable”.


    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3  Criterios para valorar la confiabilidad de las fuentes 

    p.mb-4 La valoración debe apoyarse en criterios explícitos: autoridad, identificación, proximidad al origen, actualidad, evidencia disponible, contexto, consistencia con otras fuentes y propósito. Por ejemplo, un mensaje reenviado sin autor, una publicación institucional y un repositorio interno pueden contener el mismo video, pero el repositorio aporta mayor proximidad si conserva fecha, responsable y documentación asociada. La conclusión debe justificar por qué una fuente ofrece mayor trazabilidad que otra y reconocer cuándo no es posible establecer el origen con la información disponible.

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-7(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span Criterios para valorar la confiabilidad de las fuentes de información
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.w-25 Criterio
                th Pregunta orientadora
            tbody
              tr
                td Autoridad
                td ¿Quién publica o custodia la información?
              tr
                td Proximidad
                td ¿Qué relación tiene la fuente con la creación del contenido?
              tr
                td Contexto y actualidad
                td ¿Las fechas y circunstancias son coherentes con el análisis?
              tr
                td Consistencia
                td ¿Coincide con otras fuentes y registros independientes?
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/3.png', alt='')


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
