import React from "react";
import Link from "next/link";

const MiddlewareStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Middleware Examples (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement different middleware use cases. Follow these
          steps for each example:
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              1. Authentication Middleware
            </h2>
            <p className="mb-2">
              Implement a middleware that checks for authentication and
              redirects if needed.
            </p>
            <div className="space-y-2">
              <Link
                href="/concepts/middleware/starter/auth/protected"
                className="block text-blue-600 hover:underline"
              >
                View Protected Page
              </Link>
              <Link
                href="/concepts/middleware/starter/auth/public"
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
              Implement a middleware that handles language detection and
              routing.
            </p>
            <div className="space-y-2">
              <Link
                href="/concepts/middleware/starter/locale/en"
                className="block text-blue-600 hover:underline"
              >
                View English Version
              </Link>
              <Link
                href="/concepts/middleware/starter/locale/es"
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
              Implement a middleware that tracks page views and user
              interactions.
            </p>
            <div className="space-y-2">
              <Link
                href="/concepts/middleware/starter/analytics/home"
                className="block text-blue-600 hover:underline"
              >
                View Home Page
              </Link>
              <Link
                href="/concepts/middleware/starter/analytics/about"
                className="block text-blue-600 hover:underline"
              >
                View About Page
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Create middleware files in the middleware directory</li>
            <li>Implement authentication checks</li>
            <li>Handle language detection and routing</li>
            <li>Track page views and user interactions</li>
            <li>Test with different paths and scenarios</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/middleware/solution"
          className="text-blue-600 hover:underline"
        >
          View Solution
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default MiddlewareStarter;
