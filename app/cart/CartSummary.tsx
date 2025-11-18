import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

type CartSummaryProps = {
  subtotal: number;
};

export default function CartSummary({ subtotal }: CartSummaryProps) {
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <Card className="p-6 w-full max-w-sm shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span className="font-medium">${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span className="font-medium">{shipping === 0 ? "Free" : `$${shipping}`}</span>
        </div>
        <hr className="border-gray-200" />
        <div className="flex justify-between text-base font-semibold">
          <span>Total:</span>
          <span>${total}</span>
        </div>
      </div>
      <Button asChild className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-6 text-base" >
        <Link href={'/checkout'}>
        Proceed to checkout
        
        </Link>
      </Button>
    </Card>
  );
}