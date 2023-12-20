import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function LangSelector() {
  return (
    <div className="flex justify-end mt-2 mr-5 md:text-3xl">
      <div className="inline-block ">
        <Select>
          <SelectTrigger className="md:text-xl">
            <SelectValue placeholder="English" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en" className="md:text-xl">
              English
            </SelectItem>
            <SelectItem value="ja">日本語</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default LangSelector;
