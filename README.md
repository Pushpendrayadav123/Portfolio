# Pushpendra Yadav — Portfolio

A responsive personal portfolio website for **Pushpendra Yadav**, a front-end developer. It presents an introduction, background and skills, and a simple way for prospective collaborators or employers to get in touch.

## Preview

The site includes:

- A polished home page with availability and experience highlights
- An About page covering experience, strengths, and core tools
- A Skills page grouping frontend, backend, and development tools
- A Contact page with GitHub, LinkedIn, and email links
- A contact form that opens the visitor's default email client with the completed message
- Responsive desktop and mobile navigation

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide](https://lucide.dev/) for icons

## Routes

| Route | Description |
| --- | --- |
| `/` or `/home` | Home page |
| `/about` | Background, strengths, and tools |
| `/skills` | Frontend, backend, and development tools |
| `/contact` | Contact details and message form |

## Getting started

### Prerequisites

- Node.js 20 or later
- pnpm (recommended, because this repository includes a `pnpm-lock.yaml` file)

### Installation

```bash
git clone <your-repository-url>
cd Portfolio
pnpm install
```

### Run locally

```bash
pnpm dev
```

Vite will print the local development URL in the terminal, commonly `http://localhost:5173`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the Vite development server |
| `pnpm build` | Create an optimized production build in `dist/` |
| `pnpm preview` | Serve the production build locally |
| `pnpm lint` | Run ESLint across the project |

## Project structure

```text
src/
├── assets/          # Images used by the site
├── components/      # Reusable layout and page components
├── Layout.jsx        # Shared header, main content area, and footer
├── main.jsx          # Application entry point and route definitions
└── index.css         # Tailwind CSS import
public/               # Static public assets
```

## Contact

- Email: [pushpendrajau8318@gmail.com](mailto:pushpendrajau8318@gmail.com)
- GitHub: [Pushpendrayadav123](https://github.com/Pushpendrayadav123)
- LinkedIn: [Pushpendra Yadav](https://www.linkedin.com/in/pushpendra-yadav-780467244/)
- portfolio live link: https://portfolio-pushpendra.vercel.app/
## License

This project is intended as a personal portfolio. All rights reserved © Pushpendra Yadav.
