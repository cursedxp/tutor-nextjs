import React from "react";
import Link from "next/link";
// TODO: Import the CSS Module
// 1. Create a responsive.module.css file
// 2. Import it and use its styles

const ResponsiveStylingStarter = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Responsive Design Exercise</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement responsive design patterns in Next.js.
          Follow the TODO comments in the code to complete the implementation.
        </p>

        {/* TODO: Responsive Grid Layout */}
        {/* 1. Create a responsive grid */}
        {/* 2. Add three cards that adjust based on screen size */}
        <div>
          {/* Card 1 */}
          <div>
            <h2>Responsive Card 1</h2>
            <p>Make this card responsive using Tailwind breakpoints.</p>
          </div>

          {/* Card 2 */}
          <div>
            <h2>Responsive Card 2</h2>
            <p>Adjust the grid layout for different screen sizes.</p>
          </div>

          {/* Card 3 */}
          <div>
            <h2>Responsive Card 3</h2>
            <p>Use responsive padding and text sizes.</p>
          </div>
        </div>

        {/* TODO: Responsive Navigation */}
        {/* 1. Create a navigation that switches from column to row */}
        {/* 2. Adjust spacing and alignment responsively */}
        <div>
          <nav>
            <div>
              <h2>Responsive Navigation</h2>
            </div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* TODO: CSS Modules with Media Queries */}
        {/* 1. Create responsive styles in CSS Module */}
        {/* 2. Apply different layouts at breakpoints */}
        <div>
          <h2>CSS Modules Media Queries</h2>
          <p>Style this section using CSS Modules with media queries.</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
          <p className="text-blue-800 font-medium">Steps to Implement:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Create responsive grid layout</li>
            <li>Implement mobile-first navigation</li>
            <li>Add CSS Module with media queries</li>
            <li>Use Tailwind responsive prefixes</li>
            <li>Test at different breakpoints</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/styling/solution/responsive"
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

export default ResponsiveStylingStarter;
