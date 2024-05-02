import Image from "next/image";

export default function StatusPage() {
  return (
    <div className="item-center relative flex h-full justify-center text-xs">
      <Image
        src="/images/Vaultboy_01.gif"
        alt="Vaultboy"
        width={105}
        height={146}
        className="absolute inset-0 left-1/2 top-5 -translate-x-1/2 transform"
      />
      <div className="absolute bottom-10 left-0 w-full">
        <div className="mb-1 flex items-center justify-center">
          Florian SERAN
        </div>
        <div className="flex items-center space-x-1 px-8">
          <div className="bg-secondary px-1">HP 90/90</div>
          <div className="item-center bg-secondary flex flex-1 items-center space-x-2 px-1">
            <span className="">LEVEL 30</span>
            <div className="relative h-2 flex-1">
              <span className="border-primary absolute inset-0 h-full w-full border-[1px]" />
              <span className="bg-primary absolute inset-0 h-2 w-1/3" />
            </div>
          </div>
          <div className="bg-secondary px-1">AP 70/70</div>
        </div>
      </div>
    </div>
  );
}
