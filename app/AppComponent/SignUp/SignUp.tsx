"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { AppLogo } from "../AppLogo";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import {useForm, FormProvider} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast"
import z from "zod";
import { authSchema, signUpSchema } from "../validationSchema"
import { useRouter } from "next/navigation";
import { useState } from "react";


type SignUpFormData = z.infer<typeof signUpSchema>

export default function SignUp() {
const methods = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema)
});
const { toast } = useToast();
const router = useRouter();
const [isLoading, setIsLoading] = useState(false);

const onSubmit = async (data: SignUpFormData) => {
  try {
    setIsLoading(true);
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email: data.email, password: data.password}),
    });
    const result = await response.json();

    if(response.ok) {
      toast({ title: "Sign up successful!", description: "You have signed up."});
      router.push("/to-dos");
    } else {
      if(response.status === 409) {
        toast({ title: "Sign up failed!", description: "User with this email already exists", variant: "destructive"});
      } else {
        toast({ title: "Sign up failed!", description: result.error || "An unknown error occured", variant: "destructive"});
      }
    }

   } catch (error) { 
    console.error("Sign up error:", error);
    toast({ title: "Sign up failed!", description: "An unknown error occured. Please try again", variant: "destructive"});
   } finally {
    setIsLoading(false);
   }
};

const handleErrorsToast = () => {
  const errors = methods.formState.errors;
  const errorFields = ["email", "password", "confirmPassword"] as const;

  errorFields.forEach((field) => {
    if(errors[field]) {
      toast({
        title: "Sign up failed!",
        description: errors[field]?.message,
        variant: "destructive",
      });
    }
  });
}


  return (
    <div>
      <AppLogo />
      <Card className="w-full max-w-sm py-2">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit, handleErrorsToast)}>

            <CardHeader>
              <CardTitle className="text-[22px] font-bold">Sign Up</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-5 mt-3">
              <EmailInput name="email" label="Email" />
              <PasswordInput name="password" label="Password" />
              <PasswordInput name="confirmPassword" label="Confirm Password" />
              <div className="mt-4 text-sm flex items-center justify-center gap-1">
                <span>Already have an account?</span>
                <Label className="text-primary">
                  <Link href={"/"}>Sign in</Link>
                </Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Create an account
              </Button>
            </CardFooter>
            </form>
            </FormProvider>
      </Card>
    </div>
  );
}
