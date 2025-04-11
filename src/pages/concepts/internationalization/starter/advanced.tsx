import React from "react";
import Link from "next/link";

const AdvancedFeaturesStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Advanced Features (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement advanced internationalization features like
          date formatting and pluralization.
        </p>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Advanced Features</h2>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Date Formatting</h3>
                <p>TODO: Display formatted date</p>
                <p>TODO: Display formatted date with time</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Number Formatting</h3>
                <p>TODO: Display formatted number</p>
                <p>TODO: Display formatted currency</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Pluralization</h3>
                <p>TODO: Display singular/plural text</p>
                <p>TODO: Display plural text with count</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800 font-medium">Tasks to Complete:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-800">
              <li>Implement date formatting for different locales</li>
              <li>Add number and currency formatting</li>
              <li>Handle pluralization rules</li>
              <li>Create language-specific formatting</li>
              <li>Add formatting options</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/internationalization/solution/advanced"
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

export default AdvancedFeaturesStarter;
