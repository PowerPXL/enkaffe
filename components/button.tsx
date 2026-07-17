// components/Button.tsx
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "accent" | "outline";
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base = "px-4 py-2 rounded-xl font-medium transition-colors flex items-center gap-2 justify-center whitespace-nowrap";

  const variants = {
    primary: "bg-primary text-background hover:opacity-90",
    accent: "bg-accent text-foreground hover:opacity-90",
    outline: "border border-primary text-primary hover:bg-primary hover:text-background",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}