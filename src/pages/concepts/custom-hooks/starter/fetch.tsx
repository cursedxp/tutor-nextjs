import React from "react";
import Link from "next/link";

const FetchExampleStarter: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Custom Fetch Hook (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement a custom hook for data fetching with the
          following features:
        </p>

        {/* TODO: Implement useFetch Hook */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">useFetch Hook</h2>
          <p className="text-gray-600 text-black">
            Implement a custom hook that handles data fetching, loading states,
            and error handling.
          </p>
        </div>

        {/* TODO: Implement Data Display */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Data Display</h2>
          <p className="text-gray-600 text-black">
            Display the fetched data with proper loading and error states.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Tasks to Complete:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800 text-black">
            <li>Create a type-safe useFetch hook with TypeScript</li>
            <li>Handle loading and error states</li>
            <li>Implement proper error handling</li>
            <li>Display the fetched data</li>
            <li>Add cleanup functionality</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/custom-hooks/solution/fetch"
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

export default FetchExampleStarter;
