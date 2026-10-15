# Marco de continuidad · OMNI by 5.5 para Brasper

Este es el punto de partida de la presentación final V1. Mantiene la idea comercial y las decisiones de la conversación, pero distingue la entrega web modular actual de la visión omnicanal. Antes de continuar, leer también [ESTADO_MODULAR.md](ESTADO_MODULAR.md).

## 1. Qué se entrega y dónde se edita

- [index.html](index.html): presentación web interactiva de 25 diapositivas, formato 16:9 (1280×720). Es el entregable principal, no un PowerPoint.
- `pitch.css`: dirección visual y composición.
- `pitch.js`: navegación, notas, animaciones y video.
- `config.js`: nombres y roles del equipo. No inventarlos ni cambiar datos financieros desde aquí.
- [NOTAS_DIAPOSITIVAS.md](NOTAS_DIAPOSITIVAS.md): notas extraídas de esta versión, con alcance modular actualizado.
- [SPEECH_FINAL.md](SPEECH_FINAL.md): guion comercial, con una mención sutil de OMNI by 5.5.
- [modelo-economico.html](modelo-economico.html): simulador de supuestos, independiente de las cifras estáticas de las diapositivas.
- [estructura.json](estructura.json): orden, identificadores y clasificación de las diapositivas.
- `fuentes/`: informes originales, rúbrica y contexto del equipo.
- `video/proceso.mp4`: espacio reservado al video de 90 segundos, aún no incluido.
- `OMNI-by-5.5-V 1.pdf`: respaldo estático. Después de editar HTML o CSS, regenerarlo antes de compartirlo.

La carpeta es autocontenida y está separada del código de la web. El runtime de Reveal.js y GSAP se conserva localmente, con sus referencias de licencia. No necesita instalar las dependencias de la aplicación para presentar. No se incluye V2 ni el archivo de capturas del dashboard antiguo.

## 2. Identidad y objetivo

- Equipo: **THE F*CKING 5.5**, con el 5.5 grande y centrado en portada sobre rojo.
- Cliente: **Brasper**. No sustituir el nombre de la empresa.
- Solución: **OMNI by 5.5**, nombre de trabajo. Mencionarlo discretamente al introducir la propuesta.
- Objetivo: mostrar cómo vender y acompañar mejor, aprovechando lo que TI ya tenía encaminado.
- Experiencia objetivo: una consulta empieza en WhatsApp y puede continuar por web o app con contexto compartido. No afirmar continuidad entre dispositivos como entregada: la sesión actual es anónima y vive en el navegador.

## 3. Historia que debe conservarse

El encargo inicial se enfocaba en facturación y automatización. El diagnóstico del equipo de consultoría contrastó ese pedido con el proceso, los datos y los avances previstos por TI. TI tenía la solución encaminada, con implementación prevista y pendiente de completar. No decir que ya estaba terminada ni que la dirección desconocía una solución resuelta.

La respuesta inicial se abordó con rapidez, sin un récord cronometrado. La oportunidad comercial de mayor alcance está en captar, orientar, reducir fricción y facilitar la próxima operación. Respetar el trabajo existente de TI. No presentar toda la transacción actual como manual.

Orden argumental: equipo; diagnóstico; oportunidad en ventas; contexto de crecimiento y retención; consultas que no convierten; visión omnicanal; información compartida; papel de la IA; recuperación como próxima fase; captación 24/7; video; piloto y cierre. Las proyecciones detalladas y el escenario salarial van a anexos.

## 4. Estructura exacta

14 diapositivas principales y 11 anexos. El número de página, los ids y los vínculos del HTML deben mantenerse sincronizados con `estructura.json`.

| Nº | Tipo | ID estable | Tema |
|---:|---|---|---|
|1|Pitch|`equipo`|EL CAMBIO ESTÁ ABIERTO.|
|2|Pitch|`diagnostico`|EL BRIEF PEDÍA FACTURAR. PREGUNTAMOS MÁS.|
|3|Pitch|`hallazgo`|EL MAYOR POTENCIAL ESTABA EN VENTAS.|
|4|Pitch|`operacion`|BRASPER CRECE. LA EXPERIENCIA DEBE SEGUIRLE.|
|5|Pitch|`retencion`|87%|
|6|Pitch|`oportunidad`|64 COTIZACIONES. UNA SEGUNDA OPORTUNIDAD.|
|7|Pitch|`omni`|EMPIEZA EN WHATSAPP. SIGUE DONDE QUIERAS.|
|8|Pitch|`datos`|LA INFORMACIÓN JUNTA VENDE MEJOR.|
|9|Pitch|`ia`|UN AGENTE QUE ACOMPAÑA LA VENTA.|
|10|Pitch|`continuidad`|ENTENDER QUÉ FALTA. AYUDAR A CONTINUAR.|
|11|Pitch|`24h`|TU PRÓXIMO CLIENTE NO ESPERA A MAÑANA.|
|12|Pitch|`video`|Video del producto ·90 segundos|
|13|Pitch|`piloto`|30 DÍAS. DECISIONES CON DATOS.|
|14|Pitch|`cierre`|QUE LLEGUEN. QUE AVANCEN. QUE VUELVAN.|
|15|Anexo|`crecimiento`|+192|
|16|Anexo|`marketing`|EL MISMO TRÁFICO. MÁS OPORTUNIDADES.|
|17|Anexo|`valor`|S/3.780|
|18|Anexo|`modelo`|VENDER MÁS CAMBIA LA ECUACIÓN.|
|19|Anexo|`sensibilidad`|PEQUEÑOS PUNTOS. IMPACTO ACUMULADO.|
|20|Anexo|`tiempos`|MENOS “¿CÓMO VA?”. MÁS CLARIDAD.|
|21|Anexo|`futuro`|UN CLIENTE. LA PRÓXIMA MEJOR ACCIÓN.|
|22|Anexo|`capacidad`|MENOS REPETICIÓN. MÁS CAPACIDAD.|
|23|Anexo|`ahorro`|S/109.200|
|24|Anexo|`volumen`|3.723|
|25|Anexo|`fuentes`|LAS FUENTES VIAJAN CON EL PITCH.|

Cada anexo muestra su letra A–K y, al costado, la sección del pitch que respalda. La etiqueta permite volver a esa sección en la versión HTML. [MAPA_ANEXOS.md](MAPA_ANEXOS.md) explica el tema y qué medir o verificar. La rúbrica del jurado es interna: no reintroducirla como diapositiva ni funcionalidad.

## 5. Fuentes y por qué sustentan la historia

| Fuente | Qué aporta | Límite de uso |
|---|---|---|
|[Informe SQL](fuentes/metricas_transferencias_com_brasper.pdf)|3.723 registros,3.601 no eliminados,3.463 completados no eliminados. Septiembre completo:1.355 registros.|Intervalo 21/07–14/10/2026, corte 11:56 Lima. No convertirlo en volumen mensual típico ni mezclarlo con chats.|
|[Informe de chats](fuentes/metricas_whatsapp_y_facebook.pdf)|131 chats/día,67 terminanentransferencia,64 quedanencotización,51,1% deconversión. Facebook aporta al menos 20% dechats.|Promedios declarados sin período común ni relación individual con SQL. No son clientes nuevos únicos.|
|[Brainstorm del equipo](fuentes/Brainstorm-final-speech.txt)|Crecimiento informado 2 T 2026 vs 2 T 2025:+60%monto,+31%clientes nuevos,+25% envíos. Retención 90,5%a 87%.|Contexto del negocio, no efecto de OMNI. Contrastar con exportación y definición. El archivo histórico dice 4 personas; el usuario corrigió la dotación a 6+3.|
|[Rúbrica aportada](fuentes/criterios-jurado.png)|Comprensión 15, innovación 15, IA 20, viabilidad 15, impacto 20, storytelling 15.|Criterio de preparación y evaluación, no contenido visible del pitch.|
|[Integración actual](../docs/BACKEND_INTEGRATION.md)|Contrato y alcance de la web sobre Firebase.|El código y la documentación explican arquitectura; no acreditan por sí solos una prueba bancaria, fiscal o de correo real.|
|[README del proyecto](../README.md)|Recorrido actual y capturas recientes.|No usar capturas antiguas del dashboard para demostrar este módulo web.|
|Conversación y decisiones del usuario|Marca 5.5, OMNI, foco comercial, dotación 6+3, sueldos del modelo, video 90 s, Flow deseable.|Distinguir decisión, estimación y dato observado.|

## 6. Números económicos: reglas de cálculo

**Sueldos como beneficio adicional.** Base confirmada:6 enventas y 3 encontabilidad. Escenario:3 enventas y 1 encontabilidad. Se liberan 5 puestos:3×S/1.700 ventas=S/5.100 mes,2×S/2.000 contabilidad=S/4.000 mes. Total **S/9.100 mensuales yS/109.200 anuales**. Sueldos estimados, no nómina validada ni promedio de mercado. Antes de cargas, tecnología y transición. Reasignar personas libera capacidad, no necesariamente caja.

**Recuperación aún no implementada.**64 cotizaciones no equivalen a 64 ventas recuperables. Propuesta: conservar intención y último paso, una bandeja comercial y seguimiento asistido por IA con revisión humana. Hipótesis:64×10%×30 días=192 operaciones adicionales. Con M=S/15, contribuciónS/2.880 antes de costos de recuperación. No es resultado del sistema.

**Captación 24/7.** Ejemplo:10 intenciones NUEVAS/día fuera de horario×20%×30 días=60 operaciones, conS/900 decontribución a M=S/15. No existe medición de demanda nocturna; es supuesto. La revisión bancaria tiene horario.

**Combinación.**192+60=252 operaciones yS/3.780 decontribución mensual solo si son distintas y realmente incrementales. No sumar dos veces una misma consulta. Restar todos los costos adicionales no incluidos en M. No confundir el dinero enviado con ingreso o margen de Brasper.

**CAC.**−8,7% es un ejemplo de menor costo por chat convertido al pasar de 67 a 73,4 con igual gasto. No es CAC real: requiere gasto y clientes nuevos deduplicados.

**ROI.**(beneficio incremental−costos totales)/costos totales, en igual período. Sin inversión, margen y costos reales no existe ROI observado. La calculadora permite comparar crecimiento con y sin nueva demanda fuera de horario; el ahorro salarial queda desactivado por defecto.

El detalle de entradas está en [metricas-y-supuestos.csv](metricas-y-supuestos.csv). Editar cifras exige actualizar HTML, notas, speech, CSV, modelo y PDF. `config.js` no recalcula las diapositivas.

## 7. Lenguaje de tiempos y estados

El promedio 39 h 41 delSQLmide creación hasta última modificación. No demuestra la espera del cliente ni es tiempo activo de trabajo. El pitch dice «Menos ‘¿cómo va?’. Más claridad» y propone medir eventos reales. La meta 15 mines para casos completos y queda por validar, separando revisión bancaria y excepciones.

Una cotización fijada 15 minno significa que la transferencia demore 15 min. Un archivo subido no confirma fondos. `exported` representa el envío registrado por el backend actual; no afirmar que el portal ejecutó un pago bancario medianteAPI. Un comprobante disponible en modo de prueba no acredita emisión fiscal productiva, recepción del dinero o entrega de correo.

## 8. Alcance que no se puede presentar como terminado

- Flow nativo: deseable, pendiente de verificaciones y habilitación en Meta. El recorrido actual de la web ofrece contacto humano por WhatsApp.
- IA en la UI de este portal: no implementada en este corte. El módulo conversacional es una pieza separada de la propuesta.
- CRM y recuperación proactiva: por implementar y medir.
- Apps iOS/Android e identidad entre módulos: externas a este repositorio, integración por confirmar. No afirmar publicación en tiendas.
- Dashboard antiguo de Supabase: legado, fuera del recorrido de cliente actual. No reactivarlo para simular que forma parte del nuevo portal.
- Facturación: comprobantes en modo de prueba. No integrar ni modificar proveedores fiscales para preparar el pitch.
- Desembolso automático 24/7: futuro, depende de integración bancaria autorizada y controles.

## 9. Cómo continuar sin perder este marco

1. Leer este archivo y [ESTADO_MODULAR.md](ESTADO_MODULAR.md). Comprobar `git log` y los contratos si cambió el backend.
2. Identificar si el cambio es narrativa, datos, diseño o capacidad de producto. Un deseo no cambia de estado por estar en una diapositiva.
3. Mantener 5.5 dominante en portada, rojo/negro/crema, números grandes, poco texto y títulos de lectura rápida. Mantener estructura 16:9 aunque se usen imágenes móviles.
4. Cambiar solo archivos necesarios de esta carpeta para el pitch. No modificar backend, secretos, Supabase, Firebase ni la app sin solicitud separada.
5. Mantener ids de diapositivas, letras de anexos, vínculos, notas y `estructura.json`. La sección del pitch de cada anexo debe seguir siendo navegable.
6. Revisar contraste y encaje a 1280×720. Probar las 25 pantallas, Anexos, regreso al pitch, notas, portada y pantalla negra del video.
7. Regenerar PDF después de cualquier cambio visual. Verificar 25 páginas y ausencia de páginas vacías o imágenes rotas.
8. Revisar el diff y subir únicamente la carpeta de presentación, sin cambios locales ajenos ni credenciales.

## 10. Pendientes concretos

Nombres y roles del equipo; video 90 sdel portal modular vigente; contraste de los KPI trimestrales y retención; margen, costos y plantilla salarial real; prueba de cotización/registro/adjunto/seguimiento; comprobantes de prueba disponibles; recuperación entre dispositivos; definición de cómo se integrarán los módulos de chat y app; piloto comercial con autorización y grupo comparable.

El contenido técnico se revisó contra `f9ae0aa` del repositorio web. Esta actualización de la presentación no despliega Firebase ni verifica servicios externos. La fuente de verdad del alcance de la web es su código y [docs/BACKEND_INTEGRATION.md](../docs/BACKEND_INTEGRATION.md); para el relato comercial, este marco.
