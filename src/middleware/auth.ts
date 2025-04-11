import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Check if the path is protected
  const isProtectedPath = path.startsWith(
    "/concepts/middleware/solution/auth/protected"
  );

  // Simulate authentication check
  const isAuthenticated = request.cookies.has("auth-token");

  // Redirect to login if trying to access protected path without auth
  if (isProtectedPath && !isAuthenticated) {
    return NextResponse.redirect(
      new URL("/concepts/middleware/solution/auth/public", request.url)
    );
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Configure which paths to run the middleware on
export const config = {
  matcher: "/concepts/middleware/solution/auth/:path*",
};
