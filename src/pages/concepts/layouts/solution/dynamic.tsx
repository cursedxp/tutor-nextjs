import React, { useState } from "react";
import Link from "next/link";

// Layout Types
type LayoutType = "default" | "compact" | "wide";

interface LayoutProps {
  children: React.ReactNode;
  type: LayoutType;
}

// Dynamic Layout Component
const DynamicLayout: React.FC<LayoutProps> = ({ children, type }) => {
  const layoutStyles = {
    default: {
      container: "max-w-4xl mx-auto px-4 py-8",
      content: "bg-white shadow rounded-lg p-6",
    },
    compact: {
      container: "max-w-2xl mx-auto px-4 py-4",
      content: "bg-white shadow-sm rounded p-4",
    },
    wide: {
      container: "max-w-7xl mx-auto px-6 py-12",
      content: "bg-white shadow-lg rounded-xl p-8",
    },
  };

  const styles = layoutStyles[type];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className={layoutStyles[type].container}>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Dynamic Layout</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Current Layout: {type}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.container}>
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
};

// Example Page Content
const DynamicLayoutSolution: React.FC = () => {
  const [currentLayout, setCurrentLayout] = useState<LayoutType>("default");

  return (
    <DynamicLayout type={currentLayout}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-6">Dynamic Layout (Solution)</h1>
          <p className="mb-4">
            This example demonstrates how to create dynamic layouts that can
            change based on user preferences or content requirements.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Layout Controls</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentLayout("default")}
              className={`px-4 py-2 rounded ${
                currentLayout === "default"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Default Layout
            </button>
            <button
              onClick={() => setCurrentLayout("compact")}
              className={`px-4 py-2 rounded ${
                currentLayout === "compact"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Compact Layout
            </button>
            <button
              onClick={() => setCurrentLayout("wide")}
              className={`px-4 py-2 rounded ${
                currentLayout === "wide"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Wide Layout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Layout Features</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Dynamic width and spacing</li>
              <li>Responsive containers</li>
              <li>Adjustable padding and margins</li>
              <li>Different shadow styles</li>
              <li>Flexible content areas</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Implementation</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>State-based layout switching</li>
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS utilities</li>
              <li>Component composition</li>
              <li>Responsive design</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800 font-medium">Key Features:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Dynamic layout switching</li>
            <li>Multiple layout options</li>
            <li>Consistent styling across layouts</li>
            <li>Smooth transitions</li>
            <li>User preference management</li>
          </ul>
        </div>

        <div className="flex space-x-4">
          <Link
            href="/concepts/layouts/starter/dynamic"
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
            href="/concepts/layouts/solution/nested"
            className="text-blue-600 hover:underline"
          >
            View Nested Layout Example
          </Link>
        </div>
      </div>
    </DynamicLayout>
  );
};

export default DynamicLayoutSolution;
