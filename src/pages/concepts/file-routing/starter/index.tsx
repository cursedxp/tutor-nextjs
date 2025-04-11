import React from "react";
import Link from "next/link";

const FileRoutingStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">File-Based Routing (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Next.js has a file-system based router built on the concept of pages.
          When a file is added to the pages directory, it's automatically
          available as a route.
        </p>

        <p className="mb-4">Your task is to:</p>

        <ol className="list-decimal ml-8 mb-6 space-y-2">
          <li>Create a new page called "about.tsx" in this directory</li>
          <li>Create a nested page by adding "settings/profile.tsx"</li>
          <li>Link all pages together</li>
        </ol>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-yellow-700">
            In this starter template, only this index page exists. Add the other
            pages and navigation to complete the exercise.
          </p>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/file-routing/solution"
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

export default FileRoutingStarter;
