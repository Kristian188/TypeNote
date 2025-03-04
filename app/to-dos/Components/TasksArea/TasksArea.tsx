import {Checkbox} from "@/components/ui/checkbox";

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TasksOption } from "./TasksOption";
import { ComboboxDemo } from "./PriorityComboBox";
import { useTasksStore } from "@/store/useTasksStore";
import { Task } from "@/app/data/Task";
import { useEffect } from "react";
export function TasksArea() {

    const { tasks, fetchTasks } = useTasksStore();

    useEffect(() => {
        fetchTasks();
    }, []);
    return (
        <ScrollArea className="h-52 flex flex-col gap-4">
            {tasks.map((singleTask) => (
                <SingleTask key={singleTask.id} singleTask={singleTask} />
            ))}
        </ScrollArea>

    )
}

export function SingleTask({ singleTask }: { singleTask: Task }) {
    const { updateTaskfunction } = useTasksStore();
    function handleCheckboxChange() {
        const updateTaskObject: Task = {
            ...singleTask,
            status: singleTask.status === "completed" ? "in progress" : "completed",

        };
        console.log(updateTaskObject);
        updateTaskfunction(updateTaskObject);
    }
    const lowerOpacity = singleTask.status === "completed" && "opacity-65";

    return (
       <div
       className={`border flex items-center p-3 rounded-md w-full justify-between mb-3 ${lowerOpacity}  `}
    >
        <div className="flex items-center gap-2">
            <Checkbox
             id={`task-${singleTask.id}`}
             className="w-5 h-5"
             checked={singleTask.status === "completed"}
             onCheckedChange={handleCheckboxChange}
             />
             <div className="flex flex-col gap-1">
                <label htmlFor="task" className="text-lg font-semibold" >
                    {singleTask.name}
                </label>
                <Badge variant="outline" className="text-[10px] opacity-55">
                    {singleTask.status}
                </Badge>

             </div>
        </div>
        <div className="flex gap-3 items-center ">
            <ComboboxDemo singleTask={singleTask} />
            <TasksOption />

        </div>

       </div>
    );
}