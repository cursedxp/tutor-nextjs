import React from "react";
import Link from "next/link";

const DynamicRoutesStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dynamic Routes (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          This is a starter template for implementing dynamic routes in Next.js.
          Your task is to implement the following:
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              1. Single Dynamic Parameter
            </h2>
            <p className="mb-2">
              Create a page that handles a single dynamic parameter.
            </p>
            <Link
              href="/concepts/dynamic-routes/starter/single/1"
              className="text-blue-600 hover:underline"
            >
              Go to Single Parameter Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              2. Multiple Dynamic Parameters
            </h2>
            <p className="mb-2">
              Create a page that handles multiple dynamic parameters.
            </p>
            <Link
              href="/concepts/dynamic-routes/starter/multiple/category/product"
              className="text-blue-600 hover:underline"
            >
              Go to Multiple Parameters Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              3. Optional Catch-All Routes
            </h2>
            <p className="mb-2">
              Create a page that handles optional dynamic segments.
            </p>
            <Link
              href="/concepts/dynamic-routes/starter/optional"
              className="text-blue-600 hover:underline"
            >
              Go to Optional Parameters Exercise
            </Link>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Create files with appropriate dynamic route patterns</li>
            <li>Implement getStaticPaths and getStaticProps</li>
            <li>Handle route parameters correctly</li>
            <li>Add proper navigation between pages</li>
            <li>Test different parameter combinations</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/dynamic-routes/solution"
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

export default DynamicRoutesStarter;
