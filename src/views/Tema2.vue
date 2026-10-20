<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Procedencia y trazabilidad de contenidos digitales

    .bloque-texto-g.bg-color-1.p-3.p-sm-4.p-md-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez caracterizado el activo, el análisis puede avanzar hacia la procedencia. La Coalition for Content Provenance and Authenticity (C2PA, 2026) utiliza este concepto para representar información relacionada con la creación de un activo y las acciones efectuadas posteriormente sobre él. La procedencia no es una etiqueta genérica de autenticidad; responde de manera gradual a preguntas como de dónde proviene el contenido, qué se conoce sobre su creación, qué transformaciones están registradas, qué actores o herramientas participaron y qué evidencias sustentan esa información.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Origen y trazabilidad de los contenidos

    p.mb-5 El análisis de la procedencia implica diferenciar el origen del contenido y la posibilidad de reconstruir su recorrido mediante las evidencias disponibles. Estos dos conceptos se presentan a continuación.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t6/subt.svg', alt='')
      h3.mb-0.mx-3 Origen y trazabilidad del contenido digital

    TabsC.color-acento-botones(data-aos="fade")
      .py-4.py-md-5(titulo="Origen")
        .row.justify-content-center
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/tab1.png', alt='')
          .col-lg-6.col-11.pt-lg-4
            p El origen corresponde al punto o contexto desde el cual puede establecerse la creación o incorporación inicial de un contenido dentro de una cadena determinada. Puede asociarse con una persona, organización, dispositivo, aplicación, plataforma o repositorio. Identificar el lugar desde el cual se descargó un archivo no equivale, sin embargo, a comprobar su origen: una página puede ser la fuente inmediata de obtención y no el lugar donde el contenido fue creado.
      .py-4.py-md-5(titulo="Trazabilidad")
        .row.justify-content-center
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/tab2.png', alt='')
          .col-lg-6.col-11.pt-lg-4
            p La trazabilidad es la posibilidad de seguir el recorrido de un activo mediante registros, identificadores, metadatos, versiones y otras evidencias. En un flujo institucional, por ejemplo, un archivo puede pasar por creación, almacenamiento en repositorio, edición, exportación y publicación. Cuando cada etapa deja registros consistentes, es posible reconstruir parte del recorrido. La evidencia de procedencia puede provenir de información interna del archivo, registros de sistemas, documentación, repositorios, fuentes primarias, versiones anteriores o mecanismos criptográficos. Ninguna señal aislada debe considerarse concluyente sin contexto.            


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Atribución, autenticidad técnica e integridad

    p.mb-5 Para comprender la procedencia de un contenido, es importante diferenciar la atribución, la autenticidad técnica y la integridad, ya que cada concepto responde a un aspecto distinto del análisis.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t6/subt.svg', alt='')
      h3.mb-0.mx-3 Conceptos clave para el análisis técnico

    .tarjeta--container.row.mb-4(data-aos="fade")
      .col-md.tarjeta.color-primario.p-4.p-xl-5
        .row.justify-content-center.mb-4
          .col-4.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj1.svg', alt='')
        h4.text-center Atribución
        p.mb-0 La atribución relaciona un contenido con un creador, organización, dispositivo o sistema declarado. Puede provenir de metadatos, información editorial, credenciales o registros externos, pero su valor depende de la evidencia que la sustenta. Un campo de autor no demuestra automáticamente quién creó el activo, porque podría haber sido incorporado o modificado manualmente.
      .col-md.tarjeta.color-secundario.p-4.p-xl-5
        .row.justify-content-center.mb-4
          .col-4.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj2.svg', alt='')
        h4.text-center Autenticidad técnica
        p.mb-0 La autenticidad técnica se refiere a la posibilidad de comprobar determinadas características asociadas con identidad, procedencia o conservación mediante mecanismos técnicos.
      .col-md.tarjeta.color-acento-contenido.p-4.p-xl-5
        .row.justify-content-center.mb-4
          .col-4.col-md-7.col-lg-5
            img(src='@/assets/curso/temas/t2/tarj3.svg', alt='')
        h4.text-center Integridad
        p.mb-0 La integridad se relaciona con la conservación de los datos respecto de un estado tomado como referencia. Las funciones hash y las firmas digitales, que se profundizan en etapas posteriores del curso, permiten realizar comprobaciones de este tipo.

    p La relación entre estos conceptos permite interpretar con mayor precisión las evidencias disponibles en un contenido digital.


    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3  Procedencia, autenticidad y límites frente a la veracidad

    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/2.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/3.svg', alt='')
          .col-lg-10
            p.mb-0 Uno de los aprendizajes centrales consiste en reconocer que procedencia y veracidad no son equivalentes. C2PA (2026) busca proporcionar información verificable acerca de la procedencia de contenidos y de determinadas acciones registradas, pero no establece por sí sola si el mensaje comunicado por un contenido es verdadero. Una fotografía puede poseer una credencial válida y conservar íntegra la información registrada, mientras que una descripción publicada junto con ella puede situarla en un lugar o acontecimiento incorrecto.

    p Del mismo modo, la ausencia de una credencial o de metadatos no demuestra que un contenido sea falso. Muchos activos legítimos se crean con herramientas que no incorporan esos mecanismos o circulan por plataformas que eliminan información. Chandra et al. (2024) plantea la procedencia, las marcas de agua, la detección y otros enfoques como mecanismos complementarios, cada uno con capacidades y limitaciones.

    .cajon.color-secundario.bg-color-2.p-4.mb-4(data-aos='fade')
      h4 Evitar conclusiones absolutas
      p.mb-0 Una práctica responsable evita conclusiones como “tiene metadatos, entonces es verdadero” o “no tiene metadatos, entonces es falso”. Lo adecuado es describir exactamente qué evidencia está disponible y qué permite afirmar.

    p Amplíe esta reflexión explorando el siguiente pódcast, en el que se aborda la diferencia entre procedencia, autenticidad técnica y veracidad, y su importancia para interpretar responsablemente las evidencias de un contenido digital.

    .bg-color-primario.mb-4
      img(src='@/assets/curso/temas/t2/podcast.png', alt='')
      .bg-color-primario.p-4
        .tarjeta.bg-white.p-4
          TarjetaAudio.color-acento-botones(
          texto="Pódcast: ¿Tiene procedencia verificable? Eso no significa que sea verdadero"
          :audio="require_src('@/assets/actividad/audio/success.mp3')")
          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
