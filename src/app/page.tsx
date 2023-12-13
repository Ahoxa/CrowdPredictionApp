"use client";
import React from "react";
import Calendar from '../components/Calendar';

function page() {
  return (
    <div className="container items-center">
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4 mt-10">
          <Calendar/>
        </div>
      </div>
    </div>
  );
}

export default page;
