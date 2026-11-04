import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface DeviceFrameProps {
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg" | "responsive";
  glow?: boolean;
}

export function DeviceFrame({
  imageSrc,
  imageAlt = "Tap & Learn Mobile App Screen",
  children,
  className,
  priority = false,
  size = "responsive",
  glow = true,
}: DeviceFrameProps) {
  const sizeClasses = {
    sm: "max-w-[200px] sm:max-w-[230px]",
    md: "max-w-[250px] sm:max-w-[280px]",
    lg: "max-w-[290px] sm:max-w-[330px]",
    responsive: "max-w-[260px] sm:max-w-[310px] md:max-w-[330px]",
  }[size];

  return (
    <div
      className={cn(
        "relative mx-auto w-full transition-transform duration-300",
        sizeClasses,
        className
      )}
    >
      {/* Ambient Device Glow */}
      {glow && (
        <div className="absolute -inset-2 bg-gradient-to-tr from-brand-500/20 via-purple-500/15 to-blue-400/20 rounded-[44px] blur-xl opacity-75 pointer-events-none" />
      )}

      {/* Hardware Chassis Shell */}
      <div className="relative aspect-[219/507] w-full rounded-[38px] p-2.5 sm:p-3 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 shadow-2xl shadow-slate-950/40 ring-1 ring-slate-700/80">
        {/* Exterior Chamfered Metallic Edge */}
        <div className="absolute inset-0 rounded-[38px] border-[2px] border-slate-600/40 pointer-events-none" />

        {/* Physical Side Buttons (Android Style) */}
        {/* Left Side: Volume Up & Down */}
        <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-slate-700 rounded-l-sm" />
        <div className="absolute -left-[3px] top-36 w-[3px] h-8 bg-slate-700 rounded-l-sm" />
        {/* Right Side: Power Button */}
        <div className="absolute -right-[3px] top-28 w-[3px] h-10 bg-slate-700 rounded-r-sm" />

        {/* Screen Display Container */}
        <div className="relative w-full h-full rounded-[28px] sm:rounded-[30px] overflow-hidden bg-slate-950 flex flex-col ring-1 ring-black/40">
          {/* Subtle Top Earpiece Speaker Slit */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 z-30 w-10 sm:w-12 h-[2.5px] bg-slate-800 rounded-full opacity-80 pointer-events-none" />

          {/* Minimal Centered Android Punch-Hole Front Camera */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black rounded-full ring-1 ring-slate-800 flex items-center justify-center shadow-inner pointer-events-none">
            <div className="w-1 h-1 rounded-full bg-blue-950/80" />
          </div>

          {/* Screen Content */}
          <div className="relative w-full h-full overflow-hidden flex flex-col">
            {imageSrc ? (
              <div className="relative w-full h-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority={priority}
                  className="object-cover object-top select-none"
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 310px, 340px"
                />
              </div>
            ) : (
              children
            )}
          </div>

          {/* Specular Light Reflection Sheen (Gloss) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none rounded-[28px] sm:rounded-[30px]" />
        </div>
      </div>
    </div>
  );
}
