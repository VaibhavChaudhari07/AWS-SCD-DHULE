# AWS Student Community Day

A modern, responsive registration landing page for the AWS Student Community Day event. Built with React + Vite.

## Features

- Dark AWS-inspired theme (Deep Squall, AWS Orange `#FF9900`)
- 10 modular sections: Navbar, Hero, Previous Events, Team, Activities, Speakers, Social Wall, FAQ, Registration, Footer
- Fully responsive (mobile hamburger menu, fluid grids)
- Smooth hover transitions and floating hero animation

## Quick Start

**Windows (easiest):** Double-click `start.bat` in this folder.

**Or in terminal:**

```bash
cd "c:\Users\omcha\Downloads\aws community"
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

> Do **not** open `index.html` directly in the browser — you must use the dev server above.

## Troubleshooting

| Problem | Fix |
|--------|-----|
| `npm` is not recognized | Install Node.js from [nodejs.org](https://nodejs.org) (LTS), then restart your terminal |
| `Cannot find module` / missing packages | Run `npm install` in the project folder |
| `rolldown` / `native binding` error | Delete `node_modules` and `package-lock.json`, then run `npm install` again |
| Port already in use | Close other dev servers or run `npm run dev -- --port 5174` |
| Blank page | Use `http://localhost:5173` (not a file path) after `npm run dev` is running |

## shadcn MCP (Cursor)

The shadcn MCP server is configured in `.cursor/mcp.json` for this project.

1. **Reload Cursor** — open Command Palette → “Developer: Reload Window” (or restart Cursor).
2. **Enable MCP** — Settings → MCP → ensure the **shadcn** server is enabled.
3. In chat, you can ask Cursor to add components, e.g. “Add SplitText from react-bits”.

Re-run setup if needed:

```bash
npx shadcn@latest mcp init --client cursor
```

## React Bits components (shadcn CLI)

The `@react-bits` registry is configured in `components.json`. Install animated components with:

```bash
npx shadcn@latest add @react-bits/<ComponentName>-JS-CSS
```

Example (check [reactbits.dev](https://reactbits.dev) for exact names):

```bash
npx shadcn@latest add @react-bits/SplitText-JS-CSS
```

Variants: `JS-CSS`, `JS-TW`, `TS-CSS`, `TS-TW` — use `JS-CSS` for this JSX + CSS project, or `JS-TW` if you add Tailwind.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── App.jsx                 # Root layout
├── index.css               # Global theme & utilities
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── PreviousEvents/
│   ├── Team/
│   ├── Activities/
│   ├── Speakers/
│   ├── SocialWall/
│   ├── FAQ/
│   ├── Registration/
│   └── Footer/
```
