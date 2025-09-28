const steps = [
  {
    number: "01",
    title: "Conte-nos sobre você",
    description:
      "Entendemos objetivos, estilo de viagem, datas, orçamento e preferências para criar uma base sólida.",
  },
  {
    number: "02",
    title: "Personalizamos cada detalhe",
    description:
      "Selecionamos destinos, hospedagens, experiências e logística com curadoria de especialistas.",
  },
  {
    number: "03",
    title: "Você embarca pronto",
    description:
      "Receba itinerário completo, reservas confirmadas, concierge 24/7 e suporte proativo durante a viagem.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="border-y border-white/5 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Como funciona
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Um processo simples, transparente e feito para gerar confiança desde o primeiro contato.
            </h2>
            <p className="text-base text-slate-300">
              Do briefing à volta para casa, nossa equipe acompanha cada etapa. Com tecnologia e relações
              estratégicas com parceiros pelo mundo, criamos experiências alinhadas ao que você busca.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur">
            <p className="text-sm text-slate-200">
              &ldquo;Antes eu passava semanas montando roteiros fragmentados. Com a VoeSim, recebi uma proposta
              completa em 48 horas, com economia real e experiências únicas. Nunca mais viajo sem eles.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-cyan-400/20" />
              <div>
                <p className="text-sm font-semibold text-white">Aline Bastos</p>
                <p className="text-xs text-slate-300">Empreendedora, SP</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <span className="text-4xl font-bold text-cyan-500/60">{step.number}</span>
              <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
