import React from "react";
import Link from "next/link";

const ImageOptimizationSolution = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Image Optimization (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          Next.js provides powerful image optimization features through the
          Image component. This solution demonstrates different image
          optimization techniques.
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              1. Basic Image Optimization
            </h2>
            <p className="mb-2">
              Use the Next.js Image component for automatic optimization.
            </p>
            <Link
              href="/concepts/image-optimization/solution/basic"
              className="text-blue-600 hover:underline"
            >
              View Basic Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">2. Responsive Images</h2>
            <p className="mb-2">
              Implement responsive images with different sizes and formats.
            </p>
            <Link
              href="/concepts/image-optimization/solution/responsive"
              className="text-blue-600 hover:underline"
            >
              View Responsive Example
            </Link>
          </div>

          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">
              3. Advanced Optimization
            </h2>
            <p className="mb-2">
              Implement advanced optimization techniques like blur placeholder
              and priority loading.
            </p>
            <Link
              href="/concepts/image-optimization/solution/advanced"
              className="text-blue-600 hover:underline"
            >
              View Advanced Example
            </Link>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
          <p className="text-green-800 font-medium">Key Takeaways:</p>
          <ul className="list-disc ml-6 mt-2 text-black">
            <li>Use the Next.js Image component for automatic optimization</li>
            <li>Implement responsive images for different devices</li>
            <li>Use blur placeholder for better loading experience</li>
            <li>Optimize image loading with priority and lazy loading</li>
            <li>Consider different image formats for better performance</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/image-optimization/starter"
          className="text-blue-600 hover:underline"
        >
          View Starter Template
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ImageOptimizationSolution;
