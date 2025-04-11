# Tutor Next.js Application

A modern web application built with Next.js, featuring authentication, state management, and a robust development environment.

## Tech Stack

- **Framework**: Next.js 15.3.0
- **Language**: TypeScript
- **State Management**: Redux Toolkit & Zustand
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Data Fetching**: SWR
- **Development**: ESLint, PostCSS

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Development

Run the development server with Turbopack for faster builds:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── middleware/     # Next.js middleware for route protection
├── pages/         # Next.js pages and API routes
├── styles/        # Global styles and Tailwind configuration
├── types/         # TypeScript type definitions
└── utils/         # Utility functions and helpers
```

## Features

### Authentication

- Secure authentication using NextAuth.js
- JWT token management
- Protected routes and API endpoints

### State Management

- Redux Toolkit for global state
- Zustand for local component state
- Efficient data fetching with SWR

### Development

- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for styling
- Turbopack for faster development builds

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Deployment

The application can be deployed on any platform that supports Next.js applications. For the best experience, we recommend deploying on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/tutor-nextjs)
