import React from "react";
import Link from "next/link";

const DynamicRoutesStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dynamic Routes (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement dynamic routes for different languages.
        </p>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Language Routes</h2>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Available Routes</h3>
                <div className="flex space-x-4">
                  <Link
                    href="/concepts/internationalization/starter/routes/en"
                    className="text-blue-600 hover:underline"
                  >
                    TODO: English Route
                  </Link>
                  <Link
                    href="/concepts/internationalization/starter/routes/es"
                    className="text-blue-600 hover:underline"
                  >
                    TODO: Spanish Route
                  </Link>
                  <Link
                    href="/concepts/internationalization/starter/routes/fr"
                    className="text-blue-600 hover:underline"
                  >
                    TODO: French Route
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Dynamic Content</h3>
                <p>TODO: Display content based on route</p>
                <p>TODO: Display content based on route</p>
                <p>TODO: Display content based on route</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800 font-medium">Tasks to Complete:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-800">
              <li>Set up dynamic route structure</li>
              <li>Create language-specific pages</li>
              <li>Implement route-based content</li>
              <li>Handle language detection</li>
              <li>Add navigation between routes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/internationalization/solution/routes"
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

export default DynamicRoutesStarter;
