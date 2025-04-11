import React from "react";
import Link from "next/link";

const InternationalizationSolution = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Internationalization (Solution)
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          Next.js provides built-in support for internationalization (i18n).
          This solution demonstrates different techniques for implementing
          multi-language support in your application.
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">1. Basic i18n</h2>
            <p className="mb-2">
              Implement basic internationalization with language switching.
            </p>
            <Link
              href="/concepts/internationalization/solution/basic"
              className="text-blue-600 hover:underline"
            >
              View Basic i18n Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">2. Dynamic Routes</h2>
            <p className="mb-2">
              Create dynamic routes for different languages.
            </p>
            <Link
              href="/concepts/internationalization/solution/routes"
              className="text-blue-600 hover:underline"
            >
              View Dynamic Routes Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">3. Advanced Features</h2>
            <p className="mb-2">
              Implement advanced features like date formatting and
              pluralization.
            </p>
            <Link
              href="/concepts/internationalization/solution/advanced"
              className="text-blue-600 hover:underline"
            >
              View Advanced Features Example
            </Link>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
          <p className="text-green-800 font-medium">Key Takeaways:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Use Next.js built-in i18n support for routing</li>
            <li>Implement language detection and switching</li>
            <li>Handle dynamic routes for different languages</li>
            <li>Format dates, numbers, and currencies according to locale</li>
            <li>Manage translations efficiently</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/internationalization/starter"
          className="text-blue-600 hover:underline"
        >
          View Starter Template
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default InternationalizationSolution;
