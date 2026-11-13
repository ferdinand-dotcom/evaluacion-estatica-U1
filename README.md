# Evaluacion Estatica - Unidad 1

## Descripcion

Auditoria estatica de un modulo JavaScript para
calcular descuentos en una tienda digital.

La actividad comprende revision de requisitos,
inspeccion de codigo, analisis con ESLint,
registro de defectos y control de versiones.

## Tecnologias

- JavaScript
- Node.js
- ESLint
- Visual Studio Code
- Git y GitHub

## Instalacion

1. Clonar el repositorio.
2. Abrir la carpeta del proyecto.
3. Instalar dependencias:

   npm install

4. Ejecutar el analisis estatico:

   npm run lint

## Estructura

- src/descuentos.js: modulo auditado.
- docs/requisitos.md: requisitos y trazabilidad.
- docs/checklist.md: lista de inspeccion.
- docs/hallazgos.md: defectos identificados.
- docs/comparacion.md: resultados antes y despues.
- docs/revision-pares.md: revision asistida por IA.
- evidencias/: reportes y capturas.
- eslint.config.mjs: reglas de analisis estatico.

## Resultados

ESLint inicial: 5 errores.
ESLint final: 0 errores.

Se identificaron adicionalmente cinco riesgos
mediante inspeccion humana del codigo documentada
por el autor y cuatro observaciones complementarias
con asistencia de IA.

Los riesgos funcionales permanecen pendientes
de confirmar las reglas de negocio.

## Alcance

No se ejecutaron pruebas funcionales.
La revision asistida por IA no sustituye
una inspeccion independiente por pares.

## Repositorio

https://github.com/ferdinand-dotcom/evaluacion-estatica-U1
