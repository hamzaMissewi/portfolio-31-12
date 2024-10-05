import React from "react";
import { useTranslations } from "next-intl";

function Internships() {
  const t = useTranslations("Internships");

  return <div>{t("title")}</div>;
}

export default Internships;
