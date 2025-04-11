import React from "react";
import Link from "next/link";

const RoleBasedAccessStarter = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Role-Based Access Control (Starter)
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          Implement role-based access control (RBAC) for different user roles.
          This example will demonstrate:
        </p>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Role-Based Access</h2>
            <p className="mb-4">Current user role: TODO</p>

            <div className="flex space-x-4 mb-6">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Access Admin Area
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Access User Area
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Role-Specific Content</h3>
              <p>TODO: Display content based on user role</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-800 font-medium">Tasks to Complete:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-800">
              <li>Define user roles and permissions</li>
              <li>Implement role checking middleware</li>
              <li>Create role-based route protection</li>
              <li>Add role-specific content rendering</li>
              <li>Handle unauthorized access</li>
              <li>Implement role-based UI components</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/authentication/solution/rbac"
          className="text-blue-600 hover:underline"
        >
          View Solution
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

export default RoleBasedAccessStarter;
