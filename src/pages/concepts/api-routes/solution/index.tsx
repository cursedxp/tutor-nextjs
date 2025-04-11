import React from "react";
import Link from "next/link";

const ApiRoutesSolution = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">API Routes (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Next.js allows you to create API endpoints as part of your
          application. This solution demonstrates different types of API routes
          and their use cases.
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">1. Basic API Route</h2>
            <p className="mb-2">
              A simple GET endpoint that returns JSON data.
            </p>
            <Link
              href="/concepts/api-routes/solution/basic"
              className="text-blue-600 hover:underline"
            >
              View Basic API Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">2. Dynamic API Route</h2>
            <p className="mb-2">
              An endpoint that handles dynamic parameters in the URL.
            </p>
            <Link
              href="/concepts/api-routes/solution/dynamic"
              className="text-blue-600 hover:underline"
            >
              View Dynamic API Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">3. RESTful API</h2>
            <p className="mb-2">
              A complete RESTful API implementation with multiple HTTP methods.
            </p>
            <Link
              href="/concepts/api-routes/solution/rest"
              className="text-blue-600 hover:underline"
            >
              View RESTful API Example
            </Link>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
          <p className="text-green-800 font-medium">Key Takeaways:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>API routes are created in the pages/api directory</li>
            <li>Each file in the api directory becomes an API endpoint</li>
            <li>Support for all HTTP methods (GET, POST, PUT, DELETE, etc.)</li>
            <li>Built-in request and response handling</li>
            <li>
              Seamless integration with the rest of your Next.js application
            </li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/api-routes/starter"
          className="text-blue-600 hover:underline"
        >
          View Starter Template
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ApiRoutesSolution;
