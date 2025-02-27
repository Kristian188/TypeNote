"use client"

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";


const priorities = [
    {
        value: "low",
        label: "Low",
    },
    {
        value: "medium",
        label: "Medium",
    },
    {
        value: "high",
        label: "High",
    },
];

export function ComboboxDemo() {
    const [oepn, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[100px] justify-between"
                >
                    {value
                        ? priorities.find((framework) => framework.value === value)?.label
                        : priorities[0].value}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Command>
                    <CommandList>
                        <CommandGroup>
                            {priorities.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue);
                                        setOpen(false);
                                    }}

                                >
                                    {framework.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            )

                           )}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>

    )

}