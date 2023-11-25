// app/providers.tsx
"use client";

import MusicPlayer from "@/components/MusicPlayer";
import Nav from "@/components/Nav";
import Wallpaper from "@/components/Wallpaper";
import { useAudioPlayer, useTheme } from "@/store";
import { Divider, Link, NextUIProvider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import {
  SlSocialFacebook,
  SlSocialSpotify,
  SlSocialYoutube,
} from "react-icons/sl";

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const [hydrated, setHydrated] = useState(false);
  const audioPlayer = useAudioPlayer();
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (hydrated)
    return (
      <NextUIProvider
        onClick={() => {
          audioPlayer.openPlayer(false);
        }}
        className={`
      ${theme.isDarkMode ? "dark" : "light"} 
      bg-gradient-to-b from-background to-primary/20 text-foreground bg-background/90 max-h-[100dvh] w-full h-screen flex flex-col text-sm sm:text-base `}
      >
        <Nav />
        <main className="w-full overflow-auto flex flex-col">
          {children}
          <div className="text-xs text-center flex flex-col gap-8 py-8">
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
        <MusicPlayer />
        <Wallpaper />
      </NextUIProvider>
    );
}
