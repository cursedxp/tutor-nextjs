import React from "react";
import Link from "next/link";

const AuthenticationSolution = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Authentication (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Next.js provides various ways to implement authentication. This
          solution demonstrates different authentication approaches and their
          use cases.
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
              href="/concepts/authentication/solution/jwt"
              className="text-blue-600 hover:underline"
            >
              View JWT Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">2. OAuth Integration</h2>
            <p className="mb-2">
              Implement OAuth with popular providers like Google and GitHub.
            </p>
            <Link
              href="/concepts/authentication/solution/oauth"
              className="text-blue-600 hover:underline"
            >
              View OAuth Example
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
              href="/concepts/authentication/solution/session"
              className="text-blue-600 hover:underline"
            >
              View Session Example
            </Link>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
          <p className="text-green-800 font-medium">Key Takeaways:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Choose the right authentication method for your needs</li>
            <li>Implement proper security measures</li>
            <li>Handle token/session storage securely</li>
            <li>Protect routes based on authentication status</li>
            <li>Consider user experience in authentication flows</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/authentication/starter"
          className="text-blue-600 hover:underline"
        >
          View Starter Template
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AuthenticationSolution;
