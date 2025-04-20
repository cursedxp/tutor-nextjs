import React, { useState } from "react";
import Link from "next/link";

interface UserResponse {
  id: string;
  name: string;
  email: string;
  // Add other user properties as needed
}

const DynamicApiRouteStarter = () => {
  const [userId, setUserId] = useState("1");
  const [response, setResponse] = useState<UserResponse | null>(null);

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
      <h1 className="text-3xl font-bold mb-6">Dynamic API Route Exercise</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to create a dynamic API route in Next.js. Follow these
          steps:
        </p>

        <ol className="list-decimal ml-8 mb-6 space-y-2">
          <li>
            Create a new file in the <code>pages/api/users/[id].ts</code>{" "}
            directory
          </li>
          <li>
            Implement a GET endpoint that returns user data based on the ID
          </li>
          <li>Add proper error handling for invalid IDs and non-GET methods</li>
          <li>Test your implementation using the form below</li>
        </ol>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Test your implementation:
          </h2>
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

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Create the dynamic API route file in the correct location</li>
            <li>Access the ID parameter from the request query</li>
            <li>Return appropriate user data or error messages</li>
            <li>Handle different HTTP methods and error cases</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/api-routes/solution/dynamic"
          className="text-blue-600 hover:underline"
        >
          View Solution
        </Link>
        <Link
          href="/concepts/api-routes/starter"
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

export default DynamicApiRouteStarter;
