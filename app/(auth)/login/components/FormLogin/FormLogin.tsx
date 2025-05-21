"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"


import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { LoginAction } from "@/app/(auth)/actions/auth-actions"
import { toast } from "sonner"
import { useState } from "react"
import { useRouter } from "next/navigation"


const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
})

export function FormLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  // const isValid = form.formState.isValid;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const { email, password } = data;
    setIsLoading(true);
    const result = await LoginAction(email, password);
    if (result.success) {
      toast.success("Login Successful");

      router.push("/");
    } else {
      toast.error(result.error);
      form.reset();
    }

    setIsLoading(false);
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Login</CardTitle>
        {/* <CardDescription>
          Enter your email below to login to your account
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col gap-6">

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                                </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                                </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full"
              disabled={isLoading}
              >
                Login
              </Button>

            </div>

          </form>

        </Form>
      </CardContent>
    </Card>
  );
}