import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = {
  isDarkMode: boolean;
  toggleMode: (mode: "dark" | "light") => void;
};
export const useTheme = create<Theme>()(
  persist(
    (set) => ({
      isDarkMode: true,
      toggleMode: (currentMode) =>
        set((state) => ({ isDarkMode: !currentMode })),
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
