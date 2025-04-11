import React from "react";
import Link from "next/link";
import styles from "./basic.module.css";

const BasicStyling = () => {
  // Inline styles example
  const inlineStyles = {
    backgroundColor: "#f3f4f6",
    padding: "1rem",
    borderRadius: "0.5rem",
    marginBottom: "1rem",
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Basic Styling in Next.js</h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates different ways to style components in
          Next.js, including CSS Modules, inline styles, and global CSS
          (Tailwind).
        </p>

        {/* CSS Modules Example */}
        <div className={styles.card}>
          <h2 className={styles.heading}>CSS Modules Example</h2>
          <p className={styles.text}>
            This section is styled using CSS Modules, which provides local
            scoping for CSS classes.
          </p>
          <button className={styles.button}>CSS Modules Button</button>
        </div>

        {/* Inline Styles Example */}
        <div style={inlineStyles}>
          <h2 className="text-xl font-semibold mb-2">Inline Styles Example</h2>
          <p className="mb-4">
            This section uses inline styles defined in a JavaScript object.
          </p>
          <button
            style={{
              backgroundColor: "#3b82f6",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Inline Styled Button
          </button>
        </div>

        {/* Global CSS (Tailwind) Example */}
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Global CSS Example</h2>
          <p className="mb-4">
            This section uses Tailwind CSS classes for styling, which is
            included globally.
          </p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Tailwind Button
          </button>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
          <p className="text-blue-800 font-medium">Key Points:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>CSS Modules provide local scoping for styles</li>
            <li>Inline styles are useful for dynamic styling</li>
            <li>Tailwind CSS offers utility-first styling</li>
            <li>Styles can be mixed and matched as needed</li>
            <li>Each approach has its own use cases</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/styling/starter/basic"
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

export default BasicStyling;
