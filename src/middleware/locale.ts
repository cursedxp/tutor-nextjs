import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// List of supported locales
const locales = ["en", "es"];

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Check if the path is for locale handling
  const isLocalePath = path.startsWith("/concepts/middleware/solution/locale");

  if (isLocalePath) {
    // Extract the locale from the path
    const pathLocale = path.split("/")[4];

    // If the locale is not supported, redirect to English
    if (!locales.includes(pathLocale)) {
      return NextResponse.redirect(
        new URL("/concepts/middleware/solution/locale/en", request.url)
      );
    }

    // Add a custom header with the locale
    const response = NextResponse.next();
    response.headers.set("x-locale", pathLocale);
    return response;
  }

  return NextResponse.next();
}

// Configure which paths to run the middleware on
export const config = {
  matcher: "/concepts/middleware/solution/locale/:path*",
};
