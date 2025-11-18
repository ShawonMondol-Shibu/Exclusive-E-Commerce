import React from "react";
import ContentTitle from "./ContentTitle";
import { Button } from "@/components/ui/button";
import ProductCard from "../shared/ProductCard";

export default function ThisMonth() {
  return (
    <main className="container m-auto space-y-10 py-20">
      <div className="flex items-end justify-between">
        <ContentTitle tag="This Month" title="Best Selling Products" />
        <Button variant={"destructive"} size={"lg"} className="rounded">
          view All
        </Button>
      </div>

      <section className="flex items-center justify-center gap-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <ProductCard key={i} />
        ))}
      </section>
    </main>
  );
}
