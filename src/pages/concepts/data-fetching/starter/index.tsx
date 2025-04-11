import React from "react";
import Link from "next/link";

const DataFetchingStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Data Fetching (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          This is a starter template for implementing different data fetching
          methods in Next.js. Your task is to implement the following:
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">1. Static Generation</h2>
            <p className="mb-2">
              Implement getStaticProps to fetch and display data at build time.
            </p>
            <Link
              href="/concepts/data-fetching/starter/static"
              className="text-blue-600 hover:underline"
            >
              Go to Static Generation Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              2. Server-Side Rendering
            </h2>
            <p className="mb-2">
              Implement getServerSideProps to fetch data on each request.
            </p>
            <Link
              href="/concepts/data-fetching/starter/server"
              className="text-blue-600 hover:underline"
            >
              Go to Server-Side Rendering Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              3. Client-Side Data Fetching
            </h2>
            <p className="mb-2">
              Implement client-side data fetching using useEffect and
              fetch/axios.
            </p>
            <Link
              href="/concepts/data-fetching/starter/client"
              className="text-blue-600 hover:underline"
            >
              Go to Client-Side Exercise
            </Link>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>
              Complete each exercise by implementing the required data fetching
              method
            </li>
            <li>Use the provided API endpoints or create your own mock data</li>
            <li>Consider error handling and loading states</li>
            <li>Test your implementation thoroughly</li>
            <li>
              Compare your solution with the provided solution after completion
            </li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/data-fetching/solution"
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

export default DataFetchingStarter;
