import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoSearchSharp } from "react-icons/io5";

export function SearchButton() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost"> 
                    <IoSearchSharp className="text-[20px]" /> 
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Input
                    id="search"
                    placeholder="Search notes..."
                    className="mt-2"
                />
            </PopoverContent>
        </Popover>
    );
}
