import React from "react";

export default function ContentTitle({title, tag}: {title: string; tag: string}) {
  return (
    <div className="space-y-4">
        <div className="flex items-center gap-2">

      <div className="w-5 h-10 bg-destructive rounded"/>
      <span className="text-destructive font-semibold ">{tag}</span>
        </div>
        <h2 className="text-3xl font-semibold">{title}</h2>
    </div>
  );
}
