"use client";

import React from "react";
import { useParams } from "next/navigation";

import RoomNumForm from "@/components/RoomNumForm";
import TimeSelector from "@/components/TimeSelector";
import CongestionPredict from "@/components/CongestionPredict";
import { Button } from "@/components/ui/button";

const Detail: React.FC = () => {
  const params = useParams();
  const date: string = Array.isArray(params.date)
    ? params.date[0]
    : params.date;
  const formattedDate: string = date.replace(/-/g, "/");

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-3xl">{formattedDate}</p>
      <RoomNumForm />
      <TimeSelector />
      <Button className="mt-5 text-lg">Submit</Button>
      <CongestionPredict />
    </div>
  );
};

export default Detail;
