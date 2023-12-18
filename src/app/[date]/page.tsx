"use client";

import React from "react";
import { useParams } from "next/navigation";

import DataForm from "@/components/DataForm";
import CongestionPredict from "@/components/CongestionPredict";

const Detail: React.FC = () => {
  const params = useParams();
  const date: string = Array.isArray(params.date)
    ? params.date[0]
    : params.date;
  const formattedDate: string = date.replace(/-/g, "/");

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-3xl">{formattedDate}</p>
      <DataForm />
      <CongestionPredict />
    </div>
  );
};

export default Detail;
