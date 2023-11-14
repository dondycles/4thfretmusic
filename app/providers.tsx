// app/providers.tsx
"use client";

import MusicPlayer from "@/components/MusicPlayer";
import Nav from "@/components/Nav";
import Wallpaper from "@/components/Wallpaper";
import { useAudioPlayer, useTheme } from "@/store";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect, useState } from "react";

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
      bg-gradient-to-b from-background to-primary/20 text-foreground bg-background max-h-[100dvh] w-full h-screen flex flex-col text-sm sm:text-base`}
      >
        <Nav />
        {children}
        <MusicPlayer />
        <Wallpaper />
      </NextUIProvider>
    );
}
