import TravelCard, {
  TravelCardProps,
} from "@/components/LadingPage/TravelCard/TravelCard";

const travels: TravelCardProps[] = [
  {
    image: {
      src: "https://jxgvdlspmlrmucerfavf.supabase.co/storage/v1/object/public/TravelsPictures/1759092943453_europa_cultural.jpg",
      alt: "Canais de Veneza ao pôr do sol",
      priority: true,
    },
    tag: "Favorito dos casais",
    title: "Europa Cultural",
    description:
      "12 dias por Lisboa, Paris e Florença com tours privados e experiências gastronômicas estreladas.",
    bullets: [
      "Guia local em português",
      "Traslados premium",
      "Seguro viagem completo",
    ],
    price: "R$ 24.500",
    cta: {
      label: "Reservar interesse",
      href: "#contato",
    },
  },
  {
    image: {
      src: "https://jxgvdlspmlrmucerfavf.supabase.co/storage/v1/object/public/TravelsPictures/1759092934981_caribe_relax.jpg",
      alt: "Pier em Tulum ao entardecer",
    },
    tag: "Luxo acessível",
    title: "Caribe Relax",
    description:
      "7 noites em Tulum com all inclusive, passeios de catamarã e day spa exclusivo.",
    bullets: [
      "Hotel 5 estrelas",
      "Crédito para experiências",
      "Upgrade de quarto garantido",
    ],
    price: "R$ 14.900",
    cta: {
      label: "Reservar interesse",
      href: "#contato",
    },
  },
  {
    image: {
      src: "https://jxgvdlspmlrmucerfavf.supabase.co/storage/v1/object/public/TravelsPictures/1759092914861_brasil_norte_sul.jpg",
      alt: "Nascer do sol em montanhas brasileiras",
    },
    tag: "Exploração guiada",
    title: "Brasil Norte a Sul",
    description:
      "15 dias explorando Lençóis Maranhenses, Chapada Diamantina e Serra Gaúcha com logística integrada.",
    bullets: [
      "Voos internos inclusos",
      "Curadoria gastronômica",
      "Consultoria de roteiros locais",
    ],
    price: "R$ 18.200",
    cta: {
      label: "Reservar interesse",
      href: "#contato",
    },
  },
];

export default function TravelsSection() {
  return (
    <section id="pacotes" className="bg-slate-950 py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Pacotes inspiradores
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Destinos curados para diferentes estilos de viagem.
            </h2>
          </div>
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-full border border-cyan-400/60 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
          >
            Quero um roteiro exclusivo
          </a>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {travels.map((travel) => (
            <TravelCard key={travel.title} {...travel} />
          ))}
        </div>
      </div>
    </section>
  );
}
