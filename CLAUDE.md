# CLAUDE.md

Project-specific guidance for the Genvid Construct 3 marketplace addon.

## What this repo is

A **Construct 3 addon (plugin) SDK** — not a C3 game project.

- `src/` — the addon source: `addon.json`, `aces.json`, `plugin.ts`, `c3runtime/`, `lang/`, `icon.svg`. This is what ships as the `.c3addon`.
- `sample/` — a small **C3 project stub** (one event sheet, one layout, three object types) used to exercise the addon in the editor. This is the only Construct 3 project in the repo.
- `SDK/` — the Construct 3 addon SDK (git submodule).

## Commands

```bash
npm run lint            # eslint src
npm run build           # tsc -p src --outDir dist (+ postbuild copies json/svg/lang)
npm run all:windows     # lint + build + zip -> Genvid_Marketplace.c3addon (7z)
npm run all:posix       # lint + build + zip -> Genvid_Marketplace.c3addon (zip)
npx http-server src --cors   # dev: load http://localhost:8080/addon.json in C3 (not 127.0.0.1, CSP)
```

## Commit convention

Plain GitHub-style **imperative subject lines**. Do **not** use the `BUR-XXXX:`
(or `chore - BUR-0000:`) prefix seen in older history — those are legacy Jira
tickets that no longer map to anything on GitHub.

## genvid-c3 plugin wiring

This repo adopts the `genvid-c3` plugin convention, scoped to the nested `sample/` project:

- `.genvid-agent.json` (repo root) — the C3 marker; `paths.c3project` points at `sample/project.c3proj`.
- `sample/domain-config.json`, `sample/construct3-chef.config.json` — live at the **C3 project root** (`sample/`), not the repo root.
- The bundled `construct3-chef` (≥0.10.2) and `c3-domain-manager` (≥0.5.0) MCP
  servers **auto-discover** the project root (an immediate child containing
  `project.c3proj`), so they operate on `sample/` with no `--project-dir` flag.
  Override with the `C3_PROJECT_DIR` env var if needed.

Run `/genvid-c3:audit-c3-conventions` to validate the contract.
