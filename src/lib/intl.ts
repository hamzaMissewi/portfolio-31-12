// import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { createNavigation } from "next-intl/navigation";

export const locales = ["en", "fr", "ar"] as const;
export const localePrefix = "as-needed"; // Default

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  localePrefix,
});

//
// export const { Link, getPathname, redirect, usePathname, useRouter } =
//   createLocalizedPathnamesNavigation(routing);
