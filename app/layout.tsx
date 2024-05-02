import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import Image from "next/image";

import { NavMenu } from "@/components/nav-menu";

import "./globals.css";

import { PowerButton } from "@/components/power-button";
import { Screen } from "@/components/screen";
import { ScreenOverlays } from "@/components/screen-overlays";
import { SettingsButton } from "@/components/settings-button";

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
          <div className="pointer-events-none relative z-50 mt-20 h-[777px] w-full max-w-5xl xl:h-[900px] xl:max-w-6xl">
            <Image
              src="/images/pipboy/PipBoyOverlay.png"
              alt="PipBoy overlay"
              fill
              priority
              style={{ objectFit: "cover" }}
              className="pointer-events-none select-none object-[-220px] lg:object-[105px]"
            />
          </div>

          <Screen className="text-primary pipboy-screen overflow-hidden">
            <NavMenu />
            <div className="text-primary relative h-full select-none">
              {children}
            </div>
            <div className="pipboy-screen-shadow" />
            <SettingsButton />
          </Screen>

          <Screen className="pointer-events-none z-30">
            <PowerButton />
            <ScreenOverlays />
          </Screen>
        </div>
      </body>
    </html>
  );
}
