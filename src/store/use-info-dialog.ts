import { create } from "zustand";

type State = {
  infoDialogOpen: boolean;
};

type Action = {
  setInfoDialogOpen: (infoDialogOpen: boolean) => void;
};

export const useInfoDialog = create<State & Action>((set) => ({
  infoDialogOpen: false,
  setInfoDialogOpen: (infoDialogOpen: boolean) => {
    set({ infoDialogOpen: infoDialogOpen });
  },
}));
