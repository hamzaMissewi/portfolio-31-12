import { redirect } from "next/navigation";

// interface MainPageProps {
//   children: React.ReactNode;
// }

// function Page({ children }: MainPageProps) {
// const locale = useLocale();
//
// if (locale === "en") {
//   return children;
// }
function Page() {
  // redirect("/en");
  redirect("/en", RedirectType.replace);
}

export default Page;
