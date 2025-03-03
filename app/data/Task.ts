import { nanoid } from 'nanoid';

export type Task = {
    id: string;
    name: string;
    priority: "low" | "medium" | "high";
    status: "in progress" | "completed";
};

export const allTasks: Task[] = [
    { id: nanoid(), name: "Task 1", priority: "low", status: "in progress" },
    { id: nanoid(), name: "Task 2", priority: "medium", status: "in progress" },
    { id: nanoid(), name: "Task 3", priority: "high", status: "completed" }

];
