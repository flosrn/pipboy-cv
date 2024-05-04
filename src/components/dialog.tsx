"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import useSound from "use-sound";

import { Screen } from "@/components/screen";
import { cn } from "@/lib/utils";

const openSound = "/sounds/UI_General_OK.mp3";
const cancelSound = "/sounds/UI_General_Cancel.mp3";

const Dialog = DialogPrimitive.Root;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>
>(({ ...props }, ref) => {
  const [playClick] = useSound(openSound);
  return (
    <DialogPrimitive.Trigger ref={ref} {...props} onClick={playClick as any} />
  );
});
DialogTrigger.displayName = DialogPrimitive.Trigger.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const [playCancel] = useSound(cancelSound);
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        onCloseAutoFocus={playCancel as any}
        className="data-[state=open]:animate-contentShow fixed inset-0 h-full w-full select-none bg-black
      focus:outline-none
      "
      >
        <div className="flex h-full w-full lg:justify-center">
          <Screen className="relative">
            <DialogClose className="text-primary bg-secondary absolute right-7 top-3 text-xs font-bold xl:right-14 xl:top-7">
              <X className="w- h-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
            <div className="flex h-full items-center justify-center px-5">
              <div className="settings-modal border-primary relative h-[80%] w-[95%] border xl:h-[75%] xl:w-[85%]">
                <div className="flex h-full justify-center">
                  <div className="text-primary mt-3 w-full px-2">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </Screen>
        </div>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-primary absolute left-1/2 top-[-10px] flex w-[60%] -translate-x-1/2 transform justify-center bg-black",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
