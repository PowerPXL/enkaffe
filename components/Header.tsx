import Link from "next/link";
import { CupSoda } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-zinc-300">
      <div className="mx-auto grid max-w-5xl grid-cols-3 items-center px-6 py-6">
        
        <nav className="flex gap-6">
          <Link href="/faq" className="hover:text-blue-600 transition-colors font-bold">FAQ</Link>
          <Link href="/kontakt" className="hover:text-primary transition-colors font-bold">Kontakt</Link>
        </nav>

        <div className="flex items-center justify-center gap-2 text-2xl font-bold">
          <Link href="/" className="flex items-center">
            <CupSoda className="w-6 h-6 text-primary" />
            1kaffe.se
          </Link>
        </div>

        <div className="text-right">
          <Link href="/login" className="font-bold hover:text-blue-600 transition-colors">Login</Link>
        </div>

      </div>
    </header>
  );
}