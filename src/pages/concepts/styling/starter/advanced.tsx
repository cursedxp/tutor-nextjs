import React from "react";
import Link from "next/link";
// TODO: Import the CSS Module
// 1. Create an advanced.module.css file
// 2. Import it and use its styles

const AdvancedStylingStarter = () => {
  // TODO: Add state for menu and tabs
  // 1. Create isMenuOpen state
  // 2. Create activeTab state

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Advanced Styling Exercise</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement advanced styling techniques in Next.js.
          Follow the TODO comments in the code to complete the implementation.
        </p>

        {/* TODO: Animated Menu Button */}
        {/* 1. Create hamburger menu button */}
        {/* 2. Add open/close animation */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Animated Menu Button</h2>
          <button>
            <span>Menu</span>
          </button>
        </div>

        {/* TODO: Animated Tabs */}
        {/* 1. Create tab container */}
        {/* 2. Add sliding indicator */}
        {/* 3. Implement tab switching */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Animated Tabs</h2>
          <div>
            {["Tab 1", "Tab 2", "Tab 3"].map((tab, index) => (
              <button key={index}>{tab}</button>
            ))}
          </div>
        </div>

        {/* TODO: Complex Grid Layout */}
        {/* 1. Create responsive grid */}
        {/* 2. Add hover animations */}
        {/* 3. Style featured item */}
        <div className="mb-8">
          <div>
            <h3>Featured Content</h3>
            <p>Make this item span two columns.</p>
          </div>
          <div>
            <h3>Sidebar</h3>
            <p>Add hover effects.</p>
          </div>
          <div>
            <h3>Item 1</h3>
            <p>Add transitions.</p>
          </div>
          <div>
            <h3>Item 2</h3>
            <p>Add animations.</p>
          </div>
          <div>
            <h3>Item 3</h3>
            <p>Style this item.</p>
          </div>
        </div>

        {/* TODO: Loading Animation */}
        {/* 1. Create spinner animation */}
        {/* 2. Add loading text with pulse effect */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Loading Animation</h2>
          <div>
            <div>Spinner</div>
            <div>Loading...</div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
          <p className="text-blue-800 font-medium">Steps to Implement:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Create menu button animation</li>
            <li>Implement tab switching</li>
            <li>Build responsive grid</li>
            <li>Add hover effects</li>
            <li>Create loading spinner</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/styling/solution/advanced"
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

export default AdvancedStylingStarter;
