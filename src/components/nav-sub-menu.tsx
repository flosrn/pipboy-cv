"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useEmblaCarousel from "embla-carousel-react";
import useSound from "use-sound";

import { cn } from "@/lib/utils";

const pipboyRotaryHorizontal_02 = "/sounds/UI_PipBoy_RotaryHorizontal_02.mp3";

const SUB_LINKS = [
  { href: "/stat/status", label: "STATUS" },
  { href: "/stat/special", label: "SPECIAL" },
  { href: "/stat/perks", label: "PERKS" },
];

export const NavSubMenu = () => {
  const pathname = usePathname();
  const [play] = useSound(pipboyRotaryHorizontal_02);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: false,
  });

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container space-x-2">
          {SUB_LINKS.map(({ href, label }, index) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                onClick={() => {
                  play();
                  emblaApi?.scrollTo(index);
                }}
                href={href}
                className={cn("embla__slide text-sm", {
                  "font-semibold": isActive,
                })}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
