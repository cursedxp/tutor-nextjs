import React from "react";
import Link from "next/link";

const FormExampleStarter: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Custom Form Hook (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement a custom hook for form handling with the
          following features:
        </p>

        {/* TODO: Implement useForm Hook */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">useForm Hook</h2>
          <p className="text-gray-600 text-black">
            Implement a custom hook that handles form state, validation, and
            submission.
          </p>
        </div>

        {/* TODO: Implement Form */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
          <p className="text-gray-600 text-black">
            Create a contact form with name, email, and message fields.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Tasks to Complete:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800 text-black">
            <li>Create a type-safe useForm hook with TypeScript</li>
            <li>Implement form validation</li>
            <li>Handle form submission</li>
            <li>Display validation errors</li>
            <li>Add proper form styling</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/custom-hooks/solution/form"
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

export default FormExampleStarter;
