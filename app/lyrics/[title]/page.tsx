import { songs } from "@/data/songs";
import React from "react";

export default function Lyrics({ params }: { params: { title: string } }) {
  function findSongByTitle(titleToFind: string) {
    return songs.find(
      (song) =>
        song.title.toLowerCase().replace(/\s/g, "") ===
        titleToFind.toLowerCase().replace(/\s/g, "")
    );
  }
  return (
    <div className="min-h-fit w-full pt-4 px-4 sm:px-16 md:px-32 lg:px-64 z-10">
      <article className="flex flex-col gap-4 text-sm justify-center items-center">
        <header className="font-agbalumo text-3xl text-primary ">
          <h1> {findSongByTitle(params.title)?.title}</h1>
          <h2 className="text-sm text-foreground pb-2">by 4th Fret</h2>
        </header>
        <div className="flex gap-4 flex-col">
          {findSongByTitle(params.title)?.lyrics?.map((p, i) => {
            return (
              <div className="" key={i}>
                {p}
              </div>
            );
          })}
        </div>
      </article>
    </div>
  );
}
