"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductGalleryProps = {
  images: string[]; // array of image paths
};

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="grid grid-cols-5 gap-4">
      {/* Thumbnails */}
      <div className="col-span-1 flex flex-col gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={cn(
              "relative w-full aspect-square rounded-lg overflow-hidden border-2 transition-all",
              selected === i ? "border-blue-500" : "border-transparent"
            )}
          >
            <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="col-span-4 relative aspect-square rounded-lg overflow-hidden border-4 border-blue-500">
        <Image
          src={images[selected]}
          alt="Main product"
          fill
          className="object-contain bg-gray-50"
          priority
        />
      </div>
    </div>
  );
}