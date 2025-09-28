import Picture from "./Picture";
import Title from "./Title";
import Description from "./Description";
import BulletsContainer from "./BulletsContainer";
import PriceContainer from "./PriceContainer";

export interface TravelCardProps {
  image: {
    src: string;
    alt: string;
    priority?: boolean;
  };
  tag: string;
  title: string;
  description: string;
  bullets: [string, string, string];
  price: string;
  cta: {
    label: string;
    href: string;
  };
}

export default function TravelCard({
  image,
  tag,
  title,
  description,
  bullets,
  price,
  cta,
}: TravelCardProps) {
  return (
    <article className="group flex h-full flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 p-6 text-slate-100 shadow-[0_32px_70px_-40px_rgba(15,23,42,0.8)] transition hover:-translate-y-1 hover:border-cyan-400/40">
      <Picture image={image} tag={tag} />
      <div className="space-y-5">
        <Title>{title}</Title>
        <Description>{description}</Description>
        <BulletsContainer items={bullets} />
      </div>
      <PriceContainer price={price} cta={cta} />
    </article>
  );
}