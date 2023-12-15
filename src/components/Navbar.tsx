import React from "react";
import Link from "next/link";
import { Utensils } from "lucide-react";
import LangSelector from "./LangSelector";

export default function Navbar() {
  return (
    <div className="flex justify-center relative py-5 bg-orange-100">
      <Link href={"/"} className="flex gap-2 items-center">
        <Utensils />
        <h1>Breakfast Time Sharing</h1>
        <Utensils/>
      </Link>
      <div className="absolute right-5">
        <LangSelector />
      </div>
    </div>
  );
}
