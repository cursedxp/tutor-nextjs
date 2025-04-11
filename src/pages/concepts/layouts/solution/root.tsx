import React from "react";
import Link from "next/link";

// Root Layout Component
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">My App</h1>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>

      {/* Footer */}
      <footer className="bg-white shadow mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600">
            © 2024 My App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Example Page Content
const RootLayoutSolution: React.FC = () => {
  return (
    <RootLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-6">Root Layout (Solution)</h1>
          <p className="mb-4">
            This example demonstrates how to create a root layout that wraps all
            pages in your Next.js application.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Root Layout Features</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Consistent header with navigation</li>
            <li>Main content area with proper spacing</li>
            <li>Sticky footer at the bottom</li>
            <li>Responsive design</li>
            <li>Proper content organization</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800 font-medium">Implementation Details:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Uses React.FC type for type safety</li>
            <li>Implements children prop for content injection</li>
            <li>Utilizes Tailwind CSS for styling</li>
            <li>Maintains consistent spacing and colors</li>
            <li>Follows accessibility best practices</li>
          </ul>
        </div>

        <div className="flex space-x-4">
          <Link
            href="/concepts/layouts/starter/root"
            className="text-blue-600 hover:underline"
          >
            View Starter Version
          </Link>
          <Link
            href="/concepts/layouts/solution/nested"
            className="text-blue-600 hover:underline"
          >
            View Nested Layout Example
          </Link>
          <Link
            href="/concepts/layouts/solution/dynamic"
            className="text-blue-600 hover:underline"
          >
            View Dynamic Layout Example
          </Link>
        </div>
      </div>
    </RootLayout>
  );
};

export default RootLayoutSolution;
