"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  reviews?: number;
  badge?: "NEW" | "-35%" | "-40%"; // add more as needed
  showWishlistIcon?: boolean;
};

export default function ProductCard({
  image,
  title,
  price,
  originalPrice,
  rating,
  reviews,
  badge,
  showWishlistIcon = false,
}: ProductCardProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : null;

  return (
    <Card className="group relative overflow-hidden border-0 shadow-sm hover:shadow-lg transition-shadow">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {badge && (
          <Badge className={cn(
            "px-3 py-1 text-xs font-semibold",
            badge.includes("-") ? "bg-red-600 text-white" : "bg-green-600 text-white"
          )}>
            {badge}
          </Badge>
        )}
        {discount && discount > 0 && !badge && (
          <Badge className="bg-red-600 text-white px-3 py-1 text-xs">-{discount}%</Badge>
        )}
      </div>

      {/* Action Icons */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {showWishlistIcon && (
          <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white shadow-md">
            <Heart className="w-4 h-4" />
          </Button>
        )}
        <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white shadow-md">
          <Eye className="w-4 h-4" />
        </Button>
      </div>

      {/* Image */}
      <div className="relative bg-gray-100 h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-8 transition-transform group-hover:scale-105"
        />
      </div>

      {/* Add to Cart Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-center py-3 translate-y-full group-hover:translate-y-0 transition-transform">
        <Button variant="ghost" size="sm" className="text-white hover:text-white">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-sm line-clamp-2 mb-2">{title}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-red-600 font-semibold">${price}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">${originalPrice}</span>
          )}
        </div>
        {rating && (
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500">({reviews})</span>
          </div>
        )}
      </div>
    </Card>
  );
}