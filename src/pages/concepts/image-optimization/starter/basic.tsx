import React from "react";
import Image from "next/image";
import Link from "next/link";

// Example image URLs using placeholder service
const images = {
  landscape: {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    width: 1920,
    height: 1080,
  },
  portrait: {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    width: 1080,
    height: 1920,
  },
};

const BasicImageOptimizationStarter: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Basic Image Optimization (Starter)
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          This is the starter template for basic image optimization. Your task
          is to implement the following features:
        </p>

        {/* TODO: Implement Fixed Size Image */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Fixed Size Image</h2>
          <p className="text-gray-600">
            Implement a fixed size image (800x450) using the Next.js Image
            component.
          </p>
        </div>

        {/* TODO: Implement Fill Container Image */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Fill Container Image</h2>
          <p className="text-gray-600">
            Implement an image that fills its container while maintaining aspect
            ratio.
          </p>
        </div>

        {/* TODO: Implement Quality Optimization */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Quality Optimization</h2>
          <p className="text-gray-600">
            Implement two images side by side comparing default quality (75) and
            high quality (100) settings.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-800 font-medium">Tasks to Complete:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Use the Next.js Image component for all images</li>
            <li>Implement fixed size image with proper dimensions</li>
            <li>Implement fill container image with aspect ratio</li>
            <li>Compare image quality settings</li>
            <li>Add proper alt text for accessibility</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/image-optimization/solution/basic"
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

export default BasicImageOptimizationStarter;
