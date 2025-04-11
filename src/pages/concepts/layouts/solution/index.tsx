import React from "react";
import Link from "next/link";

const LayoutsSolution = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Layouts (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Next.js provides powerful layout features to create consistent UI
          across your application. This solution demonstrates different layout
          patterns and best practices.
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">1. Root Layout</h2>
            <p className="mb-2">
              Create a root layout that wraps your entire application.
            </p>
            <Link
              href="/concepts/layouts/solution/root"
              className="text-blue-600 hover:underline"
            >
              View Root Layout Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">2. Nested Layouts</h2>
            <p className="mb-2">
              Implement nested layouts for different sections of your app.
            </p>
            <Link
              href="/concepts/layouts/solution/nested"
              className="text-blue-600 hover:underline"
            >
              View Nested Layouts Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">3. Dynamic Layouts</h2>
            <p className="mb-2">
              Create layouts that adapt based on route or user state.
            </p>
            <Link
              href="/concepts/layouts/solution/dynamic"
              className="text-blue-600 hover:underline"
            >
              View Dynamic Layouts Example
            </Link>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
          <p className="text-green-800 font-medium">Key Takeaways:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Use layouts to maintain consistent UI across pages</li>
            <li>Implement nested layouts for complex UI structures</li>
            <li>Create dynamic layouts that adapt to different contexts</li>
            <li>Share common components and styles through layouts</li>
            <li>Handle layout-specific state and side effects</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/layouts/starter"
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

export default LayoutsSolution;
