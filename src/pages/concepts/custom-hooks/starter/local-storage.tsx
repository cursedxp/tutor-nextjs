import React from "react";
import Link from "next/link";

const LocalStorageStarter: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Local Storage Hook (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement a custom hook for local storage with the
          following features:
        </p>

        {/* TODO: Implement useLocalStorage Hook */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">useLocalStorage Hook</h2>
          <p className="text-gray-600 text-black">
            Implement a custom hook that handles reading and writing to
            localStorage with type safety and error handling.
          </p>
        </div>

        {/* TODO: Implement Examples */}
        <div className="space-y-4">
          <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Persistent Name</h2>
            <p className="text-gray-600 text-black">
              Create an input field that saves the name to localStorage.
            </p>
          </div>

          <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Theme Preference</h2>
            <p className="text-gray-600 text-black">
              Implement a theme switcher that persists the selected theme.
            </p>
          </div>

          <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Todo List</h2>
            <p className="text-gray-600 text-black">
              Create a todo list that persists items between page refreshes.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Tasks to Complete:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800 text-black">
            <li>Create a type-safe useLocalStorage hook</li>
            <li>Handle SSR compatibility</li>
            <li>Implement error handling</li>
            <li>Add JSON serialization</li>
            <li>Create example components using the hook</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/custom-hooks/solution/local-storage"
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

export default LocalStorageStarter;
