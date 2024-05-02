import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import Image from "next/image";

import { NavMenu } from "@/components/nav-menu";

import "./globals.css";

const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pipboy CV",
  description: "A Pipboy themed CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firaMono.className}>
        <div className="flex min-h-screen justify-center overflow-hidden bg-black">
          <div className="relative mt-20 h-[777px] w-full max-w-5xl xl:h-[900px] xl:max-w-6xl">
            <Image
              src="/images/pipboy/PipBoyOverlay.png"
              alt="PipBoy overlay"
              layout="fill"
              objectFit="cover"
              className="pointer-events-none z-50 object-[-220px] lg:object-[105px]"
            />
          </div>

          <div className="text-primary pipboy-screen absolute left-0 top-[125px] z-10 mt-16 flex h-[350px] w-full flex-col overflow-hidden min-[380px]:w-[395px] lg:left-auto xl:top-[150px] xl:h-[400px] xl:w-[500px]">
            <NavMenu />
            <div className="text-primary relative h-full">{children}</div>
            <Image
              src="/images/pipboy/PipBoyScreenLayer12.png"
              alt="PipBoy cracked screen"
              layout="fill"
              className="pointer-events-none opacity-100"
            />
            <Image
              src="/images/pipboy/PipBoyScreenDirt.png"
              alt="PipBoy cracked screen"
              layout="fill"
              className="pointer-events-none opacity-100"
            />
            <Image
              src="/images/pipboy/PipBoyScreenFingerprint.png"
              alt="PipBoy cracked screen"
              layout="fill"
              className="pointer-events-none opacity-100"
            />
            {/*<Image*/}
            {/*  src="/images/pipboy/PipBoyScreenCracks_01.png"*/}
            {/*  alt="PipBoy cracked screen"*/}
            {/*  layout="fill"*/}
            {/*  className="pointer-events-none opacity-80"*/}
            {/*/>*/}
            <Image
              src="/images/pipboy/PipBoyScreenCracks_02.png"
              alt="PipBoy cracked screen"
              layout="fill"
              className="pointer-events-none opacity-80"
            />
            {/*<Image*/}
            {/*  src="/images/pipboy/PipBoyScreenSmudged.png"*/}
            {/*  alt="PipBoy smudged screen"*/}
            {/*  layout="fill"*/}
            {/*  className="pointer-events-none opacity-30"*/}
            {/*/>*/}
            <div className="pipboy-screen-shadow" />
          </div>
        </div>
      </body>
    </html>
  );
}
