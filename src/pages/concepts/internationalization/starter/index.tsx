import React from "react";
import Link from "next/link";

const InternationalizationStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Internationalization (Starter)
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          This is a starter template for implementing internationalization in
          Next.js. Your task is to implement the following:
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">1. Basic i18n</h2>
            <p className="mb-2">
              Set up basic internationalization with language switching.
            </p>
            <Link
              href="/concepts/internationalization/starter/basic"
              className="text-blue-600 hover:underline"
            >
              Go to Basic i18n Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">2. Dynamic Routes</h2>
            <p className="mb-2">
              Create dynamic routes for different languages.
            </p>
            <Link
              href="/concepts/internationalization/starter/routes"
              className="text-blue-600 hover:underline"
            >
              Go to Dynamic Routes Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">3. Advanced Features</h2>
            <p className="mb-2">
              Implement advanced features like date formatting and
              pluralization.
            </p>
            <Link
              href="/concepts/internationalization/starter/advanced"
              className="text-blue-600 hover:underline"
            >
              Go to Advanced Features Exercise
            </Link>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Configure Next.js i18n settings</li>
            <li>Create translation files for different languages</li>
            <li>Implement language detection and switching</li>
            <li>Handle dynamic routes for different locales</li>
            <li>Format dates, numbers, and currencies according to locale</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/internationalization/solution"
          className="text-blue-600 hover:underline"
        >
          View Solution
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default InternationalizationStarter;
