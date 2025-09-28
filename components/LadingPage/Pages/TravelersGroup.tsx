const benefits = [
  "Lives mensais com especialistas em destinos",
  "Grupo fechado com dicas, alertas e promoções",
  "Eventos presenciais e meetups exclusivos",
  "Ofertas relâmpago negociadas diretamente com parceiros",
];

export default function TravelersGroup() {
  return (
    <section
      id="travelers-group"
      className="border-y border-white/5 bg-gradient-to-b from-slate-950 via-cyan-900/20 to-slate-950 py-24"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Travelers Group
          </span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Uma comunidade para quem quer viver o mundo sem limites.
          </h2>
          <p className="text-base text-slate-200">
            Faça parte do nosso grupo mais exclusivo e tenha acesso a curadoria contínua, alertas de
            oportunidades e roteiros colaborativos com outros viajantes experientes.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-200">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/20 text-base text-cyan-200">
                  ★
                </span>
                {benefit}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Quero fazer parte
            </a>
            <a
              href="#faq"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-200"
            >
              Saber mais benefícios
            </a>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="relative grid gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-lg shadow-cyan-500/10 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Experiências</p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                Roadtrip pela Costa Amalfitana
              </h3>
              <p className="mt-3 text-sm text-white">
                Viajantes da comunidade se encontraram para um roteiro colaborativo com degustação privada e
                navegação entre vilarejos.
              </p>
              <div className="mt-6 flex items-center justify-between text-xs font-semibold text-cyan-200">
                <span>18 membros</span>
                <span>Próxima edição: abril</span>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 text-slate-100 shadow-lg shadow-slate-950/30">
                <p className="text-sm font-semibold text-cyan-200">Masterclass mensal</p>
                <p className="mt-3 text-sm text-slate-200">
                  Estratégias para acumular milhas e upgrades ensinadas por especialistas convidados.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/30 via-slate-900 to-slate-950 p-6 text-slate-100 shadow-lg shadow-cyan-600/30">
                <p className="text-sm font-semibold text-cyan-50">App exclusivo em breve</p>
                <p className="mt-3 text-sm text-slate-100/80">
                  Centralize roteiros, benefícios e networking com viajantes premium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
