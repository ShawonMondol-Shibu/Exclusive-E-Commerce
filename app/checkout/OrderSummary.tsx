import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import PaymentMethod from "./PaymentMethod";

type OrderItem = {
  image: string;
  name: string;
  price: number;
};

const items: OrderItem[] = [
  { image: "/gamepad-checkout.jpg", name: "LCD Monitor", price: 650 },
  { image: "/gamepad2.jpg", name: "H1 Gamepad", price: 1100 },
];

export default function OrderSummary() {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="space-y-6">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded overflow-hidden">
            <Image src={item.image} alt={item.name} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <p className="font-medium">{item.name}</p>
          </div>
          <p className="font-medium">${item.price}</p>
        </div>
      ))}

      <div className="border-t pt-4 space-y-3">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span className="font-medium">${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span className="font-medium">Free</span>
        </div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total:</span>
          <span>${subtotal}</span>
        </div>
      </div>

      <PaymentMethod />

      <div className="flex gap-3 mt-6">
        <Input placeholder="Coupon Code" className="bg-gray-100 border-0" />
        <Button className="bg-red-600 hover:bg-red-700 text-white px-8">
          Apply Coupon
        </Button>
      </div>

      <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-medium">
        Place Order
      </Button>
    </div>
  );
}