import React from "react";
import Link from "next/link";

const PublicPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Public Page</h1>

      <div className="mb-8">
        <p className="mb-4">
          This is a public page that anyone can access. Try accessing the
          protected page to see the authentication middleware in action.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Authentication Status:</p>
          <p className="mt-2">
            You are not authenticated. Set the auth-token cookie to access
            protected pages.
          </p>
        </div>

        <div className="mt-4">
          <button
            onClick={() => {
              // Set the auth-token cookie
              document.cookie = "auth-token=authenticated; path=/";
              window.location.href =
                "/concepts/middleware/solution/auth/protected";
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Set Auth Token
          </button>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/middleware/solution/auth/protected"
          className="text-blue-600 hover:underline"
        >
          Try Protected Page
        </Link>
        <Link
          href="/concepts/middleware/solution"
          className="text-blue-600 hover:underline"
        >
          Back to Middleware Examples
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PublicPage;
