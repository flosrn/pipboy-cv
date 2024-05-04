"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useSound from "use-sound";

import { cn } from "@/lib/utils";

const pipboyFavoriteMenu = "/sounds/UI_General_Focus.mp3";

const special = [
  {
    id: 1,
    name: "Strength",
    description:
      "A la force d'un super mutant, il peut soulever un ordinateur à lui tout seul et le jeter par la fenêtre en cas de bug trop persistant.",
    value: 8,
    picture: "/images/special/strength.gif",
  },
  {
    id: 2,
    name: "Perception",
    description:
      "Détecte les erreurs plus vite que son ombre, dispose d'un radar à fermetures de balises manquantes dernier cri.",
    value: 7,
    picture: "/images/special/perception.gif",
  },
  {
    id: 3,
    name: "Endurance",
    description:
      "Capable de coder pendant 12 heures sans s'arrêter sur fond de musique techno si on lui donne assez de litres de café.",
    value: 6,
    picture: "/images/special/endurance.gif",
  },
  {
    id: 4,
    name: "Charisma",
    description:
      "A le charisme d'une goule sauvage, mais il sait se montrer convaincant quand il s'agit de proposer de nouvelles technos.",
    value: 4,
    picture: "/images/special/charisma.gif",
  },
  {
    id: 5,
    name: "Intelligence",
    description:
      "Presque aussi intelligent que ChatGPT, il a le cerveau d'un super ordinateur mais pas la puissance de calcul. Rêve de code même la nuit.",
    value: 7,
    picture: "/images/special/intelligence.gif",
  },
  {
    id: 6,
    name: "Agility",
    description:
      "Aussi agile qu'un chat, il peut coder en équilibre sur une branche d'arbre et il jongle avec les frameworks JS comme personne.",
    value: 6,
    picture: "/images/special/agility.gif",
  },
  {
    id: 7,
    name: "Luck",
    description:
      "A tout juste assez de chance pour que son code compile du premier coup, mais pas assez pour que ses investissements en crypto lui rapportent des millions.",
    value: 3,
    picture: "/images/special/luck.gif",
  },
];

export default function SpecialPage() {
  const [active, setActive] = useState(special[0].id);
  const [play] = useSound(pipboyFavoriteMenu);
  const activeItem = special.find((item) => item.id === active);
  const currentIndex = special.findIndex((item) => item.id === active);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const nextIndex = currentIndex + 1;
      const prevIndex = currentIndex - 1;

      if (event.key === "ArrowDown" && nextIndex < special.length) {
        setActive(special[nextIndex].id);
        play();
      }

      if (event.key === "ArrowUp" && prevIndex >= 0) {
        setActive(special[prevIndex].id);
        play();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, active, play]);

  return (
    <div className="flex space-x-3 px-6 text-sm">
      <div className="mt-2 w-1/2">
        {special.map(({ id, name, value }) => (
          <div
            key={id}
            onMouseEnter={() => {
              play();
              setActive(id);
            }}
            className={cn("flex items-center justify-between px-1", {
              "text-secondary bg-primary": active === id,
            })}
          >
            <h2 className="">{name}</h2>
            <p className="">{value}</p>
          </div>
        ))}
      </div>
      <div className="w-1/2">
        {activeItem && (
          <div className="">
            <Image
              src={activeItem.picture}
              alt={activeItem.name}
              width={225}
              height={163}
              className="special-filter"
            />
            <div className="mt-2">
              <p className="text-xs">{activeItem.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
