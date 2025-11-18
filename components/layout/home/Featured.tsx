import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContentTitle from "./ContentTitle";

export default function Featured() {
  return (
    <main className="container mx-auto px-4 py-12">
      <ContentTitle tag="Featured" title="New Arrival" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Left: PlayStation 5 */}
        <div className="group relative bg-black overflow-hidden rounded-lg transition-all duration-500 hover:shadow-[0_0_80px_rgba(255,255,255,0.3)]">
          <Image
            src="/images/playStation.png"
            alt="PlayStation 5"
            width={800}
            height={800}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-10 left-10 text-white space-y-3 max-w-md">
            <h3 className="text-4xl font-bold">PlayStation 5</h3>
            <p className="text-base opacity-90">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link
              href="/"
              className="inline-block text-lg font-medium underline underline-offset-4 hover:no-underline transition-all"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          {/* Top: Women's Collections */}
          <div className="group relative bg-black overflow-hidden rounded-lg transition-all duration-500 hover:shadow-[0_0_80px_rgba(255,255,255,0.3)] h-96 md:h-auto">
            <Image
              src="/images/women.png"
              alt="Women's Collections"
              width={800}
              height={600}
              className="w-full h-full object-cover object-right-top float-right transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 text-white space-y-3 max-w-sm">
              <h3 className="text-4xl font-bold">Women’s Collections</h3>
              <p className="text-base opacity-90">
                Featured woman collections that give you another vibe.
              </p>
              <Link
                href="/"
                className="inline-block text-lg font-medium underline underline-offset-4 hover:no-underline transition-all"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Bottom Row: Speakers + Perfume */}
          <div className="grid grid-cols-2 gap-8">
            {/* Speakers */}
            <div className="group relative bg-black overflow-hidden rounded-lg transition-all duration-500 hover:shadow-[0_0_80px_rgba(255,255,255,0.3)] h-80">
              <Image
                src="/images/speaker.png"
                alt="Speakers"
                width={400}
                height={400}
                className="absolute inset-0 w-full h-full object-contain p-10 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 text-white space-y-2">
                <h3 className="text-2xl font-bold">Speakers</h3>
                <p className="text-sm opacity-90">Amazon wireless speakers</p>
                <Link
                  href="/"
                  className="inline-block text-base font-medium underline underline-offset-4 hover:no-underline"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Perfume */}
            <div className="group relative bg-black overflow-hidden rounded-lg transition-all duration-500 hover:shadow-[0_0_80px_rgba(255,255,255,0.3)] h-80">
              <Image
                src="/images/perfume.png"
                alt="Perfume"
                width={400}
                height={400}
                className="absolute inset-0 w-full h-full object-contain p-12 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 text-white space-y-2">
                <h3 className="text-2xl font-bold">Perfume</h3>
                <p className="text-sm opacity-90">GUCCI INTENSE OUD EDP</p>
                <Link
                  href="/"
                  className="inline-block text-base font-medium underline underline-offset-4 hover:no-underline"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
