"use client";

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
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      contentHeight={'auto'}
      dateClick={handleDateClick}
    />
  );
};

export default Calender;
