import { getRequestConfig } from "next-intl/server";
import { locales } from "@/lib/intl";
import { notFound } from "next/navigation";
// import { routing } from "@/i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // const locale = await getTranslations({ locale: await params.requestLocale });
  let locale = await requestLocale;
  if (!locales.includes(locale as any)) notFound();

  // Ensure that a valid locale is used
  // if (!locale || !routing.locales.includes(locale as any)) {
  // if (!locale || !locales.includes(locale as any)) {
  //   locale = routing.defaultLocale;
  // }

  // return { messages: (await import(`./messages/${locale}.json`)).default };
  return {
    messages: (locale === "en"
      ? await import(`./messages/en.json`)
      : await import(`./messages/${locale}.json`)
    ).default,
  };
});
