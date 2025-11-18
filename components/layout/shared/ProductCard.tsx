import React from "react";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function ProductCard() {
  return (
    <Card className="w-72 rounded shadow-none border-none ">
      <CardHeader className=" bg-[#F5F5F5] py-6">
        <div className="flex items-center justify-center">
          <Image
            src={"/images/gamepad.png"}
            alt="gamepad"
            width={172}
            height={152}
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <h3>HAVIT HV-G92 Gamepad</h3>
          <p>
            <span className="text-destructive">$120</span> <del>$160</del>
          </p>
          <span className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} fill="orange" stroke="orange" size={16} />
            ))}
            <small>(88)</small>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
