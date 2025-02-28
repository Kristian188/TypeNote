"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Input } from "@/components/ui/input";

export function TasksDialog() {
  const [taskName, setTaskName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function handleSaveTask() {
    if (!taskName.trim()) return;
    console.log("Saving task:", taskName);
    setTaskName(""); // Clear input after save
    setIsOpen(false); // Close dialog
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-1">
          <FaPlus />
          <span>New Task</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-7">
        <DialogHeader>
          <DialogTitle className="text-xl">Add Task</DialogTitle>
        </DialogHeader>

        {/* Simple Task Input */}
        <Input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task name..."
        />

        <DialogFooter className="mt-4">
          <Button onClick={handleSaveTask} disabled={!taskName.trim()}>
            Save Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
