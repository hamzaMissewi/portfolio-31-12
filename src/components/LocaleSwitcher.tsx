"use client";
import React, { ChangeEvent, useTransition } from "react";
// import { useRouter } from "next/navigation";
import { locales, usePathname, useRouter } from "@/lib/intl";
import { useLocale } from "next-intl";

// const useLanguage = () => {
//   const router = useCustomRouter();
//   const { lang } = router.query;
//   const [localeState, setLocaleState] = useState<Language>(Language.EN);
//
//   useEffect(() => {
//     if (
//       // lang &&
//       typeof lang === "string" &&
//       Object.values(Language).includes(lang as Language)
//     ) {
//       // Logic to set the locale context based on the `lang` param
//       setLocaleState(lang as Language);
//     }
//     // setLocale("en");
//   }, [lang]);
//
//   return localeState; //lang || "en";
// };

interface ILocaleSwitcher {}

export default function LocaleSwitcher({}: ILocaleSwitcher) {
  const [isPending, startTransition] = useTransition();
  const localeActive = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const onChangeLocale = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
      // router.replace(`/${nextLocale}`);
      // router.push(`/lang=${nextLocale}`); // This changes the URL
    });
  };

  return (
    <div className={"flex h-full self-center"}>
      {/*<p className="sr-only">change language</p>*/}
      <select
        className="py-1 rounded-md border dark:border-amber-100 border-black h-full"
        defaultValue={localeActive}
        disabled={isPending}
        onChange={onChangeLocale}
      >
        {locales.map((l) => (
          <option value={l} key={l}>
            {l}
          </option>
        ))}
      </select>
    </div>
  );
}
