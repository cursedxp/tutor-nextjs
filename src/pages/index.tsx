import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface ConceptItem {
  title: string;
  path: string;
  description: string;
}

const concepts: ConceptItem[] = [
  {
    title: "File-Based Routing",
    path: "/concepts/file-routing",
    description:
      "Learn how Next.js handles routing through file system structure",
  },
  {
    title: "Data Fetching",
    path: "/concepts/data-fetching",
    description:
      "Explore getStaticProps, getServerSideProps, and client-side data fetching",
  },
  {
    title: "API Routes",
    path: "/concepts/api-routes",
    description: "Create API endpoints within your Next.js application",
  },
  {
    title: "Dynamic Routes",
    path: "/concepts/dynamic-routes",
    description: "Handle dynamic routing with parametrized pages",
  },
  {
    title: "Middleware",
    path: "/concepts/middleware",
    description: "Implement middleware for request processing",
  },
  {
    title: "State Management",
    path: "/concepts/state-management",
    description:
      "Manage application state using Context API and other patterns",
  },
  {
    title: "Authentication",
    path: "/concepts/authentication",
    description: "Implement authentication flows in Next.js",
  },
  {
    title: "Image Optimization",
    path: "/concepts/image-optimization",
    description: "Optimize images using Next.js Image component",
  },
  {
    title: "Custom Hooks",
    path: "/concepts/custom-hooks",
    description: "Create reusable logic with custom React hooks",
  },
  {
    title: "Error Handling",
    path: "/concepts/error-handling",
    description: "Implement error handling and custom error pages",
  },
  {
    title: "Layouts",
    path: "/concepts/layouts",
    description: "Create reusable layout patterns",
  },
  {
    title: "Internationalization",
    path: "/concepts/internationalization",
    description: "Add multi-language support to your application",
  },
];

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} min-h-screen p-8`}
    >
      <Head>
        <title>Next.js Senior Developer Training Project</title>
        <meta name="description" content="Learn advanced Next.js concepts" />
      </Head>

      <main className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-3xl font-bold text-center mb-4">
            Next.js Senior Developer Training Project
          </h1>
          <p className="text-lg text-center max-w-3xl">
            This project contains key Next.js concepts that every senior
            developer should know. Each concept includes a starter template and
            a complete solution.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <div
              key={concept.path}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{concept.title}</h2>
              <p className="text-gray-600 mb-4">{concept.description}</p>
              <div className="flex space-x-4">
                <Link
                  href={`${concept.path}/starter`}
                  className="text-blue-600 hover:underline"
                >
                  Starter
                </Link>
                <Link
                  href={`${concept.path}/solution`}
                  className="text-green-600 hover:underline"
                >
                  Solution
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-16 text-center text-sm text-gray-500">
        <p>
          Next.js Senior Developer Training Project &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
