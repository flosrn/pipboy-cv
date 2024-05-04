"use client";

import React from "react";
import Image from "next/image";
import { HeartIcon } from "lucide-react";

import { useInfoDialog } from "@/store/use-info-dialog";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export type InfoButtonProps = {};

export const InfoDialog = (props: InfoButtonProps) => {
  const [infoDialogOpen, setInfoDialogOpen] = useInfoDialog((state) => [
    state.infoDialogOpen,
    state.setInfoDialogOpen,
  ]);

  return (
    <Dialog
      modal={false}
      open={infoDialogOpen}
      onOpenChange={setInfoDialogOpen}
    >
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
          <DialogTitle>INFO</DialogTitle>
          <div className="flex h-full w-full items-center">
            <div className="text-primary h-full space-y-2 text-xs">
              <p>
                This project is created with{" "}
                <HeartIcon className="inline-block size-3" /> by{" "}
                <a
                  href="https://github.com/flosrn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  @flosrn
                </a>
                .
              </p>
              <p>
                It was created because I thought it was fun to build a Fallout
                Pipboy themed interactive CV. The project is open source and
                available on{" "}
                <a
                  href="https://github.com/flosrn/pipby-cv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  GitHub
                </a>
                .
              </p>
              <p>
                The project is built with Next.js, TypeScript, Tailwind CSS, and
                Zustand. The Pipboy theme is based on the Fallout game series.
              </p>
              <p>
                The project is not affiliated with Bethesda Game Studios or the
                Fallout game series.
              </p>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
