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

const imageConfigs = {
  desktop: {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    width: 1920,
    height: 1080,
  },
  tablet: {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    width: 1024,
    height: 768,
  },
  mobile: {
    url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538",
    width: 640,
    height: 480,
  },
};

const blurDataURL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLzYvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz/2wBDAR0dHR4eHRoaHSQtJSEkLzYvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

const AdvancedImageOptimizationStarter = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Advanced Image Optimization</h1>

      <div className="mb-8">
        <p className="mb-4">
          Your task is to implement advanced image optimization techniques in
          Next.js. Follow the TODO comments in the code to complete the
          implementation.
        </p>

        {/* Blur-up Loading Example */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Blur-up Loading</h2>
          <div className="relative aspect-video">
            <Image
              src={imageConfigs.desktop.url}
              alt="Blur-up loading example"
              fill
              priority
              placeholder="blur"
              blurDataURL={blurDataURL}
              className={`transition-opacity duration-300 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              onLoadingComplete={() => setIsLoading(false)}
            />
          </div>
        </div>

        {/* Art Direction Example */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Art Direction</h2>
          <div className="relative aspect-video">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={imageConfigs.desktop.url}
              />
              <source
                media="(min-width: 768px)"
                srcSet={imageConfigs.tablet.url}
              />
              <Image
                src={imageConfigs.mobile.url}
                alt="Art direction example"
                fill
                className="object-cover"
              />
            </picture>
          </div>
        </div>

        {/* Responsive Images Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Responsive Images Grid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-square">
                <Image
                  src={imageConfigs.desktop.url}
                  alt={`Grid image ${i}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
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
