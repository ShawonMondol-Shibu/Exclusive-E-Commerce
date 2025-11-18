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
            <h2 className="text-4xl font-semibold">Create an account</h2>
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
            Create Account
          </Button>
          <Button variant={"outline"} size={"lg"} className="rounded">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_842_3336)">
                <path
                  d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                  fill="#4285F4"
                />
                <path
                  d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                  fill="#34A853"
                />
                <path
                  d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                  fill="#FBBC04"
                />
                <path
                  d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_842_3336">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Sign up with Google
          </Button>

          <p className="text-center">
            Already have an account? &nbsp;
            <Link href={"/login"} className="underline">
              Log in
            </Link>
          </p>
        </form>
      </Form>
    </>
  );
}
