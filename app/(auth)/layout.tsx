import Image from "next/image";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-cols-2 items-center gap-30">
      <Image
        src={"/images/signupbg.png"}
        alt="signup banner"
        width={1000}
        height={1000}
      />

      {children}
    </main>
  );
}
