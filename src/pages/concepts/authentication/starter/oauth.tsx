import React from "react";
import Link from "next/link";

const OAuthStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        OAuth Authentication (Starter)
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          Implement OAuth authentication with social providers. This example
          will demonstrate:
        </p>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">OAuth Providers</h2>
            <p className="mb-4">Current authentication status: TODO</p>

            <div className="flex space-x-4 mb-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Sign in with Google
              </button>
              <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
                Sign in with GitHub
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">User Information</h3>
              <p>TODO: Display user information from OAuth provider</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-800 font-medium">Tasks to Complete:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-800">
              <li>Set up OAuth providers in NextAuth.js</li>
              <li>Configure provider credentials</li>
              <li>Implement sign in with social providers</li>
              <li>Handle OAuth callbacks</li>
              <li>Store and manage user sessions</li>
              <li>Display user information from providers</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/authentication/solution/oauth"
          className="text-blue-600 hover:underline"
        >
          View Solution
        </Link>
        <Link
          href="/concepts/authentication/starter"
          className="text-gray-600 hover:underline"
        >
          Back to Starter
        </Link>
      </div>
    </div>
  );
};

export default OAuthStarter;
