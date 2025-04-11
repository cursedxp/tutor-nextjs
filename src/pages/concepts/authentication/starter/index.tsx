import React from "react";
import Link from "next/link";

const AuthenticationStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Authentication (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          This is a starter template for implementing authentication in Next.js.
          Your task is to implement the following:
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              1. JWT Authentication
            </h2>
            <p className="mb-2">
              Implement JWT-based authentication with secure token handling.
            </p>
            <Link
              href="/concepts/authentication/starter/jwt"
              className="text-blue-600 hover:underline"
            >
              Go to JWT Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">2. OAuth Integration</h2>
            <p className="mb-2">
              Implement OAuth with popular providers like Google and GitHub.
            </p>
            <Link
              href="/concepts/authentication/starter/oauth"
              className="text-blue-600 hover:underline"
            >
              Go to OAuth Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              3. Session Management
            </h2>
            <p className="mb-2">
              Implement secure session management with cookies.
            </p>
            <Link
              href="/concepts/authentication/starter/session"
              className="text-blue-600 hover:underline"
            >
              Go to Session Exercise
            </Link>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Set up the necessary authentication dependencies</li>
            <li>Implement secure token/session handling</li>
            <li>Create protected routes and components</li>
            <li>Handle authentication state properly</li>
            <li>Test authentication flows thoroughly</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/authentication/solution"
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

export default AuthenticationStarter;
