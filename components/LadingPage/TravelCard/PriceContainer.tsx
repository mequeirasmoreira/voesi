interface PriceContainerProps {
    price: string;
    cta: {
        label: string;
        href: string;
    };
}

export default function PriceContainer({ price, cta }: PriceContainerProps) {
    return (
      <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6 text-sm">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Investimento
        </p>
        <p className="text-lg font-semibold text-cyan-300">{price}</p>
      </div>
      <a
        href={cta.href}
        className="rounded-full bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        {cta.label}
      </a>
    </div>
    );
}
