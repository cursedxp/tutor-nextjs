import React from "react";
import Link from "next/link";

const DataFetchingSolution = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Data Fetching (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Next.js provides several methods for data fetching, each suited for
          different use cases. This solution demonstrates the three main
          approaches:
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">1. getStaticProps</h2>
            <p className="mb-2">
              Used for static generation at build time. Perfect for pages that
              can be pre-rendered and don&apos;t need real-time data.
            </p>
            <Link
              href="/concepts/data-fetching/solution/static"
              className="text-blue-600 hover:underline"
            >
              View Static Generation Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              2. getServerSideProps
            </h2>
            <p className="mb-2">
              Used for server-side rendering on each request. Ideal for pages
              that need real-time data or user-specific content.
            </p>
            <Link
              href="/concepts/data-fetching/solution/server"
              className="text-blue-600 hover:underline"
            >
              View Server-Side Rendering Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              3. Client-Side Data Fetching
            </h2>
            <p className="mb-2">
              Used for fetching data on the client side after the page loads.
              Great for dynamic data that changes frequently.
            </p>
            <Link
              href="/concepts/data-fetching/solution/client"
              className="text-blue-600 hover:underline"
            >
              View Client-Side Example
            </Link>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
          <p className="text-green-800 font-medium">Key Takeaways:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>
              Choose the right data fetching method based on your use case
            </li>
            <li>getStaticProps for static content that can be pre-rendered</li>
            <li>
              getServerSideProps for dynamic content that needs to be fresh
            </li>
            <li>Client-side fetching for frequently changing data</li>
            <li>Consider caching strategies for optimal performance</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/data-fetching/starter"
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

export default DataFetchingSolution;
