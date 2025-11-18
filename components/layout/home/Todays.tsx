import React from "react";
import ContentTitle from "./ContentTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "../shared/ProductCard";

export default function Todays() {
  return (
    <main className="mt-20 py-20 w-full grid gap-10">
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

      <section className="grid grid-cols-5 gap-6 pl-[14%] overflow-visible">
        {Array.from({ length: 5 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </section>

      <Button
        variant={"destructive"}
        size={"lg"}
        className="rounded font-medium w-fit m-auto"
      >
        view All Products
      </Button>
    </main>
  );
}
