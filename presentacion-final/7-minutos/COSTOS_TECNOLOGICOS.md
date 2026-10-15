# Costos tecnológicos · escenario con Meta

Revisión: **15 de octubre de 2026**. Puesta en marcha incluida como aporte del equipo al concurso. Se presupuestan servicios de terceros; sin honorarios. No se contrataron servicios ni se enviaron mensajes al calcular.

## 1. Qué cifra usa ahora la presentación

**Cloud API: S/3.500 mensuales de presupuesto conservador**, suponiendo que **el cliente inicia todas las conversaciones**. Incluye infraestructura, IA, mensajes de servicio de Meta y reserva del 20%. No incluye marketing ni avisos extra. La mezcla real Perú/Brasil y el número de respuestas pueden reducir o aumentar el costo. No es una factura ni límite automático de gasto.

**WAHA: S/300 mensuales como alternativa anterior.** No se suman S/300 y S/3.500. WAHA y Cloud API son transportes distintos: Meta no factura estos mismos mensajes si se envían solo por WAHA. El escenario oficial mantiene conservadoramente la misma provisión de runtime/servidor para webhook y apoyo, aunque puede optimizarse con Cloud Functions. No implica que la migración ya esté implementada.

## 2. El usuario inicia: qué cambia y qué no

Se eliminan del presupuesto los mensajes de marketing y los avisos de utilidad adicionales. Las respuestas, pasos y comprobantes se incluyen en **seis mensajes de servicio por chat**, todos dentro de la ventana de 24 horas. No se cuentan dos veces como utilidad.

La [documentación técnica vigente de Meta](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing) y su hoja fechada **01/10/2026** establecen una franquicia de **1.000 mensajes de servicio por número empresarial y mes**. Superado ese nivel hay costo por mensaje entregado, incluso cuando el usuario inició. No son 1.000 chats gratuitos. No se aplica la categoría Meta Business Agent: la IA presupuestada es de un tercero.

La página comercial genérica todavía describía servicio gratuito, por lo que se prioriza la hoja técnica fechada. El archivo original está en [fuentes](fuentes/README.md). No se presupuestan descuentos de volumen ni gratuidad por anuncios de clic a WhatsApp, para ser conservadores. Publicidad tampoco se incluye.

## 3. Tarifas verificadas y volumen supuesto

| Mercado destinatario | Servicio USD/mensaje | Utilidad USD/mensaje | Marketing USD/mensaje |
|---|---:|---:|---:|
| Perú | 0,0300 | 0,0300 | 0,0703 |
| Brasil | 0,0068 | 0,0068 | 0,0625 |

Se usa **Perú para todo el volumen** como caso conservador. No se afirma que todos los clientes estén en Perú. Utilidad y marketing se muestran para referencia, pero se cuentan **cero mensajes** en el escenario actual.

```text
4.000 chats/mes × 6 respuestas entregadas = 24.000 mensajes de servicio
24.000 − 1.000 gratuitos = 23.000 facturables
23.000 × US$0,03 = US$690 de Meta
```

4.000 chats y seis respuestas son supuestos de dimensionamiento. Se asigna todo ese volumen a WhatsApp para la sensibilidad conservadora; si parte ocurre en web o app, contar solo los mensajes entregados por WhatsApp. La ventana de 24 horas limita qué mensajes pueden enviarse, no vuelve ilimitadamente gratuito el servicio según esta hoja vigente. Si hay seguimiento iniciado por la empresa o mensajes fuera de ventana, recalcular plantillas y campañas.

## 4. Infraestructura e IA: base común

| Recurso | USD/mes | Qué representa |
|---|---:|---|
| Lovable Pro | 25,00 | Precio público mensual; dominio personalizado y créditos limitados. |
| Runtime/VPS de apoyo | 12,00 | Referencia de 2 GiB en DigitalOcean. No acredita proveedor contratado. |
| Backup semanal del runtime | 2,40 | 20% del VPS de referencia. No sustituye backup de Firebase. |
| Firebase | 15,00 | **Provisión**, no tarifa plana: Firestore, funciones, Storage, tráfico y logs. |
| IA de texto | 9,68 | Cálculo de tokens con 10% adicional. |
| Expo Free y dominio existente | 0,00 | Dentro de cuotas; sin nueva compra de dominio. |
| **Subtotal infraestructura e IA** | **64,08** | Base común mantenida de forma conservadora. |

IA: 4.000 conversaciones × (12.000 tokens entrada × US$0,10/M + 2.000 salida × US$0,50/M) × 1,10 = **US$9,68** con Haiku 5.5, sin descuentos. Tokens acumulados por conversación, incluido historial. Si cambia modelo, uso o se añade voz/OCR, recalcular. No sumar 4.000 conversaciones por cada canal.

Firebase: la región web de referencia es `southamerica-east1`. Las cuotas gratuitas por producto y región no garantizan costo cero. Se provisionan US$15, a contrastar con billing, adjuntos, retención y carga. Ejemplo de almacenamiento: 2.000 operaciones × 2 MB = 4 GB nuevos/mes; 90 días = 12 GB, como supuesto y no cambio realizado.

Lovable: US$25 no implica consumo ilimitado. Revisar hosting y recargas; Firebase se paga aparte en Google, sin duplicar una base de datos Lovable. El runtime adicional es una provisión de transición y puede eliminarse si toda la integración cabe de forma validada en las funciones del backend.

## 5. Total con Meta y sensibilidad por país

| Escenario, mismo volumen | Meta USD/mes | Total PEN con infraestructura y 20% | Presupuesto redondeado |
|---|---:|---:|---:|
| Todo Brasil | 156,40 | 1.005,39 | S/1.100 |
| Mitad Perú y mitad Brasil | 423,20 | 2.222,00 | S/2.300 |
| **Todo Perú, conservador del pitch** | **690,00** | **3.438,60** | **S/3.500** |

El caso mixto reparte proporcionalmente el volumen facturable después de la franquicia de un solo número. No aplica dos franquicias. No es una mezcla de clientes comprobada.

```text
US$64,08 de infraestructura + US$690 de Meta = US$754,08
754,08 × 1,20 de reserva = US$904,896
904,896 × S/3,80 = S/3.438,60
Presupuesto conservador: S/3.500/mes
```

El tipo de cambio **S/3,80 es un supuesto de presupuesto**, no la cotización bancaria actual. Antes de impuestos y cargos no incluidos. La reserva no es un tope de facturación. El primer mes se cuenta una sola vez; desarrollo incluido no significa consumo de nube gratuito.

## 6. Escenarios comerciales: anexo A y A.2

Margen supuesto: **S/15 por operación**. 30 días. Seguimiento de 64 cotizaciones diarias y 60 operaciones nocturnas adicionales en cada escenario. Solo sumar ventas incrementales distintas, con datos y autorización disponibles.

| Recuperación hipotética | Seguimiento | Total con 60 nocturnas | Contribución antes de tecnología | Tras WAHA S/300 | Tras Cloud API S/3.500 |
|---|---:|---:|---:|---:|---:|
| 5% | 96 | 156 | S/2.340 | S/2.040 | **−S/1.160** |
| 10% | 192 | 252 | S/3.780 | S/3.480 | **S/280** |
| 20% | 384 | 444 | S/6.660 | S/6.360 | **S/3.160** |

Son saldos antes de campañas, cupones, personal adicional y otros costos fuera de M. No son beneficio neto ni resultados observados. El costo de mensajes se mantiene fijo dentro de este sobre de volumen para comparar conversión; si el seguimiento aumenta las respuestas por encima de seis o inicia plantillas, recalcular Meta y no conservar artificialmente S/3.500.

Fórmula: contribución = (64 × recuperación × 30 + 60) × 15. S/3.780 corresponde al 10%, no S/3.790.

Punto de cobertura solo tecnológica: **234 operaciones** para S/3.500 (redondeo superior de 3.500/15). WAHA: 20 para S/300. No es equilibrio total del negocio ni ROI.

Cupones: si C es el descuento medio aplicado a cada venta recuperada, contribución = recuperadas × (15 − C) + 60 × 15. Al 10% con C=S/3: S/3.204 antes de tecnología, y **−S/296** después de S/3.500, aún antes de otros costos. Si el margen informado ya descuenta cupones, no restarlos otra vez.

El ahorro operativo anual S/109.200 se mantiene aparte como equivalente salarial de capacidad liberada para capacitación, captación y seguimiento. No presume despidos ni caja libre y no se suma como ingreso comercial.

## 7. Arranque, app y exclusiones

Puesta en marcha incluida en el concurso. Primer mes oficial presupuestado: **S/3.500**. Publicar opcionalmente en tiendas con cuentas nuevas añade Apple US$99/año y Google US$25 de registro único: US$124 ≈ **S/471,20**, al tipo de cambio supuesto. Primer mes con ambas cuentas nuevas: **S/3.971,20**. No repetir registros de cuentas existentes. No garantiza aprobación. La app se propone para iOS y Android; no se afirma publicación actual.

Expo Starter US$19/mes es opcional, no incluido en la base. WAHA Community consultado tiene licencia gratuita, sin cargos Meta de Cloud API para sus mismos mensajes; requiere servidor. Se conserva [costos-desglose.csv](costos-desglose.csv) como desglose del escenario WAHA y [costos-meta-conservador.csv](costos-meta-conservador.csv) para el oficial. Son alternativas.

Con Cloud API: presupuesto anual S/42.000; primer año con ambas cuentas nuevas S/42.471,20. Con WAHA: S/3.600 y S/4.071,20 respectivamente. No sumar los dos presupuestos.

No incluidos: honorarios; impuestos y cargos de tarjeta; un BSP con cuota propia; marketing pagado o cupones; correo no dimensionado; SMS/OTP; licencias fiscales; comisiones de bancos o fintech; nuevas validaciones de identidad; voz/OCR; planes de alta disponibilidad y soporte; SIM, equipos o dominios nuevos si se requieren. Añadirlos al contratar si pasan a ser requisito. El ejemplo presupone acceso directo a Cloud API, no un plan de partner adicional.

Antes de aprobar: verificar cantidad de respuestas por chat, país del destinatario, número de teléfonos y franquicias efectivas, modalidad de mensajes, margen real y facturas. Si una actualización posterior de Meta cambia la regla de servicio, recalcular desde la hoja vigente.

## Fuentes primarias

- [Meta: documentación de precios](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing), hoja USD vigente 01/10/2026 y franquicia de servicio. [Original descargado y resumen](fuentes/README.md).
- [Lovable Pricing](https://lovable.dev/pricing) y [créditos y uso](https://docs.lovable.dev/introduction/credits-and-usage).
- [Firebase Pricing](https://firebase.google.com/pricing).
- [DigitalOcean Droplets](https://www.digitalocean.com/pricing/droplets).
- [WAHA Community](https://waha.devlike.pro/).
- [Claude API Pricing](https://platform.claude.com/docs/en/about-claude/pricing).
- [Expo Pricing](https://expo.dev/pricing).
- [Apple Developer Program](https://developer.apple.com/programs/enroll/).
- [Google Play Console](https://support.google.com/googleplay/android-developer/answer/6112435#zippy=%2Cstep-pay-registration-fee).

Modelo reproducible en [costos-modelo.json](costos-modelo.json). Precios públicos y supuestos no acreditan facturación de las cuentas ni ejecución real de la integración.
