import React from "react";
import Link from "next/link";

// Custom hook for local storage
const useLocalStorage = <T,>(key: string, initialValue: T) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = React.useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;

        // Save state
        setStoredValue(valueToStore);

        // Save to localStorage
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue] as const;
};

// Example component using the custom hook
const LocalStorageExample: React.FC = () => {
  const [name, setName] = useLocalStorage<string>("name", "");
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");
  const [todos, setTodos] = useLocalStorage<string[]>("todos", []);
  const [newTodo, setNewTodo] = React.useState("");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos((prev) => [...prev, newTodo.trim()]);
      setNewTodo("");
    }
  };

  const removeTodo = (index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Local Storage Hook (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates a custom hook for persisting data in local
          storage with type safety and error handling.
        </p>

        {/* Examples Section */}
        <div className="space-y-8">
          {/* Name Example */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Persistent Name</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md"
            />
            {name && (
              <p className="mt-2 text-gray-600">
                Your name will persist even after page refresh!
              </p>
            )}
          </div>

          {/* Theme Example */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Theme Preference</h2>
            <div className="flex gap-4">
              <button
                onClick={() => setTheme("light")}
                className={`px-4 py-2 rounded-md ${
                  theme === "light"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Light
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`px-4 py-2 rounded-md ${
                  theme === "dark"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Dark
              </button>
            </div>
            <p className="mt-2 text-gray-600">Theme preference: {theme}</p>
          </div>

          {/* Todo List Example */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Persistent Todo List</h2>
            <form onSubmit={addTodo} className="flex gap-2 mb-4">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
                className="flex-1 px-3 py-2 border rounded-md"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Add
              </button>
            </form>
            <ul className="space-y-2">
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-50 p-3 rounded-md"
                >
                  <span>{todo}</span>
                  <button
                    onClick={() => removeTodo(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hook Implementation */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Hook Implementation</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto text-black">
              {`const useLocalStorage = <T,>(key: string, initialValue: T) => {
  // State to store our value
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(\`Error reading localStorage key "\${key}":\`, error);
      return initialValue;
    }
  });

  const setValue = React.useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(\`Error setting localStorage key "\${key}":\`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue] as const;
};`}
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-8">
          <p className="text-blue-800 font-medium">Key Features:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Type-safe with TypeScript generics</li>
            <li>Server-side rendering compatible</li>
            <li>Automatic JSON serialization</li>
            <li>Error handling for storage operations</li>
            <li>Lazy initial state evaluation</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/custom-hooks/starter/local-storage"
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

export default LocalStorageExample;
