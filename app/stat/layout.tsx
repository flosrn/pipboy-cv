import { NavSubMenu } from "@/components/nav-sub-menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavSubMenu />
      {children}
    </div>
  );
}
