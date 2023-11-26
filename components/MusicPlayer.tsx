"use client";

import { Button, ButtonGroup, Slider, Tooltip } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import {
  PiPlayBold,
  PiPauseBold,
  PiSkipForwardBold,
  PiSkipBackBold,
  PiStopBold,
} from "react-icons/pi";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

import { motion as m, AnimatePresence } from "framer-motion";

import Marquee from "react-fast-marquee";

import Image from "next/image";
import { useAudioPlayer } from "@/store";
import { songs } from "@/data/songs";

export default function MusicPlayer() {
  const audioPlayer = useAudioPlayer();
  const audio = useRef<HTMLAudioElement>(null);

  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerStatus, setPlayerStatus] = useState<
    "playing" | "paused" | "stopped"
  >("stopped");

  const [didOpen, setDidOpen] = useState(false);

  const controls = [
    {
      icon: <PiSkipBackBold />,
      function: () => {
        setSongIndex((prev) => (prev === 0 ? 0 : prev - 1));
      },
    },
    {
      icon: <PiPlayBold />,
      function: () => {
        audio.current?.play();
        setIsPlaying(true);
        setPlayerStatus("playing");
      },
      className: playerStatus === "playing" && "hidden",
    },
    {
      icon: <PiPauseBold />,
      function: () => {
        audio.current?.pause();
        setIsPlaying(false);
        setPlayerStatus("paused");
      },
      className: playerStatus === "paused" && "hidden",
    },
    {
      icon: <PiStopBold />,
      function: () => {
        audio.current?.pause();
        audio.current!.currentTime = 0;
        setIsPlaying(false);
        setPlayerStatus("stopped");
      },
      className: playerStatus === "stopped" && "hidden",
    },
    {
      icon: <PiSkipForwardBold />,
      function: () => {
        setSongIndex((prev) => (prev === songs.length - 1 ? 0 : prev + 1));
      },
    },
  ];
  const [cycled, setCycled] = useState(false);
  const [volume, setVolume] = useState<number>(0.5);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!cycled) return;
      setCycled((prev) => !prev);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [cycled]);

  useEffect(() => {
    audio.current!.volume = volume;
  }, [volume]);

  return (
    <>
      <audio ref={audio} src={songs[songIndex].src} autoPlay={false} hidden />
      <AnimatePresence mode="popLayout">
        {audioPlayer.isOpen ? (
          <m.div
            key={"open"}
            onClick={(e) => {
              e.stopPropagation();
            }}
            initial={{ opacity: 0, translateX: "-50px", skewX: "-20deg" }}
            animate={{ opacity: 1, translateX: "0px", skewX: "0deg" }}
            exit={{ opacity: 0, translateX: "50px", skewX: "-20deg" }}
            transition={{ type: "spring", duration: 1 }}
            className="fixed bottom-4 md:bottom-8   rounded-xl bg-background/70  left-4 sm:left-16 md:left-32 lg:left-64 z-10 flex flex-row gap-1 justify-center items-center p-1 max-w-[264px]"
          >
            <Image
              className="h-16 w-16 rounded-lg "
              alt={songs[songIndex].title}
              src={songs[songIndex].art}
            />
            <div className=" flex flex-col  w-fit self-stretch justify-end items-start max-w-[128px]">
              <Marquee
                className="w-full text-sm font-bold leading-0 my-auto"
                speed={25}
                play
                loop={0}
                pauseOnClick
                pauseOnHover
              >
                <span className="pr-4">{songs[songIndex].title}</span>
              </Marquee>
              <ButtonGroup size="sm" variant="shadow" color="primary">
                {controls.map((control, i) => {
                  return (
                    <Button
                      onClick={control.function}
                      className={`text-lg ${control.className}`}
                      key={i}
                      isIconOnly
                      startContent={control.icon}
                    />
                  );
                })}
              </ButtonGroup>
            </div>
            <Slider
              color="primary"
              className=" h-16"
              size="sm"
              step={0.2}
              maxValue={1}
              minValue={0}
              defaultValue={volume}
              value={volume}
              onChange={(e) => setVolume(e as number)}
              orientation="vertical"
            />
          </m.div>
        ) : (
          <Tooltip
            key={"closed"}
            content="Click here for music"
            placement="top-start"
            className="text-white"
            size="sm"
            showArrow
            color="primary"
            isOpen={!didOpen}
          >
            <Button
              onClick={() => {
                audioPlayer.openPlayer(true);
                if (playerStatus === "playing") return;
                audio.current?.play();
                setPlayerStatus("playing");
                setDidOpen(true);
              }}
              variant={playerStatus === "playing" ? "shadow" : "solid"}
              color="primary"
              isIconOnly
              radius="full"
              className="fixed bottom-4 md:bottom-8  bg-primary  left-4 sm:left-16 md:left-32 lg:left-64 z-10 flex flex-row gap-1 justify-center items-center p-1 max-w-[264px] text-lg"
            >
              {playerStatus === "playing" ? <MdMusicNote /> : <MdMusicOff />}
            </Button>
          </Tooltip>
        )}
      </AnimatePresence>
    </>
  );
}
