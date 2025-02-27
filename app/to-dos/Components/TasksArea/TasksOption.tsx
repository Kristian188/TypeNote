"use client";

import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuShortcut,

} from "@/components/ui/dropdown-menu";

export function TasksOption() {
    const handleItemClick = (action: string) => {
        console.log(`Clicked on: ${action}`);

        if (action === "edit") {
           console.log("Edit clicked");
        } else if (action === "delete") {
            console.log("Delete clicked");
        }
    };
    ⌘

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary">...</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36"> 
                <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => handleItemClick("edit")}>
                    Edit
                    <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>

                </DropdownMenuItem>
                <DropdownMenuItem>
                    Copy
                    <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleItemClick("delete")}>
                    Delete
                    <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )



}