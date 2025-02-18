import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ErrorHoverCard } from "./ErrorHoverCard";

function EmailInput({ name, label }: {name: string; label: string}) {
    return (
        <div className="grid gap-2 relative">
            <Label htmlFor="email">{label}</Label>
            <Input id={name} type="email" placeholder="m@example.com" required />
            <ErrorHoverCard message="email required"/>
        </div>
    );
}

export default EmailInput;