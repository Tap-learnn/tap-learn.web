import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface DeviceFrameProps {
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
  priority?: boolean;
}

export function DeviceFrame({
  imageSrc,
  imageAlt = "Tap & Learn Mobile App Screen",
  children,
  className,
  priority = false,
}: DeviceFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[320px] sm:max-w-[360px] aspect-[9/19.5] rounded-[48px] p-3.5 bg-slate-900 shadow-2xl shadow-slate-900/25 ring-1 ring-slate-800",
        className
      )}
    >
      {/* Outer Metallic Bezel */}
      <div className="absolute inset-0 rounded-[48px] border-[3px] border-slate-700/60 pointer-events-none" />

      {/* Screen Container */}
      <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-slate-950 flex flex-col">
        {/* Dynamic Island / Speaker Pill */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-24 h-5 bg-black rounded-full flex items-center justify-end px-2 gap-1.5 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-slate-800" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60" />
        </div>

        {/* Content Area */}
        <div className="relative w-full h-full overflow-hidden flex flex-col">
          {imageSrc ? (
            <div className="relative w-full h-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority={priority}
                className="object-cover object-top"
                sizes="(max-width: 768px) 320px, 360px"
              />
            </div>
          ) : (
            children
          )}
        </div>

        {/* Home Indicator Bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-30 w-32 h-1 bg-slate-400/80 rounded-full pointer-events-none" />
      </div>
    </div>
  );
}
