import React from "react";
import Link from "next/link";

const ErrorHandlingSolution = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Error Handling (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Next.js provides several ways to handle errors gracefully. This
          solution demonstrates different error handling techniques and best
          practices.
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              1. Custom Error Pages
            </h2>
            <p className="mb-2">
              Create custom error pages for different HTTP status codes.
            </p>
            <Link
              href="/concepts/error-handling/solution/custom-error"
              className="text-blue-600 hover:underline"
            >
              View Custom Error Pages Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">2. Try-Catch Blocks</h2>
            <p className="mb-2">
              Implement try-catch blocks for handling runtime errors.
            </p>
            <Link
              href="/concepts/error-handling/solution/try-catch"
              className="text-blue-600 hover:underline"
            >
              View Try-Catch Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">3. Error Boundaries</h2>
            <p className="mb-2">
              Use React Error Boundaries to catch JavaScript errors in
              components.
            </p>
            <Link
              href="/concepts/error-handling/solution/error-boundary"
              className="text-blue-600 hover:underline"
            >
              View Error Boundary Example
            </Link>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
          <p className="text-green-800 font-medium">Key Takeaways:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Use custom error pages for different HTTP status codes</li>
            <li>Implement try-catch blocks for runtime error handling</li>
            <li>Use Error Boundaries for component-level error handling</li>
            <li>Log errors appropriately for debugging</li>
            <li>Provide user-friendly error messages</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/error-handling/starter"
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

export default ErrorHandlingSolution;
