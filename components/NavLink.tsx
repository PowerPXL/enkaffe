// components/NavLink.tsx
import Link from "next/link";
import { ComponentProps } from "react";

type NavLinkProps = ComponentProps<typeof Link>;

export default function NavLink({ className = "", children, ...props }: NavLinkProps) {
  return (
    <Link
      className={`font-bold hover:text-primary transition-colors ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}