import React from "react";
import Link from "next/link";

const CustomHooksSolution = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Custom Hooks (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Custom hooks allow you to extract component logic into reusable
          functions. This solution demonstrates different types of custom hooks
          and their use cases.
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              1. Data Fetching Hook
            </h2>
            <p className="mb-2">
              Create a reusable hook for fetching data with loading and error
              states.
            </p>
            <Link
              href="/concepts/custom-hooks/solution/fetch"
              className="text-blue-600 hover:underline"
            >
              View Fetch Hook Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              2. Form Handling Hook
            </h2>
            <p className="mb-2">
              Create a hook for managing form state and validation.
            </p>
            <Link
              href="/concepts/custom-hooks/solution/form"
              className="text-blue-600 hover:underline"
            >
              View Form Hook Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              3. Local Storage Hook
            </h2>
            <p className="mb-2">
              Create a hook for persisting data in local storage.
            </p>
            <Link
              href="/concepts/custom-hooks/solution/storage"
              className="text-blue-600 hover:underline"
            >
              View Storage Hook Example
            </Link>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
          <p className="text-green-800 font-medium">Key Takeaways:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Custom hooks start with 'use' prefix</li>
            <li>Can use other hooks inside custom hooks</li>
            <li>Great for sharing logic between components</li>
            <li>Can handle complex state and side effects</li>
            <li>Improve code reusability and maintainability</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/custom-hooks/starter"
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

export default CustomHooksSolution;
