import React from "react";
import Image from "next/image";
import Link from "next/link";

// Example image URLs using placeholder service
const images = {
  hero: {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    width: 1920,
    height: 1080,
  },
  grid: {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    width: 800,
    height: 600,
  },
};

const ResponsiveImageOptimization = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Responsive Image Optimization</h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates responsive image optimization techniques in
          Next.js, including different sizes, formats, and responsive layouts.
        </p>

        {/* Hero Image Example */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Hero Image</h2>
          <div className="relative aspect-video">
            <Image
              src={images.hero.url}
              alt="Responsive hero image"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">
            The hero image above uses responsive sizing and priority loading.
          </p>
        </div>

        {/* Responsive Grid Example */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Responsive Image Grid</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={`${images.grid.url}?w=800`}
                  alt={`Grid image ${index}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Responsive grid with optimized images for different screen sizes.
          </p>
        </div>

        {/* Responsive Card Example */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Responsive Card</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative w-full md:w-1/3 aspect-square">
              <Image
                src={`${images.grid.url}?w=800`}
                alt="Card image"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Card Title</h3>
              <p className="text-gray-600">
                This card demonstrates how images can adapt to different layouts
                while maintaining aspect ratio and proper sizing.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800 font-medium">Key Features:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Responsive image sizing with the sizes attribute</li>
            <li>Automatic format optimization</li>
            <li>Responsive grid layouts</li>
            <li>Priority loading for important images</li>
            <li>Maintained aspect ratios</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/image-optimization/starter/responsive"
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

export default ResponsiveImageOptimization;
