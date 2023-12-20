import React from "react";
import Link from "next/link";
import { Utensils } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-center py-5 bg-orange-100">
      <Link href={"/"} className="flex gap-2 items-center">
        <Utensils />
        <h1>Breakfast Time Sharing</h1>
        <Utensils/>
      </Link>
    </div>
  );
}
