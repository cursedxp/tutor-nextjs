import React, { createContext, useContext, useState } from "react";
import Link from "next/link";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded ${
        theme === "light" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

const ContextAPIStarter = () => {
  return (
    <ThemeProvider>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Context API Exercise</h1>

        <div className="mb-8">
          <p className="mb-4">
            Your task is to implement a theme switcher using the Context API.
            Follow the TODO comments in the code to complete the implementation.
          </p>

          <div className="border rounded-lg p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Theme Switcher</h2>
            <ThemeSwitcher />
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
    </ThemeProvider>
  );
};

export default ContextAPIStarter;
