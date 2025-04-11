import React from "react";
import Link from "next/link";

const BasicI18nStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Basic Internationalization (Starter)
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement basic internationalization with language
          switching.
        </p>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Current Language</h2>
            <p className="mb-4">TODO: Display current language</p>

            <div className="flex space-x-4 mb-6">
              <button className="px-4 py-2 bg-gray-100 rounded">
                TODO: English
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded">
                TODO: Spanish
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded">
                TODO: French
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Example Content</h3>
              <p>TODO: Display translated content</p>
              <p>TODO: Display translated content</p>
              <p>TODO: Display translated content</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800 font-medium">Tasks to Complete:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-800">
              <li>Set up Next.js i18n configuration</li>
              <li>Create translation files for each language</li>
              <li>Implement language switching functionality</li>
              <li>Display translated content</li>
              <li>Handle language persistence</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/internationalization/solution/basic"
          className="text-blue-600 hover:underline"
        >
          View Solution
        </Link>
        <Link
          href="/concepts/internationalization/starter"
          className="text-gray-600 hover:underline"
        >
          Back to Starter
        </Link>
      </div>
    </div>
  );
};

export default BasicI18nStarter;
