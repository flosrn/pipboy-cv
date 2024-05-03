"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useSound from "use-sound";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

const pipboyFavoriteMenu = "/sounds/UI_PipBoy_Favorite_Menu_Up_01.mp3";

const perks = [
  {
    id: 1,
    name: "Perfectionniste",
    description:
      "Traque inlassablement chaque pixel récalcitrant pour garantir une finition parfaite des interfaces utilisateur, avec un souci du détail presque obsessionnel.",
    value: 8,
    picture: "/images/perks/rifleman.gif",
  },
  {
    id: 2,
    name: "Adaptable",
    description:
      "Maîtrise l'art de l'adaptabilité, transformant les défis les plus complexes en solutions créatives et efficaces.",
    value: 7,
    picture: "/images/perks/makeshift.gif",
  },
  {
    id: 3,
    name: "Intrépide",
    description:
      "Aime conquérir de nouveaux territoires encore inexplorés, il n'a pas peur de se lancer dans des projets ambitieux et de repousser ses limites.",
    value: 6,
    picture: "/images/perks/lone_wanderer.gif",
  },
  {
    id: 4,
    name: "Joyeux",
    description:
      "Infuse un esprit de joie et de dynamisme au sein de son équipe, créant une ambiance de travail motivante et propice à la créativité.",
    value: 6,
    picture: "/images/perks/party.gif",
  },
  {
    id: 5,
    name: "Déterminé",
    description:
      "Pousse sans cesse les limites de la perfection, armé d'une volonté de fer et d'une discipline forgée à travers de nombreuses années de musculation.",
    value: 9,
    picture: "/images/perks/nerd_rage.gif",
  },
  {
    id: 6,
    name: "Empathique",
    description:
      "Sait écouter et comprendre les besoins de ses utilisateurs, il sait se mettre à leur place pour concevoir des interfaces intuitives et faciles à utiliser.",
    value: 4,
    picture: "/images/perks/philantropist.gif",
  },
];

export default function PerksPage() {
  const [active, setActive] = useState(perks[0].id);
  const [play] = useSound(pipboyFavoriteMenu);
  const activeItem = perks.find((item) => item.id === active);
  const currentIndex = perks.findIndex((item) => item.id === active);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const nextIndex = currentIndex + 1;
      const prevIndex = currentIndex - 1;

      if (event.key === "ArrowDown" && nextIndex < perks.length) {
        setActive(perks[nextIndex].id);
        play();
      }

      if (event.key === "ArrowUp" && prevIndex >= 0) {
        setActive(perks[prevIndex].id);
        play();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, active, play]);

  return (
    <div className="flex space-x-2 px-6 text-sm">
      <div className="mt-2 w-1/2">
        {perks.map(({ id, name, value }) => (
          <div
            key={id}
            onMouseEnter={() => {
              play();
              setActive(id);
            }}
            className={cn("flex items-center px-1", {
              "text-secondary bg-primary": active === id,
            })}
          >
            <span>
              {name} ({value})
            </span>
          </div>
        ))}
      </div>
      <div className="-mt-1 w-1/2">
        {activeItem && (
          <div className="flex flex-col items-center justify-center">
            <Image
              src={activeItem.picture}
              alt={activeItem.name}
              width={225}
              height={163}
              style={{ height: 115, width: 110 }}
              className="special-filter"
            />
            <div className="">
              <div className="flex items-center justify-center">
                <span className="flex space-x-1">
                  {Array.from({ length: activeItem.value }).map((_, i) => (
                    <Icons.star key={i} />
                  ))}
                </span>
              </div>
              <p className="mt-2 text-xs">{activeItem.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
