import Image from "next/image";

import mining from "../../public/images/vaultboy/build.gif";

export default function ExperiencePage() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6">
      <h1 className="font-semibold">Page under construction</h1>
      <Image
        src={mining}
        alt="Under construction"
        className="special-filter mt-3 w-1/2"
      />
      <p className="mt-3 text-center text-xs">Please come back later...</p>
    </div>
  );
}
