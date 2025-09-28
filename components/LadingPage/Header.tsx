import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Serviços", href: "#beneficios" },
  { name: "Como funciona", href: "#como-funciona" },
  { name: "Pacotes", href: "#pacotes" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="flex items-center gap-3">
          <Image
          className="rounded-full"
            src="/LOGO.png"
            alt="VoeSim"
            width={40}
            height={40}
          />
          <div className="leading-tight">
            <span className="block text-lg font-semibold">VoeSim</span>
            <span className="block text-xs text-slate-300">
              Viagens que cabem no seu sonho
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition-colors hover:text-cyan-300"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <Link
          href="#contato"
          className="hidden rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300 md:inline-flex"
        >
          Monte seu roteiro
        </Link>
        <Link
          href="#contato"
          className="inline-flex items-center rounded-full border border-cyan-400 px-4 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400/10 md:hidden"
        >
          Quero viajar
        </Link>
      </div>
    </header>
  );
}
