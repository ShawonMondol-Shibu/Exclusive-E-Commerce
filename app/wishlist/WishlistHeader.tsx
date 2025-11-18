import { Button } from "@/components/ui/button";

export default function WishlistHeader() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <h1 className="text-2xl font-medium">Wishlist (4)</h1>
      <Button variant="outline" className="border-gray-300">
        Move All To Bag
      </Button>
    </div>
  );
}