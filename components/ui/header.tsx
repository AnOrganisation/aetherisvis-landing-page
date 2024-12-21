import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed z-30 w-full top-2 md:top-6">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="relative flex h-14 items-center justify-evenly gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-row items-center flex-1">
            <Logo />
            <p className="p-3 text-xl font-semibold">AetherisVis</p>
          </div>

          <div className="flex flex-row justify-between gap-4 p-3">
            <a href="#how-it-works" className="p-2 rounded-lg hover:bg-slate-100"><p className="font-semibold">How it works</p></a>
            <a href="#features" className="p-2 rounded-lg hover:bg-slate-100"><p className="font-semibold">Features</p></a>
            <a href="#features-section" className="p-2 rounded-lg hover:bg-slate-100"><p className="font-semibold">Our Work</p></a>
          </div>
        </div>
      </div>
    </header>
  );
}
