import { PropsWithChildren } from "react";

export default function Description({ children }: PropsWithChildren) {
  return <p className="text-sm text-slate-300">{children}</p>;
}
