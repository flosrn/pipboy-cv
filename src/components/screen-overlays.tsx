"use client";

import Image from "next/image";

import { useOverlays } from "@/store/use-overlays";

export const ScreenOverlays = () => {
  const cracksOpacity = useOverlays((state) => state.cracksOpacity);
  const dirtOpacity = useOverlays((state) => state.dirtOpacity);
  const fingerprintsOpacity = useOverlays((state) => state.fingerprintsOpacity);
  const smudgesOpacity = useOverlays((state) => state.smudgesOpacity);
  return (
    <>
      <Image
        src="/images/pipboy/PipBoyScreenLayer12.png"
        alt="PipBoy cracked screen"
        fill
        priority
        sizes="100%"
        className="pointer-events-none"
      />
      <Image
        src="/images/pipboy/PipBoyScreenDirt.png"
        alt="PipBoy dirt screen"
        fill
        priority
        sizes="100%"
        style={{ opacity: dirtOpacity[0] / 100 }}
        className="pointer-events-none opacity-100"
      />
      <Image
        src="/images/pipboy/PipBoyScreenFingerprint.png"
        alt="PipBoy fingerprint screen"
        fill
        priority
        sizes="100%"
        style={{ opacity: fingerprintsOpacity[0] / 100 }}
        className="pointer-events-none opacity-100"
      />
      <Image
        src="/images/pipboy/PipBoyScreenCracks_01.png"
        alt="PipBoy cracked screen"
        fill
        priority
        sizes="100%"
        style={{ opacity: cracksOpacity[0] / 100 }}
        className="pointer-events-none"
      />
      <Image
        src="/images/pipboy/PipBoyScreenCracks_02.png"
        alt="PipBoy cracked screen"
        fill
        priority
        sizes="100%"
        style={{ opacity: cracksOpacity[0] / 100 }}
        className="pointer-events-none opacity-80"
      />
      <Image
        src="/images/pipboy/PipBoyScreenSmudged.png"
        alt="PipBoy smudged screen"
        fill
        priority
        sizes="100%"
        style={{ opacity: smudgesOpacity[0] / 100 }}
        className="pointer-events-none opacity-30"
      />
    </>
  );
};
