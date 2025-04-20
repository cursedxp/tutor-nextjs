import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// Define user roles
type UserRole = "admin" | "user" | "guest";

// Type guard to check if a string is a valid UserRole
const isValidRole = (role: string | undefined): role is UserRole => {
  return role !== undefined && ["admin", "user", "guest"].includes(role);
};

const RoleBasedAccessSolution = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Get user role from session with type safety
  const userRole: UserRole = isValidRole(session?.user?.role)
    ? session.user.role
    : "guest";

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <p>Loading...</p>
      </div>
    );
  }

  if (!session) {
    return null; // Will redirect in useEffect
  }

  // Check if user has required role
  const hasRole = (requiredRole: UserRole) => {
    const roleHierarchy: Record<UserRole, number> = {
      admin: 2,
      user: 1,
      guest: 0,
    };
    return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Role-Based Access Control (Solution)
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates role-based access control for different user
          roles.
        </p>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Role-Based Access</h2>
            <p className="mb-4">
              Current user role: <span className="font-medium">{userRole}</span>
            </p>

            <div className="flex space-x-4 mb-6">
              {hasRole("admin") ? (
                <button
                  onClick={() => router.push("/concepts/authentication/admin")}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Access Admin Area
                </button>
              ) : (
                <button
                  disabled
                  className="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
                >
                  Admin Area (Unauthorized)
                </button>
              )}

              {hasRole("user") ? (
                <button
                  onClick={() => router.push("/concepts/authentication/user")}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Access User Area
                </button>
              ) : (
                <button
                  disabled
                  className="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
                >
                  User Area (Unauthorized)
                </button>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Role-Specific Content</h3>
              <div className="space-y-2">
                {hasRole("admin") && (
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="font-medium">Admin Content</p>
                    <p>This content is only visible to administrators.</p>
                  </div>
                )}

                {hasRole("user") && (
                  <div className="bg-green-50 p-4 rounded">
                    <p className="font-medium">User Content</p>
                    <p>This content is visible to all authenticated users.</p>
                  </div>
                )}

                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-medium">Public Content</p>
                  <p>This content is visible to everyone.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-800 font-medium">Implementation Details:</p>
            <ul className="list-disc ml-6 mt-2 text-gray-800">
              <li>User role definition and hierarchy</li>
              <li>Role checking middleware</li>
              <li>Role-based route protection</li>
              <li>Conditional content rendering</li>
              <li>Unauthorized access handling</li>
              <li>Role-based UI components</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Link
          href="/concepts/authentication/starter/rbac"
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

export default RoleBasedAccessSolution;
