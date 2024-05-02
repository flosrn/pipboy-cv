"use client";

import React from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import useSound from "use-sound";

import { Screen } from "@/components/screen";
import { SettingsMenu } from "@/components/settings-menu";

const clickSound = "/sounds/UI_PipBoy_Favorite_Menu_Dpad_A.mp3";

export type SettingsButtonProps = {};

export const SettingsButton = (props: SettingsButtonProps) => {
  const [play] = useSound(clickSound);
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className="bg-secondary absolute left-8 top-3">
        <button onClick={play as any}>
          <Image
            src="/images/icons/Gear.png"
            alt="PipBoy screen top left"
            width={15}
            height={15}
          />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed inset-0 h-full w-full bg-black focus:outline-none">
          <div className="flex w-full justify-center">
            <Screen className="relative">
              <Dialog.Close asChild>
                <button
                  onClick={play as any}
                  className="text-primary bg-secondary absolute right-7 top-3 px-1.5 text-xs font-bold"
                >
                  X
                </button>
              </Dialog.Close>
              <div className="flex h-full items-center justify-center px-5">
                <div className="settings-modal border-primary relative h-[80%] w-[95%] border">
                  <div className="flex h-full justify-center">
                    <h1 className="text-primary absolute left-1/2 top-[-10px] flex w-[60%] -translate-x-1/2 transform justify-center bg-black">
                      SETTINGS
                    </h1>
                    <div className="text-primary mt-3 w-full px-2">
                      <SettingsMenu />
                    </div>
                  </div>
                </div>
              </div>
            </Screen>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
