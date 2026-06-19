# Documentation Index

Map of project documentation. Keep this up to date as docs are added.

- [`../CLAUDE.md`](../CLAUDE.md) — project overview: repo layout (addon SDK in
  `src/`, C3 stub in `sample/`), build commands, commit convention, genvid-c3 wiring.

## Decision records

Architecture Decision Records live in [`decisions/`](decisions/) (MADR-lite,
chronological):

- [0001 — TypeScript + flat ESLint toolchain](decisions/0001-typescript-eslint-toolchain.md)
- [0002 — Repository layout: addon in `src/`, sample C3 project in `sample/`](decisions/0002-repository-layout.md)
- [0003 — Adopt genvid-c3 with the C3 project nested under `sample/`](decisions/0003-genvid-c3-nested-project.md)
- [0004 — GitHub-style commit subjects; drop the Jira `BUR-XXXX` prefix](decisions/0004-github-style-commits.md)
- [0005 — Adopt the genvid-dev contract; GitHub as canonical host](decisions/0005-genvid-dev-github-host.md)

_This repo is a small Construct 3 addon; the doc set is intentionally minimal.
Add architecture / convention docs here as the addon grows._
