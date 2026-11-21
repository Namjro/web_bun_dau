import React from "react";
import { cn } from "@/projects/bun-dau/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "subtle";
}

export function Badge({
  className,
  variant = "subtle",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide",
        {
          "bg-[#FFF3E0] text-[#F57C00]": variant === "primary",
          "bg-[#EAF3EC] text-[#2E6B3E]": variant === "secondary",
          "bg-[#F0ECE1] text-[#57534E]": variant === "subtle",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
