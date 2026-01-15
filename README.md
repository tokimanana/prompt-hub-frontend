# prompt-hub-frontend

A personal POC built while following a French Angular training course. The goal is to reinforce modern Angular fundamentals through a real-world-like application — a platform for sharing and discovering AI prompts.

> ⚠️ This is a learning project, not a production application.

## What I practiced

- **Part 2** — Components, data display, inputs
- **Part 3** — PrimeNG / PrimeFlex / PrimeIcons, theming, dark mode
- **Part 4** — Services, HttpClient, Observables, environments
- **Part 5** — Reactive forms, routing, CRUD
- **Part 6** — Authentication (token, interceptor, guard)
- **Part 7** — localStorage, linkedSignal, toasts, loaders

## Tech stack

- **Angular** (modern / standalone)
- **TypeScript**
- **REST API** — connects to a NestJS backend (see below)

## Getting started

```bash
npm install
npm start
```

App runs at `http://localhost:4200`.  
The backend must also be running on port `3000`.

**Backend repo:** [prompt-hub-backend](https://github.com/GaetanRouzies/prompt-hub-backend)

## Branch structure

Each branch maps to a stage of the course:

| Branch                  | Description                   |
| ----------------------- | ----------------------------- |
| `main` / `base-1-and-2` | Concepts & data display       |
| `base-3`                | UI library integration        |
| `base-4`                | Backend requests              |
| `base-5`                | Forms & routing               |
| `base-6`                | Authentication                |
| `base-7`                | Final polish                  |
| `final`                 | Completed project (reference) |

Switch to any stage with `git checkout base-N`.

## Credits

Based on the course project by [@GaetanRouzies](https://github.com/GaetanRouzies).
