import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const BasicAuthSolution = () => {
  const { data: session, status } = useSession();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Basic Authentication (Solution)
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates basic authentication using NextAuth.js.
        </p>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              Authentication Status
            </h2>
            <p className="mb-4">
              Status: {status === "loading" ? "Loading..." : status}
            </p>

            <div className="flex space-x-4 mb-6">
              {!session ? (
                <button
                  onClick={() => signIn()}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Sign In
                </button>
              ) : (
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Sign Out
                </button>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">User Information</h3>
              {session ? (
                <div className="space-y-2">
                  <p>Name: {session.user?.name}</p>
                  <p>Email: {session.user?.email}</p>
                  <p>Role: {session.user?.role || "User"}</p>
                </div>
              ) : (
                <p>Please sign in to view your information</p>
              )}
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-800 font-medium">Implementation Details:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-800">
              <li>NextAuth.js configuration in next.config.js</li>
              <li>
                Authentication API routes in pages/api/auth/[...nextauth].js
              </li>
              <li>Session provider in _app.js</li>
              <li>Sign in/out functionality using next-auth/react hooks</li>
              <li>User information display when authenticated</li>
              <li>Session management with useSession hook</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/authentication/starter/basic"
          className="text-blue-600 hover:underline"
        >
          View Starter Template
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

export default BasicAuthSolution;
