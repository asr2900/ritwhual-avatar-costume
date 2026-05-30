"use client";

import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
};

export function RitualButton({
  variant = "primary",
  size = "md",
  className = "",
  disabled,
  children,
  ...props
}: Props) {
  const base =
    "font-button font-bold uppercase transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none rounded-2xl";
  const sizes = {
    md: "px-8 py-3 text-sm tracking-[0.2em]",
    lg: "px-12 py-4 text-base tracking-[0.28em]",
  };
  const variants = {
    primary:
      "bg-ritual-accent text-ritual-accentDeep border-2 border-ritual-glow shadow-ritual hover:scale-[1.03] hover:bg-ritual-glow hover:text-ritual-bg active:scale-[0.98]",
    secondary:
      "bg-transparent text-ritual-accent border-2 border-ritual-accent hover:bg-ritual-accent/15 hover:shadow-ritual-soft",
    ghost:
      "bg-ritual-panel text-ritual-text border-2 border-ritual-accentDim/60 hover:border-ritual-accent hover:bg-ritual-accent/10",
  };

  return (
    <button
      type="button"
      disabled={disabled}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
