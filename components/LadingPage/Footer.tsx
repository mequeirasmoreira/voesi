const footerLinks = [
  {
    title: "Empresa",
    links: [
      { label: "Sobre a VoeSim", href: "#beneficios" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Comunidade", href: "#travelers-group" },
    ],
  },
  {
    title: "Ajuda",
    links: [
      { label: "Perguntas frequentes", href: "#faq" },
      { label: "Fale conosco", href: "#contato" },
      { label: "Política de privacidade", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/20 text-lg font-semibold text-cyan-200">
                VS
              </span>
              <div className="leading-tight">
                <span className="block text-lg font-semibold text-white">VoeSim</span>
                <span className="block text-xs text-slate-400">Agência de viagens boutique</span>
              </div>
            </div>
            <p className="text-sm text-slate-300">
              Planejamos viagens sob medida com curadoria estratégica e benefícios exclusivos em uma
              rede global de parceiros premium.
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <p>Email: contato@voesim.com.br</p>
              <p>WhatsApp: +55 (11) 99999-0000</p>
              <p>São Paulo · Atendemos viajantes em todo o Brasil</p>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  {column.title}
                </h4>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="transition-colors hover:text-cyan-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} VoeSim. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-cyan-200">
              Instagram
            </a>
            <a href="#" className="transition hover:text-cyan-200">
              LinkedIn
            </a>
            <a href="#" className="transition hover:text-cyan-200">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
