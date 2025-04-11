import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Check if the path is for analytics
  const isAnalyticsPath = path.startsWith(
    "/concepts/middleware/solution/analytics"
  );

  if (isAnalyticsPath) {
    // In a real app, you would send this data to your analytics service
    console.log(`Analytics: Page view for ${path}`);

    // Add custom headers for analytics
    const response = NextResponse.next();
    response.headers.set("x-page-view", path);
    response.headers.set("x-timestamp", new Date().toISOString());

    return response;
  }

  return NextResponse.next();
}

// Configure which paths to run the middleware on
export const config = {
  matcher: "/concepts/middleware/solution/analytics/:path*",
};
