import { create } from "zustand";

type State = {
  bootSequence: boolean;
  bootSequenceVideoFinished: boolean;
};

type Action = {
  setStartBootSequence: (bootSequence: boolean) => void;
  setBootSequenceVideoFinished: (bootSequence: boolean) => void;
};

export const useBootSequence = create<State & Action>((set) => ({
  bootSequence: false,
  setStartBootSequence: (bootSequence: boolean) =>
    set({ bootSequence: bootSequence }),
  bootSequenceVideoFinished: false,
  setBootSequenceVideoFinished: (bootSequence: boolean) => {
    set({ bootSequenceVideoFinished: bootSequence });
  },
}));
