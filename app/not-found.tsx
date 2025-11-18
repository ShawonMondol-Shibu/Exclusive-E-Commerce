import { Button } from "@/components/ui/button";
import React from "react";

export default function NotFound() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="grid items-center justify-center text-center gap-10">
        <h1 className="text-8xl font-medium">404 Page Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Button
          variant={"destructive"}
          size={"lg"}
          className="font-medium rounded w-fit m-auto"
        >
          Back to home page
        </Button>
      </div>
    </main>
  );
}
