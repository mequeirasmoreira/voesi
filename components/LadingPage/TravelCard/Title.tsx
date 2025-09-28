import { PropsWithChildren } from "react";

export default function Title({ children }: PropsWithChildren) {
  return <h3 className="text-2xl font-semibold text-white">{children}</h3>;
}
