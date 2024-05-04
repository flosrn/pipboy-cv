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

const openSound = "/sounds/UI_General_OK.mp3";
const bootSound02 = "/sounds/BurstStatic/UI_PipBoy_BurstStatic_05.mp3";

export type BottomButtonsBarProps = {};

export const BottomButtonsBar = (props: BottomButtonsBarProps) => {
  const [startRebot, setStartReboot] = useState(false);
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

  return (
    <div className="bg-secondary text-primary fixed bottom-3 left-1/2 z-50 -translate-x-1/2 transform">
      <div className="flex justify-between space-x-8 px-3 py-2 tracking-tight">
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
