# OMNI by 5.5 · Pitch de siete minutos

Presentación web 16:9 con 16 diapositivas principales y 8 anexos. Mantiene el rojo, negro, crema y la portada centrada de 5.5.

- [Abrir presentación](index.html). Desde el servidor de la carpeta superior: `/7-minutos/`.
- [PDF de respaldo](OMNI-5.5-7-minutos.pdf), sin video interactivo.
- [Pitch modelo listo para decir](PITCH_MODELO_7_MIN.md): 420 segundos incluido el video.
- [Notas de apoyo](SPEECH_7_MIN.md).
- [Costos tecnológicos](COSTOS_TECNOLOGICOS.md), [CSV](costos-desglose.csv) y [modelo](costos-modelo.json).
- [Fuentes y alcance](FUENTES_Y_ALCANCE.md).
- [Estructura](estructura.json) y [notas de anexos](NOTAS_ANEXOS.md).

Flechas para navegar, F para pantalla completa, S para notas. El botón Anexos salta al respaldo. Las etiquetas de retorno vuelven al pitch. El cronómetro se activa en herramientas (pasar el puntero arriba a la derecha) o con T. Cuenta siete minutos desde Iniciar. El video se reproduce con clic o espacio al llegar a su diapositiva. No comienza solo.

El video y las capturas se incluyen localmente para no depender de servicios externos. El runtime de Reveal y GSAP está en la carpeta superior. Conservar esa estructura al copiar. Esta entrega no cambia la aplicación ni los servicios cloud.

Para continuar: editar `index.html` y `seven.css`; mantener `estructura.json`, guion, fuentes y PDF sincronizados. Los 8 anexos no cuentan en los siete minutos. No presentar proyecciones como resultados.

## Cálculos para revisión

[RESUMEN_CALCULOS.md](RESUMEN_CALCULOS.md) explica paso a paso los US$234 de Meta con optimización y el saldo proyectado de S/2.380. Ambos cálculos también se desarrollan en los anexos A, A.2, E y F.

## Bloques de exposición

1. Problemática: diagnóstico y 64 cotizaciones sin transferencia.
2. Solución propuesta: cuatro puntos de acceso (WhatsApp, web, app iOS y app Android) y revisión interna.
3. Impacto: KPIs, demanda 24/7, capacidad salarial y costo-beneficio.
4. Demo: video de 64,5 segundos.
5. Próximos pasos y cierre con logos.

La atención humana es una futura modalidad del bot, no un punto de acceso adicional. El presupuesto tecnológico recalculado es S/1.359,24/mes, redondeado a S/1.400 con Cloud API optimizado como propuesta aún no implementada; WAHA S/300 como alternativa. El primer mes se cuenta una sola vez. Cuentas de tiendas opcionales aparte. No incluye honorarios.

El ahorro anual se explica como capacidad operativa para capacitación, captación y seguimiento. La contribución comercial del escenario ampliado no se presenta como un resultado ya obtenido.

Para el concurso, la puesta en marcha se presenta incluida como aporte del equipo. El presupuesto solo contempla servicios tecnológicos de terceros.

Anexo A: cálculo de S/3.780. Anexo A.2: recuperaciones del 5%, 10% y 20%, con saldos para ambas alternativas. El importe del impacto enlaza al cálculo. La app se propone para iOS y Android.

[Optimización propuesta de WhatsApp](OPTIMIZACION_WHATSAPP.md): el anexo F explica cómo agrupar datos y mensajes. Mantener separado del estado actual.

En la solución se cuentan iOS y Android por separado: cuatro puntos de acceso. Comparten implementación móvil y backend. No duplicar presupuesto ni ventas por esta distinción.

## Transparencia de IA

El anexo G distingue conversación con IA, reglas deterministas y validación humana. Incluye un aviso explícito propuesto y fuente normativa peruana; su despliegue y el cumplimiento integral requieren verificación. No cambia el recorrido principal de las láminas 3 a 15.

## Video en PowerPoint

`OMNI-5.5-7-minutos-video-final.pptx` y el PPTX principal contienen la demo incrustada como video nativo. Se reproduce automáticamente al entrar en la diapositiva 13, dentro del recuadro y con el texto inferior visible. El PDF conserva una imagen estática.

Las notas del PowerPoint indican la duración, el inicio y el cierre acumulado de cada lámina en minuto:segundo y en segundos desde el inicio. Los anexos quedan fuera de los siete minutos.
