import Image from "next/image";

import { Icons } from "@/components/icons";

import webAppLogo from "../../../public/images/icons/Logo_app_web.png";

export default function StatusPage() {
  return (
    <div className="item-center relative flex h-full justify-center text-xs xl:mt-8">
      <div className="bg-primary absolute left-1/2 top-1.5 h-1.5 w-6 -translate-x-1/2 transform" />
      <div className="bg-primary absolute left-32 top-14 h-1.5 w-6 -translate-x-1/2 transform" />
      <div className="bg-primary absolute right-24 top-14 h-1.5 w-6 -translate-x-1/2 transform" />
      <div className="bg-primary absolute bottom-32 left-1/2 h-1.5 w-6 -translate-x-1/2 transform xl:bottom-48" />
      <div className="bg-primary absolute left-32 top-28 h-1.5 w-6 -translate-x-1/2 transform" />
      <div className="bg-primary absolute right-24 top-28 h-1.5 w-6 -translate-x-1/2 transform" />
      <Image
        src="/images/Vaultboy_01.gif"
        alt="Vaultboy"
        width={88}
        height={123}
        className="absolute inset-0 left-1/2 top-5 h-auto -translate-x-1/2 transform"
      />
      <div className="absolute bottom-9 left-0 w-full xl:bottom-[85px]">
        <div className="mb-2 flex h-8 items-center justify-center">
          <div className="bg-secondary flex flex-col items-center p-0.5">
            <Image src={webAppLogo} alt="web app" className="h-7 w-7" />
          </div>
          <div className="bg-secondary ml-1 flex flex-col items-center p-0.5">
            <Icons.react />
            <span className="text-xs">85</span>
          </div>
          <div className="bg-secondary ml-2.5 flex h-full items-center justify-center p-0.5">
            <Icons.typescript />
          </div>
          <div className="bg-secondary ml-1 flex flex-col items-center p-0.5">
            <Icons.nextjs />
            <span className="text-xs">80</span>
          </div>
          <div className="bg-secondary ml-1 flex flex-col items-center p-0.5">
            <Icons.tailwindcss />
            <span className="text-xs">90</span>
          </div>
        </div>
        <div className="mb-2 flex items-center justify-center">Flosrn</div>
        <div className="flex items-center space-x-1 px-8">
          <div className="bg-secondary px-1 pr-6">HP 90/90</div>
          <div className="item-center bg-secondary flex flex-1 items-center space-x-2 px-1">
            <span className="">LEVEL 30</span>
            <div className="relative h-2 flex-1">
              <span className="border-primary absolute inset-0 h-full w-full border-[1px]" />
              <span className="bg-primary absolute inset-0 h-2 w-1/3" />
            </div>
          </div>
          <div className="bg-secondary px-1 pl-6">AP 70/70</div>
        </div>
      </div>
    </div>
  );
}
