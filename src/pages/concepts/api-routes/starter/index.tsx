import React from "react";
import Link from "next/link";

const ApiRoutesStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">API Routes (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          This is a starter template for implementing API routes in Next.js.
          Your task is to implement the following:
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">1. Basic API Route</h2>
            <p className="mb-2">
              Create a simple GET endpoint that returns JSON data.
            </p>
            <Link
              href="/concepts/api-routes/starter/basic"
              className="text-blue-600 hover:underline"
            >
              Go to Basic API Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">2. Dynamic API Route</h2>
            <p className="mb-2">
              Create an endpoint that handles dynamic parameters in the URL.
            </p>
            <Link
              href="/concepts/api-routes/starter/dynamic"
              className="text-blue-600 hover:underline"
            >
              Go to Dynamic API Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">3. RESTful API</h2>
            <p className="mb-2">
              Implement a complete RESTful API with multiple HTTP methods.
            </p>
            <Link
              href="/concepts/api-routes/starter/rest"
              className="text-blue-600 hover:underline"
            >
              Go to RESTful API Exercise
            </Link>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Create API routes in the pages/api directory</li>
            <li>Implement proper error handling and status codes</li>
            <li>Use appropriate HTTP methods for each operation</li>
            <li>Handle request parameters and body data</li>
            <li>Test your API endpoints using tools like Postman or curl</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/api-routes/solution"
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

export default ApiRoutesStarter;
