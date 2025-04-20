import React, { useState } from "react";
import Link from "next/link";

// Simulated API call function
const fetchData = async (endpoint: string) => {
  const random = Math.random();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (random < 0.3) {
    throw new Error(`Network error: Failed to fetch data from ${endpoint}`);
  }
  if (random < 0.6) {
    throw new Error("Server error: 500 Internal Server Error");
  }
  return { data: "Successfully fetched data" };
};

// File upload simulation
const uploadFile = async (file: File) => {
  const random = Math.random();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (random < 0.3) {
    throw new Error(`File too large: ${file.name} exceeds 5MB limit`);
  }
  if (random < 0.6) {
    throw new Error(`Invalid file type: ${file.type} is not supported`);
  }
  return { success: true, url: "https://example.com/uploaded-file.jpg" };
};

const TryCatchSolution: React.FC = () => {
  const [apiData, setApiData] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [file, setFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // API Error Handling Example
  const handleApiCall = async () => {
    setLoading(true);
    setApiError(null);
    try {
      const result = await fetchData("/api/data");
      setApiData(result.data);
    } catch (error) {
      setApiError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  // Form Validation Example
  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!formData.email.includes("@"))
      errors.email = "Invalid email format";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const errors = validateForm();
      if (Object.keys(errors).length > 0) {
        throw new Error("Validation failed");
      }
      setFormErrors({});
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
      setFormErrors(validateForm());
    }
  };

  // File Upload Example
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploadError(null);
      setUploadSuccess(false);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploadError(null);
    setUploadSuccess(false);
    try {
      await uploadFile(file);
      setUploadSuccess(true);
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : "Upload failed");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Try-Catch Error Handling (Solution)
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          This solution demonstrates error handling using try-catch blocks in
          different scenarios.
        </p>

        {/* API Error Handling Example */}
        <div className="mb-8 border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">API Error Handling</h2>
          <button
            onClick={handleApiCall}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            {loading ? "Loading..." : "Fetch Data"}
          </button>
          {apiError && (
            <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-400">
              <p className="text-red-700">{apiError}</p>
            </div>
          )}
          {apiData && (
            <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-400">
              <p className="text-green-700">{apiData}</p>
            </div>
          )}
        </div>

        {/* Form Validation Example */}
        <div className="mb-8 border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Form Validation</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {formErrors.name && (
                <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>

        {/* File Upload Example */}
        <div className="mb-8 border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">File Upload</h2>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <button
            onClick={handleUpload}
            disabled={!file}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            Upload
          </button>
          {uploadError && (
            <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-400">
              <p className="text-red-700">{uploadError}</p>
            </div>
          )}
          {uploadSuccess && (
            <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-400">
              <p className="text-green-700">File uploaded successfully!</p>
            </div>
          )}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <p className="text-blue-800 font-medium">Key Features:</p>
          <ul className="list-disc ml-6 mt-2 text-gray-800">
            <li>API error handling with try-catch</li>
            <li>Form validation with error messages</li>
            <li>File upload error handling</li>
            <li>Loading states and error recovery</li>
            <li>User-friendly error messages</li>
          </ul>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/error-handling/starter/try-catch"
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

export default TryCatchSolution;
