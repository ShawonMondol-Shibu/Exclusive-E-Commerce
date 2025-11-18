import Link from "next/link";

type FooterColumnProps = {
  title: string;
  items: string[];
  isLinks?: boolean;
};

export default function FooterColumn({ title, items, isLinks }: FooterColumnProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item}>
            {isLinks ? (
              <Link href="#" className="hover:underline block">
                {item}
              </Link>
            ) : (
              <span className="block">{item}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}