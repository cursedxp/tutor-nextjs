import React from "react";
import Link from "next/link";

const LayoutsStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Layouts (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          This is a starter template for implementing layouts in Next.js. Your
          task is to implement the following:
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">1. Root Layout</h2>
            <p className="mb-2">
              Create a root layout that includes common elements like header and
              footer.
            </p>
            <Link
              href="/concepts/layouts/starter/root"
              className="text-blue-600 hover:underline"
            >
              Go to Root Layout Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">2. Nested Layouts</h2>
            <p className="mb-2">
              Implement nested layouts for different sections of your
              application.
            </p>
            <Link
              href="/concepts/layouts/starter/nested"
              className="text-blue-600 hover:underline"
            >
              Go to Nested Layouts Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">3. Dynamic Layouts</h2>
            <p className="mb-2">
              Create layouts that change based on route or user authentication.
            </p>
            <Link
              href="/concepts/layouts/starter/dynamic"
              className="text-blue-600 hover:underline"
            >
              Go to Dynamic Layouts Exercise
            </Link>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Create layouts in the appropriate directories</li>
            <li>Use the Next.js layout system effectively</li>
            <li>Implement proper nesting of layouts</li>
            <li>Handle layout-specific state and effects</li>
            <li>Ensure layouts are responsive and accessible</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/layouts/solution"
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

export default LayoutsStarter;
