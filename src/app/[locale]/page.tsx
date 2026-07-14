'use client'

import { useTranslations } from "next-intl";

export default function Home() {

  const t = useTranslations("Main");

  return (
    <main>
      {t("prueba")}
    </main>
  );
}
