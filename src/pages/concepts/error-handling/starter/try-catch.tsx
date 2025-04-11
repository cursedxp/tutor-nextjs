import React from "react";
import Link from "next/link";

const TryCatchStarter: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Try-Catch Error Handling (Starter)
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement error handling using try-catch blocks for
          the following scenarios.
        </p>

        {/* API Error Handling Example */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">API Error Handling</h2>
          <p className="text-gray-600 text-black">
            Implement error handling for API calls:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-600 text-black">
            <li>Create a simulated API call function</li>
            <li>Handle network errors</li>
            <li>Handle server errors</li>
            <li>Show loading states</li>
            <li>Display success/error messages</li>
          </ul>
        </div>

        {/* Form Validation Example */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Form Validation</h2>
          <p className="text-gray-600 text-black">
            Implement form validation with error handling:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-600 text-black">
            <li>Create a form with name and email fields</li>
            <li>Add validation logic</li>
            <li>Handle validation errors</li>
            <li>Show error messages</li>
            <li>Clear errors on successful submission</li>
          </ul>
        </div>

        {/* File Upload Example */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">File Upload</h2>
          <p className="text-gray-600 text-black">
            Implement file upload error handling:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-600 text-black">
            <li>Create a file upload component</li>
            <li>Handle file size errors</li>
            <li>Handle file type errors</li>
            <li>Show upload progress</li>
            <li>Display success/error messages</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Tasks to Complete:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800 text-black">
            <li>Implement API error handling</li>
            <li>Add form validation with error handling</li>
            <li>Create file upload error handling</li>
            <li>Add loading states</li>
            <li>Display user-friendly error messages</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/error-handling/solution/try-catch"
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

export default TryCatchStarter;
