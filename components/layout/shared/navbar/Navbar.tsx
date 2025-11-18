"use client";
import Link from "next/link";
import React from "react";
import NavbarSearch from "./NavbarSearch";
import { User2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Sign Up", path: "/signup" },
  ];
  const activePath = usePathname();

  return (
    <nav className="border-b sticky top-0 bg-white/50 backdrop-blur backdrop-brightness-125 backdrop-saturate-150 z-50 ">
      <div className="flex items-center justify-between container m-auto py-4">
        <span className="text-2xl font-bold">Exclusive</span>

        <div className="flex items-center gap-5 justify-center">
          {navLinks.map((nav) => (
            <Link
              key={nav.name}
              href={nav.path}
              className={cn(
                "transition-transform duration-300  ease-linear hover:underline underline-offset-4",
                activePath === nav.path ? "underline" : ""
              )}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <NavbarSearch />
          <Button variant={"ghost"} size={"icon"} asChild>
            <Link href={"/wishlist"}>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.75 0.75C2.989 0.75 0.75 2.966 0.75 5.7C0.75 7.907 1.625 13.145 10.238 18.44C10.3923 18.5339 10.5694 18.5835 10.75 18.5835C10.9306 18.5835 11.1077 18.5339 11.262 18.44C19.875 13.145 20.75 7.907 20.75 5.7C20.75 2.966 18.511 0.75 15.75 0.75C12.989 0.75 10.75 3.75 10.75 3.75C10.75 3.75 8.511 0.75 5.75 0.75Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
            </Link>

          </Button>
          <Button variant={"ghost"} size={"icon"} asChild>
            <Link href={"/cart"}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 5H7L10 22H26"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </Button>

          <Button variant={"ghost"} size={"icon"} asChild>
            <Link href={"/profile"}>
              <User2 />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
