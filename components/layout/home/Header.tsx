/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import HeaderSidebar from "./HeaderSidebar";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

export default function Header() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Update current slide & total count when carousel is ready
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  // Optional: Click on dot to jump
  const onDotClick = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="container mx-auto flex gap-10 items-start px-4 pt-8">
      <HeaderSidebar className=""/>

      <div className="flex-1 pt-10">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{ loop: true }}
          className="w-full overflow-hidden"
        >
          <CarouselContent>
            {/* Slide 1 */}
            <CarouselItem className="bg-black text-white">
              <div className="flex items-center justify-between min-h-[420px] px-12 py-8">
                <div className="max-w-md space-y-8">
                  <div className="flex items-center gap-5">
                    <FaApple size={48} />
                    <p className="text-lg tracking-wider">iPhone 14 Series</p>
                  </div>
                  <h2 className="text-6xl font-bold leading-tight">
                    Up to 10% <br /> off Voucher
                  </h2>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-lg font-medium hover:gap-4 transition-all"
                  >
                    <span className="underline underline-offset-4">Shop Now</span>
                    <span className="text-2xl">&rarr;</span>
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src="/images/iphone.png"
                    alt="iPhone 14 Series"
                    width={550}
                    height={550}
                    className="object-contain drop-shadow-2xl -rotate-12 translate-x-10"
                    priority
                  />
                </div>
              </div>
            </CarouselItem>

            {/* Add more slides here if you want */}
            {/* Example duplicate slide for testing */}
            <CarouselItem className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <div className="flex items-center justify-center min-h-[420px]">
                <h2 className="text-6xl font-bold">Slide 2</h2>
              </div>
            </CarouselItem>
            <CarouselItem className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
              <div className="flex items-center justify-center min-h-[420px]">
                <h2 className="text-6xl font-bold">Slide 3</h2>
              </div>
            </CarouselItem>
          </CarouselContent>

          {/* Dynamic Dots - Exact design match */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => onDotClick(index)}
                className={`w-3 h-3 rounded-full border-white border-2 transition-all duration-300 ${
                  index === current
                    ? "bg-red-500 scale-125"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
}