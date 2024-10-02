import { getRequestConfig } from "next-intl/server";
import { locales } from "@/lib/intl";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    //  messages: (await import(`../messages/${locale}.json`)).default,
    messages: (locale === "en"
      ? await import(`../messages/en.json`)
      : await import(`../messages/${locale}.json`)
    ).default,
  };
});
