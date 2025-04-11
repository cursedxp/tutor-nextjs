import React, { useState } from "react";
import Link from "next/link";
import styles from "./advanced.module.css";

const AdvancedStyling = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
        Advanced Styling in Next.js
      </h1>

      <div className="mb-8">
        <p className="text-sm md:text-base lg:text-lg mb-4">
          This example demonstrates advanced styling techniques including
          animations, transitions, and complex layouts.
        </p>

        {/* Animated Menu Button */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Animated Menu Button</h2>
          <button
            className={`${styles.menuButton} ${isMenuOpen ? styles.open : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={styles.hamburger}></span>
          </button>
        </div>

        {/* Animated Tabs */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Animated Tabs</h2>
          <div className={styles.tabContainer}>
            {["Tab 1", "Tab 2", "Tab 3"].map((tab, index) => (
              <button
                key={index}
                className={`${styles.tab} ${
                  activeTab === index ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
            <div
              className={styles.tabIndicator}
              style={{ transform: `translateX(${activeTab * 100}%)` }}
            ></div>
          </div>
        </div>

        {/* Complex Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div
            className={`${styles.gridItem} ${styles.featured} md:col-span-2`}
          >
            <h3 className="text-lg font-semibold mb-2">Featured Content</h3>
            <p>This item spans two columns on larger screens.</p>
          </div>
          <div className={styles.gridItem}>
            <h3 className="text-lg font-semibold mb-2">Sidebar</h3>
            <p>Regular grid item with hover effects.</p>
          </div>
          <div className={styles.gridItem}>
            <h3 className="text-lg font-semibold mb-2">Item 1</h3>
            <p>Grid item with transition effects.</p>
          </div>
          <div className={styles.gridItem}>
            <h3 className="text-lg font-semibold mb-2">Item 2</h3>
            <p>Another grid item with animations.</p>
          </div>
          <div className={styles.gridItem}>
            <h3 className="text-lg font-semibold mb-2">Item 3</h3>
            <p>More content with styling.</p>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Loading Animation</h2>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}></div>
            <div className={styles.loadingText}>Loading...</div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
          <p className="text-blue-800 font-medium">Key Points:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800 space-y-2">
            <li>CSS animations and transitions</li>
            <li>Complex grid layouts</li>
            <li>Interactive components</li>
            <li>Custom loading spinners</li>
            <li>State-based animations</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/styling/starter/advanced"
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

export default AdvancedStyling;
