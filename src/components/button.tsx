import { cn } from "@/lib/utils";

export type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn("text-primary bg-secondary mt-3 px-2 py-1.5", className)}
    >
      {children}
    </button>
  );
};
