import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import Link from "next/link";
import BillingForm from "./BillingForm";
import OrderSummary from "./OrderSummary";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8 text-sm">
          <BreadcrumbList>
            <BreadcrumbItem><Link href="/" className="flex items-center gap-2"><Home className="w-4 h-4" />Account</Link></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>My Account</BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>Product</BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>View Cart</BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>CheckOut</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl font-semibold mb-10">Billing Details</h1>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Billing Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-lg border-2 border-dashed border-blue-300">
              <BillingForm />
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="order-1 lg:order-2">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}