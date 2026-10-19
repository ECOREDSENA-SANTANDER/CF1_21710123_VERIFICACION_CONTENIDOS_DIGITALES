<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La identificación de evidencias de procedencia requiere comprender que un archivo no constituye únicamente aquello que se observa, escucha o lee. Su formato, metadatos, fuente de obtención, historial de transformación y registros asociados pueden aportar información relevante para aproximarse al origen y la trazabilidad. El componente diferenció contenidos originales, derivados, compuestos y sintéticos; explicó procedencia, atribución, autenticidad técnica, integridad y veracidad; y analizó el valor de EXIF, XMP e IPTC. Estos conocimientos permiten interpretar las evidencias con mayor rigor y evitar que una única señal, su presencia o su ausencia, se convierta en una conclusión injustificada.
    p El aprendizaje se integra en cinco acciones: preservar la copia de trabajo, identificar las fuentes de origen, extraer metadatos, clasificar evidencias y registrar la información inicial. Esta secuencia fortalece una práctica organizada y responsable en la que la protección de datos, la propiedad intelectual, la seguridad de la información y la trazabilidad acompañan el procedimiento técnico. El aprendiz queda preparado para avanzar hacia procesos posteriores de verificación, en los cuales podrá comprobar con mayor profundidad procedencia, integridad y autenticidad mediante mecanismos criptográficos y herramientas de validación.    

    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual sobre contenidos digitales, procedencia, metadatos, fuentes, preservación, normativa e identificación de evidencias.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
