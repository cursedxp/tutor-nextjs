import React from "react";
import Link from "next/link";
// TODO: Import the CSS Module
// 1. Create a basic.module.css file
// 2. Import it and use its styles

const BasicStylingStarter = () => {
  // TODO: Define inline styles
  // 1. Create an object with style properties
  // 2. Use camelCase for property names
  // 3. Values should be strings

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Basic Styling Exercise</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement different styling approaches in Next.js.
          Follow the TODO comments in the code to complete the implementation.
        </p>

        {/* TODO: CSS Modules Example */}
        {/* 1. Create a card with heading, text, and button */}
        {/* 2. Use CSS Module classes for styling */}
        <div>
          <h2>CSS Modules Example</h2>
          <p>Style this section using CSS Modules.</p>
          <button>CSS Modules Button</button>
        </div>

        {/* TODO: Inline Styles Example */}
        {/* 1. Apply inline styles object */}
        {/* 2. Add inline styles to button */}
        <div>
          <h2>Inline Styles Example</h2>
          <p>Style this section using inline styles.</p>
          <button>Inline Styled Button</button>
        </div>

        {/* TODO: Global CSS (Tailwind) Example */}
        {/* 1. Use Tailwind classes for styling */}
        {/* 2. Create a card with green theme */}
        <div>
          <h2>Global CSS Example</h2>
          <p>Style this section using Tailwind CSS.</p>
          <button>Tailwind Button</button>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
          <p className="text-blue-800 font-medium">Steps to Implement:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Create and import CSS Module</li>
            <li>Define and apply CSS Module classes</li>
            <li>Create inline styles object</li>
            <li>Apply Tailwind CSS classes</li>
            <li>Style interactive elements</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/styling/solution/basic"
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

export default BasicStylingStarter;
