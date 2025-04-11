import React from "react";
import Link from "next/link";

const ErrorBoundaryStarter: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Error Boundary (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement an Error Boundary component that catches and
          handles errors in child components.
        </p>

        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">
            Error Boundary Implementation
          </h2>
          <p className="text-gray-600 text-black">
            Create an Error Boundary component that:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-600 text-black">
            <li>Catches JavaScript errors in its child component tree</li>
            <li>Displays a fallback UI when an error occurs</li>
            <li>Logs errors for debugging purposes</li>
            <li>Provides a way to recover from errors</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Tasks to Complete:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800 text-black">
            <li>Create an ErrorBoundary class component</li>
            <li>Implement error catching logic</li>
            <li>Add error logging</li>
            <li>Create a fallback UI</li>
            <li>Add error recovery functionality</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/error-handling/solution/error-boundary"
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

export default ErrorBoundaryStarter;
