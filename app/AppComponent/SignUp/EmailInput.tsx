import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ErrorHoverCard } from "./ErrorHoverCard";

function EmailInput() {
    return (
        <div className="grid gap-2 relative">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
            <ErrorHoverCard message="email required"/>
        </div>
    );
}

export default EmailInput;