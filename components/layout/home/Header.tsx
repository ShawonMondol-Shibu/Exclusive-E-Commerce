import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import HeaderSidebar from "./HeaderSidebar";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="container m-auto flex gap-10 items-start px-4">
      <HeaderSidebar />

      <div className="pt-10">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem className="flex items-center bg-black text-white gap-10 py-4">
              <div className="space-y-5 px-10">
                <div className="flex items-center gap-4">
                  <FaApple size={40} />
                  <p>iPhone 14 Series</p>
                </div>

                <h2 className="text-5xl font-semibold">
                  Up to 10% <br /> off Voucher
                </h2>
                <div>
                  <Link href={"#"} className="font-semibold space-x-1">
                    <span className="underline">Shop Now</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
              <Image
                src={"/images/iphone.png"}
                alt="iphone 14 series"
                width={500}
                height={500}
              />
            </CarouselItem>
          </CarouselContent>
          {/* <CarouselPrevious />
        <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
}
