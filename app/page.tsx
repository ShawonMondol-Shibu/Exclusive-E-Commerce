import Categories from "@/components/layout/home/Categories";
import Header from "@/components/layout/home/Header";
import Limited from "@/components/layout/home/Limited";
import ThisMonth from "@/components/layout/home/ThisMonth";
import Todays from "@/components/layout/home/Todays";
import React from "react";

export default function Home() {
  return (
    <main>
      <Header />
      <Todays/>
      <Categories/>
    <ThisMonth/>
    <Limited/>
    </main>
  );
}
