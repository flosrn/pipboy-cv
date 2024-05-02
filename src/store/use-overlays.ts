import { create } from "zustand";

type State = {
  cracksOpacity: number[];
  dirtOpacity: number[];
  fingerprintsOpacity: number[];
  smudgesOpacity: number[];
};

type Action = {
  setCracksOpacity: (opacity: number[]) => void;
  setDirtOpacity: (opacity: number[]) => void;
  setFingerprintsOpacity: (opacity: number[]) => void;
  setSmudgesOpacity: (opacity: number[]) => void;
};

export const useOverlays = create<State & Action>((set) => ({
  cracksOpacity: [34],
  setCracksOpacity: (opacity: number[]) => set({ cracksOpacity: opacity }),
  dirtOpacity: [100],
  setDirtOpacity: (opacity: number[]) => set({ dirtOpacity: opacity }),
  fingerprintsOpacity: [100],
  setFingerprintsOpacity: (opacity: number[]) =>
    set({ fingerprintsOpacity: opacity }),
  smudgesOpacity: [15],
  setSmudgesOpacity: (opacity: number[]) => set({ smudgesOpacity: opacity }),
}));
