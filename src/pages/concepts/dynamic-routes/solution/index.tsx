import React from "react";
import Link from "next/link";

const DynamicRoutesSolution = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dynamic Routes (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Next.js has a powerful dynamic routing system that allows you to
          create pages with dynamic segments. This solution demonstrates
          different types of dynamic routes.
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              1. Single Dynamic Parameter
            </h2>
            <p className="mb-2">
              A page that handles a single dynamic parameter in the URL.
            </p>
            <Link
              href="/concepts/dynamic-routes/solution/single/1"
              className="text-blue-600 hover:underline"
            >
              View Single Parameter Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              2. Multiple Dynamic Parameters
            </h2>
            <p className="mb-2">
              A page that handles multiple dynamic segments in the URL.
            </p>
            <div className="space-y-2">
              <Link
                href="/concepts/dynamic-routes/solution/multiple/category/electronics"
                className="block text-blue-600 hover:underline"
              >
                View Electronics Category
              </Link>
              <Link
                href="/concepts/dynamic-routes/solution/multiple/category/electronics/laptops"
                className="block text-blue-600 hover:underline"
              >
                View Laptops
              </Link>
              <Link
                href="/concepts/dynamic-routes/solution/multiple/search/electronics"
                className="block text-blue-600 hover:underline"
              >
                View Electronics Search
              </Link>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              3. Optional Dynamic Parameters
            </h2>
            <p className="mb-2">
              A page that handles optional dynamic segments in the URL.
            </p>
            <div className="space-y-2">
              <Link
                href="/concepts/dynamic-routes/solution/optional"
                className="block text-blue-600 hover:underline"
              >
                View Root Path
              </Link>
              <Link
                href="/concepts/dynamic-routes/solution/optional/settings"
                className="block text-blue-600 hover:underline"
              >
                View Settings
              </Link>
              <Link
                href="/concepts/dynamic-routes/solution/optional/settings/profile"
                className="block text-blue-600 hover:underline"
              >
                View Profile Settings
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
          <p className="text-green-800 font-medium">Key Takeaways:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Use [param] for single dynamic parameters</li>
            <li>Use [...params] for multiple dynamic parameters</li>
            <li>Use [[...params]] for optional catch-all routes</li>
            <li>Access route parameters using useRouter or getStaticProps</li>
            <li>Consider fallback pages for dynamic routes</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/dynamic-routes/starter"
          className="text-blue-600 hover:underline"
        >
          View Starter Version
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default DynamicRoutesSolution;
