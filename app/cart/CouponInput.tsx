import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CouponInput() {
  return (
    <div className="flex gap-3 mt-8">
      <Input
        placeholder="Coupon Code"
        className="max-w-xs bg-gray-50 border-gray-300"
      />
      <Button className="bg-red-600 hover:bg-red-700 text-white px-8">
        Apply Coupon
      </Button>
    </div>
  );
}