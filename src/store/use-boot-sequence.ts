import { create } from "zustand";

type State = {
  bootSequence: boolean;
};

type Action = {
  setStartBootSequence: (bootSequence: boolean) => void;
};

export const useBootSequence = create<State & Action>((set) => ({
  bootSequence: false,
  setStartBootSequence: (bootSequence: boolean) =>
    set({ bootSequence: bootSequence }),
}));
