"use client";
import React, { ChangeEvent, useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useRouter as useCustomRouter } from "next/router";
import { useLocale } from "next-intl";
import { locales, usePathname } from "@/lib/intl";
import { Button } from "@/components/ui/button";
import UpdateLanguageDialog, {
  useUpdateLanguageDialog,
} from "@/components/common/UpdateLanguage";
import { Language } from "@/app/[locale]/layout";
// import { useRouter as useRouterNavigation } from "next/navigation";
// import { setRequestLocale } from "next-intl/dist/types/src/server/react-server/RequestLocale";

const useLanguage = () => {
  const router = useCustomRouter();
  const { lang } = router.query;
  const [localeState, setLocaleState] = useState<Language>(Language.EN);

  useEffect(() => {
    if (
      // lang &&
      typeof lang === "string" &&
      Object.values(Language).includes(lang as Language)
    ) {
      // Logic to set the locale context based on the `lang` param
      setLocaleState(lang as Language);
      // setRequestLocale(lang);
    }
    // setLocale("en");
  }, [lang]);

  return localeState; //lang || "en"; // Default to 'en' if no lang param
};

interface ILocaleSwitcher {}

export default function LocaleSwitcher({}: ILocaleSwitcher) {
  const { updateLanguageDialogProps, openUpdateLanguageDialog } =
    useUpdateLanguageDialog();
  const [isPending, startTransition] = useTransition();
  const localeActive = useLocale();
  const router = useRouter();
  // const [openUpdateLanguageDialog, setOpenUpdateLanguageDialog] =
  //     useState(false);

  // const handleOpenDialog = () => {
  //     setOpenUpdateLanguageDialog(true);
  // };

  const onChangeLocale = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(`/${nextLocale}`);
      // router.replace(pathname, undefined, { localeActive: nextLocale });
      // router.push(`/lang=${nextLocale}`); // This changes the URL
    });
  };

  return (
    <div className={"border-2 rounded"}>
      <p className="sr-only">change language</p>
      <select
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

      <Button asChild onClick={openUpdateLanguageDialog} color={"info"}>
        Update Language Dialog
      </Button>

      <UpdateLanguageDialog
        {...updateLanguageDialogProps}
        // open={openUpdateLanguageDialog}
        // onClose={() => setOpenUpdateLanguageDialog(false)}
      />
    </div>
  );
}
