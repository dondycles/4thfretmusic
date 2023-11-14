import { TbMicrophone2 } from "react-icons/tb";
import { FaDrum } from "react-icons/fa";
import { GiGuitarBassHead, GiGuitarHead } from "react-icons/gi";
import { PiPianoKeysFill } from "react-icons/pi";

import kenu from "@/public/kenu.jpg";
import gab from "@/public/gab.jpg";
import dondy from "@/public/dondy.jpg";
import geno from "@/public/geno.jpg";
import win from "@/public/win.jpg";

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
