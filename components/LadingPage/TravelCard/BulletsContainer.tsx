import Bullet from "./Bullet";

interface BulletsContainerProps {
  items: [string, string, string];
}

export default function BulletsContainer({ items }: BulletsContainerProps) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item, index) => (
        <li key={index}>
          <Bullet>{item}</Bullet>
        </li>
      ))}
    </ul>
  );
}