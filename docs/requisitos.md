# FASE A - REVISION DE REQUISITOS

## Objetivo
Identificar ambiguedades y riesgos en los requisitos originales
del modulo de descuentos antes de ejecutar el software.

## Diagnostico de requisitos

### R-01: Calculo rapido
Problema: No se establece un tiempo maximo.
Impacto: El rendimiento no puede verificarse objetivamente.
Propuesta RF-01: El calculo debera completarse en un tiempo
maximo T, bajo condiciones de medicion definidas.
Pendiente: Confirmar T y las condiciones de medicion.

### R-02: Clientes importantes
Problema: No se define quien es un cliente importante.
Impacto: Riesgo de beneficios incorrectos.
Propuesta RF-02: El beneficio VIP se aplicara solamente
a clientes que cumplan criterios de elegibilidad aprobados.
Pendiente: Confirmar criterios, importe y modalidad VIP.

### R-03: Limite del descuento
Problema: Las excepciones promocionales no estan definidas.
Impacto: Posibilidad de descuentos excesivos.
Propuesta RF-03: Sin promocion autorizada, el descuento
no debera superar el precio original.
Pendiente: Confirmar promociones, excepciones y limites.

### R-04: Resultado correcto
Problema: No se especifican precision ni validaciones.
Impacto: Resultados inconsistentes.
Propuesta RF-04: El total sera precio menos descuento
aplicado, respetando reglas aprobadas de precision.
Pendiente: Confirmar redondeo, formato y entradas validas.

## Matriz de trazabilidad

| ID | Problema | Impacto | Propuesta | Artefacto | Estado |
|---|---|---|---|---|---|
| R-01 | Tiempo ambiguo | Rendimiento no verificable | RF-01 | requisitos.md | Pendiente |
| R-02 | VIP indefinido | Beneficios incorrectos | RF-02 | requisitos.md | Pendiente |
| R-03 | Excepciones indefinidas | Descuentos excesivos | RF-03 | requisitos.md | Pendiente |
| R-04 | Resultado ambiguo | Calculos inconsistentes | RF-04 | requisitos.md | Pendiente |

## Supuestos pendientes de confirmacion

1. Tiempo maximo de calculo.
2. Criterios de elegibilidad VIP.
3. Valor y modalidad del beneficio VIP.
4. Promociones autorizadas y sus limites.
5. Rangos validos de precio y porcentaje.
6. Precision y redondeo del resultado.
7. Tratamiento de descuentos superiores al precio.
8. Formato de presentacion del resultado.

## Conclusion
La revision estatica identifico cuatro requisitos ambiguos.
Las propuestas RF-01 a RF-04 permiten establecer criterios
de verificacion, aunque las decisiones comerciales pendientes
deben confirmarse antes de implementar cambios funcionales.
