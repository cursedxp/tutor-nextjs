import React from "react";
import Link from "next/link";

interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Custom hook for error handling
const useError = () => {
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState(false);

  const handleError = React.useCallback((error: unknown) => {
    if (error instanceof Error) {
      setError(error);
    } else if (typeof error === "string") {
      setError(new Error(error));
    } else {
      setError(new Error("An unknown error occurred"));
    }
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return {
    error,
    loading,
    setLoading,
    handleError,
    clearError,
  };
};

// Example async function that might throw errors
const fetchUserData = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// Example component using the custom hook
const ErrorHandlingExample: React.FC = () => {
  const { error, loading, setLoading, handleError, clearError } = useError();
  const [userId, setUserId] = React.useState("1");
  const [userData, setUserData] = React.useState<UserData | null>(null);

  const handleFetch = async () => {
    try {
      setLoading(true);
      clearError();
      const data = await fetchUserData(userId);
      setUserData(data);
    } catch (err) {
      handleError(err);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  // Example of throwing different types of errors
  const throwErrors = (type: "error" | "string" | "unknown") => {
    try {
      if (type === "error") {
        throw new Error("This is an Error object");
      } else if (type === "string") {
        throw "This is a string error";
      } else {
        throw { message: "This is an unknown error type" };
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Error Handling Hook (Solution)
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates a custom hook for handling errors with
          different error types and loading states.
        </p>

        {/* API Example */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">API Error Handling</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter user ID"
                className="px-3 py-2 border rounded-md"
              />
              <button
                onClick={handleFetch}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
              >
                {loading ? "Loading..." : "Fetch User"}
              </button>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error.message}</p>
                  </div>
                  <div className="ml-auto pl-3">
                    <button
                      onClick={clearError}
                      className="text-red-700 hover:text-red-900"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            )}

            {userData && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <pre className="text-sm overflow-x-auto text-black">
                  {JSON.stringify(userData, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Different Error Types */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Different Error Types</h2>
          <div className="flex gap-4">
            <button
              onClick={() => throwErrors("error")}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Throw Error
            </button>
            <button
              onClick={() => throwErrors("string")}
              className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700"
            >
              Throw String
            </button>
            <button
              onClick={() => throwErrors("unknown")}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              Throw Unknown
            </button>
          </div>
        </div>

        {/* Hook Implementation */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Hook Implementation</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto text-black">
              {`const useError = () => {
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState(false);

  const handleError = React.useCallback((error: unknown) => {
    if (error instanceof Error) {
      setError(error);
    } else if (typeof error === 'string') {
      setError(new Error(error));
    } else {
      setError(new Error('An unknown error occurred'));
    }
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return {
    error,
    loading,
    setLoading,
    handleError,
    clearError,
  };
};`}
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800 font-medium">Key Features:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Type-safe error handling</li>
            <li>Support for different error types</li>
            <li>Loading state management</li>
            <li>Error clearing functionality</li>
            <li>Reusable across components</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/custom-hooks/starter/error-handling"
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

export default ErrorHandlingExample;
