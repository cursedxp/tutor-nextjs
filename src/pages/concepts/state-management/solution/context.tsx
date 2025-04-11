import React, { createContext, useContext, useState } from "react";
import Link from "next/link";

// Define the state type
type CounterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

// Create the context
const CounterContext = createContext<CounterState | undefined>(undefined);

// Custom hook to use the counter context
const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

// Provider component
const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

// Counter display component
const CounterDisplay = () => {
  const { count } = useCounter();
  return <div className="text-4xl font-bold mb-4">Count: {count}</div>;
};

// Counter controls component
const CounterControls = () => {
  const { increment, decrement, reset } = useCounter();
  return (
    <div className="flex space-x-4">
      <button
        onClick={decrement}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Decrement
      </button>
      <button
        onClick={reset}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        Reset
      </button>
      <button
        onClick={increment}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Increment
      </button>
    </div>
  );
};

// Main component
const ContextStateManagement = () => {
  return (
    <CounterProvider>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          State Management with Context API
        </h1>

        <div className="mb-8">
          <p className="mb-4">
            This example demonstrates how to manage state using the Context API.
            The counter state is shared between multiple components without prop
            drilling.
          </p>

          <div className="border rounded-lg p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Counter Example</h2>
            <CounterDisplay />
            <CounterControls />
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <p className="text-green-800 font-medium">Key Points:</p>
            <ul className="list-disc ml-6 mt-2 text-black">
              <li>State is managed in a single provider component</li>
              <li>Components can access state using a custom hook</li>
              <li>State updates are handled through context methods</li>
              <li>No prop drilling required</li>
              <li>State is shared across the component tree</li>
            </ul>
          </div>
        </div>

        <div className="flex space-x-4">
          <Link
            href="/concepts/state-management/starter/context"
            className="text-blue-600 hover:underline"
          >
            View Starter Version
          </Link>
          <Link href="/" className="text-gray-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </CounterProvider>
  );
};

export default ContextStateManagement;
