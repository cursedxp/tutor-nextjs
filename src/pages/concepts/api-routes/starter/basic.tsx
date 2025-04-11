import React from "react";
import Link from "next/link";

const BasicApiRouteStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Basic API Route Exercise</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to create a basic API route in Next.js. Follow these
          steps:
        </p>

        <ol className="list-decimal ml-8 mb-6 space-y-2">
          <li>
            Create a new file in the <code>pages/api</code> directory
          </li>
          <li>Implement a GET endpoint that returns a JSON response</li>
          <li>Add proper error handling for non-GET methods</li>
          <li>Test your implementation using the button below</li>
        </ol>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Test your implementation:
          </h2>
          <p className="mb-2">
            Make a GET request to <code>/api/basic</code> to see your response.
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

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Create the API route file in the correct location</li>
            <li>Implement proper request handling</li>
            <li>Return a JSON response with a message and timestamp</li>
            <li>Handle errors appropriately</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/api-routes/solution/basic"
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

export default BasicApiRouteStarter;
