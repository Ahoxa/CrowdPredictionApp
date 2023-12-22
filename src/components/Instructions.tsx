"use client";

import React from "react";
import { useLanguage } from "@/hooks/LanguageContext";
import translations from "@/lib/translations.json";
import { Translations } from "@/lib/types";

function Instructions() {
  const { language } = useLanguage();

  const t = translations as Translations;
  let instructions = t[language].instruction;

  return (
    <div className="container mt-3 text-center">
      <h2>{instructions.p1}</h2>
      <h2>{instructions.p2}</h2>
      <h2 className="my-5 text-red-600">{instructions.attention}</h2>
    </div>
  );
}

export default Instructions;
