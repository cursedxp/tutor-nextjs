import React from "react";
import Link from "next/link";
import styles from "./responsive.module.css";

const ResponsiveStyling = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
        Responsive Design in Next.js
      </h1>

      <div className="mb-8">
        <p className="text-sm md:text-base lg:text-lg mb-4">
          This example demonstrates responsive design techniques using Tailwind
          CSS breakpoints and CSS Modules with media queries.
        </p>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Responsive Card 1</h2>
            <p className="text-gray-600">
              This card adjusts its width based on screen size using Tailwind's
              grid system.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Responsive Card 2</h2>
            <p className="text-gray-600">
              The grid layout changes from 1 column on mobile to 3 columns on
              desktop.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Responsive Card 3</h2>
            <p className="text-gray-600">
              Padding and text size also adjust responsively using breakpoint
              prefixes.
            </p>
          </div>
        </div>

        {/* Responsive Navigation */}
        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <nav className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">Responsive Navigation</h2>
            </div>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* CSS Modules with Media Queries */}
        <div className={styles.responsiveContainer}>
          <h2 className={styles.heading}>CSS Modules Media Queries</h2>
          <p className={styles.text}>
            This section uses CSS Modules with media queries for responsive
            styling. The background color and layout change at different
            breakpoints.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
          <p className="text-blue-800 font-medium">Key Points:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800 space-y-2">
            <li>Mobile-first design approach</li>
            <li>Tailwind CSS responsive prefixes (sm:, md:, lg:)</li>
            <li>CSS Modules with media queries</li>
            <li>Responsive grid layouts</li>
            <li>Flexible navigation patterns</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <Link
          href="/concepts/styling/starter/responsive"
          className="text-blue-600 hover:underline"
        >
          View Starter Version
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ResponsiveStyling;
