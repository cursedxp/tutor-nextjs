import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Page</h1>

      <div className="mb-8">
        <p className="mb-4">
          This is the about page located at{" "}
          <code>/pages/concepts/file-routing/solution/about.tsx</code>.
        </p>

        <p className="mb-4">
          In Next.js, the file <code>about.tsx</code> automatically becomes the
          route <code>/about</code>.
        </p>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/file-routing/solution"
          className="text-blue-600 hover:underline"
        >
          Back to Index
        </Link>
        <Link
          href="/concepts/file-routing/solution/settings/profile"
          className="text-blue-600 hover:underline"
        >
          Go to Settings Profile
        </Link>
        <Link href="/" className="text-gray-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
