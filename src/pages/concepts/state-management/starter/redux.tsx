import React from "react";
import Link from "next/link";

// TODO: Define the state type
// 1. Create a CounterState type with:
//    - count: number

// TODO: Create a slice
// 1. Use createSlice to create counterSlice
// 2. Set the name to "counter"
// 3. Define initialState with count: 0
// 4. Create reducers for increment, decrement, and reset

// TODO: Create the store
// 1. Use configureStore to create the store
// 2. Add the counter reducer to the store

// TODO: Export actions
// 1. Destructure and export increment, decrement, and reset actions

// TODO: Create the CounterDisplay component
// 1. Use useSelector to get the count from state
// 2. Display the count in a styled div

// TODO: Create the CounterControls component
// 1. Use useDispatch to get the dispatch function
// 2. Create buttons for increment, decrement, and reset
// 3. Dispatch the appropriate actions on button clicks
// 4. Style the buttons appropriately

const ReduxStateManagementStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">State Management with Redux</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement a counter using Redux for state management.
          Follow the TODO comments in the code to complete the implementation.
        </p>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Counter Example</h2>
          {/* TODO: Add CounterDisplay component here */}
          {/* TODO: Add CounterControls component here */}
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-green-800 font-medium">Steps to Implement:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Define the state type and create a slice</li>
            <li>Set up the Redux store with the slice reducer</li>
            <li>Create the CounterDisplay component</li>
            <li>Build the CounterControls component</li>
            <li>Wrap the app with Provider</li>
            <li>Use useSelector and useDispatch hooks</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/state-management/solution/redux"
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

export default ReduxStateManagementStarter;
