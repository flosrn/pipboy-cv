import { cn } from "@/lib/utils";

export type ScreenProps = {
  children: React.ReactNode;
  className?: string;
};

export const Screen = ({ children, className }: ScreenProps) => {
  return (
    <div
      className={cn(
        "absolute left-0 top-[145px] mt-16 flex h-[320px] w-full flex-col min-[380px]:w-[395px] lg:left-auto xl:top-[150px] xl:h-[400px] xl:w-[500px]",
        className
      )}
    >
      {children}
    </div>
  );
};
