// import React from 'react'
import { Form, FormField, FormControl, FormLabel, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";

export default function SignupPage() {
  const formScheam = z
    .object({
      username: z.string().min(3).max(10),
      email: z.string().email("Invalid email address"),
      password: z.string(),
      confirmpassword: z.string(),
    })
    .refine((data) => data.password == data.confirmpassword, {
      message: "Password don't match",
      path: ["confirmpassword"],
    });
  const form = useForm<z.infer<typeof formScheam>>({
    resolver: zodResolver(formScheam),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  return (
    <div className=" flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md  rounded-lg shadow-lg border border-gray-200 p-6 sm:p-8">
      <Form {...form}>
        <form className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input  type="text" placeholder="Enter username" {...field} />
                </FormControl>
              </FormItem>
            )}>
            </FormField>
                  <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="second@gamil.com" {...field} />
                </FormControl>
              </FormItem>
            )}>
            </FormField>
                  <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
              </FormItem>
            )}>
            </FormField>
                     <FormField
            control={form.control}
            name="confirmpassword"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Confrim-Password" {...field}  className="w-full"/>
                </FormControl>
              </FormItem>
            )}>
            </FormField>
            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                <>
                  Createing account <LoaderIcon className="ml-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                "Create account"
              )}
            </Button>
        </form>
      </Form>
         <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 cursor-pointer hover:text-blue-700 font-medium">
              Login
            </Link>
          </p>
          
        </div>
    </div>
</div>
  );
}
