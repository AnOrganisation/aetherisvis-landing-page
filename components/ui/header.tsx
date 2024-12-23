import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed z-30 w-full top-2 md:top-6">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="relative flex h-14 items-center justify-between rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex items-center flex-1">
            <Logo />
            <p className="p-3 text-xl font-semibold">AetherisVis</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-row gap-4">
            <a href="#how-it-works" className="p-2 rounded-lg hover:bg-slate-100">
              <p className="font-semibold">How it works</p>
            </a>
            <a href="#features" className="p-2 rounded-lg hover:bg-slate-100">
              <p className="font-semibold">Features</p>
            </a>
            <a href="#features-section" className="p-2 rounded-lg hover:bg-slate-100">
              <p className="font-semibold">Our Work</p>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Mobile Navigation */}
          {menuOpen && (
            <nav className="absolute top-16 left-0 w-full bg-white shadow-md rounded-b-lg md:hidden">
              <ul className="flex flex-col items-center gap-4 p-4">
                <li>
                  <a
                    href="#how-it-works"
                    className="p-2 rounded-lg hover:bg-slate-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    <p className="font-semibold">How it works</p>
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="p-2 rounded-lg hover:bg-slate-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    <p className="font-semibold">Features</p>
                  </a>
                </li>
                <li>
                  <a
                    href="#features-section"
                    className="p-2 rounded-lg hover:bg-slate-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    <p className="font-semibold">Our Work</p>
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
