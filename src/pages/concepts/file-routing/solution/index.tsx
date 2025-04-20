import React from "react";
import Link from "next/link";

const FileRoutingSolution = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">File-Based Routing (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Next.js has a file-system based router built on the concept of pages.
          When a file is added to the pages directory, it&apos;s automatically
          available as a route.
        </p>

        <p className="mb-4">
          This is the index page located at{" "}
          <code>/pages/concepts/file-routing/solution/index.tsx</code>. Below
          are links to other pages in this solution:
        </p>

        <ul className="list-disc ml-8 mb-6 space-y-2">
          <li>
            <Link
              href="/concepts/file-routing/solution/about"
              className="text-blue-600 hover:underline"
            >
              About Page
            </Link>
            <span className="text-gray-600 ml-2">
              - Located at /pages/concepts/file-routing/solution/about.tsx
            </span>
          </li>
          <li>
            <Link
              href="/concepts/file-routing/solution/settings/profile"
              className="text-blue-600 hover:underline"
            >
              Settings Profile Page
            </Link>
            <span className="text-gray-600 ml-2">
              - Located at
              /pages/concepts/file-routing/solution/settings/profile.tsx
            </span>
          </li>
        </ul>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <p className="text-green-800 font-medium">Key Takeaways:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>
              Files inside the <code>pages</code> directory automatically become
              routes
            </li>
            <li>
              <code>index.tsx</code> files correspond to the root of a directory
              path
            </li>
            <li>Nested directories create nested routes</li>
            <li>
              File names with hyphens create routes with hyphens (e.g.,{" "}
              <code>contact-us.tsx</code> becomes <code>/contact-us</code>)
            </li>
            <li>
              The <code>Link</code> component enables client-side navigation
              between pages
            </li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/file-routing/starter"
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

export default FileRoutingSolution;
