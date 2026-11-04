import * as React from "react";
import { Badge, type BadgeProps } from "./Badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: BadgeProps["variant"];
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "brand",
  title,
  highlight,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div className="mb-3">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-brand-600 to-accent-purple bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
