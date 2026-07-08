---
artifact:
  id: ART-045
  type: User Mental Model
  status: Draft
  version: 0.3.0
  owner: Founder
  reviewers:
    - CTO
  created: 2026-07-08
  revised: 2026-07-08
  initiative: INIT-001
  tags:
    - product
    - ux
    - cognition
    - learning
---

# Modelo mental del usuario

> Ley vinculante: [PRODUCT_THESIS.md](../00-constitution/PRODUCT_THESIS.md)
>
> Modelo primario: cómo piensa un **learner** mientras se convierte en mejor ingeniero — no el operador de un delivery OS.

---

## 1. Propósito

Este documento describe cómo piensan los usuarios de Project ZUZU cuando **aprenden ingeniería** y practican en Projects.

No modela perfiles demográficos.

Modela procesos mentales, necesidades cognitivas y patrones de toma de decisiones.

---

## 2. Supuesto central

Los learners no trabajan “escribiendo código”.

Trabajan resolviendo problemas de ingeniería: pensar, diseñar y construir.

El código es una consecuencia — nunca el centro del modelo mental.

Por lo tanto, ZUZU debe alinearse con el proceso cognitivo de aprendizaje y resolución de problemas, no con la edición de archivos ni con un work OS de entrega.

---

## 3. Mentalidad del learner-ingeniero

Cuando un learner aborda un Practice Project normalmente no piensa:

> "Voy a crear una clase."

Piensa:

- ¿Qué estoy intentando resolver?
- ¿Qué debo entender antes de construir?
- ¿Por dónde empiezo?
- ¿Qué riesgos y trade-offs existen?
- ¿Cuál es una arquitectura razonable?
- ¿Qué debería diseñar o construir primero?
- ¿Cómo colaboro con el Mentor sin perder criterio?

---

## 4. Estados mentales

Durante el Learning Path y la práctica, el learner atraviesa distintos estados.

### Inspiración

Tiene una idea o un objetivo de aprendizaje.

Todavía es difusa.

Necesita explorar conceptos y el problema.

---

### Estructuración

Empieza a ordenar pensamientos.

Busca relaciones entre conceptos.

Define prioridades de aprendizaje y de diseño.

---

### Decisión

Compara alternativas.

Evalúa ventajas, riesgos y trade-offs — con ayuda del Mentor, no en su lugar.

---

### Construcción

Implementa en el Practice Project.

Itera.

Corrige.

Aprende del resultado.

---

### Validación

Comprueba resultados.

Busca errores de razonamiento y de implementación.

Refina comprensión y artefacto.

---

### Evolución

El Path y el Project cambian.

Aparecen nuevas necesidades.

Debe mantener coherencia entre lo aprendido y lo construido.

---

## 5. Fricciones cognitivas

Las mayores dificultades no suelen ser de sintaxis.

Son cognitivas.

### Sobrecarga de información

Demasiados conceptos, stacks o decisiones al mismo tiempo — sin un Path claro.

---

### Pérdida de contexto

No recordar por qué se tomó una decisión de diseño o qué ya se aprendió.

---

### Página en blanco

No saber cómo empezar a pensar o a practicar.

---

### Fatiga de decisión

Elegir constantemente entre muchas alternativas (herramientas, stacks, enfoques) sin criterio.

---

### Cambio de contexto

Interrumpir el aprendizaje para buscar documentación, ejemplos o decisiones previas que el sistema debería preservar.

---

## 6. Qué el learner quiere recordar

El learner quiere recordar (o recuperar fácilmente):

- objetivo de aprendizaje y posición en el Path;
- decisiones importantes de diseño;
- arquitectura y trade-offs;
- qué capability está formando (pensar — diseñar — construir);
- feedback del Mentor que cambia su criterio.

No quiere recordar:

- rutas de archivos;
- comandos repetitivos;
- detalles triviales del stack;
- información ya conocida por el sistema.

---

## 7. Qué el learner quiere que el Mentor recuerde

El Mentor debe recordar:

- contexto del Path y del Practice Project;
- decisiones arquitectónicas relevantes a la práctica;
- progreso y conceptos ya trabajados;
- conversaciones educativas recientes;
- objetivos de capability del learner.

Nunca debería obligar al learner a repetir esa información.

---

## 8. Límites de confianza

Hay acciones que el learner quiere delegar al Mentor.

Ejemplos:

- explicar conceptos;
- formular buenas preguntas;
- generar ejemplos pedagógicos;
- revisar un artefacto y señalar trade-offs;
- detectar inconsistencias en el razonamiento.

Hay decisiones que quiere conservar.

Ejemplos:

- arquitectura y diseño;
- priorizar qué practicar;
- aceptar o rechazar cambios;
- criterio técnico final.

Autonomy nunca es el default: el Mentor enseña; el learner decide.

---

## 9. Bucle cognitivo ideal

```text
Idea / Objetivo de aprendizaje
        ?
Conversación con el Mentor
        ?
Comprensión
        ?
Diseño / Planning
        ?
Construcción (Practice)
        ?
Validación y feedback
        ?
Learning (capability ↑)
        ?
Preservación de Knowledge + Progress
```

Cada ciclo debería enriquecer Capability, Knowledge y Progress — no solo “cerrar un ticket”.

---

## 10. Economía de la atención

La atención es el recurso más escaso del learner.

ZUZU debe protegerla.

Reglas:

- una tarea cognitiva principal por pantalla;
- minimizar interrupciones;
- reducir elecciones de stack innecesarias;
- mostrar solo el contexto relevante al Path y a la Practice;
- el Mentor no satura: guía.

---

## 11. Responsabilidades del producto

ZUZU debe encargarse de:

- organizar el Learning Path y el Knowledge;
- recordar contexto de Practice y Progress;
- detectar inconsistencias de aprendizaje o diseño;
- sugerir próximos pasos formativos;
- documentar lo aprendido mientras se practica.

El learner debe encargarse de:

- definir objetivos de aprendizaje;
- validar decisiones;
- aportar criterio;
- pensar, diseñar y construir (con el Mentor como colaborador).

---

## 12. Modelo de aprendizaje

Cada interacción debería producir dos resultados:

1. Avanzar capability (pensar — diseñar — construir).
2. Incrementar Knowledge compartido y Progress visible.

Así, cada sesión hace más capaz al learner — no solo más “productivo” en un work OS.

---

## 13. Principios de experiencia

- Pensar antes que programar.
- Conversar con el Mentor antes que configurar el stack.
- Entender antes que ejecutar.
- Diseñar antes (o mientras) se construye.
- Documentar mientras se aprende.
- Aprender continuamente — independientemente del stack.

---

## 14. Anti-patrones

### El Mentor pregunta siempre lo mismo

Indica pérdida de memoria contextual (Path / Practice / Progress).

---

### El learner busca información que ya existe en Knowledge

Indica mala organización del conocimiento o del contexto.

---

### La IA genera código sin explicar impacto ni trade-offs

Reduce aprendizaje y confianza. Mentorship quality > codegen.

---

### La herramienta obliga al learner a adaptarse a un delivery OS

El producto debe adaptarse al journey del learner, no al revés.

---

### El stack define la identidad

Contradice la tesis: los stacks son detalle; la capability es el producto.

---

## 15. Criterios de éxito

Este modelo será exitoso cuando:

- el learner sienta que ZUZU y el Mentor comprenden su Path y su Practice;
- disminuya el tiempo perdido buscando contexto ya conocido;
- aumente la continuidad entre sesiones (Progress);
- el Mentor actúe como memoria extendida y colaborador pedagógico, no como un generador de texto o un clon de IDE;
- la evidencia de capability (pensar — diseñar — construir) mejore con el tiempo.

---

## 16. Artefactos relacionados

- ART-THESIS-001 — Product Thesis
- ART-002 — Product Vision
- ART-044 — Product Experience Vision
- ART-037 — Documentation Architecture
- Journey del learner — `docs/product/USER_JOURNEY.md`

---

## Declaración final

Project ZUZU no está diseñado para reemplazar el pensamiento humano ni para operar un delivery OS.

Está diseñado para eliminar la carga cognitiva innecesaria, preservar Knowledge y Progress, y permitir que el learner concentre su energía en **pensar, diseñar y construir** software — colaborando con el Mentor — independientemente del stack.
