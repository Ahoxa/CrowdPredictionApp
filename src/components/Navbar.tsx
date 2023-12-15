import React from "react";
import Link from "next/link";
import { Utensils } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Navbar() {
  return (
    <div className="flex justify-center relative py-5 bg-orange-100">
      <Link href={"/"} className="flex gap-2 items-center">
        <Utensils />
        <p className="text-lg font-medium">Breakfast Time Sharing</p>
        <Utensils/>
      </Link>
      <div className="absolute right-5">
        <Select>
          <SelectTrigger className="mr-[2px]">
            <SelectValue placeholder="日本語" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ja">日本語</SelectItem>
            <SelectItem value="en">English</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
