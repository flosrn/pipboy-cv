import { NavSubMenu } from "@/components/nav-sub-menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavSubMenu />
      {children}
    </>
  );
}
