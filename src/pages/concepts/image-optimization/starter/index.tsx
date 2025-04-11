import React from "react";
import Link from "next/link";

const ImageOptimizationStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Image Optimization (Starter)</h1>

      <div className="mb-8">
        <p className="mb-4">
          This is a starter template for implementing image optimization in
          Next.js. Your task is to implement the following:
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              1. Basic Image Optimization
            </h2>
            <p className="mb-2">
              Implement basic image optimization using the Next.js Image
              component.
            </p>
            <Link
              href="/concepts/image-optimization/starter/basic"
              className="text-blue-600 hover:underline"
            >
              Go to Basic Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">2. Responsive Images</h2>
            <p className="mb-2">
              Create responsive images that adapt to different screen sizes.
            </p>
            <Link
              href="/concepts/image-optimization/starter/responsive"
              className="text-blue-600 hover:underline"
            >
              Go to Responsive Exercise
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              3. Advanced Optimization
            </h2>
            <p className="mb-2">
              Implement advanced optimization techniques for better performance.
            </p>
            <Link
              href="/concepts/image-optimization/starter/advanced"
              className="text-blue-600 hover:underline"
            >
              Go to Advanced Exercise
            </Link>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
          <p className="text-yellow-800 font-medium">Exercise Instructions:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Use the Next.js Image component for optimization</li>
            <li>Implement responsive image sizes</li>
            <li>Add blur placeholders for better UX</li>
            <li>Optimize image loading with priority and lazy loading</li>
            <li>Test performance with different image formats</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/image-optimization/solution"
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

export default ImageOptimizationStarter;
