import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

export default function HeaderSidebar() {
  const navLinks = [
    { title: "Electronics" },
    { title: "Home & Lifestyle" },
    { title: "Medicine" },
    { title: "Sports & Outdoor" },
    { title: "Baby’s & Toys" },
    { title: "Groceries & Pets" },
    { title: "Health & Beauty" },
  ];
  return (
    <aside className="grid items-center border-r pr-4 pt-8">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Woman’s Fashion</AccordionTrigger>
          <AccordionContent>Bra</AccordionContent>
          <AccordionContent>Dildo</AccordionContent>
          <AccordionContent>Vibrator</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Men’s Fashion</AccordionTrigger>
          <AccordionContent>Underware</AccordionContent>
          <AccordionContent>Flashtube</AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="grid items-center gap-4">
        {navLinks.map((nav) => (
          <Link key={nav.title} href={"/"}>
            {nav.title}
          </Link>
        ))}
      </div>
    </aside>
  );
}
