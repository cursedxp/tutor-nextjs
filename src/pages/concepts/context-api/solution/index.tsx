import React, { createContext, useContext, useState } from "react";
import Link from "next/link";

// Create a context for the theme
type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to use the theme context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Theme provider component
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Component that uses the theme context
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded ${
        theme === "dark"
          ? "bg-gray-700 text-white hover:bg-gray-600"
          : "bg-gray-200 text-gray-900 hover:bg-gray-300"
      }`}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

// Main page component
const ContextAPISolution = () => {
  return (
    <ThemeProvider>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Context API Example</h1>

        <div className="mb-8">
          <p className="mb-4">
            This example demonstrates how to use the Context API to manage theme
            state across components.
          </p>

          <div className="border rounded-lg p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Theme Switcher</h2>
            <ThemeSwitcher />
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <p className="text-green-800 font-medium">Key Points:</p>
            <ul className="list-disc ml-6 mt-2 text-black">
              <li>Create context with createContext</li>
              <li>Provide context with Context.Provider</li>
              <li>Consume context with useContext hook</li>
              <li>Share state across components</li>
              <li>Avoid prop drilling</li>
            </ul>
          </div>
        </div>

        <div className="flex space-x-4">
          <Link
            href="/concepts/context-api/starter"
            className="text-blue-600 hover:underline"
          >
            View Starter Version
          </Link>
          <Link href="/" className="text-gray-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ContextAPISolution;
