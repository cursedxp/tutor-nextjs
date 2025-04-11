import React from "react";
import Link from "next/link";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
type CounterState = {
  count: number;
};

// Create a slice
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 } as CounterState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// Create the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Export actions
const { increment, decrement, reset } = counterSlice.actions;

// Counter display component
const CounterDisplay = () => {
  const count = useSelector(
    (state: { counter: CounterState }) => state.counter.count
  );
  return <div className="text-4xl font-bold mb-4">Count: {count}</div>;
};

// Counter controls component
const CounterControls = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex space-x-4">
      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(reset())}
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        Reset
      </button>
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Increment
      </button>
    </div>
  );
};

// Main component
const ReduxStateManagement = () => {
  return (
    <Provider store={store}>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">State Management with Redux</h1>

        <div className="mb-8">
          <p className="mb-4">
            This example demonstrates how to manage state using Redux Toolkit.
            The counter state is managed in a centralized store and accessed
            using hooks.
          </p>

          <div className="border rounded-lg p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Counter Example</h2>
            <CounterDisplay />
            <CounterControls />
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <p className="text-green-800 font-medium">Key Points:</p>
            <ul className="list-disc ml-6 mt-2 text-black">
              <li>State is managed in a centralized Redux store</li>
              <li>Actions are dispatched to update state</li>
              <li>Components access state using useSelector hook</li>
              <li>Redux Toolkit simplifies Redux setup and usage</li>
              <li>State is predictable and immutable</li>
            </ul>
          </div>
        </div>

        <div className="flex space-x-4">
          <Link
            href="/concepts/state-management/starter/redux"
            className="text-blue-600 hover:underline"
          >
            View Starter Version
          </Link>
          <Link href="/" className="text-gray-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </Provider>
  );
};

export default ReduxStateManagement;
