# WhatsApp: propuesta para reducir mensajes y costo

**Estado: próxima iteración, aún no implementada ni medida en la demo.** No se ha modificado el bot, Firebase ni Meta al preparar esta propuesta. La meta es bajar el presupuesto estimado de Cloud API de S/3.500 a **S/1.400 mensuales**, agrupando datos, no cambiando tarifas. Tipo de cambio supuesto S/3,80, tarifas Perú y reserva del 20%.

## Recorrido propuesto

1. **El cliente inicia.** El bot envía un solo mensaje de orientación con el botón al formulario. Si el primer mensaje ya contiene monto y moneda, el mismo mensaje puede resumir la referencia y el siguiente paso. Evitar saludo, menú y pregunta del monto como tres envíos separados.
2. **Datos dentro del formulario.** Cotización, identidad, destino, cuenta y prueba de pago se completan y validan en el portal. Los errores aparecen allí, sin emitir un mensaje de WhatsApp por campo. También se consulta el estado en ese portal. Flow podría ofrecer pantallas nativas, sujeto a habilitación y capacidades verificadas de adjuntos/endpoint. No es un iframe de la web: la web reutiliza su interfaz; Flow requiere su propio esquema.
3. **Una confirmación final.** Tras la revisión interna y el envío registrado, combinar resultado, código y comprobante en una sola entrega compatible, por ejemplo documento con texto adjunto. No enviar texto, imagen y PDF como tres mensajes por defecto. Si se necesitan más avisos, contarlos. La solicitud registrada y su seguimiento siguen visibles dentro del formulario.
4. **Ayuda cuando haga falta.** Mantener preguntas abiertas y opción humana; presupuestar apoyo en 10% de casos, con dos respuestas adicionales por caso. Es un supuesto, no límite que deba impedir la atención.

El mensaje inicial y el apoyo responden al usuario dentro de la ventana de atención. Si la confirmación ocurre fuera de ella, usar una plantilla de utilidad aprobada y correctamente clasificada. La plantilla es un formato para entregar información, **no un descuento automático**. No clasificar cupones ni promociones como utilidad.

## Cálculo, manteniendo prudencia

No se presume menor consumo de IA ni se recorta la provisión de infraestructura: US$64,08 sigue igual. Todos los destinatarios se calculan con tarifa Perú, aunque Brasil tiene otra tarifa. Todas las conversaciones se asignan a WhatsApp para el presupuesto conservador.

```text
4.000 aperturas de formulario × 1 mensaje = 4.000 servicios
4.000 × 10% × 2 respuestas de apoyo = 800 servicios
Servicios entregados = 4.800
Servicios facturables = 4.800 − 1.000 gratuitos = 3.800
3.800 × US$0,03 = US$114

4.000 confirmaciones finales de utilidad × US$0,03 = US$120
Meta = 114 + 120 = US$234

(64,08 infraestructura + 234 Meta) × 1,20 × 3,80 = S/1.359,24
Presupuesto objetivo redondeado = S/1.400/mes
```

Se contabiliza una confirmación **pagada por cada chat**, aunque no todos terminan en operación y algunas podrían ocurrir en ventana. Es una reserva conservadora; no se aplican descuentos de volumen ni por anuncios. La franquicia se usa una sola vez, para servicios de un único número. No son 1.000 conversaciones gratis.

Este diseño pasa de 24.000 a 8.800 mensajes enviados al mes: **2,2 por chat en promedio**. El supuesto anterior era seis. Meta pasa de US$690 a US$234, alrededor de **66% menos costo estimado de mensajería**. El presupuesto total redondeado pasa de S/3.500 a S/1.400: **60% menos**. Son comparaciones de modelos, no ahorros medidos.

## Tres escenarios técnicos

| Caso, 4.000 chats y tarifa Perú | Servicios facturables | Confirmaciones pagadas | Meta USD | Total con infraestructura y reserva | Presupuesto |
|---|---:|---:|---:|---:|---:|
| Referencia: seis mensajes por chat | 23.000 | Incluidas en servicio | 690,00 | S/3.438,60 | S/3.500 |
| **Propuesto: apertura + confirmación, 10% con dos apoyos** | **3.800** | **4.000** | **234,00** | **S/1.359,24** | **S/1.400** |
| Más ayuda: 20% con cuatro apoyos | 6.200 | 4.000 | 306,00 | S/1.687,56 | S/1.700 |

La referencia anterior suponía todas las respuestas dentro de 24 horas y de servicio. La propuesta agrupa recolección y reserva todas las confirmaciones como utilidad pagada, incluso si llegan tarde. El cambio de categoría no se usa para abaratar; el ahorro lo produce enviar menos mensajes. Si un caso requiere una confirmación intermedia adicional, una consulta larga o varias respuestas de asesor, recalcular.

## Qué debe implementarse y probarse

- CTA único al formulario y conservación segura del contexto de entrada. Validar en servidor, no confiar solo en campos del navegador.
- Agrupar validaciones y carga de prueba dentro del portal; estados comprensibles allí. No generar notificaciones de chat por cada interacción de pantalla.
- Evitar duplicados: cada etapa tiene una clave de notificación y se registra el resultado de envío. Reintentar sin duplicar mensajes ya entregados. No esconder errores de pago para ahorrar.
- Composición de la confirmación en un solo mensaje cuando el formato lo permite. Mantener alternativas accesibles y contar cualquier entrega extra.
- Plantilla de utilidad aprobada para la confirmación fuera de ventana. Verificar consentimiento, clasificación y calidad. Flow exige habilitación y esquema propios; usar el portal mientras tanto.
- La IA resuelve dudas y deriva casos, con respuestas agrupadas. No ejecutar varias respuestas automáticas fragmentadas ni obligar al cliente a repetir lo capturado.

## Cómo validar el objetivo antes de venderlo como ahorro

Medir mensajes **entregados** por chat y por operación, país, categoría, reintentos, porcentaje que pide ayuda, abandono del formulario y conversión. Medir satisfacción y tiempo de atención: una reducción de mensajes no sirve si dificulta completar el cambio.

Criterios orientativos: media cercana a 2,2 envíos, ayuda adicional dentro del supuesto y tasa de finalización que no empeore frente al recorrido anterior. Si no se cumplen, ajustar el presupuesto al tráfico real. La atención humana y las dudas libres no desaparecen: su uso debe tener presupuesto. No se incluyen campañas salientes, cupones ni conversaciones largas ilimitadas.

## Efecto en los escenarios del anexo A.2

Con S/1.400 objetivo: contribución S/2.340, S/3.780 y S/6.660 menos tecnología deja **S/940, S/2.380 y S/5.260**, respectivamente. Antes de campañas, cupones, personal adicional y otros costos. Cobertura solo tecnológica: **94 operaciones** con margen supuesto S/15 (redondeo superior de 1.400/15). No es equilibrio total del negocio.

Puesta en marcha incluida en el concurso. Primer mes con cuentas nuevas de ambas tiendas: S/1.400 + S/471,20 = S/1.871,20, opcional. Presupuesto anual objetivo: S/16.800; con ambas cuentas nuevas, S/17.271,20, antes de exclusiones. WAHA S/300 sigue como alternativa separada, no se suma.

## Fuentes

- [Meta: envío de un Flow](https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides/sendingaflow): mensaje interactivo o plantilla con botón y requisitos de habilitación.
- [Meta: precios y categorías](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing). [Hoja USD original](fuentes/README.md), vigente desde 01/10/2026.
- [Costos y límites del presupuesto](COSTOS_TECNOLOGICOS.md).
- [Modelo JSON](costos-modelo.json) y [CSV optimizado](costos-meta-optimizado.csv).

Flow, agrupación de mensajes y automatización de notificaciones requieren implementación y prueba antes de atribuirles resultados. No se han contratado ni alterado servicios.
