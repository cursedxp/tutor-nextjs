import React from "react";
import Link from "next/link";

const CustomHooksStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Custom Hooks (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          This is a starter template for implementing custom hooks in Next.js.
          Your task is to implement the following:
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
              href="/concepts/custom-hooks/starter/fetch"
              className="text-blue-600 hover:underline"
            >
              Go to Fetch Hook Exercise
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
              href="/concepts/custom-hooks/starter/form"
              className="text-blue-600 hover:underline"
            >
              Go to Form Hook Exercise
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
              href="/concepts/custom-hooks/starter/storage"
              className="text-blue-600 hover:underline"
            >
              Go to Storage Hook Exercise
            </Link>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Create hooks in a separate hooks directory</li>
            <li>Follow the 'use' prefix naming convention</li>
            <li>Handle all necessary states and side effects</li>
            <li>Make hooks reusable across components</li>
            <li>Test hooks with different use cases</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/custom-hooks/solution"
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

export default CustomHooksStarter;
