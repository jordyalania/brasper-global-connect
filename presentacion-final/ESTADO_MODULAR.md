# Estado del producto en este corte

Revisión de código: `f9ae0aa` en `jordyalania/brasper-global-connect`. No confundir implementación en código con validación externa o despliegue de todos los módulos.

## Entrega de este repositorio

Landing y `/transferencias` consumen Firebase por REST, sin SDK Firebase en el navegador. El backend está separado en [iathon-fintech/functions](https://github.com/binnicordova/iathon-fintech/tree/main/functions).

| Etapa | Implementación revisada | Referencia |
|---|---|---|
|Estimado en landing|Referencia, nunca cotización vinculante|[pricing.ts](../src/lib/pricing.ts)|
|Cotización|`getRates`, `createQuote`; tasa fijada temporalmente por servidor|[client.ts](../src/lib/api/client.ts)|
|Acceso cliente|Firebase Auth anónimo, renovación y almacenamiento en navegador|[session.ts](../src/lib/api/session.ts)|
|Datos y operación|Validación y `createOrder`|[details-step.tsx](../src/components/transfer/details-step.tsx)|
|Cuenta de pago|Respuesta del backend; aviso si es de demostración|[payment-panel.tsx](../src/components/transfer/payment-panel.tsx)|
|Prueba de pago|Firebase Storage y `submitProof`; imagen/PDF estrictamente menor a 8 MiB|[proof.ts](../src/lib/api/proof.ts)|
|Seguimiento|Firestore REST, consulta cada 15 s mientras la operación pueda cambiar y la pestaña esté visible|[use-brasper-data.ts](../src/hooks/use-brasper-data.ts)|
|Comprobante|`getReceipt`, según estado de factura de prueba|[order-panel.tsx](../src/components/transfer/order-panel.tsx)|
|Recordar datos|Perfil local solo por opción del usuario; cotización vigente y resumen local|[local-data.ts](../src/lib/local-data.ts)|
|Atención personal|Enlace a WhatsApp; no usa handoff-queue desde este portal|[whatsapp-link.ts](../src/lib/whatsapp-link.ts)|

Proyecto Firebase de referencia: `aibrasper`; región de funciones en el código: `southamerica-east1`. La configuración pública no sustituye las reglas de seguridad. No copiar tokens de sesión ni secretos a esta carpeta.

## Límites importantes

- Al borrar los datos del navegador o cambiar dispositivo no se recupera automáticamente la identidad anónima ni sus operaciones.
- La web no implementa login de clientes con recuperación entre dispositivos, CRM, bandeja comercial ni seguimiento proactivo.
- No hay UI de staff ni de `assistantGenerate` en esta entrega. La documentación cita esas funciones como parte del backend separado.
- `/dashboard`, `/login` y archivos Supabase siguen en el repo como legado. La presencia del archivo no significa que pertenezca al nuevo recorrido.
- Horario de revisión configurado en `hours.ts`, hora Lima: lunes–viernes 07–18, sábado 08–14, domingo 12–14. Es configuración de código, por confirmar con negocio. La recepción web puede continuar; la revisión bancaria humana tiene horario.
- Los comprobantes y cuentas señalados como prueba no deben presentarse como liquidación o emisión fiscal real.
- El timeline considera `exported` como envío registrado. No acredita una ejecución bancaria automática desde la web.
- Corredores de la web revisada: PEN/BRL. No introducir USD en el pitch por referencias técnicas internas.

## Estado de la visión OMNI

| Módulo | Cómo presentarlo |
|---|---|
|Web pública y portal Firebase|Entrega actual revisada en código; probar el recorrido antes de mostrarlo en vivo|
|Chat IA|Módulo separado, no integrado en la UI de este portal|
|App iOS/Android|Fuera de este repositorio; integración y publicación deben confirmarse|
|Identidad y datos entre canales|Visión a consolidar, no recuperación entre dispositivos entregada|
|Flow nativo|Deseable pendiente de verificaciones/habilitación en Meta|
|CRM, recuperación y alertas|Propuestas para un piloto, no funciones entregadas|
|Staff|Servicios del backend separado; el dashboard antiguo no es la UI de esta versión|

## Cambio respecto a la presentación anterior

La idea comercial se mantiene. La prueba visual debe centrarse ahora en la web modular. Las notas del HTML y `SPEECH_FINAL.md` se adaptaron para no demostrar el dashboard Supabase como actual ni atribuir al portal todas las capacidades de OMNI. `GUIA_DE_TRABAJO.md` conserva el contexto anterior y no debe usarse como referencia técnica vigente.
