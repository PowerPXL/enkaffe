import Link from "next/link";
import NavLink from "@/components/NavLink";
import { CupSoda } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-zinc-300">
      <div className="mx-auto grid max-w-5xl grid-cols-3 items-center px-6 py-6">
        
        <nav className="flex gap-6">
          <NavLink href="/faq">Start</NavLink>
          <NavLink href="/kontakt">Genväg</NavLink>
        </nav>

        <div className="flex items-center justify-center gap-2 text-2xl font-bold">
          <Link href="/" className="flex items-center">
            <CupSoda className="w-6 h-6 text-primary" />
            1kaffe.se
          </Link>
        </div>

        <div className="text-right">
          <NavLink href="/login">Login</NavLink>
        </div>

      </div>
    </header>
  );
}