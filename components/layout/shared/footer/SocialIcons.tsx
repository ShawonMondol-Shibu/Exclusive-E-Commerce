import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const socials = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Youtube, label: "Youtube" },
];

export default function SocialIcons() {
  return (
    <div className="flex gap-6 pt-4">
      {socials.map(({ Icon, label }) => (
        <Link
          key={label}
          href="#"
          aria-label={label}
          className="hover:opacity-70 transition"
        >
          <Icon className="w-6 h-6" />
        </Link>
      ))}
    </div>
  );
}