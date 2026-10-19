<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Seguridad y normativa aplicada a contenidos digitales

    .bg-color-primario.text-white.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/1.png', alt='')
        .col-lg-7
          .p-4.p-lg-0
            img.w-80x.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t6/2.svg', alt='')
            p El análisis de la procedencia se relaciona con la seguridad de la información, la privacidad, la propiedad intelectual y el reconocimiento jurídico de determinados mecanismos digitales. El propósito no es desarrollar una formación jurídica especializada, sino comprender que las decisiones técnicas sobre contenidos tienen implicaciones de protección, atribución, uso y responsabilidad.
            p.mb-0 Los principales aspectos relacionados con la seguridad, la protección de la información y el manejo responsable de contenidos se presentan a continuación.
    
    .subt.mb-4(data-aos='fade-right')
      img(src='@/assets/curso/temas/t6/subt.svg', alt='')
      h3.mb-0.mx-3 Seguridad y normativa de los contenidos digitales

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-1")
      .row.justify-content-center(titulo="Activos de información, privacidad y protección de datos personales")
        .col-lg-6.col-11
          p Un contenido digital constituye un activo de información cuando posee valor para una persona u organización. Fotografías institucionales, videos de capacitación, manuales, registros y piezas gráficas pueden requerir medidas de protección. Desde la seguridad de la información, la integridad resulta especialmente relevante porque las modificaciones pueden afectar la capacidad de reconstruir el estado y la trayectoria del activo. La norma ISO/IEC 27001:2022 establece un marco de gestión de seguridad orientado a proteger la confidencialidad, la integridad y la disponibilidad de la información.
          p Los modelos modernos de procedencia también deben considerar la privacidad. C2PA (2026) reconoce que determinados datos vinculados a contenidos podrían facilitar el seguimiento o la exposición de información personal. Por ello, aumentar la trazabilidad no significa registrar indiscriminadamente todos los datos posibles. El principio operativo es que identificar evidencia no autoriza automáticamente a divulgarla.
        .col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/acord1.png', alt='')
      .row.justify-content-center(titulo="Propiedad intelectual y contenidos digitales")
        .col-lg-6.col-11
          p La procedencia se relaciona con el reconocimiento de quienes crean o administran contenidos. Los metadatos IPTC y XMP pueden contener autoría declarada, derechos, condiciones de utilización o información de contacto. Identificar al posible creador, sin embargo, no equivale a disponer de autorización para reutilizar el material. Un contenido disponible en Internet puede estar sujeto a derechos y restricciones. Durante la elaboración de evidencias académicas deben registrarse fuentes y respetarse las condiciones de uso de imágenes, videos y documentos de terceros.
        .col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/acord2.png', alt='')
      .row.justify-content-center(titulo="Mensajes de datos, firmas digitales e integridad")
        .col-lg-6.col-11
          p La Ley 527 de 1999 es un referente colombiano para mensajes de datos y firmas digitales. Su importancia para este componente radica en la relación entre firma digital, integridad y posibilidad de detectar modificaciones posteriores. No obstante, debe mantenerse la distinción entre una firma válida y la veracidad del contenido: una firma puede aportar evidencia de integridad o vinculación técnica sin garantizar que todas las afirmaciones expresadas sean ciertas. C2PA utiliza también firmas digitales para vincular declaraciones y manifiestos con activos de manera verificable.
        .col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/acord3.png', alt='')
      .row.justify-content-center(titulo="Manejo responsable de contenidos sintéticos")
        .col-lg-6.col-11
          p La expansión de contenidos generados mediante inteligencia artificial exige criterios adicionales de transparencia. Chandra et al. (2024) identifica la procedencia, autenticación, etiquetado, marcas de agua y detección como familias de mecanismos que pueden contribuir a gestionar riesgos del contenido sintético, aunque ninguno es infalible. Una herramienta de detección puede producir errores, una marca de agua puede perderse y una credencial puede no estar presente en un contenido legítimo. La competencia clave consiste en reconocer qué evidencia existe, evaluar su trazabilidad y comunicar sus limitaciones.
        .col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/acord4.png', alt='')


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
