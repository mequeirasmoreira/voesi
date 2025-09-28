import { PropsWithChildren } from "react";

export default function Tag({ children }: PropsWithChildren) {
  if (!children) {
    return null;
  }

  return (
    <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-cyan-900/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-[0_16px_30px_-20px_rgba(15,23,42,0.8)]">
      {children}
    </span>
  );
}
