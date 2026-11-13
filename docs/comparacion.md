# COMPARACION DEL ANALISIS ESTATICO

## Resultados de ESLint

| Indicador | Antes | Despues |
|---|---|---|
| Errores | 5 | 0 |
| Advertencias | 0 | 0 |
| Incumplimientos no-var | 2 | 0 |
| Incumplimientos eqeqeq | 1 | 0 |
| Incumplimientos curly | 2 | 0 |
| Incumplimientos no-unused-vars | 0 | 0 |

## Correcciones realizadas

- Se reemplazaron las declaraciones var.
- Se utilizo comparacion estricta.
- Se agregaron llaves a los condicionales.
- Se mantuvo la logica original del descuento.

## Limitaciones

La ausencia de errores de ESLint no garantiza
que el modulo cumpla todos los requisitos.

Permanecen pendientes cinco hallazgos de inspeccion
humana relacionados con validaciones, descuentos VIP,
limites de descuento y redondeo monetario.

Estos hallazgos requieren confirmar las reglas
de negocio antes de aplicar cambios funcionales.

## Conclusion

El analisis estatico automatizado permitio
reducir los errores de codificacion de 5 a 0,
sin ejecutar pruebas funcionales.
