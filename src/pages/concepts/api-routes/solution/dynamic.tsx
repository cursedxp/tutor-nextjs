import React, { useState } from "react";
import Link from "next/link";

const DynamicApiRoute = () => {
  const [userId, setUserId] = useState("1");
  const [response, setResponse] = useState<any>(null);

  const handleTest = async () => {
    try {
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      alert("Error fetching data: " + error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dynamic API Route Example</h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates a dynamic API route in Next.js. The API
          endpoint is located at <code>/api/users/[id]</code> and returns user
          data based on the provided ID.
        </p>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-2">Try it out:</h2>
          <div className="flex items-center space-x-4 mb-4">
            <label htmlFor="userId" className="font-medium">
              User ID:
            </label>
            <input
              id="userId"
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="border rounded px-2 py-1"
            />
            <button
              onClick={handleTest}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Test API
            </button>
          </div>
          {response && (
            <pre className="bg-gray-100 p-4 rounded overflow-auto">
              {JSON.stringify(response, null, 2)}
            </pre>
          )}
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-green-800 font-medium">Key Points:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>
              Dynamic routes use square brackets in the filename (e.g., [id].ts)
            </li>
            <li>Route parameters are available in the request object</li>
            <li>Can handle multiple dynamic segments</li>
            <li>Useful for RESTful endpoints with resource IDs</li>
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

export default DynamicApiRoute;
