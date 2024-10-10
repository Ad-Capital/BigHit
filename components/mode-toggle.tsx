"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

// Use React.forwardRef to forward refs to the Button component
export const ModeToggle = React.forwardRef<HTMLButtonElement>((props, ref) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      ref={ref} // Forward the ref to the Button component
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      {...props} // Spread the props in case any are passed to ModeToggle
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
});

ModeToggle.displayName = "ModeToggle"; // Optional but recommended for better debugging in React DevTools
