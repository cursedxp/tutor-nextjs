import React from "react";
import Link from "next/link";

const ErrorHandlingStarter: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Error Handling Hook (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement a custom hook for error handling with the
          following features:
        </p>

        {/* TODO: Implement useError Hook */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">useError Hook</h2>
          <p className="text-gray-600 text-black">
            Implement a custom hook that handles different types of errors and
            loading states.
          </p>
        </div>

        {/* TODO: Implement Examples */}
        <div className="space-y-4">
          <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">API Error Handling</h2>
            <p className="text-gray-600 text-black">
              Create a component that fetches user data and handles API errors.
            </p>
          </div>

          <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              Different Error Types
            </h2>
            <p className="text-gray-600 text-black">
              Implement error handling for different error types (Error objects,
              strings, unknown).
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Tasks to Complete:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800 text-black">
            <li>Create a type-safe useError hook</li>
            <li>Handle different error types</li>
            <li>Implement loading states</li>
            <li>Add error clearing functionality</li>
            <li>Create example components</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/custom-hooks/solution/error-handling"
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
