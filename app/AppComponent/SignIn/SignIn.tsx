import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";

import { AppLogo } from  "../AppLogo";
import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";




export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <AppLogo />
      <Card className ="w-full max-w-sm py-2">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5 mt-3">
            <EmailInput name="Email" label="email" />
            <PasswordInput name="password" label="Password"/>
            <PasswordInput name="confirmPassword" label="Confirm Password" />


              <div className ="mt-4  text-sm flex items-center justify-center gap-1">
                <span>Don&apos;t have an account?</span>
                <Label className ="text-primary">
                  <Link href={"/sign-up"}>Sign up</Link>
                </Label>
              </div>
              <Button type="submit" className="w-full flex" >
                Login
              </Button> 
        </CardContent>
      </Card>
    </div>
  )
}
