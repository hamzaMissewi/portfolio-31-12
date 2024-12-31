import { locales } from "./lib/intl";
import createMiddleware from "next-intl/middleware";

// const intlMiddleware =
export default createMiddleware({
  locales: locales,
  defaultLocale: "en",
  alternateLinks: false,
  localePrefix: "as-needed",
  // supportedLocales: ["en", "fr", "ar"],
});

// const isProtectedRoute = createRouteMatcher([
//   "/:locale/(.*)",
//   "/",
//   "/api/:path*",
// ]);
//
// export default clerkMiddleware(async (auth, req) => {
//   const { pathname } = req.nextUrl;
//   if (pathname.includes("/:locale/")) {
//     const locale = pathname.split("/")[1];
//     const replacedPathname = pathname.replace("/:locale/", "");
//     return NextResponse.redirect(
//       new URL(
//         `/${(locales.includes(locale as any) ?? locale) || "en"}/${replacedPathname}`,
//         req.url,
//       ),
//     );
//   }
//   if (isProtectedRoute(req)) {
//     await auth.protect();
//   }
//   // do not localize api routes
//   const path = req.nextUrl.pathname;
//   if (path.includes("/api")) {
//     return;
//   }
//   return intlMiddleware(req);
// });

export const config = {
  matcher: [
    "/",
    "/(ar|fr|en)/:path*",
    "/((?!api|_next|_vercel|.*\\..*).*)",
    "/((?!api/config/:path*).*)", //https://stackoverflow.com/questions/78441347/next-intl-integration-with-clerk
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
