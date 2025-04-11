import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const ProtectedRoutesSolution = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <p>Loading...</p>
      </div>
    );
  }

  if (!session) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Protected Routes (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates protected routes that require
          authentication.
        </p>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Route Protection</h2>
            <p className="mb-4">Current route: {router.pathname}</p>

            <div className="flex space-x-4 mb-6">
              <button
                onClick={() =>
                  router.push("/concepts/authentication/protected/dashboard")
                }
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Access Protected Dashboard
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Protected Content</h3>
              <div className="space-y-2">
                <p>Welcome, {session.user?.name}!</p>
                <p>This content is only visible to authenticated users.</p>
                <p>Your email: {session.user?.email}</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-800 font-medium">Implementation Details:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-800">
              <li>Protected route component with authentication check</li>
              <li>Automatic redirect to login for unauthenticated users</li>
              <li>Loading state handling</li>
              <li>Error handling for authentication failures</li>
              <li>Session-based route protection</li>
              <li>Protected content display</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/authentication/starter/protected"
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

export default ProtectedRoutesSolution;
