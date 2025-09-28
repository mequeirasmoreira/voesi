const highlights = [
  {
    title: "+120 destinos",
    description: "Seleção global com curadoria exclusiva.",
  },
  {
    title: "Até 35% de economia",
    description: "Negociamos tarifas e benefícios especiais.",
  },
  {
    title: "Suporte 24/7",
    description: "Nossa equipe acompanha você antes, durante e depois.",
  },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-cyan-500/10 via-slate-950 to-slate-950"
    >
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-10 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-8">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-200 backdrop-blur">
            Consultoria de viagens sob medida
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Planejamos jornadas que cabem no seu sonho e no seu bolso.
          </h1>
          <p className="text-lg text-slate-200">
            Da inspiração à reserva confirmada, criamos roteiros personalizados, com
            economia inteligente e experiências inesquecíveis para viajantes exigentes.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Começar meu planejamento
            </a>
            <a
              href="#pacotes"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              Ver pacotes inspiradores
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <p className="text-lg font-semibold text-cyan-200">{item.title}</p>
                <p className="text-sm text-slate-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex flex-1 justify-center">
          <div className="relative grid w-full max-w-md gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-slate-50 shadow-xl shadow-cyan-500/10 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Destaque da semana
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Romance em Santorini
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                7 noites com cruzeiro privado, degustação de vinhos e ensaio fotográfico ao pôr do sol.
              </p>
              <div className="mt-6 flex items-center justify-between text-sm font-semibold text-cyan-200">
                <span>A partir de R$ 18.900</span>
                <span>12x sem juros</span>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-100 shadow-lg shadow-slate-900/40 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  Travel Hack
                </p>
                <p className="mt-2 text-base font-semibold">
                  +22% de economia em passagens para a Ásia nas últimas 8 semanas.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/30 via-slate-900 to-slate-950 p-5 text-slate-100 shadow-lg shadow-cyan-600/30 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-100/80">
                  Clube Viajantes
                </p>
                <p className="mt-2 text-base font-semibold">
                  Eventos exclusivos e upgrades gratuitos em mais de 180 hotéis parceiros.
                </p>
                <p className="mt-4 text-sm text-cyan-100/80">Faça parte do Travelers Group.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
