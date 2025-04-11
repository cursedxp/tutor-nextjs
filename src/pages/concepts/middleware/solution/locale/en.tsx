import React from "react";
import Link from "next/link";

const EnglishPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">English Version</h1>

      <div className="mb-8">
        <p className="mb-4">
          This is the English version of the page. The middleware has detected
          your language preference and set the appropriate headers.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="font-medium text-gray-900">Language Information:</p>
          <p className="mt-2 text-gray-900">Current Language: English (en)</p>
          <p className="mt-2 text-gray-900">Locale Header: en</p>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/middleware/solution/locale/es"
          className="text-blue-600 hover:underline"
        >
          Ver en Español
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

export default EnglishPage;
