"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useEmblaCarousel from "embla-carousel-react";
import useSound from "use-sound";

import { cn } from "@/lib/utils";

const pipboyRotaryHorizontal_02 = "/sounds/UI_PipBoy_RotaryHorizontal_02.mp3";

const SUB_LINKS = [
  { id: 0, href: "/stat/status", label: "STATUS" },
  { id: 1, href: "/stat/special", label: "SPECIAL" },
  { id: 2, href: "/stat/perks", label: "PERKS" },
];

export const NavSubMenu = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeIndex] = useState(() => {
    const index = SUB_LINKS.findIndex(({ href }) => href === pathname);
    return index === -1 ? 0 : index;
  });
  const [play] = useSound(pipboyRotaryHorizontal_02);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    startIndex: activeIndex,
    containScroll: false,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        play();
        emblaApi?.scrollTo(emblaApi?.selectedScrollSnap() + 1);
        router.push(SUB_LINKS[emblaApi?.selectedScrollSnap() as number].href);
      }
      if (event.key === "ArrowLeft") {
        play();
        emblaApi?.scrollTo(emblaApi?.selectedScrollSnap() - 1);
        router.push(SUB_LINKS[emblaApi?.selectedScrollSnap() as number].href);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [emblaApi, play]);

  return (
    <div className="embla px-14">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container space-x-2">
          {SUB_LINKS.map(({ href, label }, index) => {
            const isActive = pathname === href;
            const i = emblaApi?.selectedScrollSnap();
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
                  "opacity-60":
                    !isActive && (i === index - 1 || i === index + 1),
                  "opacity-30":
                    !isActive && (i === index - 2 || i === index + 2),
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
