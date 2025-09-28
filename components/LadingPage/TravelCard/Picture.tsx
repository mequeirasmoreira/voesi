import Image from "next/image";
import Tag from "./Tag";

export interface PictureProps {
  image: {
    src: string;
    alt: string;
    priority?: boolean;
  };
  tag: string;
}

export default function Picture({ image, tag }: PictureProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/20">
      <Image
        src={image.src}
        alt={image.alt}
        width={720}
        height={480}
        priority={image.priority}
        sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 100vw"
        className="h-48 w-full object-cover sm:h-52"
      />
      <Tag>{tag}</Tag>
    </div>
  );
}