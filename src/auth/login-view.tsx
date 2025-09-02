// import React from 'react'
import { Form, FormField, FormControl, FormLabel, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";
export default function LoginPage() {
  const formScheam = z
    .object({
      email: z.string().email("Invalid email address"),
      password: z.string(),
    })
  const form = useForm<z.infer<typeof formScheam>>({
    resolver: zodResolver(formScheam),
    defaultValues: {
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
              
            <Button
              type="submit"
              className="w-full cursor-pointer"
              disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                <>
                  Logging in <LoaderIcon className="ml-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                "Login"
              )}
            </Button>
        </form>
      </Form>
         <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 cursor-pointer hover:text-blue-700 font-medium">
              Sign up
            </Link>
          </p>
          
        </div>
    </div>
</div>
  );
}
