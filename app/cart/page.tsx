"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import CouponInput from "./CouponInput";
import CartSummary from "./CartSummary";
import CartItem from "./CartItem";



type Item = {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
};

export default function CartPage() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, image: "/lcd-monitor.jpg", name: "LCD Monitor", price: 650, quantity: 1 },
    { id: 2, image: "/gamepad.jpg", name: "H1 Gamepad", price: 550, quantity: 2 },
  ]);

  const updateQuantity = (id: number, qty: number) => {
    if (qty < 1) return;
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: qty } : item)));
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Cart</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Cart Table Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 hidden md:block">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
            <div className="col-span-4">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-3 text-center">Quantity</div>
            <div className="col-span-2 text-right">Subtotal</div>
            <div className="col-span-1" />
          </div>
        </div>

        {/* Cart Items */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 py-10">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onQuantityChange={updateQuantity}
                onRemove={removeItem}
              />
            ))
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button variant="outline" asChild className="order-2 sm:order-1">
            <Link href="/">Return To Shop</Link>
          </Button>
          <Button variant="outline" className="order-1 sm:order-2">
            Update Cart
          </Button>
        </div>

        {/* Coupon + Summary */}
        <div className="grid lg:grid-cols-2 gap-8">
          <CouponInput />
          <div className="lg:justify-self-end">
            <CartSummary subtotal={subtotal} />
          </div>
        </div>
      </div>
    </div>
  );
}