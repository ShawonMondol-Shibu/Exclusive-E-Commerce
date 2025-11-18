import { Truck, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function ProductHighlights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
      <div className="bg-gray-100 rounded-lg p-6 flex gap-4">
        <div className="p-3 rounded-full">
          <Truck size={36}/>
        </div>
        <div>
          <h4 className="font-semibold">Free Delivery</h4>
          <p className="text-sm text-gray-600">Enter your postal code for Delivery Availability</p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-6 flex gap-4">
        <div className=" p-3 rounded-full">
          <RefreshCw size={30} />
        </div>
        <div>
          <h4 className="font-semibold">Return Delivery</h4>
          <p className="text-sm text-gray-600">Free 30 Days Delivery Returns. <Link href="#" className="underline">Details</Link></p>
        </div>
      </div>
    </div>
  );
}