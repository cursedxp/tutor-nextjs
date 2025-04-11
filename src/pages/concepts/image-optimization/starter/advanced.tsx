import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// TODO: Define image URLs and sizes
// 1. Create desktop, tablet, and mobile image configurations
// 2. Add width and height for each version
// 3. Use appropriate image URLs

// TODO: Add blur hash placeholder
// 1. Generate or use a placeholder blur data URL
// 2. This will be shown while the image loads

const AdvancedImageOptimizationStarter = () => {
  // TODO: Add loading state
  // 1. Create state for tracking image load
  // 2. Use it to handle loading transitions

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Advanced Image Optimization</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement advanced image optimization techniques in
          Next.js. Follow the TODO comments in the code to complete the
          implementation.
        </p>

        {/* TODO: Blur-up Loading Example */}
        {/* 1. Add Image component with blur placeholder */}
        {/* 2. Handle loading state transition */}
        {/* 3. Use appropriate sizing and priority */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Blur-up Loading</h2>
          <div className="relative aspect-video">
            {/* Add Image component here */}
          </div>
        </div>

        {/* TODO: Art Direction Example */}
        {/* 1. Use picture element for different screen sizes */}
        {/* 2. Add source elements with media queries */}
        {/* 3. Include fallback Image component */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Art Direction</h2>
          <div className="relative aspect-video">
            {/* Add picture element here */}
          </div>
        </div>

        {/* TODO: Responsive Images Grid */}
        {/* 1. Create a responsive grid */}
        {/* 2. Add multiple optimized images */}
        {/* 3. Use appropriate sizes prop */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Responsive Images Grid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Add grid items here */}
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800 font-medium">Steps to Implement:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Configure image sources and sizes</li>
            <li>Add blur-up loading effect</li>
            <li>Implement art direction</li>
            <li>Create responsive grid</li>
            <li>Test on different devices</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/image-optimization/solution/advanced"
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

export default AdvancedImageOptimizationStarter;
