import React, { useState, useEffect } from "react";
import Link from "next/link";
import { generateToken, decodeToken, JWTPayload } from "@/utils/jwt";

const JWTAuthSolution = () => {
  const [token, setToken] = useState<string | null>(null);
  const [decodedToken, setDecodedToken] = useState<JWTPayload | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check for token in localStorage on component mount
    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      setToken(storedToken);
      const decoded = decodeToken(storedToken);
      setDecodedToken(decoded);
    }
  }, []);

  const handleLogin = () => {
    try {
      // In a real application, this would come from your login API
      const mockUser: JWTPayload = {
        userId: "123",
        email: "user@example.com",
        role: "user",
      };

      const newToken = generateToken(mockUser);
      localStorage.setItem("jwtToken", newToken);
      setToken(newToken);
      setDecodedToken(mockUser);
      setError(null);
    } catch (err) {
      setError(
        `Failed to generate token: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setToken(null);
    setDecodedToken(null);
    setError(null);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">JWT Authentication (Solution)</h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates JWT (JSON Web Token) authentication.
        </p>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">JWT Authentication</h2>
            <p className="mb-4">
              Current token: {token ? "Present" : "Not present"}
            </p>

            <div className="flex space-x-4 mb-6">
              {!token ? (
                <button
                  onClick={handleLogin}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Login with JWT
                </button>
              ) : (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Logout
                </button>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Token Information</h3>
              {decodedToken ? (
                <div className="space-y-2">
                  <p>User ID: {decodedToken.userId}</p>
                  <p>Email: {decodedToken.email}</p>
                  <p>Role: {decodedToken.role}</p>
                </div>
              ) : (
                <p>No token information available</p>
              )}
            </div>

            {error && (
              <div className="mt-4 p-4 bg-red-50 text-red-600 rounded">
                {error}
              </div>
            )}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-800 font-medium">Implementation Details:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-800">
              <li>JWT token generation and verification</li>
              <li>Token storage in localStorage</li>
              <li>Token decoding and payload extraction</li>
              <li>Login/logout functionality</li>
              <li>Error handling</li>
              <li>Token expiration management</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/authentication/starter/jwt"
          className="text-blue-600 hover:underline"
        >
          View Starter Template
        </Link>
        <Link
          href="/concepts/authentication/starter"
          className="text-gray-600 hover:underline"
        >
          Back to Starter
        </Link>
      </div>
    </div>
  );
};

export default JWTAuthSolution;
