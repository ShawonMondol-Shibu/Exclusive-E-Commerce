"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Zod Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^[\d\s\-\+\(\)]+$/, "Invalid phone number")
    .min(10, "Phone number too short"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    // Handle form submission (e.g., send to API)
    alert("Thank you! We will contact you soon.");
    form.reset();
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          Home / <span className="text-black font-medium">Contact</span>
        </nav>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Sidebar */}
          <Card className="p-8 h-fit shadow-sm border-0 bg-white">
            <div className="space-y-8">
              {/* Call To Us */}
              <div className="flex gap-4">
                <div className="bg-red-100 text-red-600 rounded-full p-3 w-12 h-12 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Call To Us</h3>
                  <p className="text-sm text-gray-600">
                    We are available 24/7, 7 days a week.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Phone: +8801611112222
                  </p>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Write To Us */}
              <div className="flex gap-4">
                <div className="bg-red-100 text-red-600 rounded-full p-3 w-12 h-12 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Write To Us</h3>
                  <p className="text-sm text-gray-600">
                    Fill out our form and we will contact you within 24 hours.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Emails: customer@exclusive.com
                  </p>
                  <p className="text-sm text-gray-600">
                    support@exclusive.com
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="p-8 shadow-sm border-0 bg-white md:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name, Email, Phone */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Your Name *"
                            className="bg-gray-100 border-0 focus-visible:ring-red-500 placeholder:text-gray-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Your Email *"
                            className="bg-gray-100 border-0 focus-visible:ring-red-500 placeholder:text-gray-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Your Phone *"
                            className="bg-gray-100 border-0 focus-visible:ring-red-500 placeholder:text-gray-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message"
                          rows={8}
                          className="bg-gray-100 border-0 resize-none focus-visible:ring-red-500 placeholder:text-gray-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs" />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="text-right">
                  <Button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-md font-medium transition"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
}