import React from "react";
import Link from "next/link";
import { create } from "zustand";

// TODO: Define the store type
// 1. Create a CounterStore type with:
//    - count: number
//    - increment: () => void
//    - decrement: () => void
//    - reset: () => void

// TODO: Create the store
// 1. Use create to create useCounterStore
// 2. Initialize count to 0
// 3. Implement increment, decrement, and reset functions
// 4. Use proper TypeScript typing

// TODO: Create the CounterDisplay component
// 1. Use useCounterStore to get the count
// 2. Display the count in a styled div

// TODO: Create the CounterControls component
// 1. Use useCounterStore to get the control functions
// 2. Create buttons for increment, decrement, and reset
// 3. Style the buttons appropriately

const ZustandStateManagementStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">State Management with Zustand</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement a counter using Zustand for state
          management. Follow the TODO comments in the code to complete the
          implementation.
        </p>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Counter Example</h2>
          {/* TODO: Add CounterDisplay component here */}
          {/* TODO: Add CounterControls component here */}
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-green-800 font-medium">Steps to Implement:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Define the store type</li>
            <li>Create the store with initial state</li>
            <li>Implement state update functions</li>
            <li>Create the CounterDisplay component</li>
            <li>Build the CounterControls component</li>
            <li>Use the store in components</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/state-management/solution/zustand"
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

export default ZustandStateManagementStarter;
