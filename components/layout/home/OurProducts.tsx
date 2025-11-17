import React from "react";
import ContentTitle from "./ContentTitle";
import ProductCard from "../ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function OurProducts() {
  return (
    <main className="py-20 container m-auto space-y-10 grid items-center">
      <div className="flex items-end justify-between">
        <ContentTitle tag="Our Products" title="Explore Our Products" />
        <div className="flex items-center gap-2">
          <Button
            variant={"secondary"}
            size={"icon-sm"}
            className="rounded-full"
          >
            <ArrowLeft className="size-6" />
          </Button>
          <Button
            variant={"secondary"}
            size={"icon-sm"}
            className="rounded-full"
          >
            <ArrowRight className="size-6" />
          </Button>
        </div>
      </div>
      <section className="grid grid-cols-4 items-center gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </section>

      <Button variant={'destructive'} size={'lg'} className="rounded w-fit m-auto">View All Products</Button>
    </main>
  );
}
