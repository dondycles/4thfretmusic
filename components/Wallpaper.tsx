"use client";
import bg from "@/public/bg.jpg";
import Image from "next/image";
export default function Wallpaper() {
  return (
    <div className="fixed top-0 left-0 h-screen w-full z-[-1]">
      <Image alt="4th Fret" src={bg} className=" object-cover h-full " />
    </div>
  );
}
