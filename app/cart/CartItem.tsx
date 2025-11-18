"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

type CartItemProps = {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  onQuantityChange: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
};

export default function CartItem({
  id,
  image,
  name,
  price,
  quantity,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex items-center gap-4 py-6 border-b border-gray-200 last:border-b-0">
      <div className="relative w-16 h-16 shrink-0">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{name}</h4>
      </div>

      <div className="text-gray-900 font-medium w-20 text-center">${price}</div>

      <div className="w-24">
        <Input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => onQuantityChange(id, Number(e.target.value))}
          className="h-10 text-center bg-gray-100 border-gray-300"
        />
      </div>

      <div className="text-gray-900 font-medium w-20 text-right">
        ${price * quantity}
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onRemove(id)}
        className="text-gray-400 hover:text-red-600"
      >
        <X className="w-5 h-5" />
      </Button>
    </div>
  );
}
