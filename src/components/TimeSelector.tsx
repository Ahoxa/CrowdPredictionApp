import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function TimeSelector() {
  return (
    <div className="flex mt-5">
      <p className="text-3xl font-medium whitespace-nowrap mr-4">
        Visiting Time
      </p>
      <Select>
        <SelectTrigger className="text-xl">
          <SelectValue placeholder="Select Time" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0700" className="text-lg">
            07:00 ~ 07:30
          </SelectItem>
          <SelectItem value="0730" className="text-lg">
            07:30 ~ 08:00
          </SelectItem>
          <SelectItem value="0800" className="text-lg">
            08:00 ~ 08:30
          </SelectItem>
          <SelectItem value="0830" className="text-lg">
            08:30 ~ 09:00
          </SelectItem>
          <SelectItem value="0900" className="text-lg">
            09:00 ~ 09:30
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default TimeSelector;
