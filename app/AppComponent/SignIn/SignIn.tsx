"use client";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Link from "next/link";

import { AppLogo } from  "../AppLogo";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import {useForm, FormProvider} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast"
import z from "zod";
import { authSchema } from "../validationSchema"
import { useRouter } from "next/navigation"; 
import { useState } from "react";


type AuthFormData = z.infer<typeof authSchema>;

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const methods = useForm<AuthFormData>({ resolver: zodResolver(authSchema) });
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: AuthFormData) => {
   try {
    setIsLoading(true);
    const response = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: data.email, password: data.password}),
    });
    const result = await response.json();

    if(response.ok) {
      toast({ title: "Sign in successful!", description: "You have signed in."});
      router.push("/to-dos");
    } else { 
      toast({ title: "Sign in failed!", description: result.error || "An unknown error occured", variant: "destructive"});

    }
   } catch (error) {
    console.error("Sign in error:", error);
    toast({ title: "Sign in failed!", description: "An unknown error occured. Please try again", variant: "destructive"});
  } finally {
    setIsLoading(false);
  }
  };

  const handleErrorToast = () => {
    const { errors } = methods.formState;
    const errorFields = ["email", "password"] as const;

    errorFields.forEach((field) => {
      if(errors[field]) {
        toast({
          title: "Validation Error",
          description: errors[field]?.message?.toString(),
          variant: "destructive",
        });
      }
    });


  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <AppLogo />
      <Card className ="w-full max-w-sm py-2">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit, handleErrorToast)}>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5 mt-3">
            <EmailInput name="Email" label="email" />
            <PasswordInput name="password" label="Password"/>


              <div className ="mt-4  text-sm flex items-center justify-center gap-1">
                <span>Don&apos;t have an account?</span>
                <Label className ="text-primary">
                  <Link href={"/sign-up"}>Sign up</Link>
                </Label>
              </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            {isLoading ? "Loading..." : "Sign in"}
          </Button>
        </CardFooter>
        </form>
        </FormProvider>,
      </Card>
    </div>
  )
}
