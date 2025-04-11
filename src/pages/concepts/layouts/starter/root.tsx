import React from "react";
import Link from "next/link";

// TODO: Implement the Root Layout Component
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* TODO: Implement header with navigation */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Add navigation here */}
        </div>
      </header>

      {/* TODO: Implement main content area */}
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>

      {/* TODO: Implement footer */}
      <footer className="bg-white shadow mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Add footer content here */}
        </div>
      </footer>
    </div>
  );
};

// Example Page Content
const RootLayoutStarter: React.FC = () => {
  return (
    <RootLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-6">Root Layout (Starter)</h1>
          <p className="mb-4">
            Your task is to implement a root layout that wraps all pages in your
            Next.js application.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Required Features</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Header with navigation links</li>
            <li>Main content area with proper spacing</li>
            <li>Sticky footer at the bottom</li>
            <li>Responsive design</li>
            <li>Proper content organization</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Tasks to Complete:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Create navigation menu</li>
            <li>Style header and footer</li>
            <li>Implement responsive layout</li>
            <li>Add proper spacing</li>
            <li>Ensure accessibility</li>
          </ul>
        </div>

        <div className="flex space-x-4">
          <Link
            href="/concepts/layouts/solution/root"
            className="text-blue-600 hover:underline"
          >
            View Solution
          </Link>
          <Link
            href="/concepts/layouts/starter/nested"
            className="text-blue-600 hover:underline"
          >
            View Nested Layout Example
          </Link>
          <Link
            href="/concepts/layouts/starter/dynamic"
            className="text-blue-600 hover:underline"
          >
            View Dynamic Layout Example
          </Link>
        </div>
      </div>
    </RootLayout>
  );
};

export default RootLayoutStarter;
