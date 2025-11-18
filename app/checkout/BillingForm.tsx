"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const billingSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  companyName: z.string().optional(),
  streetAddress: z.string().min(5, "Street address is required"),
  apartment: z.string().optional(),
  townCity: z.string().min(2, "Town/City is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  saveInfo: z.boolean().default(false),
});


export default function BillingForm() {
  const form = useForm<z.infer<typeof billingSchema>>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(billingSchema) as any,
    defaultValues: {
      firstName: "",
      companyName: "",
      streetAddress: "",
      apartment: "",
      townCity: "",
      phone: "",
      email: "",
      saveInfo: false,
    },
  });

  return (
    <Form {...form}>
      <form className="space-y-5">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="First Name" className="h-12 bg-gray-100 border-0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Company Name" className="h-12 bg-gray-100 border-0" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-red-600">Street Address *</FormLabel>
              <FormControl>
                <Input placeholder="Street Address" className="h-12 bg-gray-100 border-0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="apartment"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Apartment, floor, etc. (optional)" className="h-12 bg-gray-100 border-0" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="townCity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Town/City *</FormLabel>
              <FormControl>
                <Input placeholder="Town/City" className="h-12 bg-gray-100 border-0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number *</FormLabel>
              <FormControl>
                <Input placeholder="Phone Number" className="h-12 bg-gray-100 border-0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address *</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email Address" className="h-12 bg-gray-100 border-0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="saveInfo"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel className="font-normal cursor-pointer">
                Save this information for faster check-out next time
              </FormLabel>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}