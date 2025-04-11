import React, { createContext, useContext, useState } from "react";
import Link from "next/link";

// TODO: Define the state type
// 1. Create a CounterState type with:
//    - count: number
//    - increment: () => void
//    - decrement: () => void
//    - reset: () => void

// TODO: Create the context
// 1. Use createContext to create CounterContext
// 2. Set the initial value to undefined
// 3. Add proper TypeScript typing

// TODO: Create a custom hook to use the counter context
// 1. Use useContext to get the context
// 2. Add error handling if context is undefined
// 3. Return the context value

// TODO: Create the CounterProvider component
// 1. Use useState to manage the count state
// 2. Create increment, decrement, and reset functions
// 3. Wrap children with CounterContext.Provider
// 4. Pass the state and functions as value

// TODO: Create the CounterDisplay component
// 1. Use the custom hook to get the count
// 2. Display the count in a styled div

// TODO: Create the CounterControls component
// 1. Use the custom hook to get the control functions
// 2. Create buttons for increment, decrement, and reset
// 3. Style the buttons appropriately

const ContextStateManagementStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">State Management Exercise</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement a counter using the Context API for state
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
            <li>Define the state type and context</li>
            <li>Create a custom hook for context access</li>
            <li>Implement the CounterProvider component</li>
            <li>Build the CounterDisplay component</li>
            <li>Create the CounterControls component</li>
            <li>Wrap the app with CounterProvider</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/state-management/solution/context"
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

export default ContextStateManagementStarter;
