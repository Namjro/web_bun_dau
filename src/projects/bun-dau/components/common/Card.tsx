import React from "react";
import { cn } from "@/projects/bun-dau/lib/utils";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-[0px_4px_16px_0px_rgba(28,25,23,0.06)] hover:shadow-[0px_10px_24px_0px_rgba(28,25,23,0.12)] transition-shadow duration-300 border border-[#E7E5E4]/60 overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
