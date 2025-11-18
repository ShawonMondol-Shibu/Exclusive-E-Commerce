"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductInfo() {
  const [quantity, setQuantity] = useState(2);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-medium text-gray-900">Havic HV G-92 Gamepad</h1>
        <div className="flex items-center gap-4 mt-3">
          <div className="flex text-yellow-500">
            ★★★★☆
          </div>
          <span className="text-sm text-gray-600">(150 Reviews)</span>
          <Badge variant="secondary" className="bg-green-100 text-green-800">In Stock</Badge>
        </div>
      </div>

      <div className="text-3xl font-medium">$192.00</div>

      <p className="text-gray-700 leading-relaxed border-b pb-6">
        PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
      </p>

      {/* Colours */}
      <div className="space-y-4 border-b pb-6">
        <h4 className="font-medium">Colours:</h4>
        <div className="flex gap-3">
          <button className="w-8 h-8 rounded-full bg-gray-800 ring-2 ring-offset-2 ring-gray-800" />
          <button className="w-8 h-8 rounded-full bg-red-600" />
        </div>
      </div>

      {/* Size */}
      <div className="space-y-4 border-b pb-6">
        <h4 className="font-medium">Size:</h4>
        <div className="flex gap-3">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className={cn(
                "px-4 py-2 border rounded text-sm font-medium transition",
                size === "M" ? "bg-red-600 text-white border-red-600" : "border-gray-300 hover:bg-gray-50"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity & Actions */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center border rounded">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="h-12 w-12"
          >
            -
          </Button>
          <Input
            type="text"
            value={quantity}
            readOnly
            className="w-16 h-12 text-center border-0 focus-visible:ring-0"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
            className="h-12 w-12"
          >
            +
          </Button>
        </div>

        <Button className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-lg">
          Buy Now
        </Button>

        <Button variant="outline" size="icon" className="h-12 w-12">
          <Heart className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}