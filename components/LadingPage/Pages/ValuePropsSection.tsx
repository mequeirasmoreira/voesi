const valueProps = [
  {
    title: "Economize tempo",
    description:
      "Pesquisamos, comparamos e montamos o roteiro ideal enquanto você foca no que importa.",
  },
  {
    title: "Mais experiências por menos",
    description:
      "Parcerias globais que garantem upgrades, mimos e economia média de 22% em cada viagem.",
  },
  {
    title: "Roteiro 100% personalizado",
    description:
      "Do destino à hospedagem, tudo planejado para seu estilo de viagem e orçamento.",
  },
  {
    title: "Suporte completo",
    description:
      "Equipe disponível 24/7 antes, durante e depois da viagem, com monitoramento inteligente.",
  },
];

export default function ValuePropsSection() {
  return (
    <section
      id="beneficios"
      className="border-t border-white/5 bg-slate-950 py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Benefícios
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Consultoria estratégica que transforma seu sonho em um plano viável.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Desde o primeiro contato até o último desembarque, acompanhamos cada etapa para
            garantir tranquilidade e experiências memoráveis.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {valueProps.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/5 bg-white/5 p-8 transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/40 text-cyan-200 transition group-hover:bg-cyan-400 group-hover:text-slate-900">
                  ↗
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
