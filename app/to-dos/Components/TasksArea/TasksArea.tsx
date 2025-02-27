import {Checkbox} from "@/components/ui/checkbox";

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TasksOption } from "./TasksOption";
import { ComboboxDemo } from "./PriorityComboBox";
export function TasksArea() {
    return (
        <ScrollArea className="h-52 flex flex-col gap-4">
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
            <SingleTask />
        </ScrollArea>
    )
}

export function SingleTask() {
    return (
        <div className="border flex items-center p-3 rounded-md w-full justify-between mb-3">
            <div className="flex items-center gap-2">
                <Checkbox id="task" className="w-5 h-5" />
                <div className="flex flex-col gap-1">
                    <label htmlFor="task" className="text-lg font-semibold">
                        task
                    </label>
                    <Badge variant="outline" className="text-[10px] opacity-55">
                        In Progress
                    </Badge>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <ComboboxDemo />
                <TasksOption />
            </div>
        </div>
    );
}