import { PropsWithChildren } from "react";

export default function Bullet({ children }: PropsWithChildren) {
  return (
    <div className="flex items-start gap-3 text-sm text-slate-200">
      <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/20 text-sm font-semibold text-cyan-200">
        ✓
      </span>
      <span>{children}</span>
    </div>
  );
}
