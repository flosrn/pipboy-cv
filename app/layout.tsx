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
        <div className="flex min-h-screen justify-center bg-[#10170f]">
          <div className="relative mt-20 h-[777px] w-full max-w-5xl xl:h-[900px] xl:max-w-6xl">
            <Image
              src="/images/Pip-Boy Overlay.png"
              alt="PipBoy overlay"
              layout="fill"
              objectFit="cover"
              className="pointer-events-none z-50 object-[-220px] lg:object-[100px]"
            />
          </div>

          <div className="text-primary pipboy-screen absolute left-0 top-[125px] z-10 mr-3 mt-16 flex h-[350px] w-[395px] flex-col overflow-hidden lg:left-auto xl:w-[500px]">
            <NavMenu />
            <div className="text-primary relative h-full">{children}</div>
            <Image
              src="/images/PipBoyCrackedScreen.png"
              alt="PipBoy cracked screen"
              layout="fill"
              className="pointer-events-none opacity-40"
            />
            {/*<Image*/}
            {/*  src="/images/PipBoySmudgedScreen.png"*/}
            {/*  alt="PipBoy smudged screen"*/}
            {/*  layout="fill"*/}
            {/*  className="pointer-events-none opacity-50"*/}
            {/*/>*/}
            <div className="pipboy-screen-shadow" />
          </div>
        </div>
      </body>
    </html>
  );
}
