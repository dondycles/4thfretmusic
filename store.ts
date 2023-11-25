import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = {
  mode: "dark" | "light";
  toggleMode: (mode: "dark" | "light") => void;
};
export const useTheme = create<Theme>()(
  persist(
    (set) => ({
      mode: "dark",
      toggleMode: (currentMode) => set((state) => ({ mode: currentMode })),
    }),
    { name: "theme" }
  )
);

type AudioPlayer = {
  isOpen: boolean;
  openPlayer: (mode: boolean) => void;
};

export const useAudioPlayer = create<AudioPlayer>()((set) => ({
  isOpen: false,
  openPlayer: (currentMode) => set((state) => ({ isOpen: currentMode })),
}));
