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

        {/* Fixed Size Image */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Fixed Size Image</h2>
          <div className="relative w-[800px] h-[450px]">
            <Image
              src={images.landscape.url}
              alt="Landscape image"
              width={800}
              height={450}
              className="object-cover"
            />
          </div>
        </div>

        {/* Fill Container Image */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Fill Container Image</h2>
          <div className="relative w-full h-[400px]">
            <Image
              src={images.portrait.url}
              alt="Portrait image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Quality Optimization */}
        <div className="mb-8 border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Quality Optimization</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Default Quality (75)</h3>
              <div className="relative w-full h-[300px]">
                <Image
                  src={images.landscape.url}
                  alt="Default quality image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">High Quality (100)</h3>
              <div className="relative w-full h-[300px]">
                <Image
                  src={images.landscape.url}
                  alt="High quality image"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
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
