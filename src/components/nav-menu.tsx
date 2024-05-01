"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSound from "use-sound";

import { cn } from "@/lib/utils";

const pipboyRotaryVertical_01 =
  "/sounds/BurstStatic/UI_PipBoy_RotaryVertical_01.mp3";
const sounds = [
  "/sounds/BurstStatic/UI_PipBoy_BurstStatic_01.mp3",
  "/sounds/BurstStatic/UI_PipBoy_BurstStatic_02.mp3",
  "/sounds/BurstStatic/UI_PipBoy_BurstStatic_05.mp3",
  "/sounds/BurstStatic/UI_PipBoy_BurstStatic_07.mp3",
  "/sounds/BurstStatic/UI_PipBoy_BurstStatic_08.mp3",
  "/sounds/BurstStatic/UI_PipBoy_BurstStatic_10.mp3",
  "/sounds/BurstStatic/UI_PipBoy_BurstStatic_12.mp3",
  "/sounds/BurstStatic/UI_PipBoy_BurstStatic_14.mp3",
  "/sounds/BurstStatic/UI_PipBoy_BurstStatic_17.mp3",
];

const LINKS = [
  { href: "/", label: "STATUS" },
  { href: "/experience", label: "EXP" },
  { href: "/data", label: "DATA" },
  { href: "/map", label: "MAP" },
  { href: "/radio", label: "RADIO" },
];

export const NavMenu = () => {
  const [playAnimation, setPlayAnimation] = useState(false);
  const [play01] = useSound(pipboyRotaryVertical_01);
  const [play02] = useSound(sounds[Math.floor(Math.random() * sounds.length)]);
  const pathname = usePathname();

  useEffect(() => {
    if (playAnimation) {
      const element = document.querySelector(".pipboy-screen");
      if (element) {
        element.classList.add("animate-distortion");
        setTimeout(() => {
          element.classList.remove("animate-distortion");
        }, 300);
      }
    }
  }, [playAnimation]);

  return (
    <div className={cn("mt-5 w-full px-5", {})}>
      {playAnimation && (
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full backdrop-blur-[0.9px]" />
      )}
      <nav className="pipboy-nav relative flex w-full justify-center">
        <div className="bg-primary absolute bottom-0 left-0 h-0.5 w-[38px]" />
        <div className="bg-primary absolute bottom-0 right-0 h-0.5 w-[37px]" />
        {LINKS.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={() => {
                setPlayAnimation(true);
                play01();
                setTimeout(() => play02(), 100);
                setTimeout(() => setPlayAnimation(false), 300);
              }}
              className={cn("text-primary relative", {
                "border-primary border-b-2": !isActive,
              })}
            >
              <span
                className={cn("px-2", {
                  "pipboy-nav-menu-item": isActive,
                })}
              >
                <span className="relative bg-[#222222]">{label}</span>
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
