"use client";

import React from "react";
import { useParams } from "next/navigation";

import RoomNumForm from "@/components/RoomNumForm";

const Detail: React.FC = () => {
  const params = useParams();
  const date: string = Array.isArray(params.date)
    ? params.date[0]
    : params.date;
  const formattedDate: string = date.replace(/-/g, "/");

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>In order to share tommorow's breakfast crowd,</h1>
      <h1>
        We would appreciate your cooporation in selecting and registering the
        time you plan to visit the restaurant.
      </h1>
      <h1>{formattedDate}</h1>
      <RoomNumForm />
    </div>
  );
};

export default Detail;
