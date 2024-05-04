"use client";

import React from "react";
import Image from "next/image";

import { SettingsMenu } from "@/components/settings-menu";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export type SettingsButtonProps = {};

export const SettingsDialog = (props: SettingsButtonProps) => {
  return (
    <Dialog modal={false}>
      <DialogTrigger asChild>
        <button className="bg-secondary absolute left-8 top-3 xl:left-16 xl:top-6">
          <Image
            src="/images/icons/Gear.png"
            alt="PipBoy screen top left"
            width={15}
            height={15}
          />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>SETTINGS</DialogTitle>
          <SettingsMenu />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
