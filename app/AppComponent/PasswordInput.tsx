import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ErrorHoverCard } from "./ErrorHoverCard";


function passwordInput({ name, label }: {name: string; label: string}) {
    return (
        <div className="grid gap-2 relative">
            <Label htmlFor="password">{label}</Label>
            <Input 
            id={name}
            type="password"
            placeholder="Your Password..."
            />
            <ErrorHoverCard message="Invalid Password"></ErrorHoverCard>
        </div>
    );
}

export default passwordInput;