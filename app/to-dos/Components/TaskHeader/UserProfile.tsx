"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuLabel
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { LogoutButton } from "@/LogoutBtn";
import { useUserStore } from "@/store/useUserStore";

export function UserProfile() {
    const [open, setOpen] = useState(false);
    const { user } = useUserStore();

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}> 
          <DropdownMenuTrigger asChild> 
            <Button variant="ghost" size="sm"> 
              <FaRegUser className="text-[20px]" /> 
            </Button>
          </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]"> 
                <DropdownMenuLabel className="text-lg text-gray-600" >
                    {user?.email}
                </DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <LogoutButton />
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
       </DropdownMenu>
    );

}