import React from "react";
import Link from "next/link";

const StateManagementStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">State Management (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          This is a starter template for implementing different state management
          solutions in Next.js. Your task is to implement the following:
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">1. Context API</h2>
            <p className="mb-2">
              Implement global state management using React&apos;s Context API.
            </p>
            <Link
              href="/concepts/state-management/starter/context"
              className="text-blue-600 hover:underline"
            >
              Go to Context API Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">2. Redux</h2>
            <p className="mb-2">
              Set up Redux for managing complex application state.
            </p>
            <Link
              href="/concepts/state-management/starter/redux"
              className="text-blue-600 hover:underline"
            >
              Go to Redux Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">3. Zustand</h2>
            <p className="mb-2">Implement state management using Zustand.</p>
            <Link
              href="/concepts/state-management/starter/zustand"
              className="text-blue-600 hover:underline"
            >
              Go to Zustand Exercise
            </Link>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Set up the necessary dependencies for each solution</li>
            <li>Create the required store/context structure</li>
            <li>Implement state updates and actions</li>
            <li>Connect components to the state management solution</li>
            <li>Test state updates and persistence</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/state-management/solution"
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

export default StateManagementStarter;
