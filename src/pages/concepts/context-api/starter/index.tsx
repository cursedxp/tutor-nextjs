import React, { createContext, useContext, useState } from "react";
import Link from "next/link";

// TODO: Create a context for the theme
// 1. Define the Theme type ('light' | 'dark')
// 2. Define the ThemeContextType interface
// 3. Create the context with createContext

// TODO: Create a custom hook to use the theme context
// 1. Use useContext to get the context
// 2. Add error handling if context is undefined
// 3. Return the context value

// TODO: Create the ThemeProvider component
// 1. Use useState to manage the theme state
// 2. Create a toggleTheme function
// 3. Wrap children with ThemeContext.Provider
// 4. Pass theme and toggleTheme as value

// TODO: Create the ThemeSwitcher component
// 1. Use the custom hook to get theme and toggleTheme
// 2. Create a button that toggles the theme
// 3. Style the button based on the current theme

const ContextAPIStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Context API Exercise</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement a theme switcher using the Context API.
          Follow the TODO comments in the code to complete the implementation.
        </p>

        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Theme Switcher</h2>
          {/* TODO: Add ThemeSwitcher component here */}
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-green-800 font-medium">Steps to Implement:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Create the theme context</li>
            <li>Implement the custom hook</li>
            <li>Create the ThemeProvider component</li>
            <li>Build the ThemeSwitcher component</li>
            <li>Wrap the app with ThemeProvider</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/context-api/solution"
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

export default ContextAPIStarter;
