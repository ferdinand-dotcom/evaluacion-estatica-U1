# ACTA DE REVISION ESTATICA ASISTIDA POR IA

## Datos generales

Proyecto: Evaluacion estatica de un modulo JavaScript
Archivo revisado: src/descuentos.js
Revisor tecnico: ChatGPT (IA)
Modalidad: Inspeccion estatica asistida
Fecha: 12 de noviembre de 2026

## Objetivo

Identificar riesgos de logica y validacion que no
son detectados por las reglas configuradas en ESLint.

## Observaciones tecnicas

| ID | Observacion | Severidad | Accion propuesta | Estado |
|---|---|---|---|---|
| RP-01 | Porcentaje superior a 100 permite continuar el calculo | Alta | Definir validacion del porcentaje | Pendiente |
| RP-02 | Descuento VIP suma 10 sin regla documentada | Alta | Confirmar beneficio VIP | Pendiente |
| RP-03 | Precio sin validacion numerica | Alta | Definir entradas permitidas | Pendiente |
| RP-04 | Posibilidad de total negativo | Media | Confirmar limite del descuento | Pendiente |

## Conclusion

La inspeccion asistida por IA identifico cuatro
riesgos adicionales que no fueron reportados
por ESLint.

No se realizaron pruebas funcionales.

Esta revision no sustituye una revision humana
independiente cuando la rubrica la exige.
