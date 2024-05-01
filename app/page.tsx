import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image
        src="/images/Pip-Boy 3000 Mark IV.png"
        alt="pipboy-overlay"
        width={1380}
        height={1047}
      />
    </main>
  );
}
