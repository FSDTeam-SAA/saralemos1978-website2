# Martin Holmes Yacht Broker Website

A premium, modern, and scalable web application for Martin Holmes, an experienced yacht broker specializing in luxury yacht sales across Thailand and international markets. Built with **Next.js 16**, **React 19**, and a robust tech stack for high performance and maintainability.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 16.0.7](https://nextjs.org/) (App Router)
- **Library:** [React 19.2.0](https://react.dev/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 + Shadcn/UI
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Data Fetching:** [TanStack Query (React Query)](https://tanstack.com/query/latest) + [Axios](https://axios-http.com/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons:** Lucide Icons & React Icons
- **Animations:** Framer Motion
- **Notifications:** Sonner Toast
- **Development Tools:** ESLint, Husky, Commitlint, Prettier

---

## ✨ Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
- **Dynamic Content:** Real-time data fetching and caching with TanStack Query.
- **Secure Authentication:** User login and session management powered by NextAuth.js.
- **Dashboard Interface:** Comprehensive management section for various website features.
- **Robust Form Handling:** Client-side validation using Zod and React Hook Form.
- **Seamless UX:** Smooth transitions with Framer Motion and real-time feedback with Sonner.
- **API Integration:** Centralized API client using Axios with request/response interceptors.

---

## 📂 Project Structure

```text
src/
├── app/                  # Next.js App Router (pages & layouts)
│   ├── (auth)/           # Authentication-related routes
│   ├── (website)/        # Public website routes (Home, About, Products, etc.)
│   ├── api/              # API Route Handlers
│   └── layout.tsx        # Root layout
├── components/           # Reusable UI components
│   ├── website/          # Website-specific sections (Navbar, Footer, Home, etc.)
│   ├── ui/               # Base UI components (Shadcn/UI)
│   └── ReusableSection/  # High-level reusable layout sections
├── lib/                  # Core utilities and library configurations
│   ├── api.ts            # Axios instance and API functions
│   ├── hooks/            # Custom React hooks (TanStack Query mutations/queries)
│   ├── schemas/          # Zod validation schemas
│   └── utils.ts          # Common utility functions
├── providers/            # Context providers (NextAuth, QueryClient, etc.)
├── store/                # Global state management (Zustand)
└── constants/            # Static application constants
```

---

## ⚙️ Setup & Installation

### 1. Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### 2. Clone the repository

```bash
git clone <repository-url>
cd saralemos1978-website2
```

### 3. Install dependencies

```bash
npm install
```

### 4. Environment Variables

Create a `.env.local` file in the root directory and add necessary variables (see `example.env.local` for reference).

```bash
NEXT_PUBLIC_API_URL=your_api_url
NEXTAUTH_SECRET=your_secret
```

### 5. Run development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Scripts

| Command         | Description                                                      |
| :-------------- | :--------------------------------------------------------------- |
| `npm run dev`   | Starts the development server with Hot Module Replacement (HMR). |
| `npm run build` | Builds the application for production.                           |
| `npm run start` | Runs the built production application.                           |
| `npm run lint`  | Runs ESLint to check for code quality issues.                    |

---

## 🧪 Development Workflow

This project uses **Husky** and **Commitlint** to ensure high code quality and consistent commit messages.

- **Pre-commit:** Runs linting checks automatically before every commit.
- **Commit Messages:** Must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

---

## 📄 License

This project is private and confidential.
