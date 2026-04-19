import { NextResponse, type NextRequest } from "next/server";

/**
 * Edge proxy — rewrites "/" to the static Claude Design landing page
 * shipped at public/home.html. Runs before routing, but only for the
 * exact root path. Everything else (API routes, static assets, etc.)
 * passes through untouched.
 */
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/home.html", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
