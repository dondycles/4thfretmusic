import fflogo from "@/public/4flogo.png";
import { Chip, Divider, Link } from "@nextui-org/react";
import Image from "next/image";

import {
  SlSocialFacebook,
  SlSocialSpotify,
  SlSocialYoutube,
} from "react-icons/sl";
import Member from "@/components/Member";
import { songs } from "@/data/songs";
import { members } from "@/data/members";
import Song from "@/components/Song";

export default function Home() {
  return (
    <div className="min-h- fit w-full px-4 sm:px-16 md:px-32 lg:px-64 z-10">
      <div className="w-full min-h-fit h-[calc(100dvh-78px)] flex">
        <div className="m-auto flex flex-row gap-4 max-w-[800px] items-end ">
          <div className="h-auto w-32 relative -rotate-12">
            <Image alt="4th Fret" src={fflogo} quality={100} />
          </div>
          <div className="flex flex-col gap-4 max-w-[512px]">
            <h1 className="font-agbalumo text-6xl text-primary">4th Fret</h1>
            <p>
              A vibrant and energetic boy band based in Manila, creating fresh
              music that resonates with fans worldwide.
            </p>
          </div>
        </div>
      </div>
      <div
        id="discography"
        className="   w-full flex flex-col justify-center items-center gap-4 py-4"
      >
        <p className="font-black text-3xl text-primary text-center w-full font-agbalumo">
          Discography
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {songs.map((song) => {
            return <Song song={song} key={song.title} />;
          })}
        </div>
      </div>
      <div
        id="members"
        className=" w-full flex flex-col justify-center items-center gap-4 py-4"
      >
        <p className="font-black text-3xl text-primary text-center w-full font-agbalumo">
          Meet The Band
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          {members.map((member) => {
            return <Member data={member} key={member.name} />;
          })}
        </div>
      </div>
    </div>
  );
}
