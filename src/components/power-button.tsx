"use client";

import React from "react";
import useSound from "use-sound";

import { useBootSequence } from "@/store/use-boot-sequence";

const openSound = "/sounds/UI_General_OK.mp3";

export const PowerButton = () => {
  const [bootSequence, setStartBootSequence] = useBootSequence((state) => [
    state.bootSequence,
    state.setStartBootSequence,
  ]);
  const [playClick] = useSound(openSound);

  const handlePowerButton = () => {
    playClick();
    setStartBootSequence(true);
  };

  return (
    <>
      {bootSequence && <div className="absolute inset-0 bg-black" />}
      {bootSequence && (
        <video
          autoPlay={bootSequence}
          onEnded={() => setStartBootSequence(false)}
          className="absolute inset-0 z-0 h-full w-full object-cover xl:py-4"
        >
          <source src="/videos/Startup video.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute bottom-[-110px] right-0 z-50 size-14">
        <button
          onClick={handlePowerButton}
          className="pointer-events-auto h-full w-full"
        />
      </div>
    </>
  );
};
