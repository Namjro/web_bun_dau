import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
          {
            "bg-[#F57C00] text-white hover:bg-[#E65100] shadow-sm hover:shadow focus-visible:ring-[#F57C00]":
              variant === "primary",
            "bg-[#2E6B3E] text-white hover:bg-[#235330] shadow-sm hover:shadow focus-visible:ring-[#2E6B3E]":
              variant === "secondary",
            "border border-[#E7E5E4] bg-white text-[#1C1917] hover:bg-[#F7F5EE] focus-visible:ring-[#1C1917]":
              variant === "outline",
            "bg-transparent text-[#1C1917] hover:bg-[#F0ECE1]":
              variant === "ghost",
          },
          {
            "h-8 px-3 text-xs rounded-full": size === "sm",
            "h-10 px-5 text-sm rounded-full": size === "md",
            "h-[52px] px-7 text-base rounded-full": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
