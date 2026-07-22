# Project ZUZU

**Learning** — formar ingenieros capaces de **pensar, diseñar y construir** software colaborando con IA, **independientemente del stack**.

---

## Empezá acá

**[START_HERE.md](START_HERE.md)** — ciclo SDD, decisiones founder, dominio de práctica, y orden de lectura.

Eso es lo único obligatorio para arrancar.

---

## Leyes del repo

| Doc | Rol |
|-----|-----|
| [Product Thesis](docs/00-constitution/PRODUCT_THESIS.md) | Identidad del producto |
| [Repo Constitution](docs/00-constitution/REPO_CONSTITUTION.md) | Coherencia documental |
| [FOUNDER_DECISIONS](docs/00-constitution/FOUNDER_DECISIONS.md) | Decisiones founder (stack, UX, dominio de práctica) |
| [ADR-008 / ADR-009](docs/architecture/ADR.md) | Stack + IA default |
| [ADR-005 SDD](docs/architecture/adr/ADR-005-spec-driven-development.md) | Por qué spec-first |

---

## Curriculum (el viaje)

| Doc | SDD / Capítulo |
|-----|----------------|
| [Learning Curriculum](docs/knowledge/curriculum/LEARNING_CURRICULUM.md) | Mapa completo |
| [Capítulo 1](docs/knowledge/curriculum/chapters/CHAPTER_01_FROM_IDEA_TO_SCOPE.md) | Specify — scope |
| [Capítulo 2](docs/knowledge/curriculum/chapters/CHAPTER_02_REQUIREMENTS_BEFORE_CODE.md) | Specify + Clarify — requirements |
| [Capítulo 3](docs/knowledge/curriculum/chapters/CHAPTER_03_MINIMAL_DESIGN_AND_TRADEOFFS.md) | Plan + Tasks — diseño |

Capítulos 4–8: pendientes — se escriben **antes** de la fase Implement (spec completo primero).

---

## App (MVP en construcción)

Stack: Next.js 15 + TypeScript + Prisma + SQLite ([ADR-008](docs/architecture/adr/ADR-008-stack-selection.md)).

```bash
cp .env.example .env   # si no tenés .env
npm install
npx prisma db push
npm run db:seed
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) — registro → `/app`.

Para el Mentor: seteá `ANTHROPIC_API_KEY` en `.env` (ADR-009).

Producto: [MVP Scope](docs/product/MVP_SCOPE.md) · Dominio: [Domain Model](docs/architecture/DOMAIN_MODEL.md)

---

## Referencia externa

[Spec-Driven Development — Microsoft for Developers (2026)](https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering)

---

**Estado:** Implementación Fase 1–4 (auth, Path, Knowledge, Mentor). Pendiente: Practice Project + Progress (Fase 5).
