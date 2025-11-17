import React from "react";
import ContentTitle from "./ContentTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "../ProductCard";

export default function Todays() {
  return (
    <main className="mt-40 w-full">
      <div className="container m-auto px-4 flex justify-between items-end">
        <ContentTitle tag="Today's" title="Flash Sales" />

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

      <section className="flex items-center gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </section>



      <Button variant={"destructive"} size={'lg'} className="rounded m-auto font-medium">view All Products</Button>
    </main>
  );
}
