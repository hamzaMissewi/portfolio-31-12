// import { clerkMiddleware } from "@clerk/nextjs/server";
import { localePrefix, locales } from "./lib/intl";
import createMiddleware from "next-intl/middleware";

// export default clerkMiddleware({});

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: localePrefix,
  localeDetection: false,
});

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
