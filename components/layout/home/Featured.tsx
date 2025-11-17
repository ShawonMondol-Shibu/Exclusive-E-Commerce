import React from "react";
import ContentTitle from "./ContentTitle";
import Image from "next/image";
import Link from "next/link";

export default function Featured() {
  return (
    <main className="container mx-auto space-y-10">
      <ContentTitle tag="Featured" title="New Arrival" />

      <section className="flex flex-col md:flex-row items-start gap-5">

        {/* Left — PS5 */}
        <div
          className="group bg-black relative flex-1 rounded-lg overflow-hidden 
          transition-all duration-300 
          hover:scale-[1.03] 
          hover:shadow-[0_0_60px_rgba(255,255,255,0.35)]"
        >
          <Image
            src="/images/playStation.png"
            alt="play station"
            width={600}
            height={600}
            className="w-full h-auto object-contain transition-all duration-300 group-hover:scale-105"
          />
          <div className="text-white absolute bottom-8 left-8 space-y-2">
            <h3 className="text-2xl font-semibold">PlayStation 5</h3>
            <p className="text-sm">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link href="/" className="text-base font-medium underline">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col flex-1 gap-5">

          {/* Big Women Image */}
          <div
            className="group bg-black relative rounded-lg overflow-hidden 
            transition-all duration-300 
            hover:scale-[1.03] 
            hover:shadow-[0_0_60px_rgba(255,255,255,0.35)]"
          >
            <Image
              src="/images/women.png"
              alt="women collection"
              width={600}
              height={600}
              className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105"
            />

            <div className="text-white absolute bottom-8 left-8 space-y-2">
              <h3 className="text-2xl font-semibold">Women’s Collections</h3>
              <p className="text-sm">
                Featured woman collections that give you another vibe.
              </p>
              <Link href="/" className="text-base font-medium underline">
                Shop Now
              </Link>
            </div>
          </div>

          {/* Two side by side women images */}
          <div className="flex gap-5">

            {/* Card 1 */}
            <div
              className="group bg-black relative flex-1 rounded-lg overflow-hidden 
              transition-all duration-300 
              hover:scale-[1.03] 
              hover:shadow-[0_0_60px_rgba(255,255,255,0.35)]"
            >
              <Image
                src="/images/women.png"
                alt="women collection"
                width={600}
                height={600}
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="text-white absolute bottom-8 left-8 space-y-2">
                <h3 className="text-2xl font-semibold">Women’s Collections</h3>
                <p className="text-sm">Featured woman collections that give you another vibe.</p>
                <Link href="/" className="text-base font-medium underline">Shop Now</Link>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="group bg-black relative flex-1 rounded-lg overflow-hidden 
              transition-all duration-300 
              hover:scale-[1.03] 
              hover:shadow-[0_0_60px_rgba(255,255,255,0.35)]"
            >
              <Image
                src="/images/women.png"
                alt="women collection"
                width={600}
                height={600}
                className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="text-white absolute bottom-8 left-8 space-y-2">
                <h3 className="text-2xl font-semibold">Women’s Collections</h3>
                <p className="text-sm">Featured woman collections that give you another vibe.</p>
                <Link href="/" className="text-base font-medium underline">Shop Now</Link>
              </div>
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}
