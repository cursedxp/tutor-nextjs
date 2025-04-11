import React from "react";
import Link from "next/link";

// Custom error classes
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

class APIError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public endpoint: string
  ) {
    super(message);
    this.name = "APIError";
  }
}

class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AuthError";
  }
}

// Example form validation function
const validateForm = (data: {
  username: string;
  email: string;
  age: number;
}) => {
  if (!data.username || data.username.length < 3) {
    throw new ValidationError("Username must be at least 3 characters long");
  }
  if (!data.email || !data.email.includes("@")) {
    throw new ValidationError("Invalid email address");
  }
  if (!data.age || data.age < 18) {
    throw new ValidationError("Must be 18 or older");
  }
};

// Example API call function
const simulateAPICall = async (endpoint: string) => {
  const random = Math.random();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (random < 0.3) {
    throw new APIError("Server error occurred", 500, endpoint);
  }
  if (random < 0.6) {
    throw new AuthError("Authentication token expired");
  }
  return { success: true };
};

const CustomErrorExample: React.FC = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    age: 0,
  });
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      // First validate the form
      validateForm(formData);

      // Then make API call
      setLoading(true);
      await simulateAPICall("/api/users");

      alert("Form submitted successfully!");
      setFormData({ username: "", email: "", age: 0 });
    } catch (err) {
      if (err instanceof ValidationError) {
        setError(err);
      } else if (err instanceof APIError) {
        setError(
          new Error(
            `API Error (${err.statusCode}) at ${err.endpoint}: ${err.message}`
          )
        );
      } else if (err instanceof AuthError) {
        setError(err);
      } else {
        setError(new Error("An unexpected error occurred"));
      }
    } finally {
      setLoading(false);
    }
  };

  const getErrorStyle = (field: keyof typeof formData) => {
    if (
      error instanceof ValidationError &&
      error.message.toLowerCase().includes(field)
    ) {
      return "border-red-500";
    }
    return "";
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Custom Error Handling (Solution)
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates how to create and handle custom error types
          for different scenarios like form validation and API errors.
        </p>

        {/* Form Example */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Registration Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${getErrorStyle(
                  "username"
                )}`}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${getErrorStyle(
                  "email"
                )}`}
              />
            </div>

            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age || ""}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${getErrorStyle(
                  "age"
                )}`}
              />
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
                    <p className="text-sm text-red-700">
                      {error.name}: {error.message}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        {/* Custom Error Classes */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Custom Error Classes</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto text-black">
              {`// Custom error classes
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

class APIError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public endpoint: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
  }
}`}
            </pre>
          </div>
        </div>

        {/* Error Handling Example */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Error Handling</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto text-black">
              {`try {
  // First validate the form
  validateForm(formData);
  
  // Then make API call
  await simulateAPICall('/api/users');
} catch (err) {
  if (err instanceof ValidationError) {
    setError(err);
  } else if (err instanceof APIError) {
    setError(new Error(
      \`API Error (\${err.statusCode}) at \${err.endpoint}: \${err.message}\`
    ));
  } else if (err instanceof AuthError) {
    setError(err);
  } else {
    setError(new Error('An unexpected error occurred'));
  }
}`}
            </pre>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800 font-medium">Key Features:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Custom error classes with TypeScript</li>
            <li>Form validation error handling</li>
            <li>API error handling with status codes</li>
            <li>Authentication error handling</li>
            <li>Error type discrimination</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/error-handling/starter/custom-error"
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

export default CustomErrorExample;
