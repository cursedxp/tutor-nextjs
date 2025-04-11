import React from "react";
import Link from "next/link";

// TODO: Implement the Sidebar Layout Component
const SidebarLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* TODO: Implement sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4">{/* Add sidebar content here */}</div>
      </aside>

      {/* TODO: Implement main content area */}
      <div className="flex-1">
        {/* TODO: Implement header */}
        <header className="bg-white shadow">
          <div className="px-6 py-4">{/* Add header content here */}</div>
        </header>

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

// Example Page Content
const NestedLayoutStarter: React.FC = () => {
  return (
    <SidebarLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-6">Nested Layout (Starter)</h1>
          <p className="mb-4">
            Your task is to implement nested layouts in Next.js using component
            composition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Required Features</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Fixed sidebar navigation</li>
              <li>Top header with user profile</li>
              <li>Main content area</li>
              <li>Responsive design</li>
              <li>Nested components</li>
            </ul>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Implementation Steps</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Create sidebar navigation</li>
              <li>Add header with profile</li>
              <li>Style components</li>
              <li>Make it responsive</li>
              <li>Add interactivity</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Tasks to Complete:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Implement sidebar navigation</li>
            <li>Create header with user profile</li>
            <li>Add navigation links</li>
            <li>Style the layout</li>
            <li>Make it responsive</li>
          </ul>
        </div>

        <div className="flex space-x-4">
          <Link
            href="/concepts/layouts/solution/nested"
            className="text-blue-600 hover:underline"
          >
            View Solution
          </Link>
          <Link
            href="/concepts/layouts/starter/root"
            className="text-blue-600 hover:underline"
          >
            View Root Layout Example
          </Link>
          <Link
            href="/concepts/layouts/starter/dynamic"
            className="text-blue-600 hover:underline"
          >
            View Dynamic Layout Example
          </Link>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default NestedLayoutStarter;
