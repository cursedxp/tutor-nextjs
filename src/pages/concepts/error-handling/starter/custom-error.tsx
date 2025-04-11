import React from "react";
import Link from "next/link";

const CustomErrorStarter: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Custom Error Handling (Starter)
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement custom error handling with the following
          features:
        </p>

        {/* TODO: Implement Custom Error Classes */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Custom Error Classes</h2>
          <p className="text-gray-600 text-black">
            Create custom error classes for validation, API, and authentication
            errors.
          </p>
        </div>

        {/* TODO: Implement Form with Validation */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Registration Form</h2>
          <p className="text-gray-600 text-black">
            Implement a form with validation using custom error handling.
          </p>
        </div>

        {/* TODO: Implement API Error Handling */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">API Error Handling</h2>
          <p className="text-gray-600 text-black">
            Add error handling for API calls with different error types.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Tasks to Complete:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800 text-black">
            <li>Create custom error classes</li>
            <li>Implement form validation</li>
            <li>Handle API errors</li>
            <li>Add error type discrimination</li>
            <li>Display appropriate error messages</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/error-handling/solution/custom-error"
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

export default CustomErrorStarter;
