# FASE A - CHECKLIST DE INSPECCION ESTATICA

## Objetivo

Verificar la calidad de los requisitos y del codigo
JavaScript mediante inspeccion estatica.

## Preguntas de inspeccion

| ID | Pregunta | Tipo |
|---|---|---|
| C-01 | Los requisitos son claros y precisos? | Requisitos |
| C-02 | Existen criterios de aceptacion verificables? | Requisitos |
| C-03 | Esta definida la clasificacion VIP? | Requisitos |
| C-04 | Estan definidos los limites promocionales? | Requisitos |
| C-05 | Se evita utilizar var? | Codigo |
| C-06 | Se utilizan comparaciones estrictas? | Codigo |
| C-07 | Los condicionales utilizan llaves? | Codigo |
| C-08 | Se validan los porcentajes ingresados? | Codigo |
| C-09 | Se impiden descuentos no autorizados? | Codigo |
| C-10 | Se evitan variables sin utilizar? | Codigo |
| C-11 | Se especifican reglas de redondeo? | Requisitos |
| C-12 | Se controlan entradas invalidas? | Codigo |

## Criterios de evaluacion

Cada pregunta se clasificara como:
- Cumple
- No cumple
- Pendiente de confirmacion
- No aplica

## Procedimiento

1. Revisar requisitos originales.
2. Inspeccionar codigo sin ejecutarlo.
3. Registrar defectos encontrados.
4. Aplicar analisis estatico mediante ESLint.
5. Comparar hallazgos humanos y automaticos.
6. Corregir solamente reglas confirmadas.
7. Documentar evidencias y resultados.

## Conclusion

El checklist permite identificar defectos tempranos
y organizar una revision estatica reproducible.
