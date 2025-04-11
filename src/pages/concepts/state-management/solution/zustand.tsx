import React from "react";
import Link from "next/link";
import { create } from "zustand";

// Define the store type
interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// Create the store
const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

// Counter display component
const CounterDisplay: React.FC = () => {
  const count = useCounterStore((state) => state.count);
  return <div className="text-4xl font-bold mb-4">Count: {count}</div>;
};

// Counter controls component
const CounterControls: React.FC = () => {
  const { increment, decrement, reset } = useCounterStore();
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
const ZustandStateManagement: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">State Management with Zustand</h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates how to manage state using Zustand. The
          counter state is managed in a simple store and accessed using hooks.
        </p>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Counter Example</h2>
          <CounterDisplay />
          <CounterControls />
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-green-800 font-medium">Key Points:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Simple and lightweight state management</li>
            <li>No boilerplate code required</li>
            <li>Built-in TypeScript support</li>
            <li>Automatic performance optimization</li>
            <li>Easy to create and use stores</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/state-management/starter/zustand"
          className="text-blue-600 hover:underline"
        >
          View Starter Version
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ZustandStateManagement;
