import React from "react";
import Link from "next/link";

const AnalyticsAbout = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Analytics About Page</h1>

      <div className="mb-8">
        <p className="mb-4">
          This is the about page. The analytics middleware is tracking your
          visit and adding custom headers to the response.
        </p>

        <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
          <p className="font-medium text-gray-900">Analytics Information:</p>
          <p className="mt-2 text-gray-900">Page: About</p>
          <p className="mt-2 text-gray-900">
            Timestamp: {new Date().toISOString()}
          </p>
          <p className="mt-2 text-gray-900">
            Check the network tab in your browser's developer tools to see the
            analytics headers.
          </p>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/middleware/solution/analytics/home"
          className="text-blue-600 hover:underline"
        >
          Go to Home Page
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

export default AnalyticsAbout;
