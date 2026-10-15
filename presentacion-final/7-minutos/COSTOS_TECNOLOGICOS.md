# Costos tecnológicos de OMNI by 5.5

Revisión de precios públicos: **15 de octubre de 2026**. Para la presentación al concurso, **desarrollo e integración se incluyen como aporte del equipo, sin cobro al proyecto en esta ecuación**. El cálculo contempla únicamente servicios tecnológicos de terceros. Importes presupuestados, no cargos comprobados en las cuentas. No se contrataron ni activaron servicios al preparar este cálculo.

## Resultado para presentar

**Piloto: aproximadamente S/300 mensuales** para web, bot, IA y backend, bajo las condiciones de este documento. Cálculo: US$64,08 de subtotal + 20% de reserva = US$76,896; a un **tipo de cambio supuesto de S/3,80** = **S/292,20**, redondeado a S/300. El tipo de cambio es una entrada del modelo, no una cotización bancaria actual.

**Puesta en marcha: incluida como aporte del equipo al concurso. Primer mes de servicios: S/300.** No se identificó una licencia obligatoria adicional de instalación en este escenario. El primer mes ya está incluido en el gasto mensual: no sumar S/300 de arranque más S/300 de operación por ese mismo mes. Activar cuentas de pago o aportar saldo no equivale a una tarifa de instalación.

**Publicación opcional en ambas tiendas:** cuentas nuevas de Apple y Google suman US$124 ≈ S/471,20 en el primer año. Primer mes con dichas cuentas: S/300 + S/471,20 = **S/771,20**. Las cuentas de tiendas no son necesarias para mostrar la web o probar con Expo Go. La aprobación para publicar no está garantizada por pagar.

## 1. Arquitectura presupuestada

Web de Lovable con backend Firebase externo; WhatsApp mediante WAHA alojado en un VPS; app Expo dentro de su nivel gratuito; IA de texto presupuestada con Haiku 5.5 según el material del equipo. Este es un escenario de infraestructura, no confirmación del proveedor contratado ni del modelo exacto desplegado en cada módulo. El contrato web también menciona un asistente separado: si usa otro modelo, recalcular su consumo en vez de sumarlo dos veces.

No incluye el backend Supabase legado ni otro servidor de facturación. No se añade una segunda base de datos al costo de Firebase. No usa Claude Pro como si incluyera ilimitadamente llamadas a la API.

## 2. Supuestos de carga

- 4.000 conversaciones de IA al mes **entre WhatsApp y app en conjunto**. Es una aproximación presupuestaria coherente con 131 chats diarios, no una medición de llamadas a IA. No sumar 4.000 por canal.
- 12.000 tokens de entrada y 2.000 de salida **acumulados por conversación**, incluyendo instrucciones, historial y llamadas a herramientas. No son tokens por mensaje.
- 10% extra de consumo de IA por reintentos y variaciones. Sin descuentos de caché ni procesamiento batch. Prompts por llamada inferiores a 100.000 tokens.
- Unas 2.000 operaciones al mes para dimensionar el backend, sin afirmar que sean nuevos clientes. Referencia de carga: 67 × 30 ≈ 2.010.
- Ejemplo de archivos: 2 MB por operación, unos 4 GB nuevos por mes y 12 GB con retención de 90 días. Tamaño y retención son supuestos de costos, no cambios de configuración realizados. Descargas, logs, consultas y funciones también consumen.
- Una sola sesión WAHA en un VPS de referencia de 2 GiB. Debe probarse memoria y estabilidad; no es una validación de capacidad productiva.
- Dominio y subdominio existentes: cero costo incremental de compra para este piloto. Renovación general del dominio no imputada exclusivamente al proyecto.

## 3. Desglose mensual del piloto

| Recurso | USD/mes | PEN/mes | Qué representa |
|---|---:|---:|---|
| Lovable Pro | 25,00 | 95,00 | Precio público mensual del plan, con dominio personalizado. Uso y recargas sujetos a sus límites. |
| VPS del bot, 2 GiB | 12,00 | 45,60 | Referencia DigitalOcean Basic. No implica que ya esté contratado allí. |
| Backup semanal del VPS | 2,40 | 9,12 | Opción del 20% del precio del VPS. No sustituye backup de Firebase. |
| Firebase | 15,00 | 57,00 | **Provisión**, no tarifa oficial plana: funciones, Firestore, Storage, transferencia, logs y recursos asociados. |
| IA por API | 9,68 | 36,78 | Cálculo por tokens, con 10% adicional. |
| WAHA Community | 0,00 | 0,00 | Licencia de software libre en la versión consultada; servidor contado arriba. |
| Expo Free | 0,00 | 0,00 | Dentro de cuotas. No incluye Apple/Google ni garantiza todas las builds necesarias. |
| Dominio existente | 0,00 | 0,00 | Sin nueva compra. |
| **Subtotal** | **64,08** | **243,50** | Suma del escenario. |
| Reserva general del 20% | 12,816 | 48,70 | Variación de consumo, divisa, recargas y otros desvíos menores. |
| **Total calculado** | **76,896** | **292,20** | Antes de impuestos. |
| **Presupuesto redondeado** | — | **300,00** | Referencia para el pitch, no techo automático de facturación. |

### IA: fórmula reproducible

Tarifa verificada de Haiku 5.5: US$0,10 por millón de tokens de entrada y US$0,50 de salida para prompts de hasta 100.000 tokens.

```text
4.000 × 12.000 = 48 millones de tokens de entrada
4.000 × 2.000 = 8 millones de tokens de salida
48 × 0,10 + 8 × 0,50 = US$8,80
8,80 × 1,10 = US$9,68 al mes
```

El cálculo solo cubre texto. OCR, imágenes, voz, búsqueda y herramientas con cargos propios no están incluidos. Una conversación larga o un modelo distinto puede elevar el costo. No se llamó a la API con datos de clientes para elaborar este presupuesto.

### Firebase: por qué no prometer costo cero

Blaze cobra por consumo con cuotas sin costo según producto. La tabla oficial muestra, entre otras, 50.000 lecturas y 20.000 escrituras diarias para Firestore Standard, y cuotas de funciones. No son una garantía de factura cero: región, generación de funciones, tiempo de ejecución, Storage, transferencia, builds y recursos de Google Cloud cuentan. La región de funciones del proyecto web es `southamerica-east1`; las cuotas gratuitas de buckets nuevos indicadas para determinadas regiones de EE. UU. **no se trasladan automáticamente a Brasil**. US$15 es una provisión inicial a contrastar con billing y carga, no un precio de Firebase.

### Lovable: alcance de los US$25

Es el plan Pro mensual consultado. Incluye una cantidad limitada de créditos y habilita dominio personalizado; no equivale a hosting o consumo ilimitados. Su documentación actual reúne construcción y ejecución bajo créditos. El backend Firebase se paga en Google, no vuelve a presupuestarse como base de datos de Lovable. Revisar hosting, tráfico y créditos reales del workspace. Si el plan ya está pagado y se comparte con otros proyectos, distinguir costo asignado de desembolso incremental.

## 4. Arranque y publicación móvil

| Concepto | Cuándo se paga | Importe de referencia |
|---|---|---:|
| Primer mes del piloto | Al empezar a operar | S/300 presupuestados; se cuentan una sola vez |
| Apple Developer Program | Opcional, anual | US$99 ≈ S/376,20 por año |
| Google Play Console | Opcional, registro único | US$25 ≈ S/95,00 |
| Ambas tiendas, si son cuentas nuevas | Primer año | US$124 ≈ S/471,20 |
| Primer mes más ambas cuentas | Si se publicará en tiendas | S/771,20 |

El siguiente año Apple renueva; Google no repite el registro único. Si el cliente ya tiene cuentas utilizables, no volver a cobrarles una inscripción. Expo Free no evita el cargo de las tiendas. Expo Starter es opcional a US$19/mes más uso: no se suma al piloto base. No se cotiza una compra de equipos, SIM o dominio nuevo porque no hay una necesidad ni proveedor confirmados. Si se requieren, añadir cotización.

## 5. Sensibilidad y presupuesto anual

| Escenario | Supuestos principales | Total estimado con reserva |
|---|---|---:|
| Piloto base | 4.000 chats, 12k/2k tokens, VPS 2 GiB, Firebase US$15, Expo Free | S/292,20/mes; presupuesto S/300 |
| Mayor uso | 8.000 chats, 24k/4k tokens, VPS 4 GiB US$24, Firebase US$30, Expo Starter US$19 | S/645,33/mes; presupuesto S/650 |

El segundo escenario es una sensibilidad, no una proyección de ventas. No escala todo linealmente: aumenta conversación, tamaño del servidor, provisión y plan de app. Detalle en [costos-modelo.json](costos-modelo.json).

Presupuesto piloto por 12 meses: **S/3.600**. Con cuentas nuevas de ambas tiendas: **S/4.071,20 el primer año**, antes de impuestos y exclusiones. Con ambas cuentas ya creadas, no sumar S/471,20. No aplicar la reserva otra vez a esos totales redondeados.

## 6. Costo-beneficio para el pitch

Se conserva el ejemplo de 60 operaciones nocturnas nuevas × S/15 = S/900 mensuales de contribución antes de costos adicionales. Con presupuesto tecnológico S/300: **S/600 mensuales de saldo del escenario**, antes de costos humanos, bancarios y otros no incluidos en el margen. No es ganancia neta observada.

Punto de cobertura **solo tecnológica**: S/300 ÷ S/15 = **20 operaciones adicionales al mes**. Si se pagan las dos cuentas de tiendas en el primer mes: S/771,20 ÷ S/15 = 51,41, es decir **52 operaciones** para cubrir ese desembolso bajo el mismo margen supuesto. No usar estas cuentas como equilibrio total del negocio.

El escenario salarial de S/109.200 anuales se mantiene aparte: ahorro operativo potencial medido como equivalente de capacidad bruta, no caja ya ahorrada. El objetivo es capacitar y reasignar tareas a captación y seguimiento, sin plantear despidos. No se suma al retorno del piloto ni se calcula un ROI de servicios profesionales, que están fuera de este encargo.

## 7. WhatsApp: WAHA y Cloud API son presupuestos distintos

La base usa WAHA porque así se describe el módulo aportado. La versión Community consultada no tiene tarifa de licencia, pero requiere servidor y mantenimiento. No es la Cloud API oficial. Si el equipo necesita otra edición o alojamiento gestionado, añadir su costo confirmado.

Para migrar a Cloud API y Flow, **reemplazar** el supuesto WAHA/VPS por el esquema que realmente se use. La tarifa de Meta depende de mercado, categoría, volumen y reglas vigentes. La documentación consultada contempla 1.000 mensajes de servicio gratuitos mensuales por número y cobros a partir del siguiente, salvo otras ventanas gratuitas aplicables. Por ello **no se asume mensajería oficial ilimitada gratis**. Plantillas, seguimientos, posibles cargos de un BSP y servidor webhook deben presupuestarse con el tráfico Perú/Brasil. Esa migración no está incluida en los S/300.

## 8. Exclusiones y comprobaciones antes de aprobar gasto

Honorarios y desarrollo; personal de revisión; impuestos, retenciones y cargos de tarjeta; marketing y retargeting; SMS/OTP; correo transaccional no dimensionado; licencias fiscales productivas; comisiones bancarias o fintech; APIs de validación de identidad; OCR/voz; infraestructura de alta disponibilidad y planes de soporte; auditorías y nuevas obligaciones regulatorias. Si alguno pasa a ser requisito del piloto, deja de ser opcional y debe añadirse al presupuesto.

Confirmar proveedor y edición WAHA, modelo exacto de IA, plan Lovable efectivo, facturas Firebase, región del bucket, tamaño y retención de adjuntos, tráfico del portal, costo de correo si se habilita y cuentas de tiendas existentes. Las alertas de presupuesto no equivalen a un corte automático del gasto.

## Fuentes primarias consultadas

- [Lovable Pricing](https://lovable.dev/pricing): Pro mensual US$25.
- [Lovable: créditos y uso](https://docs.lovable.dev/introduction/credits-and-usage): construcción, hosting, Cloud y gateway consumen créditos bajo sus condiciones.
- [Firebase Pricing](https://firebase.google.com/pricing): cuotas y consumo por producto y región.
- [DigitalOcean Droplets](https://www.digitalocean.com/pricing/droplets): Basic 2 GiB US$12/mes, 4 GiB US$24/mes y backup semanal al 20%. Referencia, no contrato actual.
- [WAHA](https://waha.devlike.pro/): edición Community gratuita y alojamiento propio.
- [Claude API Pricing](https://platform.claude.com/docs/en/about-claude/pricing): tarifas de tokens Haiku 5.5 usadas en el escenario.
- [Expo Pricing](https://expo.dev/pricing): Free y Starter US$19/mes más uso. Free publica límites de builds y 1.000 usuarios activos para actualizaciones.
- [Apple Developer Program](https://developer.apple.com/programs/enroll/): US$99/año, sujeto a precio local.
- [Google Play Console](https://support.google.com/googleplay/android-developer/answer/6112435#zippy=%2Cstep-pay-registration-fee): US$25 de registro único.
- [WhatsApp Business Platform Pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing): esquema oficial independiente de WAHA.

Los precios públicos no acreditan lo que ya se paga en las cuentas. Conservar la fecha de revisión y recalcular antes de contratar. [CSV](costos-desglose.csv) y [modelo JSON](costos-modelo.json) permiten revisar entradas y sumas.

## 9. Crecimiento comercial: potencial mayor que la demanda nocturna

S/900 es un ejemplo parcial, no el total ni el techo. Los canales adicionales, la claridad del seguimiento y la confianza pueden mejorar captación o conversión, pero no hay una medición causal para asignarles un porcentaje.

El escenario ampliado del pitch combina, **solo si son operaciones incrementales distintas**:

- Seguimiento: 64 cotizaciones/día × recuperación supuesta del 10% × 30 días = 192 operaciones. A M=S/15: S/2.880.
- Nueva demanda nocturna: 10 consultas nuevas/día × 20% × 30 = 60 operaciones. A M=S/15: S/900.
- Total: 252 operaciones, **S/3.780 de contribución** antes de tecnología, campañas y costos no incluidos en M. Menos S/300 de tecnología: S/3.480, todavía antes de campañas, trabajo comercial adicional y otros costos.

Si se usan cupones, descontarlos del margen y evitar contarlos otra vez como gasto: con costo medio de cupón C aplicado solo a las 192 recuperadas, contribución = 192 × (15 − C) + 60 × 15. Restar después tecnología y demás costos no incorporados. Ejemplo hipotético C=S/3: S/3.204 antes de tecnología; S/2.904 después de S/300, aún antes de otros costos. No asignar estos resultados al sistema como ventas realizadas.

No todas las 64 cotizaciones tienen datos disponibles ni todas admiten seguimiento. Registrar intención, motivo y autorización; priorizar contactos por el equipo, probar campaña contra un grupo comparable y medir compras incrementales, margen después del cupón y costo por conversión. No sumar por separado una mejora genérica de confianza o un nuevo canal si ya está incluida en las mismas ventas.
