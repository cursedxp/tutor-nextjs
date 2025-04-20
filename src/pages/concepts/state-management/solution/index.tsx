import React from "react";
import Link from "next/link";

const StateManagementSolution = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">State Management (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Next.js applications can use various state management solutions. This
          solution demonstrates different approaches and their use cases.
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">1. Context API</h2>
            <p className="mb-2">
              Manage global state using React&apos;s built-in Context API.
            </p>
            <Link
              href="/concepts/state-management/solution/context"
              className="text-blue-600 hover:underline"
            >
              View Context API Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">2. Redux</h2>
            <p className="mb-2">
              Implement Redux for complex state management needs.
            </p>
            <Link
              href="/concepts/state-management/solution/redux"
              className="text-blue-600 hover:underline"
            >
              View Redux Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">3. Zustand</h2>
            <p className="mb-2">
              Use Zustand for a simpler, more modern state management solution.
            </p>
            <Link
              href="/concepts/state-management/solution/zustand"
              className="text-blue-600 hover:underline"
            >
              View Zustand Example
            </Link>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
          <p className="text-green-800 font-medium">Key Takeaways:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Choose the right state management solution for your needs</li>
            <li>Context API is built into React and great for simple cases</li>
            <li>Redux is powerful but has a steeper learning curve</li>
            <li>Zustand offers a simpler alternative to Redux</li>
            <li>
              Consider performance implications of your state management choice
            </li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/state-management/starter"
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

export default StateManagementSolution;
