import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function Calender() {
  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
}

export default Calender;
