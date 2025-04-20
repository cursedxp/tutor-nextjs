import { signIn, signOut, useSession } from "next-auth/react";

export default function OAuthDemo() {
  const { data: session, status } = useSession();

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-bold mb-2">OAuth Authentication Demo</h1>
        <p className="text-gray-600 mb-4">
          This demo shows how to implement OAuth authentication using
          NextAuth.js
        </p>

        {status === "loading" ? (
          <p className="text-gray-600">Loading...</p>
        ) : session ? (
          <div className="space-y-4">
            <div>
              <h2 className="font-medium mb-2">User Information</h2>
              <pre className="bg-gray-50 p-3 rounded text-sm overflow-auto">
                {JSON.stringify(session, null, 2)}
              </pre>
            </div>
            <button
              onClick={() => signOut()}
              className="w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <button
              onClick={() => signIn("google")}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Sign in with Google
            </button>
            <button
              onClick={() => signIn("github")}
              className="w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-900"
            >
              Sign in with GitHub
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
