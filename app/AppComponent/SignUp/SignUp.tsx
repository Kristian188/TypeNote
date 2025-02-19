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


type SignUpFormData = z.infer<typeof signUpSchema>

export default function SignUp() {
const methods = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema)
});
const { toast } = useToast();

const onSubmit = (data: SignUpFormData) => {
  console.log("Sign In Data:", data);
  toast({ title: "Sign in successful!", description: "You have signed in."});
};

function handleErrorsToast() {
  const { errors } = methods.formState;
  
  if(errors.email) {
    toast({
      title: "Validation Error",
      description: errors.email.message?.toString(),
      variant: "destructive"
    });

  }

  if(errors.password) {
    toast({
      title: "Validation Error",
      description: errors.password.message?.toString(),
      variant: "destructive"
    })
  }
  if(errors.confirmPassword) {
    toast({
      title: "Validation Error",
      description: errors.confirmPassword.message?.toString(),
      variant: "destructive"
    })
  }
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
