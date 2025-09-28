const faqs = [
  {
    question: "Quanto tempo leva para receber uma proposta personalizada?",
    answer:
      "Após o briefing inicial, enviamos um roteiro personalizado com opções de hospedagem e experiências em até 48 horas úteis.",
  },
  {
    question: "Vocês trabalham com qualquer orçamento?",
    answer:
      "Atuamos com viagens a partir de R$ 7.000 por pessoa, sempre otimizando para que cada investimento gere máximo valor.",
  },
  {
    question: "É possível viajar em grupo com amigos ou família?",
    answer:
      "Sim! Criamos roteiros compartilhados com logística integrada, experiências privadas e divisão de custos inteligente.",
  },
  {
    question: "Como funciona o suporte durante a viagem?",
    answer:
      "Oferecemos concierge 24/7 via WhatsApp, monitoramento de voos e suporte proativo para qualquer necessidade.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="border-y border-white/5 bg-slate-950 py-24"
    >
      <div className="mx-auto w-full max-w-4xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Dúvidas mais comuns antes de embarcar com a VoeSim.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Não encontrou o que procurava? Envie uma mensagem para nossa equipe e teremos prazer em ajudar.
          </p>
        </div>
        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-white/5 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
