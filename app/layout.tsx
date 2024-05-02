import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import Image from "next/image";

import { NavMenu } from "@/components/nav-menu";

import pipboyOverlay from "../public/images/pipboy/PipBoyOverlay.png";

import "./globals.css";

import { PowerButton } from "@/components/power-button";
import { ScreenOverlays } from "@/components/screen-overlays";

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
          <div className="pointer-events-none relative z-10 mt-20 h-[777px] w-full max-w-5xl xl:h-[900px] xl:max-w-6xl">
            <Image
              src={pipboyOverlay}
              alt="PipBoy overlay"
              fill
              priority
              style={{ objectFit: "cover" }}
              className="pointer-events-none select-none object-[-220px] lg:object-[105px]"
            />
          </div>

          <div className="text-primary pipboy-screen absolute left-0 top-[125px] z-0 mt-16 flex h-[350px] w-full flex-col overflow-hidden min-[380px]:w-[395px] lg:left-auto xl:top-[150px] xl:h-[400px] xl:w-[500px]">
            <NavMenu />
            <div className="text-primary relative h-full select-none">
              {children}
            </div>
            <div className="pipboy-screen-shadow" />
          </div>

          <div className="pointer-events-none absolute left-0 top-[125px] mt-16 flex h-[350px] w-full flex-col min-[380px]:w-[395px] lg:left-auto xl:top-[150px] xl:h-[400px] xl:w-[500px]">
            <PowerButton />
            <ScreenOverlays />
          </div>
        </div>
      </body>
    </html>
  );
}
