"use client";

import React, { useEffect, useState } from "react";
import useSound from "use-sound";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { SettingsMenu } from "@/components/settings-menu";
import { cn } from "@/lib/utils";
import { useBootSequence } from "@/store/use-boot-sequence";
import { useInfoDialog } from "@/store/use-info-dialog";
import { useSettingsDialog } from "@/store/use-settings-dialog";

const openSound = "/sounds/UI_General_OK.mp3";
const bootSound02 = "/sounds/BurstStatic/UI_PipBoy_BurstStatic_05.mp3";

export type BottomButtonsBarProps = {};

export const BottomButtonsBar = (props: BottomButtonsBarProps) => {
  const [startRebot, setStartReboot] = useState(false);
  const [settingsDialogOpen, setSettingsDialogOpen] = useSettingsDialog(
    (state) => [state.settingsDialogOpen, state.setSettingsDialogOpen]
  );
  const [infoDialogOpen, setInfoDialogOpen] = useInfoDialog((state) => [
    state.infoDialogOpen,
    state.setInfoDialogOpen,
  ]);
  const [playClick] = useSound(openSound);
  const [playBoot02] = useSound(bootSound02);

  const [bootSequence, setStartBootSequence] = useBootSequence((state) => [
    state.bootSequence,
    state.setStartBootSequence,
  ]);

  useEffect(() => {
    if (startRebot) {
      const element = document.querySelector(".pipboy-screen");
      if (element) {
        element.classList.add("animate-boot");
        setTimeout(() => {
          element.classList.remove("animate-boot");
          element.classList.add("invisible");
        }, 300);
      }
    }
  }, [startRebot]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "r") {
        playClick();
        playBoot02();
        setStartReboot(true);
        setTimeout(() => {
          setStartBootSequence(true);
          setStartReboot(false);
        }, 2000);
      }
      if (event.key === "s") {
        playClick();
        setSettingsDialogOpen(true);
      }
      if (event.key === "i") {
        playClick();
        setInfoDialogOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="bottom-buttons-bar ring-primary bg-secondary text-primary fixed bottom-3 left-1/2 z-50 w-[90%] -translate-x-1/2 transform ring-[1px] sm:w-auto">
      <div className="flex justify-between space-x-2 px-3 py-2 tracking-tight sm:space-x-8">
        <button
          disabled={bootSequence}
          onClick={() => {
            playClick();
            playBoot02();
            setStartReboot(true);
            setTimeout(() => {
              setStartBootSequence(true);
              setStartReboot(false);
            }, 2000);
          }}
          className={cn({ "opacity-50": bootSequence })}
        >
          <span>R)</span>
          <span className="ml-1 font-semibold">REBOOT</span>
        </button>
        <Dialog modal={false}>
          <DialogTrigger asChild>
            <button
              disabled={bootSequence}
              className={cn({ "opacity-50": bootSequence })}
            >
              <span>S)</span>
              <span className="ml-1 font-semibold">SETTINGS</span>
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>SETTINGS</DialogTitle>
              <SettingsMenu />
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <button
          onClick={() => {
            playClick();
            setInfoDialogOpen(true);
          }}
          disabled={bootSequence}
          className={cn({ "opacity-50": bootSequence })}
        >
          <span>I)</span>
          <span className="ml-1 font-semibold">INFO</span>
        </button>
      </div>
    </div>
  );
};
