"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});
export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => console.log(data))}
          className="space-y-6 max-w-md grid"
        >
          <div className="space-y-2">
            <h2 className="text-4xl font-semibold">Log in to Exclusive</h2>
            <p className="text-base">Enter your details below</p>
          </div>
          <FormField
            control={form.control}
            name="name"
            render={() => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input
                    placeholder="Name"
                    className="border-0 border-b rounded-none shadow-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={() => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input
                    placeholder="Email or Phone Number"
                    className="border-0 border-b rounded-none shadow-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={() => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input
                    placeholder="Password"
                    className="border-0 border-b rounded-none shadow-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button variant={"destructive"} size={"lg"} className="rounded">
            Log in
          </Button>
          <Button variant={"outline"} size={"lg"} className="rounded">
            Forget Password
          </Button>
        </form>
      </Form>
    </>
  );
}
