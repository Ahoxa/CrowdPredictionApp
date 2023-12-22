"use client";

import React from "react";
import { useParams } from "next/navigation";

import { useLanguage } from "@/hooks/LanguageContext";
import translations from "@/lib/translations.json";
import { Translations } from "@/lib/types";

import DataForm from "@/components/DataForm";
import CongestionPredict from "@/components/CongestionPredict";

const Detail = () => {
  const params = useParams();
  const date: string = Array.isArray(params.date)
    ? params.date[0]
    : params.date;
  const formattedDate: string = date.replace(/-/g, "/");

  const { language } = useLanguage();
  const t = translations as Translations;
  let cong = t[language].congestion;

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-3xl">{formattedDate}</p>
      <DataForm />
      <p className="text-center text-xl md:text-3xl font-medium my-5">
        {cong}
      </p>
      <CongestionPredict />
    </div>
  );
};

export default Detail;
