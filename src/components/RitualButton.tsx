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
    "font-display tracking-[0.35em] uppercase transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none";
  const sizes = {
    md: "px-8 py-3 text-sm",
    lg: "px-12 py-4 text-base",
  };
  const variants = {
    primary:
      "bg-ritual-accent text-ritual-bg hover:bg-ritual-text border border-ritual-accent",
    secondary:
      "bg-transparent text-ritual-accent border border-ritual-accent hover:bg-ritual-accent/10",
    ghost:
      "bg-ritual-panel text-ritual-text border border-ritual-accentDim hover:border-ritual-accent",
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
