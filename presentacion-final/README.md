# OMNI by 5.5 · Presentación final V1

**Pitch de siete minutos con capturas y video:** [abrir versión](7-minutos/index.html), [guion cronometrado](7-minutos/SPEECH_7_MIN.md) y [PDF](7-minutos/OMNI-5.5-7-minutos.pdf). La V1 extensa se conserva a continuación como referencia.

Presentación **web interactiva**, separada de la aplicación. Conserva el 5.5 centrado, la narrativa comercial y los big numbers. Su alcance se actualizó al portal modular sobre Firebase.

## Empezar aquí

1. [MARCO_PRESENTACION.md](MARCO_PRESENTACION.md): historia, estructura, cifras, fuentes, decisiones y cómo continuar.
2. [ESTADO_MODULAR.md](ESTADO_MODULAR.md): qué hay realmente en esta entrega y qué queda fuera.
3. [index.html](index.html): deck de 25 diapositivas,14 principales y 11 anexos.
4. [SPEECH_FINAL.md](SPEECH_FINAL.md) y [NOTAS_DIAPOSITIVAS.md](NOTAS_DIAPOSITIVAS.md): apoyo para presentar.
5. [OMNI-by-5.5-V1.pdf](OMNI-by-5.5-V1.pdf): copia estática de respaldo.

## Abrir la versión web

Desde la raíz del repositorio:

```sh
python3 -m http.server 8696 --bind 127.0.0.1 --directory presentacion-final
```

Abrir `http://127.0.0.1:8696/`. También se puede abrir `index.html` directamente para recorrer las diapositivas. El servidor local facilita notas y video. No usa `.env`, Firebase, secretos ni las dependencias npm de la app.

Flechas: navegar. F: pantalla completa. S: notas. Botón Anexos: respaldo. En los anexos, pulsar la sección indicada permite volver al pitch. V: pantalla negra en el slide del video.

El video final no está incluido. Colocarlo como `video/proceso.mp4` (90 segundos previstos). Completar nombres y roles del equipo en `config.js`.

## Editar

Contenido en `index.html`, estilo en `pitch.css`, comportamiento en `pitch.js`. El modelo económico es independiente en `modelo-economico.html`. Cambiar entradas en el modelo no modifica los números del deck. Al editar, actualizar `estructura.json`, notas, speech, fuentes y PDF según corresponda.

La rúbrica solo queda en fuentes internas. Recuperación, CRM y Flow no deben presentarse como implementados. Los números económicos son escenarios. No se requiere cambiar la app ni desplegar el backend para editar este pitch.

Esta carpeta en GitHub muestra los archivos fuente; no habilita automáticamente una URL en Lovable ni publica una web. No se añadieron rutas al producto ni configuración de hosting. Si se quiere una URL pública, elegir el despliegue como tarea separada.

## Versiones de referencia

Base técnica revisada:`f9ae0aa`. La presentación procede de la V1 comercial trabajada en la conversación, no de la V2 de capturas. `GUIA_DE_TRABAJO.md` y `SPEECH_APORTADO_CON_OMNI.md` son referencias de elaboración anteriores: el marco y estado modular tienen prioridad.
