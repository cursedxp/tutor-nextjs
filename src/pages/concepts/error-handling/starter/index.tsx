import React from "react";
import Link from "next/link";

const ErrorHandlingStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Error Handling (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          This is a starter template for implementing error handling in Next.js.
          Your task is to implement the following:
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              1. Custom Error Pages
            </h2>
            <p className="mb-2">
              Create custom error pages for 404 and 500 errors.
            </p>
            <Link
              href="/concepts/error-handling/starter/custom-error"
              className="text-blue-600 hover:underline"
            >
              Go to Custom Error Pages Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">2. Try-Catch Blocks</h2>
            <p className="mb-2">
              Implement try-catch blocks for handling API errors.
            </p>
            <Link
              href="/concepts/error-handling/starter/try-catch"
              className="text-blue-600 hover:underline"
            >
              Go to Try-Catch Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">3. Error Boundaries</h2>
            <p className="mb-2">
              Create an Error Boundary component to catch component errors.
            </p>
            <Link
              href="/concepts/error-handling/starter/error-boundary"
              className="text-blue-600 hover:underline"
            >
              Go to Error Boundary Exercise
            </Link>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Create custom error pages in the pages directory</li>
            <li>Implement proper error logging</li>
            <li>Handle both client and server-side errors</li>
            <li>Provide meaningful error messages to users</li>
            <li>Test error scenarios thoroughly</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/error-handling/solution"
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

export default ErrorHandlingStarter;
