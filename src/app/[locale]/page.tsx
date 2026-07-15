'use client'

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Home() {
  
   
  const t = useTranslations("Main");

  return (
    <main>
      {t("prueba")}
    </main>
  );
}
