"use client";

import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import {
  SlSocialFacebook,
  SlSocialSpotify,
  SlSocialYoutube,
} from "react-icons/sl";
import {
  PiPlayBold,
  PiPauseBold,
  PiSkipForwardBold,
  PiSkipBackBold,
  PiStopBold,
} from "react-icons/pi";
export default function Song({ song }: { song: any }) {
  return (
    <div className="rounded-lg flex flex-col items-center relative overflow-hidden">
      <Image className="rounded-lg" src={song.art} alt={song.title} />
      <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-b from-transparent to-primary/90 gap-2 flex flex-col">
        <Chip
          size="lg"
          className="font-agbalumo bg-background/50 text-white text-center text-base sm:text-xl w-full"
          classNames={{ base: "max-w-full" }}
          color="default"
        >
          {song.title}
        </Chip>
        <Link
          target="_blank"
          href={song.spotify}
          className="text-2xl flex justify-center items-center gap-2"
        >
          <p className="text-xs">Stream Now on: </p>
          <SlSocialSpotify />
        </Link>
      </div>
    </div>
  );
}
