"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: "STATUS" },
  { href: "/experience", label: "EXP" },
  { href: "/data", label: "DATA" },
  { href: "/map", label: "MAP" },
  { href: "/radio", label: "RADIO" },
];

export const NavMenu = () => {
  const pathname = usePathname();
  return (
    <div className="mt-5 w-full px-5">
      <nav className="pipboy-nav relative flex w-full justify-center">
        <div className="bg-primary absolute bottom-0 left-0 h-0.5 w-[38px]" />
        <div className="bg-primary absolute bottom-0 right-0 h-0.5 w-[37px]" />
        {LINKS.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
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
