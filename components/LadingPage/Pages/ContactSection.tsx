export default function ContactSection() {
  return (
    <section
      id="contato"
      className="bg-gradient-to-br from-cyan-500/10 via-slate-950 to-slate-950 py-24"
    >
      <div className="mx-auto w-full max-w-4xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-cyan-500/20 backdrop-blur">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Pronto para embarcar?
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Vamos criar o roteiro perfeito para a sua próxima viagem.
            </h2>
            <p className="mt-4 text-base text-slate-200">
              Preencha os dados abaixo e um dos nossos especialistas entrará em contato em até 24 horas úteis
              para iniciar o planejamento.
            </p>
          </div>
          <form className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2 text-left">
              <label className="text-sm font-semibold text-slate-200" htmlFor="name">
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                placeholder="Como podemos te chamar?"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="seunome@email.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="phone">
                WhatsApp
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-slate-200" htmlFor="destination">
                Destino ou experiência dos sonhos
              </label>
              <input
                id="destination"
                type="text"
                placeholder="Ex.: Lua de mel nas Maldivas, roadtrip na Toscana, expedição Atacama"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-slate-200" htmlFor="message">
                Conte-nos mais detalhes
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Datas, quantidade de pessoas, estilo de viagem, orçamento desejado..."
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              />
            </div>
            <div className="sm:col-span-2 text-center">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-10 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
              >
                Quero planejar com a VoeSim
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
