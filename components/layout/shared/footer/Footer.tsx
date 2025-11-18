import Link from "next/link";
import Image from "next/image";
import { Mail, SendHorizonal } from "lucide-react";
import FooterColumn from "./FooterColumn";
import { footerLinks } from "./footer.Data";
import SocialIcons from "./SocialIcons";


export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 text-sm">
          {/* Exclusive Subscribe */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Exclusive</h3>
              <h4 className="text-lg font-medium">Subscribe</h4>
              <p className="text-base">Get 10% off your first order</p>
            </div>

            <div className="relative max-w-xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-black border border-white rounded-md py-3 px-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-white/80"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <SendHorizonal className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Reusable Columns */}
          <FooterColumn title="Support" items={footerLinks.support} />
          <FooterColumn title="Account" items={footerLinks.account} isLinks />
          <FooterColumn title="Quick Link" items={footerLinks.quickLink} isLinks />
          
          {/* Download App */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Download App</h3>
            <p className="text-sm opacity-70">Save $3 with App New User Only</p>

            <div className="flex gap-4">
              <Image
                src="/qr-code.png"
                alt="QR Code"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div className="flex flex-col justify-center gap-2">
                <Link href="#">
                  <Image
                    src="/google-play-badge.png"
                    alt="Google Play"
                    width={120}
                    height={40}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/app-store-badge.svg"
                    alt="App Store"
                    width={120}
                    height={40}
                  />
                </Link>
              </div>
            </div>

            <SocialIcons />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          © Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </footer>
  );
}