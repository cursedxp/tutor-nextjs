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

const BasicImageOptimization: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Basic Image Optimization</h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates basic image optimization techniques in
          Next.js using the Image component.
        </p>

        {/* Fixed Size Image Example */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Fixed Size Image</h2>
          <div className="flex justify-center">
            <Image
              src={images.landscape.url}
              alt="Fixed size landscape image"
              width={800}
              height={450}
              className="rounded-lg"
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">
            The image above uses fixed dimensions (800x450) and automatic format
            optimization.
          </p>
        </div>

        {/* Fill Container Image Example */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Fill Container Image</h2>
          <div className="relative h-64 w-full">
            <Image
              src={images.portrait.url}
              alt="Fill container portrait image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">
            The image above fills its container while maintaining aspect ratio.
          </p>
        </div>

        {/* Quality Optimization Example */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quality Optimization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg mb-2">Default Quality (75)</h3>
              <div className="relative h-48">
                <Image
                  src={images.landscape.url}
                  alt="Default quality image"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg mb-2">High Quality (100)</h3>
              <div className="relative h-48">
                <Image
                  src={images.landscape.url}
                  alt="High quality image"
                  fill
                  className="object-cover rounded-lg"
                  quality={100}
                />
              </div>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Compare the image quality between default (75) and high (100)
            settings.
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-green-800 font-medium">Key Features:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Automatic image optimization</li>
            <li>Responsive image loading</li>
            <li>Lazy loading by default</li>
            <li>Quality control options</li>
            <li>Automatic WebP format conversion</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/image-optimization/starter/basic"
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

export default BasicImageOptimization;
