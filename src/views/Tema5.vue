<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Preservación de evidencias digitales

    .bloque-texto-g.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La identificación de la procedencia exige conservar adecuadamente el material de análisis. Abrir, editar, convertir o volver a guardar un archivo puede modificar información relevante. En este componente, preservar no equivale a desarrollar una cadena de custodia judicial ni un procedimiento forense completo; significa aplicar buenas prácticas que permitan mantener una referencia del archivo recibido, trabajar sobre una copia y documentar las acciones realizadas.

    
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.1  Copia de trabajo e identificación del archivo

    p.mb-5 Una práctica adecuada consiste en conservar el archivo recibido como referencia y generar una copia de trabajo para la inspección. Este proceso permite mantener una referencia del estado recibido y separar el archivo preservado de la copia utilizada durante el análisis.

    LineaTiempoE.color-acento-contenido.mb-5(data-aos='fade')
      .row(titulo="Paso 1" subtitulo="")
        .col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/paso1.svg', alt='')
        .col-lg-8.mb-4.mb-lg-0
          h4 Archivo recibido
          p.mb-0 Se conserva como referencia del material recibido.
      .row(titulo="Paso 2" subtitulo="")
        .col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/paso2.svg', alt='')
        .col-lg-8.mb-4.mb-lg-0
          h4 Copia preservada
          p.mb-0 Se mantiene una copia de referencia para reducir el riesgo de modificaciones durante el análisis.
      .row(titulo="Paso 3" subtitulo="")
        .col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/paso3.svg', alt='')
        .col-lg-8.mb-4.mb-lg-0
          h4 Copia de trabajo
          p.mb-0 Se conserva como referencia del material recibido.
      .row(titulo="Paso 4" subtitulo="")
        .col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/paso4.svg', alt='')
        .col-lg-8.mb-4.mb-lg-0
          h4 Análisis
          p.mb-0 Se realizan las acciones necesarias sobre la copia de trabajo.

    .cajon.color-secundario.bg-color-2.p-4(data-aos='fade')
      p Además de preservar el archivo, es necesario identificarlo adecuadamente para relacionar cada hallazgo con el activo correspondiente.
      p.mb-0 Debe registrarse un identificador, nombre original, tipo de contenido, formato, tamaño, ubicación, fecha de recepción, fuente inmediata y responsable del análisis. Asignar códigos evita confusión cuando existen archivos con nombres similares y facilita relacionar cada hallazgo con el activo correcto.


    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.2  Registro inicial y trazabilidad

    p.mb-5 La trazabilidad permite reconstruir qué ocurrió con el contenido desde su recepción hasta el registro de hallazgos. Para ello, el registro debe reunir información que permita reconstruir las principales acciones realizadas durante el análisis.

    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t6/subt.svg', alt='')
      h3.mb-0.mx-3 Información para documentar la trazabilidad

    .row.bgcompl-1.tarjeta.align-items-center.p-4.pt-lg-3.mb-4(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .col-lg-3.t5-1.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/2.png', alt='')
            .col-lg-8
              .tarjeta.bg-white.t5-2.p-4
                SlyderF(columnas="col-md-6 col-xl-4")
                  .tarjeta.bg-color-3.p-4
                    .row.justify-content-center.mb-3
                      .col-lg-7.col-md-8.col-7
                        img(src='@/assets/curso/temas/t5/tarj1.svg' alt='')
                    h4.text-center Archivo y procedencia
                    p.text-center ¿Qué archivo se recibió y de dónde provino?
                  .tarjeta.bg-color-3.p-4
                    .row.justify-content-center.mb-3
                      .col-lg-7.col-md-8.col-7
                        img(src='@/assets/curso/temas/t5/tarj2.svg' alt='')
                    h4.text-center Inicio del análisis
                    p.text-center ¿Cuándo inició el análisis?
                  .tarjeta.bg-color-3.p-4
                    .row.justify-content-center.mb-3
                      .col-lg-7.col-md-8.col-7
                        img(src='@/assets/curso/temas/t5/tarj3.svg' alt='')
                    h4.text-center Copia utilizada
                    p.text-center ¿Qué copia se utilizó?
                  .tarjeta.bg-color-3.p-4
                    .row.justify-content-center.mb-3
                      .col-lg-7.col-md-8.col-7
                        img(src='@/assets/curso/temas/t5/tarj4.svg' alt='')
                    h4.text-center Herramientas aplicadas
                    p.text-center ¿Qué herramientas se aplicaron?
                  .tarjeta.bg-color-3.p-4
                    .row.justify-content-center.mb-3
                      .col-lg-7.col-md-8.col-7
                        img(src='@/assets/curso/temas/t5/tarj5.svg' alt='')
                    h4.text-center Evidencias encontradas
                    p.text-center ¿Qué evidencias se encontraron?

    p En formación virtual, este registro también cumple una función evaluativa porque documenta procedimientos que el instructor no necesariamente observa en tiempo real. Un formato inicial puede contener código del análisis, archivo, tipo, formato, tamaño, fuente, fecha, copia de trabajo, herramienta utilizada, evidencias y observaciones.


    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 5.3  Tratamiento responsable de evidencias digitales

    .bloque-texto-g.color-secundario.color-acento-botones.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los contenidos pueden contener información sensible, personal, reservada o protegida por derechos de propiedad intelectual. Una fotografía puede revelar personas o ubicaciones; un documento puede contener datos de identificación; un audio puede registrar conversaciones. Por ello, tener acceso a un contenido no implica autorización para divulgarlo. La práctica responsable exige utilizar solo la información necesaria, evitar publicar datos personales, proteger las copias, respetar licencias y anonimizar información cuando corresponda. La Ley 1581 de 2012 constituye un referente nacional para el tratamiento de datos personales y refuerza la necesidad de actuar con responsabilidad frente a información identificable.



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
