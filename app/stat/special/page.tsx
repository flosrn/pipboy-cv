"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useSound from "use-sound";

import { cn } from "@/lib/utils";

const pipboyFavoriteMenu = "/sounds/UI_PipBoy_Favorite_Menu_Up_01.mp3";

const special = [
  {
    id: 1,
    name: "Strength",
    description:
      "Strength is the ability to move heavy objects. It is the most important attribute for a warrior.",
    value: 8,
    picture: "/images/special/strength.gif",
  },
  {
    id: 2,
    name: "Perception",
    description:
      "Perception is the ability to see things. It is important for a sniper.",
    value: 5,
    picture: "/images/special/perception.gif",
  },
  {
    id: 3,
    name: "Endurance",
    description:
      "Endurance is the ability to withstand physical stress. It is important for a tank.",
    value: 7,
    picture: "/images/special/endurance.gif",
  },
  {
    id: 4,
    name: "Charisma",
    description:
      "Charisma is the ability to influence people. It is important for a leader.",
    value: 3,
    picture: "/images/special/charisma.gif",
  },
  {
    id: 5,
    name: "Intelligence",
    description:
      "Intelligence is the ability to solve problems. It is important for a scientist.",
    value: 9,
    picture: "/images/special/intelligence.gif",
  },
  {
    id: 6,
    name: "Agility",
    description:
      "Agility is the ability to move quickly. It is important for a thief.",
    value: 6,
    picture: "/images/special/agility.gif",
  },
  {
    id: 7,
    name: "Luck",
    description:
      "Luck is the ability to get lucky. It is important for a gambler.",
    value: 10,
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
      <div className="mt-5 w-1/2">
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
              <p className="">{activeItem.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
