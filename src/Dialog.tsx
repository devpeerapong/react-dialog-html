import clsx from "clsx";
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

import type { PropsWithChildren, JSX } from "react";

export function Dialog({
  className,
  open,
  onOpenChange,
  children,
  fullscreen,
  onMouseDown,
  ...props
}: PropsWithChildren<
  {
    open?: boolean;
    onOpenChange(open: boolean): void;
    fullscreen?: boolean;
  } & JSX.IntrinsicElements["dialog"]
>) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // open and close <dialog> based on `open` props
  useEffect(() => {
    if (!open) {
      dialogRef.current?.close();
      return;
    }

    if (dialogRef.current?.hasAttribute("open")) {
      return;
    }

    dialogRef.current?.showModal();
  }, [open]);

  // handle ESC press
  useEffect(() => {
    if (!open) {
      return;
    }

    const handler = () => onOpenChange(false);
    dialogRef.current?.addEventListener("close", handler);

    return () => dialogRef.current?.removeEventListener("close", handler);
  }, [open, onOpenChange]);

  // lock body scroll and add padding if needed
  useEffect(() => {
    if (open) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.offsetWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [open]);

  if (!open) {
    return null;
  }

  return createPortal(
    <dialog
      className={clsx(
        "m-auto bg-transparent",
        fullscreen && "h-dvh max-h-full max-w-full",
      )}
      ref={dialogRef}
      onMouseDown={(e) => {
        onMouseDown?.(e);

        // ::backdrop is part of dialog
        // only close the dialog on ::backdrop clicked
        // For this to work, do not add padding to the <dialog>
        if (e.isDefaultPrevented() && e.target === e.currentTarget) {
          onOpenChange(false);
        }
      }}
      {...props}
    >
      {children}
    </dialog>,
    document.body,
  );
}
