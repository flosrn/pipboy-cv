"use client";

import React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { SettingsMenu } from "@/components/settings-menu";

export type BottomButtonsBarProps = {};

export const BottomButtonsBar = (props: BottomButtonsBarProps) => {
  return (
    <div className="bg-secondary text-primary fixed bottom-3 left-1/2 z-50 -translate-x-1/2 transform">
      <div className="flex justify-between space-x-8 px-3 py-2 tracking-tight">
        <button className="">
          <span>R)</span>
          <span className="ml-1 font-semibold">REBOOT</span>
        </button>
        <Dialog modal={false}>
          <DialogTrigger asChild>
            <button className="">
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
        <button className="">
          <span>I)</span>
          <span className="ml-1 font-semibold">INFO</span>
        </button>
      </div>
    </div>
  );
};
