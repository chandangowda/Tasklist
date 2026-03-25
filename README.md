# Tasklist

Tasklist is a React application to manage daily tasks.

Main features:
- Create a task
- Edit a task
- Delete a task
- View all tasks in a list

## Libraries Used

Core libraries:
- `react` (v19)
- `react-dom` (v19)
- `react-router` (routing between pages)
- `@mantine/core` (UI components)
- `@mantine/hooks` (utility hooks)

State/update helpers:
- `use-immer`
- `immer`

Build and tooling:
- `vite`
- `typescript`
- `eslint`

## Concepts Used

- React Context:
  Shared task state and actions are managed in `src/TaskContext.tsx`.
- Centralized state management:
  Create, update, and delete logic is handled in one provider and consumed across pages.
- Client-side routing:
  Routes are configured in `src/AppRoutes.tsx` for list/create/edit screens.
- Immutable state updates:
  `use-immer` is used to update nested state in a clean and safe way.
- Component-based UI:
  Reusable React components with Mantine UI elements.

## Project Structure

- `src/ListTask.tsx` - task list page
- `src/CreateTask.tsx` - create task page
- `src/EditTask.tsx` - edit task page
- `src/TaskContext.tsx` - global task context/provider
- `src/AppRoutes.tsx` - application route definitions

## How to Run the Project

Prerequisites:
- Node.js 18+ (recommended)

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open the app in your browser:
- `http://localhost:5173`

## Available Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - type-check and create production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint checks
