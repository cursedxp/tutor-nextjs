import React from "react";
import Link from "next/link";

const MiddlewareSolution = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Middleware Examples (Solution)
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          Next.js middleware allows you to run code before a request is
          completed. This solution demonstrates different middleware use cases.
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              1. Authentication Middleware
            </h2>
            <p className="mb-2">
              A middleware that checks for authentication and redirects if
              needed.
            </p>
            <div className="space-y-2">
              <Link
                href="/concepts/middleware/solution/auth/protected"
                className="block text-blue-600 hover:underline"
              >
                View Protected Page
              </Link>
              <Link
                href="/concepts/middleware/solution/auth/public"
                className="block text-blue-600 hover:underline"
              >
                View Public Page
              </Link>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              2. Localization Middleware
            </h2>
            <p className="mb-2">
              A middleware that handles language detection and routing.
            </p>
            <div className="space-y-2">
              <Link
                href="/concepts/middleware/solution/locale/en"
                className="block text-blue-600 hover:underline"
              >
                View English Version
              </Link>
              <Link
                href="/concepts/middleware/solution/locale/es"
                className="block text-blue-600 hover:underline"
              >
                View Spanish Version
              </Link>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              3. Analytics Middleware
            </h2>
            <p className="mb-2">
              A middleware that tracks page views and user interactions.
            </p>
            <div className="space-y-2">
              <Link
                href="/concepts/middleware/solution/analytics/home"
                className="block text-blue-600 hover:underline"
              >
                View Home Page
              </Link>
              <Link
                href="/concepts/middleware/solution/analytics/about"
                className="block text-blue-600 hover:underline"
              >
                View About Page
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
          <p className="text-green-800 font-medium">Key Points:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Middleware runs before a request is completed</li>
            <li>Can modify request/response objects</li>
            <li>Can redirect or rewrite requests</li>
            <li>Great for authentication, localization, and analytics</li>
            <li>Runs on every request in the specified paths</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/middleware/starter"
          className="text-blue-600 hover:underline"
        >
          View Starter Version
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default MiddlewareSolution;
