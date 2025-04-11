import React from "react";
import Link from "next/link";

const BasicApiRoute = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Basic API Route Example</h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates a basic API route in Next.js. The API
          endpoint is located at <code>/api/basic</code> and returns a simple
          JSON response.
        </p>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-2">Try it out:</h2>
          <p className="mb-2">
            Make a GET request to <code>/api/basic</code> to see the response.
          </p>
          <button
            onClick={async () => {
              try {
                const response = await fetch("/api/basic");
                const data = await response.json();
                alert(JSON.stringify(data, null, 2));
              } catch (error) {
                alert("Error fetching data: " + error);
              }
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Test API
          </button>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-green-800 font-medium">Key Points:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>API routes are created in the pages/api directory</li>
            <li>Each file in the api directory becomes an API endpoint</li>
            <li>Default export is a function that handles the request</li>
            <li>Supports all HTTP methods (GET, POST, PUT, DELETE, etc.)</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/api-routes/solution"
          className="text-blue-600 hover:underline"
        >
          Back to API Routes
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BasicApiRoute;
