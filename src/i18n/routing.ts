import { defineRouting } from "next-intl/routing";
import { locales } from "@/lib/intl";

export const routing = defineRouting({
  locales: locales,
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/pathnames": {
      en: "/pathnames",
      fr: "/chemins",
      ar: "/أسماء المسارات",
    },
  },
});

// export type Pathnames = keyof typeof routing.pathnames;
// export type Locale = (typeof routing.locales)[number];
