<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad
      <ActividadController :cuestionario="cuestionario"/>

  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Caracterización de contenidos digitales y mecanismos de procedencia',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los contenidos digitales, la procedencia, la trazabilidad, los metadatos, las fuentes de información, la preservación, el registro inicial de evidencias y el manejo responsable y seguro de contenidos digitales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué caracteriza a un contenido digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es únicamente una imagen publicada en Internet.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es información representada mediante datos que puede crearse, almacenarse, procesarse o transmitirse con sistemas tecnológicos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Es cualquier archivo que conserva siempre los mismos metadatos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es un recurso cuya procedencia puede determinarse solo por su nombre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué describe correctamente a un contenido derivado?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un activo que nunca ha sido transformado desde su creación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un contenido integrado exclusivamente por elementos generados con inteligencia artificial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un activo obtenido al modificar, convertir, recortar, cambiar el tamaño o comprimir un contenido preexistente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un archivo cuyo origen se demuestra únicamente por la extensión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál afirmación sobre los contenidos sintéticos es correcta?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pueden ser producidos o transformados total o parcialmente mediante procesos computacionales, incluidos sistemas de inteligencia artificial generativa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Siempre constituyen una manipulación engañosa y deben considerarse falsos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo corresponden a documentos de texto creados de manera automática.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requieren análisis de procedencia porque su origen siempre es evidente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Durante la publicación de un contenido digital, ¿qué puede ocurrir con las evidencias de procedencia?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los metadatos siempre se conservan completos y sin cambios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El archivo recupera automáticamente toda la información eliminada previamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La plataforma garantiza que la versión publicada sea el archivo original.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La plataforma puede comprimir el archivo, añadir registros de publicación o eliminar determinados metadatos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué diferencia existe entre la fuente inmediata y el origen de un contenido?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No existe diferencia; el lugar donde se descarga un archivo siempre es su origen.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La fuente inmediata indica dónde se obtuvo la copia, pero ese lugar no necesariamente corresponde al punto donde se creó el contenido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El origen corresponde únicamente al nombre asignado al archivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La fuente inmediata solo puede ser un dispositivo de captura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué se entiende por trazabilidad de un contenido digital?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La posibilidad de seguir y documentar su recorrido mediante registros, identificadores, metadatos, versiones y otras evidencias.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La capacidad de determinar la veracidad del contenido solo con su apariencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eliminación de todos los registros asociados al archivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La conversión del contenido a un formato diferente para facilitar su publicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué diferencia existe entre la atribución y la autenticidad técnica?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La atribución comprueba matemáticamente la integridad y la autenticidad solo identifica al autor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ambos conceptos significan que el contenido es verdadero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La atribución relaciona el activo con un agente declarado, mientras la autenticidad técnica comprueba determinadas relaciones mediante evidencia técnica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La autenticidad técnica depende únicamente del nombre del archivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué conclusión es adecuada sobre procedencia y veracidad?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Si un archivo tiene metadatos, todo lo que representa debe ser verdadero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Si un archivo no tiene metadatos, necesariamente es falso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una fuente institucional garantiza por sí sola la veracidad de cualquier afirmación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La procedencia puede aportar información verificable sobre origen y transformaciones, pero no garantiza por sí sola la veracidad del mensaje.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál conjunto corresponde a metadatos técnicos?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Título, descripción, palabras clave y autor declarado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dispositivo, dimensiones, códec, fecha de captura y <em>software</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Derechos, restricciones, identificadores y versiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fuente primaria, contexto, propósito y autoridad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué indica la ausencia de metadatos EXIF en una imagen?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que la imagen fue generada obligatoriamente mediante inteligencia artificial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que el contenido fue manipulado de manera engañosa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que los datos pudieron no registrarse o haberse eliminado por exportación, publicación, conversión, privacidad u otros procesos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Que la imagen no puede considerarse un contenido digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué caracteriza principalmente a XMP?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es un modelo extensible para representar y gestionar metadatos de creación, modificación, descripción, derechos y otros datos en distintos archivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Es un formato exclusivo para almacenar coordenadas GPS de fotografías.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Es un sistema que demuestra automáticamente la veracidad de un contenido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es una técnica utilizada únicamente para eliminar metadatos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué novedad incorpora IPTC <em>Photo Metadata</em> 2025.1 respecto de contenidos generados con inteligencia artificial (IA)?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elimina todos los campos de autoría y derechos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplaza los metadatos técnicos de todas las cámaras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Garantiza que un contenido generado con IA sea verdadero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incluye propiedades relacionadas con el <em>prompt</em>, su autor, el sistema de inteligencia artificial utilizado y su versión.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál ejemplo corresponde a una fuente primaria de procedencia?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un mensaje reenviado sin identificación del autor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una publicación que reproduce una imagen tomada de otro sitio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un repositorio institucional que conserva el archivo junto con fecha, responsable y documentación del proceso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un comentario de un usuario que no participó en la creación del contenido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué criterios permiten valorar la confiabilidad de una fuente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el número de seguidores y la apariencia visual de la página.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Autoridad, identificación, proximidad al origen, actualidad, evidencia disponible, contexto, consistencia con otras fuentes y propósito.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente la extensión y el tamaño del archivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de veces que el contenido fue compartido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es una práctica adecuada al iniciar la preservación de un contenido digital?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conservar el archivo recibido como referencia y generar una copia de trabajo para realizar la inspección.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Editar directamente el archivo recibido para facilitar el análisis.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Renombrar y sobrescribir el archivo sin registrar los cambios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar los metadatos antes de revisar el contenido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué información debe incluir un registro inicial de trazabilidad?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el nombre del archivo y una opinión personal sobre su autenticidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente la fecha de publicación encontrada en Internet.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo las conclusiones finales del análisis.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Código del análisis, archivo, tipo, formato, tamaño, fuente, fecha, copia de trabajo, herramienta utilizada, evidencias y observaciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Si una fotografía contiene coordenadas asociadas a una ubicación personal, ¿qué práctica es más responsable?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicar las coordenadas completas porque forman parte de los metadatos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Compartir el archivo original con cualquier persona interesada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar el hallazgo necesario para el análisis y evitar divulgar datos personales innecesarios, aplicando anonimización cuando corresponda.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar todo el archivo sin registrar la evidencia identificada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué implica identificar al posible creador de un contenido mediante metadatos?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que el contenido puede reutilizarse sin restricciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que existe una atribución declarada, pero no necesariamente autorización para reutilizar el material.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Que todos los derechos de propiedad intelectual han expirado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que la información del campo de autor no necesita contraste.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué aporta una firma digital al análisis de integridad?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Puede aportar evidencia para detectar modificaciones y verificar una vinculación técnica, sin garantizar por sí sola la veracidad de todas las afirmaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Demuestra de manera automática que cualquier contenido firmado es verdadero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elimina la necesidad de preservar y registrar el archivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplaza todos los metadatos y fuentes de información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es la secuencia adecuada para la identificación inicial de evidencias de procedencia?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clasificar evidencias, publicar el archivo, eliminar metadatos y registrar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Extraer metadatos, modificar el original, identificar fuentes y concluir autenticidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar conclusiones, preservar, publicar y comparar opiniones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Preservar la copia de trabajo, identificar fuentes, extraer metadatos, clasificar evidencias y registrar la información.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: 'Ha acertado la respuesta.',
          mensaje_incorrecto: 'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: 'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>