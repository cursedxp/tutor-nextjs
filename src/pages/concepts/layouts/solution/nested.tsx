import React from "react";
import Link from "next/link";
import Image from "next/image";

// Sidebar Layout Component
const SidebarLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Dashboard
          </h2>
          <nav className="space-y-2">
            <a
              href="#"
              className="block px-4 py-2 rounded-md bg-blue-50 text-blue-700"
            >
              Overview
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Analytics
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Reports
            </a>
            <a
              href="#"
              className="block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Settings
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Dashboard Overview
              </h1>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  New Report
                </button>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

// Example Page Content
const NestedLayoutSolution: React.FC = () => {
  return (
    <SidebarLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-6">Nested Layout (Solution)</h1>
          <p className="mb-4">
            This example demonstrates how to create nested layouts in Next.js
            using composition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Layout Structure</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Fixed sidebar navigation</li>
              <li>Top header with user profile</li>
              <li>Main content area</li>
              <li>Responsive design</li>
              <li>Nested components</li>
            </ul>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Implementation</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Component composition</li>
              <li>Flexible content areas</li>
              <li>Consistent styling</li>
              <li>Proper spacing</li>
              <li>Interactive elements</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800 font-medium">Key Features:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Nested layout components</li>
            <li>Persistent sidebar navigation</li>
            <li>Responsive design patterns</li>
            <li>Component composition</li>
            <li>Clean and modern UI</li>
          </ul>
        </div>

        <div className="flex space-x-4">
          <Link
            href="/concepts/layouts/starter/nested"
            className="text-blue-600 hover:underline"
          >
            View Starter Version
          </Link>
          <Link
            href="/concepts/layouts/solution/root"
            className="text-blue-600 hover:underline"
          >
            View Root Layout Example
          </Link>
          <Link
            href="/concepts/layouts/solution/dynamic"
            className="text-blue-600 hover:underline"
          >
            View Dynamic Layout Example
          </Link>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default NestedLayoutSolution;
