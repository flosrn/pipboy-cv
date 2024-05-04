"use client";

import React, { useEffect } from "react";
import useSound from "use-sound";

import { useBootSequence } from "@/store/use-boot-sequence";

const bootSound = "/sounds/BurstStatic/UI_PipBoy_BurstStatic_02.mp3";

export const PowerButton = () => {
  const [
    bootSequence,
    setStartBootSequence,
    bootSequenceVideoFinished,
    setBootSequenceVideoFinished,
  ] = useBootSequence((state) => [
    state.bootSequence,
    state.setStartBootSequence,
    state.bootSequenceVideoFinished,
    state.setBootSequenceVideoFinished,
  ]);
  const [playBoot] = useSound(bootSound);

  useEffect(() => {
    if (bootSequenceVideoFinished) {
      const element = document.querySelector(".pipboy-screen");
      if (element) {
        element.classList.add("animate-boot");
        element.classList.remove("invisible");
        setTimeout(() => {
          element.classList.remove("animate-boot");
        }, 500);
      }
    }
  }, [bootSequenceVideoFinished]);

  return (
    <>
      {bootSequence && <div className="absolute inset-0 bg-black" />}
      {bootSequence && (
        <video
          autoPlay={bootSequence}
          onEnded={() => {
            setStartBootSequence(false);
            playBoot();
            setBootSequenceVideoFinished(true);
            setTimeout(() => setBootSequenceVideoFinished(false), 2000);
          }}
          className="absolute inset-0 z-0 h-full w-full object-cover xl:py-4"
        >
          <source src="/videos/Startup video.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
};
