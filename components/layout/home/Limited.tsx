import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Limited() {
  const timing = [
    { time: 23, label: "Hours" },
    { time: 5, label: "Days" },
    { time: 59, label: "Minutes" },
    { time: 35, label: "Seconds" },
  ];
  return (
    <main className="container m-auto bg-black text-white py-20 px-4 flex items-center justify-center gap-10">
      <div className="grid gap-10 basis-1/3">
        <span className="text-green-400 font-bold">Categories</span>
        <h2 className="text-5xl text-wrap font-semibold leading-14">
          Enhance Your Music Experience
        </h2>

        {/* Limited time offer */}
        <div className="flex items-center gap-5">
          {timing.map((time) => (
            <div
              key={time.label}
              className="h-20 w-20 bg-white text-black rounded-full flex items-center justify-center"
            >
              <div className="grid text-center">
                <span className="text-base font-semibold">{time.time}</span>
                <span className="text-xs font-normal">{time.label}</span>
              </div>
            </div>
          ))}
        </div>
        <Button
          variant={"default"}
          size={"lg"}
          className="bg-green-500 rounded w-fit px-10 py-6"
        >
          Buy Now
        </Button>
      </div>

      <Image
        src={"/images/soundbox.png"}
        alt="sound box"
        width={500}
        height={500}
        className="drop-shadow-[0_0px_10rem_rgba(255,255,255,0.45)] basis-1/2"
      />
    </main>
  );
}
