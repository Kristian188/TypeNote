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
import { Task } from "@/app/data/Task";
import { useTasksStore } from "@/app/store/useTasksStore";
import { set } from "zod";


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
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const { updateTaskfunction } = useTasksStore();

    console.log(singleTask);

    React.useEffect(() => {
        setValue(singleTask.priority);
    }, [singleTask]);

    function isValidPriority(value: string): value is "low" | "medium" | "high" {
        return value === "low" || value === "medium" || value === "high";
    }

    function onSelectFunction(currentValue: string) {
        if (!isValidPriority(currentValue)) {
            return;
        }
        const updatedTask: Task = { ...singleTask, priority: currentValue };

        setValue(currentValue);
        updateTaskfunction(updatedTask);
        setOpen(false);
    }





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
                                    onSelect={onSelectFunction}

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