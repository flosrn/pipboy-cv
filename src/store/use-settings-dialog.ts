import { create } from "zustand";

type State = {
  settingsDialogOpen: boolean;
};

type Action = {
  setSettingsDialogOpen: (settingsDialogOpen: boolean) => void;
};

export const useSettingsDialog = create<State & Action>((set) => ({
  settingsDialogOpen: false,
  setSettingsDialogOpen: (settingsDialogOpen: boolean) => {
    set({ settingsDialogOpen: settingsDialogOpen });
  },
}));
