// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md p-4 z-50">
      <nav className="flex justify-between max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>
        <div className="space-x-6">
          <Link href="#about" className="hover:text-slate-500">About</Link>
          <Link href="#skills" className="hover:text-slate-500">Skills</Link>
          <Link href="#projects" className="hover:text-slate-500">Projects</Link>
          <Link href="#contact" className="hover:text-slate-500">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
