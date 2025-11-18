import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function PaymentMethod() {
  return (
    <RadioGroup defaultValue="bank" className="space-y-4 mt-8">
      <div className="flex items-center space-x-3">
        <RadioGroupItem value="bank" id="bank" />
        <Label htmlFor="bank" className="cursor-pointer flex items-center gap-3">
          <div className="flex gap-2">
            <Image src="/visa.png" alt="Visa" width={40} height={24} />
            <Image src="/mastercard.png" alt="Mastercard" width={40} height={24} />
            <Image src="/amex.png" alt="Amex" width={40} height={24} />
          </div>
        </Label>
      </div>
      <div className="flex items-center space-x-3">
        <RadioGroupItem value="cash" id="cash" />
        <Label htmlFor="cash" className="cursor-pointer">Cash on delivery</Label>
      </div>
    </RadioGroup>
  );
}