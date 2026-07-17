import Link from "next/link";

export default function Header() {
  return (
<header className="border-b border-zinc-200">
  <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
    
    <div className="text-xl font-bold">
      <Link href="/">1kaffe.se</Link>
    </div>

<nav className="flex gap-6">
  <Link href="/faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
  <Link href="/kontakt" className="hover:text-blue-600 transition-colors">Kontakt</Link>
</nav>
<div>
  <Link href="/login" className="font-medium hover:text-blue-600 transition-colors">Login</Link>
</div>

  </div>
</header>
  );
}