# FASE B - REGISTRO DE HALLAZGOS

## Inspeccion automatizada con ESLint

| ID | Linea | Defecto | Regla | Severidad | Estado |
|---|---|---|---|---|---|
| E-01 | 2 | Declaracion con var | no-var | Media | Corregido |
| E-02 | 3 | Comparacion no estricta | eqeqeq | Media | Corregido |
| E-03 | 3 | Condicional sin llaves | curly | Baja | Corregido |
| E-04 | 4 | Condicional sin llaves | curly | Baja | Corregido |
| E-05 | 5 | Declaracion con var | no-var | Media | Corregido |

## Inspeccion humana del codigo

| ID | Defecto observado | Severidad | Accion propuesta | Estado |
|---|---|---|---|---|
| H-01 | El porcentaje mayor a 100 solo genera un mensaje, pero el calculo continua | Alta | Definir y aplicar validacion | Pendiente |
| H-02 | Se suma un valor fijo de 10 al descuento VIP sin regla documentada | Alta | Confirmar regla de negocio | Pendiente |
| H-03 | No se valida que el precio sea numerico y no negativo | Alta | Definir validacion de entrada | Pendiente |
| H-04 | No se controla un total negativo | Media | Definir limites del descuento | Pendiente |
| H-05 | No existe una regla explicita de redondeo monetario | Media | Confirmar precision requerida | Pendiente |

## Resultado inicial

ESLint detecto 5 errores y 0 advertencias.

La inspeccion humana identifico 5 riesgos adicionales
relacionados con la logica y las reglas de negocio.

Los hallazgos se registran antes de modificar el codigo
para conservar la trazabilidad de la auditoria.

