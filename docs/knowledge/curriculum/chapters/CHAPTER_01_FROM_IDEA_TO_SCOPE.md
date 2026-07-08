---
artifact:
  id: ART-CURR-CH01
  type: Curriculum Chapter
  status: Draft
  version: 0.1.0
  owner: Founder
  reviewers:
    - CTO
  created: 2026-07-08
  revised: 2026-07-08
  initiative: INIT-001
  chapter: 1
  tags:
    - curriculum
    - chapter-01
    - scope
    - planning
    - anti-frankenstein
    - practice-project
  learning_outcomes:
    - Formular un problem statement claro
    - Definir scope in/out y non-goals
    - Documentar decisiones iniciales antes de codear
    - Colaborar con IA para planear sin perder el hilo del proyecto
    - Completar un Practice Project de planeamiento con artefactos mínimos
  estimated_duration: 6-10 sesiones (o 2-3 semanas a ritmo part-time)
  prerequisite_chapters: []
  maps_to_mvp: true
---

# Capítulo 1 — De la idea al scope (sin Frankenstein)

> Ley vinculante: [PRODUCT_THESIS.md](../../../00-constitution/PRODUCT_THESIS.md) — [CONTENT_STANDARDS.md](../../../00-constitution/CONTENT_STANDARDS.md)
>
> **Capítulo 1 = primer arco del Learning Path en el MVP de ZUZU.**
>
> Regla de oro: ¿Ayuda al learner a **pensar y decidir** antes de construir — con IA como Mentor — sin atarse a un stack?

---

## Tabla de contenidos

1. [Para quién es y qué vas a lograr](#1-para-quién-es-y-qué-vas-a-lograr)
2. [Módulo 1.1 — El problema del Frankenstein](#2-módulo-11--el-problema-del-frankenstein)
3. [Módulo 1.2 — Problema antes que solución](#3-módulo-12--problema-antes-que-solución)
4. [Módulo 1.3 — Scope, límites y non-goals](#4-módulo-13--scope-límites-y-non-goals)
5. [Módulo 1.4 — Artefactos livianos de planeamiento](#5-módulo-14--artefactos-livianos-de-planeamiento)
6. [Módulo 1.5 — Usar IA para planear sin perder el hilo](#6-módulo-15--usar-ia-para-planear-sin-perder-el-hilo)
7. [Practice Project — Guía del Capítulo 1](#7-practice-project--guía-del-capítulo-1)
8. [Rúbrica de capability](#8-rúbrica-de-capability)
9. [Errores comunes del capítulo](#9-errores-comunes-del-capítulo)
10. [Reflexión y cierre](#10-reflexión-y-cierre)

---

## 1. Para quién es y qué vas a lograr

### 1.1 Intuición primero

Imaginá que querés armar un mueble sin instrucciones: abrís la caja, empezás a atornillar, cambiás de idea a mitad de camino, le pedís ayuda a tres personas distintas que nunca vieron lo que ya hiciste, y al final tenés algo que **parece** un mueble pero no cierra, no es estable, y no querés usarlo.

Eso es un **proyecto Frankenstein** en software: piezas que no encajan, decisiones contradictorias, y la sensación de haber "trabajado mucho" sin terminar nada útil.

Con IA, ese patrón es **más frecuente**, no menos — porque la IA genera rápido **sin** recordar tu contexto completo ni frenarte cuando cambiás de dirección.

### 1.2 Qué vas a lograr al terminar este capítulo

Al completar el Capítulo 1, vas a poder **demostrar** (no solo leer) que:

| Outcome | Evidencia |
|---------|-----------|
| Nombrás el problema real que querés resolver | Problem statement de 3–5 oraciones |
| Definís para quién es y qué no es | Usuario objetivo + non-goals |
| Acotás qué vas a construir primero | Scope in / scope out |
| Documentás al menos 3 decisiones iniciales | Decision log con razón |
| Planeás con IA sin delegar el criterio | Transcript o notas de sesión con el Mentor |
| **No codeaste todavía** — y eso es correcto | Practice Project en fase "Planning" |

**Importante:** en este capítulo **no** se espera código de producción. Se espera **criterio**. Eso es ingeniería, no procrastinación.

### 1.3 Duración y ritmo

| Ritmo | Sesiones | Notas |
|-------|----------|-------|
| Part-time | 6–10 sesiones de 45–90 min | Recomendado para principiantes |
| Intensivo | 4–6 sesiones | Developers con experiencia (menos tiempo en conceptos base) |

Cada sesión debería terminar con un artefacto concreto o una pregunta clara para la siguiente.

### 1.4 Relación con el viaje completo

```
Capítulo 1 (este)     →  Claridad: qué y por qué
Capítulo 2            →  Requirements y decisiones formales
Capítulo 3            →  Diseño y trade-offs
Capítulo 4+           →  Construcción, calidad, seguridad, producción
```

Si saltás el Capítulo 1, es muy probable que vuelvas al Frankenstein en el Capítulo 4.

---

## 2. Módulo 1.1 — El problema del Frankenstein

### 2.1 Qué es un proyecto Frankenstein

Un proyecto Frankenstein es software (o un intento de software) donde:

- la **idea original** ya no coincide con lo construido;
- **distintas partes** del sistema asumen cosas distintas;
- **cada sesión de trabajo** (humana o con IA) reinterpreta el objetivo;
- hay **código o diseño** que nadie puede explicar con coherencia;
- el proyecto **no llega a un estado "terminado"** útil, aunque hubo mucha actividad.

No es un insulto al developer. Es un **patrón de fallo del proceso** — especialmente común cuando se usa IA como generador acelerado sin planeamiento.

### 2.2 Por qué existe este patrón (causas raíz)

| Causa | Qué pasa | Por qué la IA lo empeora |
|-------|----------|--------------------------|
| **Arranque sin problema claro** | Se codea "algo" sin saber para quién | La IA inventa un problema plausible que cambia cada chat |
| **Scope infinito** | "Quiero una app tipo X" (X = 50 productos) | La IA elige un subconjunto arbitrario cada vez |
| **Contexto no persistente** | Cada conversación empieza de cero | Reinterpretación del proyecto en cada sesión |
| **Codegen antes de decisión** | Pegar código antes de entender | Deuda de decisión: el código **es** el spec, mal escrito |
| **Cambio de idea sin migración** | Pivot sin actualizar lo anterior | Capas contradictorias (auth de 3 formas distintas) |
| **Copiar sin validar** | "La IA dijo que así está bien" | Errores plausibles pero incorrectos |

### 2.3 Cuándo NO usar la etiqueta "Frankenstein"

No todo proyecto incompleto es Frankenstein.

| Situación | ¿Es Frankenstein? | Por qué |
|-----------|------------------|---------|
| Spike técnico de 2 horas para aprender una API | No | Propósito explícito: explorar, tirar después |
| MVP deliberadamente mínimo con scope escrito | No | Incompleto **por diseño** |
| Prototipo desechable con fecha de muerte | No | El descarte está planeado |
| Tercer reescritura total sin documentar por qué | **Sí** | Drift sin decisión |
| "App de todo" sin prioridades tras 3 semanas | **Sí** | Scope no gobernado |

### 2.4 Ejemplo incorrecto (narrativa real típica)

> *"Le digo a ChatGPT: haceme una app de gestión de tareas con login, notificaciones, dashboard, reportes y modo offline. Me genera un backend en Node. Al día siguiente quiero auth con Google y me genera otro módulo en Python. Pregunto por el frontend y me da Angular cuando ayer era React. Intento unir todo. No compila. Abro otro chat. Empiezo de nuevo. Repito."*

**Señales Frankenstein:** sin problem statement, sin scope, sin decision log, stack decidido por la IA, contexto roto entre sesiones.

### 2.5 Ejemplo correcto (mismo learner, distinto proceso)

> *"Quiero practicar planeamiento. Mi problema: olvido tareas del hogar. Usuario: yo solo. V1: lista de tareas con agregar y marcar hecho. Fuera de V1: login, notificaciones, multi-usuario. Decisión: una sola app web simple, datos locales primero. Lo documento. Recién ahí pido al Mentor ayuda para descomponer en pasos — sin generar el proyecto entero."*

**Señales sanas:** problema acotado, scope explícito, decisiones escritas, IA después del criterio humano.

### 2.6 Práctica consolidada vs moda

| Afirmación | Tipo |
|------------|------|
| "Definir scope antes de implementar reduce retrabajo" | **Práctica consolidada** (ingeniería de software, PMI, agile) |
| "La IA acelera implementación pero no reemplaza requirements" | **Práctica consolidada** (2024–2026, consenso creciente en industria) |
| "Nunca escribas una línea sin un documento de 50 páginas" | **Mala práctica** (waterfall rígido; no es lo que enseñamos) |
| "El spec ligero + iteración es el estándar en productos software modernos" | **Práctica consolidada** (lean, agile, spec-driven teams) |

### 2.7 Preguntas para el Mentor (Módulo 1.1)

Usá estas preguntas **sin pedir código**:

1. ¿Qué señales en mi idea actual parecen Frankenstein?
2. ¿Qué una cosa debería fijar primero para no reinterpretar cada sesión?
3. ¿Este spike es exploración o ya estoy construyendo producto sin darme cuenta?

---

## 3. Módulo 1.2 — Problema antes que solución

### 3.1 Qué es un problem statement

Un **problem statement** es una descripción clara del **problema que querés resolver**, escrita **antes** de elegir tecnología, pantallas o arquitectura.

Analogía: en medicina, el diagnóstico va antes del tratamiento. Si el tratamiento viene primero, podés curar el síntoma equivocado.

**Formato mínimo (plantilla ZUZU):**

```
Quién tiene el problema:
Cuál es el problema (dolor concreto):
Cuándo / con qué frecuencia ocurre:
Por qué las soluciones actuales no alcanzan:
Qué cambiaría si el problema se resolviera (sin decir cómo):
```

### 3.2 Por qué existe este artefacto

Sin problem statement:

- confundís **síntomas** con **causas** ("necesito una app" vs "pierdo el control de mis gastos");
- elegís tecnología por moda;
- la IA rellena huecos con supuestos;
- no podés medir si "terminaste".

La industria usa variantes: problem statement, job-to-be-done (JTBD), user story map inicial, opportunity brief. No son religión mutuamente excluyente — son **lentes**.

### 3.3 Alternativas y trade-offs

| Enfoque | Ventajas | Desventajas | Cuándo usarlo |
|---------|----------|-------------|---------------|
| **Problem statement** | Simple, forza claridad | Puede quedarse abstracto | Siempre — base mínima ZUZU |
| **JTBD** ("Cuando… quiero… para…") | Centra motivación del usuario | Requiere práctica para no sonar marketing | Productos con usuario externo |
| **Lean Canvas** | Visión de negocio en una página | Puede sobredimensionar MVPs de aprendizaje | Si hay hipótesis de mercado |
| **Idea → solución directa** | Rápido para spikes | Alto riesgo Frankenstein | Solo spikes con tiempo límite |

**Recomendación ZUZU (con fundamento):** empezar con problem statement; agregar JTBD si hay usuario real distinto de vos; evitar canvas completo en el primer Practice Project de aprendizaje — **complejidad cognitiva prematura** sin beneficio pedagógico.

### 3.4 Ejemplo bueno (stack-agnostic)

```
Quién: Adultos que cocinan en casa varias veces por semana.
Problema: No saben qué hacer con ingredientes que ya tienen; compran de más y desperdician.
Frecuencia: Cada 2–3 días, antes de cocinar.
Por qué falla lo actual: Recetas en internet asumen que tenés todo; las apps de recetas no priorizan "lo que ya tengo".
Éxito: Decidir qué cocinar en menos de 5 minutos usando solo lo disponible (sin especificar app/web/IA).
```

### 3.5 Ejemplo incorrecto (disguised solution)

```
Problema: Necesito una app móvil en React Native con API en Go y PostgreSQL
para hacer recetas con machine learning.
```

Eso **no** es un problem statement. Es un stack disfrazado de problema. La IA te amará — y te llevará en diez direcciones.

### 3.6 Errores comunes

| Error | Por qué falla | Corrección |
|-------|---------------|------------|
| Problema = tecnología | La solución cambia; el problema no | Reescribir sin nombres de tools |
| Problema para "todos" | No priorizás | Un usuario concreto primero |
| Problema sin dolor | No hay motivación | Preguntar "¿qué duele hoy?" |
| Copiar problem statement de la IA sin validar | Puede sonar bien pero ser falso | Contrastar con una persona real o tu experiencia |

### 3.7 Cómo validar con IA (sin copiar)

1. Escribí tu borrador **vos primero**.
2. Pedile al Mentor: *"Hace 5 preguntas para stress-testear este problem statement."*
3. Respondé cada pregunta **con tus palabras**.
4. Actualizá el statement.
5. Pedí: *"¿Qué supuestos no estoy declarando?"* — listá supuestos explícitamente.

Si la IA escribe el statement por vos, **no aprendiste** — solo generaste texto plausible.

### 3.8 Casos límite

| Caso | Qué hacer |
|------|-----------|
| Proyecto solo para aprender (sin usuario real) | Declarar: "Usuario: yo. Problema: necesito practicar X capability." — válido en ZUZU |
| Problema social complejo | Acotar un subproblema; un capítulo no cambia el mundo entero |
| El problema cambia al investigar | Bien — **actualizar** el artefacto y registrar la decisión (no borrar en silencio) |

---

## 4. Módulo 1.3 — Scope, límites y non-goals

### 4.1 Qué es scope

**Scope** es el límite de lo que **sí** vas a hacer en esta versión (V1, sprint, o Practice Project) y lo que **explícitamente no** vas a hacer todavía.

Sin scope, todo feature es "urgente" y nada termina.

### 4.2 Vocabulario preciso (no confundir)

| Término | Significado en ZUZU | Confusión frecuente |
|---------|---------------------|---------------------|
| **MVP (producto)** | Versión mínima que valida valor para el usuario | Confundir con "MVP de la plataforma ZUZU" |
| **V1** | Primera versión completable del Practice Project | "V1 con todo" = scope infinito |
| **Scope in** | Lo que entra en V1 | Lista corta y priorizada |
| **Scope out** | Lo que **no** entra en V1 pero tal vez después | Tan importante como scope in |
| **Non-goals** | Lo que **nunca** intentarás en este proyecto (o en esta fase) | Evita reabrir debates |

### 4.3 Por qué los non-goals importan tanto

Los **non-goals** protegen tu atención. Ejemplo:

> Non-goal: multi-idioma en V1.
> Non-goal: app móvil nativa en V1.
> Non-goal: integración con redes sociales.

Cuando en la sesión 6 tengas la idea "brillante" de agregar login con Apple, el non-goal te pregunta: *¿rompiste el contrato con vos mismo?* Si sí, **cambio de scope consciente** — no drift silencioso.

### 4.4 Plantilla scope (ZUZU)

```markdown
## V1 — Scope in (máximo 5 ítems)
1.
2.
3.

## Scope out (para después, explícito)
-
-

## Non-goals (no en este proyecto / fase)
-

## Criterio de "V1 terminada"
(¿Cómo sabés que terminaste sin codear el universo?)
```

### 4.5 Ejemplo bueno

**Proyecto:** Lista de tareas personal (learner con experiencia, practica planeamiento)

| Scope in | Scope out | Non-goals |
|----------|-----------|-----------|
| Crear tarea | Login / usuarios | App móvil nativa |
| Marcar completada | Notificaciones push | Sincronización cloud |
| Ver lista del día | Reportes / analytics | Integración calendario externo |

**Criterio V1 terminada:** "Puedo usar la lista un día completo sin perder datos en local."

### 4.6 Ejemplo incorrecto

| Scope in |
|----------|
| Todo lo de Notion + Todoist + recordatorios + colaboración en equipo + IA que prioriza por mí |

Eso no es V1. Es un producto de años con scope no gobernado.

### 4.7 Alternativas de priorización (cuando tengas muchas ideas)

| Método | Idea | Cuándo |
|--------|------|--------|
| **MoSCoW** | Must / Should / Could / Won't | Equipos con muchos stakeholders |
| **Impacto / esfuerzo** | Matriz 2×2 | Muchas features candidatas |
| **Un must a la vez** | Una sola capacidad must para V1 | **Recomendado Cap. 1** — simplicidad pedagógica |

### 4.8 Seguridad y DevSecOps en Capítulo 1 (hilo ligero)

Aún sin codear, podés declarar **supuestos de seguridad** que guiarán después:

| Pregunta | Por qué en Cap. 1 |
|----------|-------------------|
| ¿Hay datos sensibles? | Define si V1 necesita auth |
| ¿Qué pasa si alguien más ve estos datos? | Threat thinking básico |
| ¿Aceptable solo local / sin cuenta? | Reduce scope de seguridad en V1 |

Esto es **práctica consolidada** (shift-left security): pensar amenazas temprano, no implementar todo temprano.

---

## 5. Módulo 1.4 — Artefactos livianos de planeamiento

### 5.1 Qué son y por qué no son burocracia

Los artefactos son **memoria externa** del proyecto. Sirven para que **vos y el Mentor** no reinterpretéis el objetivo cada sesión.

No buscamos documentos de 50 páginas. Buscamos **lo mínimo que evita Frankenstein**.

| Artefacto | Propósito | Tamaño objetivo |
|-----------|-----------|-----------------|
| Problem statement | Por qué existe el proyecto | 5–10 líneas |
| Scope in/out + non-goals | Qué se construye | 1 página |
| Success criteria | Cómo sabés que V1 sirve | 3–5 bullets medibles |
| Decision log | Qué decidiste y por qué | Tabla viva |
| Constraints | Límites reales (tiempo, solo learner, etc.) | Lista corta |

### 5.2 Decision log — introducción

Un **decision log** registra decisiones **significativas** con su razón. Es la práctica detrás de ADRs (Architecture Decision Records) en industria — en Cap. 1, versión liviana.

**Formato:**

| ID | Decisión | Alternativas consideradas | Razón | Fecha |
|----|----------|---------------------------|-------|-------|
| D-001 | V1 solo web, sin mobile | Mobile-first | Velocidad de aprendizaje; un surface | 2026-07-08 |

**Cuándo registrar:** cuando elegís entre dos caminos razonables y descartar el otro **importa** para el futuro.

**Cuándo NO registrar:** "uso variable en vez de constante" — demasiado bajo nivel para Cap. 1.

### 5.3 Spec-driven development (introducción)

**Práctica consolidada (2024–2026):** equipos que escriben **especificaciones** antes o junto al código — no meses de waterfall — tienen menos drift, especialmente con IA generando implementación.

ZUZU adopta **spec-driven liviano**:

1. Problema y scope escritos.
2. Requirements mínimos (Capítulo 2 profundiza).
3. Recién entonces implementación asistida por IA.

**Tendencia emergente:** herramientas que sincronizan spec y código (varios productos en 2025–2026). El principio (single source of truth del intent) es más estable que cualquier tool.

### 5.4 Ejemplo de paquete mínimo completo (sin código)

Ver [Sección 7 — Practice Project](#7-practice-project--guía-del-capítulo-1).

### 5.5 Malas prácticas documentales

| Mala práctica | Efecto |
|---------------|--------|
| Documento perfecto, cero validación con usuario/realidad | Fantasía bien escrita |
| Documento que nadie actualiza | Mentira histórica |
| 20 páginas antes de una línea de código (learner nuevo) | Abandono |
| Cero documentos con IA generando a lo loco | Frankenstein |

El balance ZUZU: **artefactos mínimos vivos**, actualizados cuando pivotás con intención.

---

## 6. Módulo 1.5 — Usar IA para planear sin perder el hilo

### 6.1 Rol del Mentor en Capítulo 1

El Mentor **no** construye el proyecto por vos.

En Capítulo 1, el Mentor:

- hace preguntas difíciles;
- detecta scope creep;
- propone alternativas con trade-offs;
- stress-testea tus artefactos;
- **no** debería generar el codebase completo.

Si el Mentor te suelta 500 líneas de código sin que pediste entrar en implementación, **es una señal de alarma pedagógica**.

### 6.2 Contexto que el Mentor debe tener (y vos debés mantener)

| Contexto | Quién lo guarda en ZUZU (MVP) |
|----------|-------------------------------|
| Problem statement | Practice Project |
| Scope / non-goals | Practice Project |
| Decision log | Practice Project |
| Perfil y objetivo del learner | Identity |
| Capítulo y módulo actual | Learning Path |

**Práctica del learner:** al empezar cada sesión, indicar: *"Estoy en Cap. 1, módulo X. Estos son mis artefactos actuales: …"*

En la plataforma, eso debería estar en el Project — hasta entonces, **copiar/pegar el resumen** es válido (no es la misma cosa que copiar código sin entender).

### 6.3 Patrones de prompts (planear, no codear)

**Buenos:**

```
"Tengo este problem statement. Haceme 5 preguntas que expongan supuestos débiles."
"Comparé scope A vs scope B para un learner con 2h/semana. Trade-offs."
"¿Qué non-goals me faltan si V1 es solo uso personal local?"
"Actuá como reviewer: ¿dónde veo Frankenstein en este plan?"
```

**Malos (para Capítulo 1):**

```
"Haceme el proyecto completo."
"Generá backend + frontend + DB + deploy."
"Escribí todo el código de una app tipo Uber."
```

### 6.4 Cómo detectar respuestas incorrectas de la IA

| Señal | Qué hacer |
|-------|-----------|
| Suena perfecto pero no conocés el dominio | Pedir fuentes o ejemplos concretos; contrastar con la realidad |
| Cambia el problema que planteaste | Rechazar; reinyectar problem statement |
| Elige stack sin que lo pediste | Preguntar por qué; recordar stack-agnostic hasta Cap. 4 |
| Confianza absoluta sin matices | Pedir riesgos y contraargumentos |
| Contradice tu decision log | Actualizar log o corregir la IA — no ignorar |

### 6.5 Alternativas de workflow con IA (2026)

| Workflow | Descripción | Trade-off |
|----------|-------------|-----------|
| **Chat único largo** | Un hilo para todo | Contexto se degrada; límite de tokens |
| **Proyecto + artefactos fijos** | Spec en archivos; IA lee resumen cada sesión | **Recomendado ZUZU** |
| **Agente autónomo "build app"** | IA ejecuta muchos pasos sola | Riesgo Frankenstein alto en learners |
| **Spec en repo + IDE con IA** | Cursor/Copilot/etc. | Válido en capítulos posteriores; no identidad ZUZU |

### 6.6 Predicción fundamentada (no hecho)

Es razonable esperar que en los próximos años más herramientas **obliguen** a vincular intent (spec) con cambios de código. El principio de "contexto estable" seguirá valiendo aunque cambien las UIs.

---

## 7. Practice Project — Guía del Capítulo 1

### 7.1 Objetivo del Practice Project

Crear un **Practice Project en fase Planning** con artefactos mínimos completos — **sin implementación**.

El producto es el **criterio**, no el repo de código.

### 7.2 Elegir idea (criterios)

| Criterio | Buena idea Cap. 1 | Mala idea Cap. 1 |
|----------|-------------------|------------------|
| Tamaño | Completar V1 en 2–4 semanas después (Cap. 4+) | Clonar Netflix |
| Usuario | Vos o alguien que conozcas | "Toda la humanidad" |
| Motivación | Te importa un poco el problema | Solo querés probar un framework |
| Aprendizaje | Practica planeamiento | Practica hype |

**Si ya tenés un Frankenstein en curso:** podés **congelarlo** y empezar un proyecto nuevo solo para Cap. 1, o **rescatar** con nuevo problem statement + scope (más difícil).

### 7.3 Plantilla — Practice Project Capítulo 1

Copiá esta estructura en tu Practice Project en ZUZU (o en un archivo `PRACTICE_PROJECT.md`):

```markdown
# [Nombre del proyecto]

## Estado
Fase: Planning (Capítulo 1)
Learner:
Fecha inicio:

---

## 1. Problem statement
Quién:
Problema:
Frecuencia:
Por qué falla lo actual:
Éxito (sin solución técnica):

## 2. Usuario objetivo (V1)
(una persona concreta)

## 3. Scope in (máx. 5)
1.
2.
3.

## 4. Scope out
-

## 5. Non-goals
-

## 6. Success criteria (medibles)
-
-

## 7. Constraints
- Tiempo:
- Solo / equipo:
- Datos sensibles (sí/no):

## 8. Decision log
| ID | Decisión | Alternativas | Razón | Fecha |
|----|----------|--------------|-------|-------|
| D-001 | | | | |

## 9. Supuestos de seguridad (ligero)
- Datos:
- Quién accede:
- Qué NO hará en V1 por seguridad:

## 10. Notas de sesiones con el Mentor
### Sesión 1 — fecha:
Preguntas:
Cambios a artefactos:

---

## 11. Definition of Done — Capítulo 1
- [ ] Problem statement validado (stress-test con Mentor)
- [ ] Scope in ≤ 5 ítems
- [ ] Al menos 2 non-goals explícitos
- [ ] Al menos 3 entradas en decision log
- [ ] Success criteria verificables
- [ ] Sin código de implementación (correcto)
```

### 7.4 Ejemplo completado (recortado) — "Compras del hogar"

```markdown
# Compras del hogar — V1

## 1. Problem statement
Quién: Mi familia (2 adultos).
Problema: Compramos de más o nos olvidamos ítems clave en el super.
Frecuencia: 1–2 veces por semana.
Por qué falla lo actual: Lista en papel se pierde; WhatsApp mezcla con otros chats.
Éxito: Salir del super con todo lo necesario sin compras duplicadas innecesarias.

## 3. Scope in
1. Agregar ítem a lista
2. Marcar ítem comprado
3. Ver lista agrupada por categoría simple

## 5. Non-goals
- Compartir lista en tiempo real con otros dispositivos
- Escaneo de códigos de barras
- Predicción con IA de qué comprar

## 6. Success criteria
- Preparar lista para una compra real en < 10 min
- Usar en una compra real sin volver al papel

## 8. Decision log
| D-001 | V1 sin login | Login desde día 1 | Solo uso familiar en un dispositivo | 2026-07-08 |
| D-002 | Datos solo locales | Cloud sync | Menor superficie de seguridad en V1 | 2026-07-08 |
| D-003 | Categorías fijas (5) | Categorías custom | Menos decisiones de UX en V1 | 2026-07-08 |
```

### 7.5 Milestones del capítulo

| # | Milestone | Entregable |
|---|-----------|------------|
| M1 | Idea acotada | Borrador problem statement |
| M2 | Problema validado | Statement post stress-test |
| M3 | Scope cerrado | Scope in/out + non-goals |
| M4 | Decisiones iniciales | ≥ 3 decisiones en log |
| M5 | Cierre Cap. 1 | Definition of Done marcada + reflexión |

### 7.6 Qué NO hacer en este Practice Project

- No elegir framework "para practicar React" antes del scope.
- No pedir al Mentor el código de la app.
- No agregar features cada sesión sin actualizar scope.
- No confundir "terminé Cap. 1" con "tengo app en producción" — eso es Capítulo 7–8.

---

## 8. Rúbrica de capability

Usar para autoevaluación y feedback del Mentor. Escala: **1 = no demuestra — 3 = suficiente Cap. 1 — 5 = excelente**

| Criterio | 1 | 3 | 5 |
|----------|---|---|---|
| **Claridad del problema** | Solo menciona tecnología | Problem statement coherente | Statement resiste preguntas difíciles |
| **Scope** | Infinito o ausente | in/out/non-goals presentes | Scope priorizado; non-goals defienden foco |
| **Decisiones** | Ninguna documentada | ≥ 3 con razón | Alternativas y trade-offs explícitos |
| **Uso de IA** | Codegen / copy-paste | Preguntas de planificación | Itera artefactos con validación crítica |
| **Anti-Frankenstein** | No reconoce el patrón | Identifica riesgos propios | Cambia hábitos concretos declarados |

**Mínimo para aprobar Capítulo 1:** promedio ≥ 3, sin criterio en 1.

---

## 9. Errores comunes del capítulo

| Error | Síntoma | Corrección |
|-------|---------|------------|
| **Falsa urgencia de codear** | "Ya sé planear, quiero codear" | Spike 2h máx.; volver a artefactos |
| **Perfeccionismo documental** | Semanas sin cerrar scope | Timebox: M3 en sesión 3–4 |
| **Scope emocional** | "Pero es fácil agregar X" | X va a scope out o cambio consciente |
| **IA como autor** | Artefactos que no defendés | Reescribir con tus palabras |
| **Proyecto réplica de tutorial** | Mismo spec que YouTube | Elegir problema propio aunque sea chico |
| **Saltar seguridad** | "Después veo" sin declarar datos | Completar sección 9 de plantilla |

---

## 10. Reflexión y cierre

### 10.1 Preguntas de cierre (escribir respuestas)

1. ¿Qué habría pasado si hubieras pedido "haceme el proyecto" el día 1?
2. ¿Qué decisión te costó más y por qué?
3. ¿Qué non-goal te salvó de un Frankenstein futuro?
4. ¿Cómo usaste la IA distinto que antes?
5. ¿Qué capability sentís que ganaste — en una oración?

### 10.2 Puente al Capítulo 2

En el **Capítulo 2** convertirás este plan en **requirements** más estructurados (funcionales, no funcionales, criterios de aceptación) y profundizarás el decision log hacia decisiones de diseño.

**No empieces a codear** hasta tener claro si tu V1 requiere requirements adicionales que el Cap. 2 introduce.

### 10.3 Momento de éxito (emocional)

Sabés que el Capítulo 1 funcionó cuando pensás:

> *"Todavía no construí la app — pero por primera vez sé **qué** estoy construyendo y **qué no**. Quiero seguir."*

Esa sensación es lo que ZUZU busca antes que cualquier métrica de tokens.

---

## Relacionados

- [LEARNING_CURRICULUM.md](../LEARNING_CURRICULUM.md)
- [MVP_SCOPE.md](../../../product/MVP_SCOPE.md)
- [USER_JOURNEY.md](../../../product/USER_JOURNEY.md)
- [USER_MENTAL_MODEL.md](../../../product/USER_MENTAL_MODEL.md)
- [AI_PRODUCT_EXPERIENCE.md](../../../product/AI_PRODUCT_EXPERIENCE.md)

---

## Declaración final

Capítulo 1 no te hace más lento.

Te hace **imposible de reinterpretar** sin darte cuenta.

Eso es la base de todo ingeniero que construye con IA sin armar Frankensteins.
