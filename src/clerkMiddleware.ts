import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({});

export const config = {
  matcher: [
    // Match only internationalized pathnames
    "/",
    "/(fr|en)/:path*",
    "/((?!api|_next|_vercel|.*\\..*).*)", // next pathname
    // // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
