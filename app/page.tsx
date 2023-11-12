import fflogo from "@/public/4flogo.png";
import { Chip, Divider, Link } from "@nextui-org/react";
import Image from "next/image";
import kenu from "@/public/kenu.jpg";
import gab from "@/public/gab.jpg";
import dondy from "@/public/dondy.jpg";
import geno from "@/public/geno.jpg";
import win from "@/public/win.jpg";

import { TbMicrophone2 } from "react-icons/tb";
import { FaDrum } from "react-icons/fa";
import { GiGuitarBassHead, GiGuitarHead } from "react-icons/gi";
import { PiPianoKeysFill } from "react-icons/pi";
import {
  SlSocialFacebook,
  SlSocialSpotify,
  SlSocialYoutube,
} from "react-icons/sl";
import Member from "@/components/Member";
export const members = [
  {
    name: "Win",
    roles: [
      <>
        Vocals{" "}
        <span className="text-xl">
          <TbMicrophone2 />
        </span>
      </>,
      <>
        Lead Guitarist{" "}
        <span className="text-xl">
          <GiGuitarHead />
        </span>
      </>,
    ],
    img: win,
  },
  {
    name: "Geno",
    roles: [
      <>
        Vocals{" "}
        <span className="text-xl">
          <TbMicrophone2 />
        </span>
      </>,
      <>
        Rythm Guitarist{" "}
        <span className="text-xl">
          <GiGuitarHead />
        </span>
      </>,
    ],
    img: geno,
  },
  {
    name: "Gab",
    roles: [
      <>
        Bassist{" "}
        <span className="text-xl">
          <GiGuitarBassHead />
        </span>
      </>,
    ],
    img: gab,
  },
  {
    name: "Kenu",
    roles: [
      <>
        Drummer{" "}
        <span className="text-xl">
          <FaDrum />
        </span>
      </>,
    ],
    img: kenu,
  },
  {
    name: "Dondy",
    roles: [
      <>
        Keyboardist{" "}
        <span className="text-xl">
          <PiPianoKeysFill />
        </span>
      </>,
    ],
    img: dondy,
  },
];

export default function Home() {
  return (
    <main className="max-h-[100dvh] h-screen overflow-auto w-full  px-2 sm:px-16 md:px-32 lg:px-64 z-10">
      <div className="max-h-full h-screen w-full flex">
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
        className="min-h-full h-full w-full flex flex-col justify-center items-center gap-4 py-4"
      >
        <p className="font-black text-3xl text-primary text-center w-full font-agbalumo">
          Discography
        </p>
        <iframe
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/artist/4C31P0YmYe8vj5p8wP5GXS?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
      <div
        id="members"
        className="min-h-full w-full flex flex-col justify-center items-center gap-4 py-4"
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
      <div className="py-8 text-xs text-center flex flex-col gap-4">
        <Divider />
        <div className="flex flex-row gap-4 justify-center">
          <Link
            className="text-foreground text-2xl"
            href="https://www.facebook.com/4thfretmusic"
            target="_blank"
          >
            <SlSocialFacebook />
          </Link>
          <Link
            className="text-foreground text-2xl"
            href="https://open.spotify.com/artist/4C31P0YmYe8vj5p8wP5GXS?si=45aBALyET7yzNbWFmnMQBA"
            target="_blank"
          >
            <SlSocialSpotify />
          </Link>
          <Link
            className="text-foreground text-2xl"
            href="https://youtube.com/4thfretmusic"
            target="_blank"
          >
            <SlSocialYoutube />
          </Link>
        </div>
        <p>4th Fret | 2023</p>
      </div>
    </main>
  );
}
