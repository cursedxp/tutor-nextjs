import React, { useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession, getSession } from "next-auth/react";

const SessionSolution = () => {
  const { data: session, status, update } = useSession();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleRefreshSession = async () => {
    try {
      setIsRefreshing(true);
      const newSession = await getSession();
      console.log("Session refreshed:", newSession);
    } catch (error) {
      console.error("Error refreshing session:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleUpdateSession = async () => {
    try {
      setIsUpdating(true);
      await update({
        ...session,
        user: {
          ...session?.user,
          role: "updated-role",
        },
      });
    } catch (error) {
      console.error("Error updating session:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Session Management (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates session management with NextAuth.js.
        </p>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Session Information</h2>
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
              <h3 className="text-lg font-medium">Session Details</h3>
              {session ? (
                <div className="space-y-2">
                  <p>User: {session.user?.name}</p>
                  <p>Email: {session.user?.email}</p>
                  <p>Role: {session.user?.role}</p>
                  <p>Expires: {session.expires}</p>
                </div>
              ) : (
                <p>No active session</p>
              )}
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Session Actions</h3>
              <div className="flex space-x-4">
                <button
                  onClick={handleRefreshSession}
                  disabled={isRefreshing || !session}
                  className={`px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 ${
                    (isRefreshing || !session) &&
                    "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {isRefreshing ? "Refreshing..." : "Refresh Session"}
                </button>
                <button
                  onClick={handleUpdateSession}
                  disabled={isUpdating || !session}
                  className={`px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 ${
                    (isUpdating || !session) && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {isUpdating ? "Updating..." : "Update Session"}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-800 font-medium">Implementation Details:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-800">
              <li>Session state management with useSession hook</li>
              <li>Session refresh functionality</li>
              <li>Session update capabilities</li>
              <li>Loading state handling</li>
              <li>Error handling for session operations</li>
              <li>Session persistence and expiration</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/authentication/starter/session"
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

export default SessionSolution;
