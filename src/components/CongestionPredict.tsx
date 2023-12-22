import React from "react";
import { Progress } from "@/components/ui/progress";

function CongestionPredict() {
  return (
    <div className="container">
      <div className="flex items-center w-[60vw] mb-5">
        <h2 className="whitespace-nowrap mr-5">07:00 ~ 07:30</h2>
        <Progress value={50} />
      </div>
      <div className="flex items-center w-[60vw] mb-5">
        <h2 className="whitespace-nowrap mr-5">07:30 ~ 08:00</h2>
        <Progress value={57} />
      </div>
      <div className="flex items-center w-[60vw] mb-5">
        <h2 className="whitespace-nowrap mr-5">08:00 ~ 08:30</h2>
        <Progress value={26} />
      </div>
      <div className="flex items-center w-[60vw] mb-5">
        <h2 className="whitespace-nowrap mr-5">08:30 ~ 09:00</h2>
        <Progress value={81} />
      </div>
      <div className="flex items-center w-[60vw] mb-5">
        <h2 className="whitespace-nowrap mr-5">09:00 ~ 09:30</h2>
        <Progress value={67} />
      </div>
      <div className="flex items-center w-[60vw] mb-5">
        <h2 className="whitespace-nowrap mr-5">09:30 ~ 10:00</h2>
        <Progress value={12} />
      </div>
    </div>
  );
}

export default CongestionPredict;
