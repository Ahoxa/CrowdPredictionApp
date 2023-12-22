"use client";

import { Suspense } from "react";
import Loading from "@/components/Loading";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import { useRouter } from "next/navigation";

const Calender = () => {
  const router = useRouter();

  const handleDateClick = (arg: any) => {
    const dateStr = arg.dateStr;
    router.push(`${dateStr}`);
  };

  return (
    <Suspense fallback={<Loading />}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        contentHeight={"auto"}
        dateClick={handleDateClick}
      />
    </Suspense>
  );
};

export default Calender;
