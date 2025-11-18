import Link from "next/link";
import React from "react";
import { NativeSelect, NativeSelectOption } from "../../ui/native-select";

export default function TopHeader() {
  return (
    <div className="bg-black text-white text-center flex items-center justify-center p-1 w-full">
      <div className="flex items-center justify-center">
        <span className="flex items-center gap-2">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link href={"#"} className="underline font-semibold">
            ShopNow
          </Link>
        </span>
      </div>

      <NativeSelect className="border-none text-md text-white relative right-0">
        <NativeSelectOption value="english">English</NativeSelectOption>
        <NativeSelectOption value="spanish">Spanish</NativeSelectOption>
        <NativeSelectOption value="bangla">Bangla</NativeSelectOption>
        <NativeSelectOption value="japanise">Japanise</NativeSelectOption>
        <NativeSelectOption value="korian">Korian</NativeSelectOption>
        <NativeSelectOption value="chinese">Chinese</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
