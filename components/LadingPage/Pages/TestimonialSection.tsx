const testimonials = [
  {
    quote:
      "Foi a primeira vez que viajei sem me preocupar com reservas ou documentação. Recebi alertas proativos e concierge dedicado durante todo o roteiro.",
    name: "Carlos Menezes",
    role: "Executivo, RJ",
  },
  {
    quote:
      "Conseguimos um upgrade de quarto e experiências exclusivas em Paris que não encontrávamos em plataformas comuns. O atendimento é impecável.",
    name: "Maria & André",
    role: "Casal viajante",
  },
  {
    quote:
      "Economizei tempo e dinheiro. Em 48 horas a VoeSim apresentou uma proposta completa com opções alinhadas ao meu estilo solo traveler.",
    name: "Thaís Moreira",
    role: "Produtora de conteúdo",
  },
];

export default function TestimonialSection() {
  return (
    <section
      id="depoimentos"
      className="border-y border-white/5 bg-slate-950 py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Depoimentos reais
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Histórias de viajantes que já embarcaram com a VoeSim.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-white/5 p-8 shadow-lg shadow-slate-950/30"
            >
              <blockquote className="text-sm leading-relaxed text-slate-200">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-8">
                <div className="text-sm font-semibold text-white">
                  {testimonial.name}
                </div>
                <div className="text-xs text-slate-400">{testimonial.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
