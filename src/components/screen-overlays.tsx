import Image from "next/image";

export const ScreenOverlays = () => {
  return (
    <>
      <Image
        src="/images/pipboy/PipBoyScreenLayer12.png"
        alt="PipBoy cracked screen"
        fill
        priority
        sizes="100%"
        className="pointer-events-none opacity-100"
      />
      <Image
        src="/images/pipboy/PipBoyScreenDirt.png"
        alt="PipBoy cracked screen"
        fill
        priority
        sizes="100%"
        className="pointer-events-none opacity-100"
      />
      <Image
        src="/images/pipboy/PipBoyScreenFingerprint.png"
        alt="PipBoy cracked screen"
        fill
        priority
        sizes="100%"
        className="pointer-events-none opacity-100"
      />
      <Image
        src="/images/pipboy/PipBoyScreenCracks_01.png"
        alt="PipBoy cracked screen"
        fill
        priority
        sizes="100%"
        className="pointer-events-none opacity-80"
      />
      <Image
        src="/images/pipboy/PipBoyScreenCracks_02.png"
        alt="PipBoy cracked screen"
        fill
        priority
        sizes="100%"
        className="pointer-events-none opacity-80"
      />
      <Image
        src="/images/pipboy/PipBoyScreenSmudged.png"
        alt="PipBoy smudged screen"
        fill
        priority
        sizes="100%"
        className="pointer-events-none opacity-30"
      />
    </>
  );
};
