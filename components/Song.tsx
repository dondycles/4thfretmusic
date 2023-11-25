"use client";

import Image from "next/image";
import { Link } from "@nextui-org/link";
import { FaApple, FaExternalLinkAlt, FaSpotify } from "react-icons/fa";
export default function Song({ song }: { song: any }) {
  return (
    <div className="rounded-lg flex flex-col items-center relative overflow-hidden">
      <Image className="rounded-lg" src={song.art} alt={song.title} />
      <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-b from-transparent to-primary/90 gap-2 flex flex-col bg-background/50">
        <div
          className="font-agbalumo bg-transparent text-white text-center text-base sm:text-xl w-full"
          color="default"
        >
          <p>{song.title}</p>
        </div>
        <div className="flex flex-row items-center gap-2 justify-center">
          <div className="flex flex-row gap-1 w-full justify-center">
            <Link
              target="_blank"
              href={song.spotify}
              className="text-2xl flex justify-center items-center gap-2"
              color="foreground"
            >
              <FaSpotify />
            </Link>
            <Link
              target="_blank"
              href={song.apple}
              className="text-2xl flex justify-center items-center gap-2"
              underline="hover"
              color="foreground"
            >
              <FaApple />
            </Link>
            <Link
              color="foreground"
              size="sm"
              className=" w-fit text-xs flex gap-1"
              href={"/lyrics/" + song.title.toLowerCase().replace(/\s/g, "")}
            >
              See full lyrics <FaExternalLinkAlt />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
