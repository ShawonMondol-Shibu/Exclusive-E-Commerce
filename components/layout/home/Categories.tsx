import React from "react";
import ContentTitle from "./ContentTitle";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/lib/category";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Categories() {
  return (
    <main className="py-20 container border-y-2 m-auto space-y-16">
      <div className="flex items-center justify-between gap-5">
        <ContentTitle tag="Categories" title="Browse By Category" />
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
      <section className="flex items-center justify-between gap-5">
        {categories.map((category) => (
          <Card
            key={category.name}
            className="rounded w-[170px] h-[145px] flex items-center justify-center transition-all duration-300 ease-linear hover:bg-destructive hover:text-white cursor-pointer"
          >
            <CardContent className="grid items-center justify-items-center">
              <category.icon className="hover:stroke-white " />
              <span className="font-medium text-base">{category.name}</span>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
