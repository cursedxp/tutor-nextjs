import React from "react";
import Link from "next/link";

const SessionStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Session Management (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Implement session management with NextAuth.js. This example will
          demonstrate:
        </p>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Session Information</h2>
            <p className="mb-4">Current session status: TODO</p>

            <div className="flex space-x-4 mb-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Sign In
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Sign Out
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Session Details</h3>
              <p>TODO: Display session information</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Session Actions</h3>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                  Refresh Session
                </button>
                <button className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
                  Update Session
                </button>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-800 font-medium">Tasks to Complete:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-800">
              <li>Set up session configuration in NextAuth.js</li>
              <li>Implement session state management</li>
              <li>Add session refresh functionality</li>
              <li>Handle session updates</li>
              <li>Manage session expiration</li>
              <li>Implement session persistence</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/authentication/solution/session"
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

export default SessionStarter;
