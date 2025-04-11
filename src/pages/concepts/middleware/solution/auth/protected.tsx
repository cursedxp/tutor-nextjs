import React from "react";
import Link from "next/link";

const ProtectedPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Protected Page</h1>

      <div className="mb-8">
        <p className="mb-4">
          This is a protected page that requires authentication. You can only
          see this page if you have the auth-token cookie set.
        </p>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-green-800 font-medium">Authentication Status:</p>
          <p className="mt-2">You are authenticated! 🎉</p>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/middleware/solution/auth/public"
          className="text-blue-600 hover:underline"
        >
          Go to Public Page
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

export default ProtectedPage;
