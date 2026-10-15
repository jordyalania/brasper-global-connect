# Fuentes y alcance

## Material visual

Las capturas de WhatsApp, app, landing y backoffice, los logos del evento y el video de 64,5 segundos se extrajeron de `BrasPer-5.5-presentacion-final.pdf`, aportado por el usuario. No se sube el PDF original completo. El seguimiento móvil procede de `docs/screenshots/06-movil.jpg` del repositorio web. No se han inventado fotografías ni cambiado los valores mostrados dentro de las capturas.

La captura de backoffice se muestra recortada mediante CSS a las operaciones BRL/PEN. El video original conserva una fila de prueba en USD: es material audiovisual del conjunto, no un nuevo corredor habilitado en la web. El alcance web continúa limitado a PEN y BRL.

Los módulos mostrados en las capturas del equipo no equivalen a una validación de integración en producción. La continuidad de identidad, Flow y publicación en tiendas no están acreditadas por estas imágenes.

## Datos y decisiones

- [Informe WhatsApp y Facebook](../fuentes/metricas_whatsapp_y_facebook.pdf): 131 chats/día, 67 que transfieren y 64 que quedan en cotización. Promedios declarados.
- [Informe SQL](../fuentes/metricas_transferencias_com_brasper.pdf): 3.723 registros observados. La última modificación no mide duración de una venta.
- Dotación confirmada en el marco: 6 ventas y 3 contabilidad. Escenario 3 y 1. Sueldos supuestos: S/1.700 y S/2.000.
- Escenario salarial: 3 × 1.700 + 2 × 2.000 = S/9.100 mensuales, S/109.200 anuales brutos. No es ahorro realizado.
- Captación nocturna: 10 consultas nuevas × 20% × 30 días = 60 operaciones. M = S/15: S/900 antes de costos adicionales. Demanda y margen por validar.
- Anexo: 64 × 10% × 30 = 192 operaciones y S/2.880. Recuperación no implementada. Evitar duplicidad con demanda nocturna.
- La presentación no calcula ROI real ni CAC real sin costos y clientes nuevos deduplicados. No usa tiempos de última actualización como tiempo de venta.

El alcance web revisado se documenta en [ESTADO_MODULAR.md](../ESTADO_MODULAR.md), base `f9ae0aa`. La arquitectura de cada módulo debe validarse con su responsable. La facturación y la liquidación bancaria no se prueban mediante esta presentación.

## Identidad y organización

Equipo: David, Binni, Jordy y Melani, según el material aportado. Los logos se conservan en color, sin distorsionar proporciones. Organizan: She Leads Data e Ingenia Lab. Los demás aliados se presentan tal como aparecen en la página final aportada.

## Costo-beneficio y KPIs

- El presupuesto operativo de aproximadamente S/300/mes procede del PDF aportado. Se usa solo como hipótesis de presupuesto total, sin validar sus precios de modelos ni tarifas de proveedores.
- La implementación se mantiene «por cotizar»: no existe una cifra aprobada en las fuentes revisadas.
- S/900 de contribución hipotética menos S/300 de presupuesto operativo deja S/600 antes de implementación y otros costos no incluidos. No es beneficio neto ni ROI observado.
- Los indicadores de tiempo, errores y productividad necesitan una línea base del piloto. No se ofrece un porcentaje de reducción ya logrado.
- Se mantienen tres canales. El contacto con un humano, Flow, CRM, alertas y banco/fintech aparecen como ampliaciones futuras.
