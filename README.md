# Brasper · Cambio de moneda desde la web

Brasper permite al usuario cotizar un cambio entre soles peruanos (PEN) y reales brasileños (BRL), registrar sus datos y la cuenta de destino, adjuntar el comprobante de pago y seguir su operación desde el navegador, tanto en computadora como en móvil.

El portal web **ahora se conecta al backend de Firebase de BRASPER** para obtener cotizaciones, guardar operaciones, recibir archivos y consultar sus estados. El cliente puede comenzar sin crear una cuenta ni elegir una contraseña.

[Abrir Brasper](https://brasper.jordybryan.com/) · [Probar el recorrido PEN → BRL con S/ 1.000](https://brasper.jordybryan.com/transferencias?from=PEN&to=BRL&amount=1000)

## Experiencia del usuario

### 1. Calcular el cambio

En la página principal, el usuario elige cuánto quiere enviar y las monedas de origen y destino. La calculadora muestra un estimado; la cotización definitiva se obtiene al continuar en el portal.

![Calculadora de cambio en la página principal](docs/screenshots/01-landing.jpg)

### 2. Obtener una cotización

**Hacer mi cambio desde la web** lleva el monto y las monedas a `/transferencias`. Al pulsar **Continuar**, el servidor calcula la tasa, la comisión, el impuesto sobre la comisión, el total a transferir y el importe que recibirá el destinatario.

![Monto y monedas para cotizar](docs/screenshots/02-cotizar.jpg)

La cotización muestra un contador de vigencia. El usuario puede revisar sus importes antes de registrar la operación. Si vence, debe generar una nueva para consultar la tasa vigente.

### 3. Completar los datos y el destino

El formulario solicita nombre, documento, correo y origen de los fondos, además del banco y la cuenta de origen, y del banco y la cuenta o clave PIX de destino. El usuario puede corregir el monto o completar los datos y pulsar **Crear mi operación**.

La opción **Recordar mis datos en este dispositivo para la próxima vez** es voluntaria.

![Cotización y formulario de datos](docs/screenshots/03-cotizacion-y-datos.jpg)

### 4. Consultar la cuenta de pago y adjuntar el comprobante

La web genera una referencia como `BR-0001` y muestra la cuenta receptora de Brasper, el importe exacto y la vigencia de la tasa. El cliente completa el número de operación bancaria y adjunta una imagen o PDF de hasta 8 MB. Después pulsa **Ya pagué, enviar comprobante**.

En el entorno de demostración, la cuenta aparece identificada como **DEMO**. Las pruebas utilizan datos y archivos de demostración, sin una transferencia bancaria real.

### 5. Seguir el avance

El usuario consulta la operación y su línea de tiempo desde la misma web. Mientras la pantalla está activa, el portal consulta los cambios periódicamente; también ofrece el botón **Actualizar**.

| Estado | Qué ve el usuario |
| --- | --- |
| Esperando tu pago | Operación creada, con las instrucciones para pagar y enviar el archivo. |
| Pago en revisión | El comprobante fue enviado y el ingreso está pendiente de validación. |
| Pago confirmado | La validación terminó y el envío está en preparación. |
| Dinero enviado | La operación figura como enviada. |
| Comprobante disponible | El documento está listo para descargar. |

Si la operación es rechazada, la web muestra el motivo cuando está disponible. Antes de pagar, el usuario puede solicitar la cancelación desde su operación.

![Seguimiento de una operación en revisión](docs/screenshots/04-operacion-en-revision.jpg)

### 6. Volver y descargar el comprobante

**Mis transferencias** reúne las operaciones del usuario en ese navegador. Puede abrir una referencia, consultar su avance y descargar el comprobante cuando esté disponible. Los documentos del entorno de prueba se identifican como tales y aún no tienen validez tributaria.

![Listado de transferencias del usuario](docs/screenshots/05-mis-transferencias.jpg)

El acceso está vinculado a la sesión de este navegador. Borrar los datos del sitio o cambiar de dispositivo puede hacer que las operaciones dejen de estar accesibles desde esa sesión. El navegador conserva resúmenes de las operaciones; el perfil se recuerda solo si el usuario activa esa opción.

### Uso desde el móvil

El mismo recorrido se adapta a pantallas pequeñas: cotización, formulario, carga del comprobante y seguimiento.

<img src="docs/screenshots/06-movil.jpg" alt="Seguimiento de la operación desde el móvil" width="280" />

## Conexión con Firebase

El portal se comunica mediante REST con Firebase y las Cloud Functions del proyecto `aibrasper`:

| Servicio | Función en la experiencia web |
| --- | --- |
| Firebase Authentication | Crea una sesión anónima para asociar las operaciones al usuario del navegador. |
| Cloud Functions | Obtiene tasas, genera cotizaciones, registra operaciones, recibe la referencia del comprobante y permite recuperar el documento final. |
| Cloud Firestore | Permite consultar las operaciones del usuario y sus estados para actualizar el seguimiento. |
| Cloud Storage | Recibe las imágenes y PDF adjuntos al registrar el comprobante de pago. |

El servidor define los importes de la cotización. Adjuntar un archivo inicia la revisión del pago; la confirmación aparece como un estado posterior. En las demostraciones, la aprobación y el envío pueden simularse sin mover dinero real.

El detalle técnico de endpoints, sesión, almacenamiento local y emuladores está en [Integración del portal con el backend](docs/BACKEND_INTEGRATION.md).

## Desarrollo local

```sh
npm install
npm run dev
```

Para comprobar el proyecto:

```sh
npm run build
npm run test
npm run lint
```

Desarrollado con React, TypeScript, TanStack y Vite. El repositorio está conectado al [editor de Lovable](https://lovable.dev/projects/3238d75c-acc7-415b-889e-3acc9f1100b6).
