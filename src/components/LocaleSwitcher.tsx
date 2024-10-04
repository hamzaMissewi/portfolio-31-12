"use client";
import React, { ChangeEvent, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { locales } from "@/lib/intl";
import { Button } from "@/components/ui/button";
import UpdateLanguageDialog, {
  useUpdateLanguageDialog,
} from "@/components/common/UpdateLanguage";

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
  const { updateLanguageDialogProps, openUpdateLanguageDialog } =
    useUpdateLanguageDialog();
  const [isPending, startTransition] = useTransition();
  const localeActive = useLocale();
  const router = useRouter();
    // const [openUpdateLanguageDialog, setOpenUpdateLanguageDialog] = useState(false);


  const onChangeLocale = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(`/${nextLocale}`);
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

      <UpdateLanguageDialog {...updateLanguageDialogProps} />
    </div>
  );
}
