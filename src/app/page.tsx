import { redirect, RedirectType } from "next/navigation";
import { useLocale } from "next-intl";

interface MainPageProps {
  children: React.ReactNode;
}

function Page({ children }: MainPageProps) {
  // const router = useRouter();
  const locale = useLocale();

  if (locale === "en") {
    return children;
  }
  // redirect("/en", RedirectType.replace);
  redirect("/en");
}

export default Page;
