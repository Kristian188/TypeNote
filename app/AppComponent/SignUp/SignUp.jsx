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




export default function SignUp() {


  return (
    <div>
      <AppLogo />
      <Card className="w-full max-w-sm py-2">

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
            </CardFooter>
      </Card>
    </div>
  );
}
