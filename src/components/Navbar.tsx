import React from "react";
import Link from "next/link";
import { ClipboardEdit, Languages } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Navbar() {
  return (
    <div className="container py-2 flex items-center bg-orange-100">
      <Link href={"/"} className="flex gap-2 item-center">
        <ClipboardEdit />
        <p className="text-sm font-medium md:block">混雑予測ボード</p>
      </Link>
      <div className="ml-auto">
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
