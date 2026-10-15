# Guion de las diapositivas · V1 final modular

Estas notas acompañan el HTML. El marco de continuidad está en MARCO_PRESENTACION.md. Base del código revisado: f9ae0aa.

## 01. EL CAMBIO ESTÁ ABIERTO.

20 s. Presentar integrantes. Identidad del equipo 5.5 preservada. Brasper es la empresa beneficiaria. La nueva propuesta une automatización operativa y ventas omnicanal. Los nombres se completan en config.js.

## 02. EL BRIEF PEDÍA FACTURAR. PREGUNTAMOS MÁS.

25 s. Como equipo de consultoría, contrastamos el problema percibido de facturación con los planes y avances de TI. Esa área ya tenía una solución encaminada y su implementación prevista, aunque todavía no estaba completada. El diagnóstico permitió entender ese trabajo en curso y buscar una oportunidad adicional de mayor alcance en ventas y experiencia. No presentar facturación como una necesidad ya resuelta antes del proyecto ni afirmar una brecha con la dirección como hecho de esta diapositiva.

## 03. EL MAYOR POTENCIAL ESTABA EN VENTAS.

25 s. El equipo relata que resolvió con rapidez el frente inicial, pero el valor de la consultoría estuvo en no detenerse ahí. El análisis del proceso, las capacidades existentes, las métricas y la experiencia llevó a priorizar ventas. Respetamos el trabajo de TI y proponemos conectarlo con una experiencia comercial más fuerte. El apoyo a facturación mostrado en el prototipo no acredita una emisión fiscal productiva. No presentar la transacción actual como un proceso completamente manual.

## 04. BRASPER CRECE. LA EXPERIENCIA DEBE SEGUIRLE.

20 s. El brainstorm final cambia el foco: la transacción ya estaba prácticamente automatizada. La solución complementa lo que funciona con atención comercial, experiencia y coordinación. Los porcentajes del segundo trimestre proceden del speech adjunto, no del informe SQL ni del piloto de nuestra solución. No atribuirnos ese crecimiento.

## 05. 87%

20 s. Brasper crece en captación y envíos, mientras la retención reportada pasa de 90,5%a 87%, una caída de 3,5 puntos porcentuales. No es una caída relativa de 3,5%. No atribuirla a WhatsApp sin evidencia. Nuestra propuesta incorpora seguimiento, destinatarios guardados y retorno sencillo. Medir recurrencia por cohortes de clientes únicos.

## 06. 64 COTIZACIONES. UNA SEGUNDA OPORTUNIDAD.

Dato informado: de 131 chats diarios,67 terminan en transferencia y 64 quedan en cotización. No sabemos por qué no avanzan ni qué parte puede recuperarse. No equivalen a 64 ventas perdidas o recuperables. Primero registrar motivo y último paso, después probar acompañamiento. La recuperación aún no está implementada. Los porcentajes y proyecciones de recuperación aparecen solo como hipótesis del piloto en anexos.

## 07. EMPIEZA EN WHATSAPP. SIGUE DONDE QUIERAS.

OMNI by 5.5 es la visión de continuidad entre WhatsApp, web y app. El corte actual de este repositorio implementa landing y portal web sobre Firebase. No afirmar que los cuatro canales están sincronizados de extremo a extremo: la sesión web es anónima y local al navegador. WhatsApp desde este portal abre atención humana; el agente conversacional y la app son módulos externos. Presentar la integración entre ellos como trabajo por consolidar. Flow nativo continúa como deseable pendiente de Meta.

## 08. LA INFORMACIÓN JUNTA VENDE MEJOR.

En este corte, las operaciones web se almacenan en Firebase. La sesión anónima y el resumen local permiten volver desde el mismo navegador. No existe recuperación automática entre dispositivos al borrar la sesión. Centralización de operaciones no equivale todavía a identidad omnicanal completa. El CRM y la atribución por campaña continúan como propuestas para medir crecimiento.

## 09. UN AGENTE QUE ACOMPAÑA LA VENTA.

La diapositiva explica el papel del módulo de IA dentro de la propuesta OMNI, no una UI entregada en este repositorio. El nuevo portal llama funciones de cotización, operación, comprobantes y seguimiento, y deriva a una persona por WhatsApp. assistantGenerate se menciona en la documentación del backend, pero no tiene UI en esta entrega. La IA conversacional se trabajó en otro módulo y debe demostrarse por separado. No atribuirle una integración operativa en esta web. Las reglas y el backend gobiernan cálculos y estados.

## 10. ENTENDER QUÉ FALTA. AYUDAR A CONTINUAR.

Esta es una propuesta de siguiente fase, no una función entregada. El MVP guardaría la intención, datos mínimos y paso pendiente, con cotización recalculada si vence. Una bandeja permitiría al asesor registrar motivos y hacer seguimiento. La IA resumiría y sugeriría el mensaje; el humano lo revisaría. Registrar autorización, evitar contactos repetidos y detener el seguimiento al completar, responder o solicitar baja. Solo después evaluar automatización y alertas por mejor monto neto. Medir operaciones incrementales frente a un grupo comparable.

## 11. TU PRÓXIMO CLIENTE NO ESPERA A MAÑANA.

30 s. La mejora económica puede superar el ahorro de personal si se convierten solicitudes que antes no avanzaban. No se conoce el horario real ni la demanda nocturna. Este ejemplo supone 10 intenciones nuevas por día,20% deconversión,30 días activos y margenS/15. Genera 60 operaciones yS/900 decontribución antes de costos incrementales. No contar aquí cotizaciones recuperadas del grupo de 64. Recepción 24/7 no implica liquidación bancaria 24/7.

## 12. Video del producto ·90 segundos

90 segundos reservados. Mostrar la web modular actual sobre Firebase: estimado, cotización vinculante temporal, datos, operación, instrucciones de pago, carga de prueba y seguimiento. La cuenta de pago y comprobantes están en modo de prueba según la documentación. No mostrar el dashboard Supabase anterior como UI vigente ni una transferencia bancaria real. El chat IA y las apps son módulos externos; si se graban, identificarlos. Flow no está operativo. Colocar video/proceso.mp 4 para reproducirlo.

## 13. 30 DÍAS. DECISIONES CON DATOS.

Primero validar el recorrido web sobre Firebase y los horarios de revisión. Después definir integración de identidad entre módulos, eventos de negocio y seguimiento comercial con consentimiento. Medir eventos reales por etapa, retención y conversión incremental. Los valores económicos siguen siendo hipótesis. Este repositorio no entrega una UI de staff o asistente. No reactivar el dashboard Supabase antiguo para la demostración.

## 14. QUE LLEGUEN. QUE AVANCEN. QUE VUELVAN.

20 s. Cerramos con la experiencia completa: atraer al cliente, ayudarlo a avanzar y darle una razón para volver. La rentabilidad se apoya en conversión y recurrencia, además de eficiencia operativa. Proponemos un piloto medido sobre la base que ya funciona.

## 15. +192

Recuperación aún no implementada. Hipótesis para evaluar después de construir y probar el seguimiento. 30 s. Recuperar el 10% de 64 cotizaciones equivale a 6,4 chats diarios, o 192 en 30 días activos. Suponemos una transferencia adicional por cada chat recuperado. Con margen de contribución deS/15, seríanS/2.880 antes del costo incremental de recuperación. El monto de la remesa no es ingreso de Brasper. La conversión pasaría de 51,15% a 56,03%, una diferencia de 4,89 puntos. Validar el incremento atribuible con un grupo de control.

## 16. EL MISMO TRÁFICO. MÁS OPORTUNIDADES.

Recuperación aún no implementada. Hipótesis para evaluar después de construir y probar el seguimiento. 25 s. No afirmar CAC real sin gasto y clientes nuevos deduplicados. El costo por chat convertido baja 8,72%si 67 pasan a 73,4 con el mismo gasto. La conversión nocturna puede aportar más, pero debe medirse en otra cohorte. El CRM vincula fuente, intención, primera compra y repetición. No sumar el porcentaje al beneficio monetario como un retorno adicional.

## 17. S/3.780

Recuperación aún no implementada. Hipótesis para evaluar después de construir y probar el seguimiento. 30 s. El ejemplo combina 192 operaciones recuperadas y 60 nuevas fuera de horario, siempre que no se solapen.252 porS/15=S/3.780 mes, oS/45.360 año si se mantiene. Esta contribución no es ROI ni beneficio neto. Restar tecnología, adquisición, canales y transición. El piloto valida qué parte es verdaderamente incremental. La reducción de carga se modela aparte para que la rentabilidad no dependa de recortar personal.

## 18. VENDER MÁS CAMBIA LA ECUACIÓN.

ROI por período: (beneficios incrementales menos todos los costos de implantación y operación)/todos esos costos. No hay ROI real calculable sin inversión, costos y margen confirmados. Comparar en el mismo plazo. La diferencia del canal 24/7 puede aumentar el retorno si su contribución supera su costo incremental y no sustituye ventas que igual iban a ocurrir.

## 19. PEQUEÑOS PUNTOS. IMPACTO ACUMULADO.

Cada escenario multiplica 64 cotizaciones por la recuperación y los días activos. Si se atienden 26 días, sustituir 30 por 26. El contacto requiere autorización y una forma sencilla de dejar de recibir mensajes. Medir transferencias adicionales completadas en una ventana comparable. Descontar el costo incremental y evitar duplicar al cliente entre canales.

## 20. MENOS “¿CÓMO VA?”. MÁS CLARIDAD.

En términos técnicos, el informe presenta 39 h 41 promedio,23 h 29 mediana yp 90 de 101 h 31 sobre 3.463 completadas noeliminadas. updated_at puede cambiar después del cierre. Esos datos no prueban una espera del cliente. Evitar el términoSLAanteeljurado generalista. No comparar 39 h 41 contra 15 minparaasegurar una reducción. La meta de 15 min requiere datos completos, revisión y disponibilidad bancaria.

## 21. UN CLIENTE. LA PRÓXIMA MEJOR ACCIÓN.

Orden propuesto: primero unificar la ficha y el estado, después medir conversión por origen y franja, luego probar recuperación autorizada con grupo de control. Añadir cuentas guardadas, resumen bilingüe para el humano, alertas por monto neto y recordatorios de recurrencia. Medir utilidad después del canal. Referidos se activan tras operación exitosa, sin prometer crecimiento gratuito. Banco y antifraude avanzado son otra fase. Flow nativo no se muestra como implementado: actualmente el bot deriva al formulario web. Su habilitación depende de completar la configuración y verificaciones pendientes de Meta; no afirmar que existe un formulario operativo dentro de WhatsApp.

## 22. MENOS REPETICIÓN. MÁS CAPACIDAD.

El usuario confirma seis personas en ventas y tres en contabilidad. El escenario es pasar a tres comerciales y un contable. La automatización libera tiempo de registro y emisión. Las personas pueden reasignarse para acompañar crecimiento. Eso no equivale automáticamente a ahorro en caja. La meta de quince minutos se valida en casos completos con revisión y disponibilidad bancaria.

## 23. S/109.200

Anexo I. Base confirmada: seis personas en ventas y tres en contabilidad. Escenario objetivo: tres comerciales y un contable. Se liberan tres puestos de ventas y dos contables: cinco en total. Se usan sueldos estimados deS/1.700 ventas yS/2.000 contabilidad, no una encuesta de mercado ni nómina validada. Ventas:3×1.700=5.100 mensuales. Contabilidad:2×2.000=4.000. Total:S/9.100 mes yS/109.200 año. No incluye cargas, tecnología, transición ni costos de reorganización. Ahorro en caja solo si el costo efectivo se reduce; reasignación significa capacidad liberada.

## 24. 3.723

El volumenSQLes evidencia observada del negocio. No demuestra por sí solo que el proceso sea manual, ni se puede conciliar con 67 chats diarios convertidos sin período e identificadores comunes. Septiembre 1355 incluyefilaseliminadas;1347 sineliminar.

## 25. LAS FUENTES VIAJAN CON EL PITCH.

La plantilla confirmada por el usuario es seis personas en ventas y tres en contabilidad. Los informes SQL y de chats describen fuentes distintas. El speech final informa crecimiento y retención que se deben contrastar. No atribuirnos ese crecimiento histórico. Los escenarios de recuperación, demanda fuera de horario y margen no son resultados medidos.
