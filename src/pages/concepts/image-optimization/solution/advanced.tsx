import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Example image URLs using placeholder service
const images = {
  desktop: {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    width: 1920,
    height: 1080,
  },
  tablet: {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=1024",
    width: 1024,
    height: 768,
  },
  mobile: {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=640",
    width: 640,
    height: 480,
  },
};

// Simple blur data URL (light gray)
const blurDataURL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

const AdvancedImageOptimization = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Advanced Image Optimization</h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates advanced image optimization techniques in
          Next.js, including blur-up loading, art direction, and responsive
          images.
        </p>

        {/* Blur-up Loading Example */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Blur-up Loading</h2>
          <div className="relative aspect-video">
            <Image
              src={images.desktop.url}
              alt="Example image with blur-up loading"
              fill
              className={`object-cover transition-opacity duration-500 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              placeholder="blur"
              blurDataURL={blurDataURL}
              onLoadingComplete={() => setIsLoading(false)}
              priority
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">
            The image above uses blur-up loading for a smooth transition.
          </p>
        </div>

        {/* Art Direction Example */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Art Direction</h2>
          <div className="relative aspect-video">
            <picture>
              {/* Desktop */}
              <source
                media="(min-width: 1024px)"
                srcSet={`${images.desktop.url}?w=1920&q=75`}
              />
              {/* Tablet */}
              <source
                media="(min-width: 768px)"
                srcSet={`${images.tablet.url}?w=1024&q=75`}
              />
              {/* Mobile */}
              <Image
                src={images.mobile.url}
                alt="Example of art direction"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </picture>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Different image versions are loaded based on screen size.
          </p>
        </div>

        {/* Responsive Images Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Responsive Images Grid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={`${images.desktop.url}?w=600`}
                  alt={`Grid image ${index}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Responsive grid with optimized images for different screen sizes.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800 font-medium">Key Features:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>Blur-up image loading</li>
            <li>Art direction with picture element</li>
            <li>Responsive image sizing</li>
            <li>Automatic quality optimization</li>
            <li>Lazy loading with priority options</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/image-optimization/starter/advanced"
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

export default AdvancedImageOptimization;
