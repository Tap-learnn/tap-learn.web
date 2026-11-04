import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "purple";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 rounded-full gap-1.5",
      md: "text-sm px-5 py-2.5 rounded-full gap-2",
      lg: "text-base px-7 py-3.5 rounded-full gap-2.5 shadow-md hover:shadow-lg",
    };

    const variantStyles = {
      primary:
        "bg-brand-600 text-white hover:bg-brand-700 shadow-brand-600/25 shadow-sm hover:shadow-glow",
      secondary:
        "bg-brand-50 text-brand-700 hover:bg-brand-100 border border-brand-200",
      outline:
        "bg-white/90 text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm",
      ghost:
        "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
      purple:
        "bg-accent-purple text-white hover:bg-purple-700 shadow-purple-500/25 shadow-sm hover:shadow-glow-purple",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
