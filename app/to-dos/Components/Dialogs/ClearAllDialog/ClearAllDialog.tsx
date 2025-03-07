import { useTasksStore } from "@/app/store/useTasksStore"; 
import { useUserStore } from "@/app/store/useUserStore"; 
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

export function DeleteDialog() {
  const {
    openDeleteDialog,
    setOpenDeleteDialog,
    taskSelected,
    setTaskSelected,
    deleteTaskFunction,
    isLoading,
    tasks,
  } = useTasksStore();

  const [message, setMessage] = useState("");
  const { user } = useUserStore();

  function handleOpenChange(open: boolean) {
    if (open) {
      setOpenDeleteDialog(open);
    }
  }

  useEffect(() => {
    if (taskSelected) {
      setMessage(`This action cannot be undone. This will permanently delete the note 
      [${taskSelected.name}] and remove it from server!`);
    } else {
      setMessage(`This action cannot be undone. This will permanently delete all notes
            and remove them from the server!`);
    }
  }, [taskSelected]);

  async function deleteFunction() {
    if (taskSelected) {
      const result = await deleteTaskFunction("delete", user, taskSelected);

      if (result.success) {
        // Displaying a toast notification with title and description
        toast({
          title: "Note Deleted",
          description: `The note has been deleted successfully.`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "There was an error deleting the note.",
        });
      }
    } else {
      const result = await deleteTaskFunction("deleteAll", user);

      if (result.success) {
        // Displaying a toast notification with title and description
        toast({
          title: "Notes Deleted",
          description: `All notes has been deleted successfully.`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "There was an error deleting notes.",
        });
      }
    }
    setTaskSelected(null);
    setOpenDeleteDialog(false);
  }

  return (
    <AlertDialog open={openDeleteDialog} onOpenChange={handleOpenChange}>
      <AlertDialogTrigger disabled={tasks.length === 0}>
        <Button variant="link" disabled={tasks.length === 0}>
          Clear All
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="p-7">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-7">
            {message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-7">
          <AlertDialogCancel
            onClick={() => {
              setTaskSelected(null);
              setOpenDeleteDialog(false);
            }}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={deleteFunction}>
            {isLoading ? "Loading..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
