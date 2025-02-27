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

export function ClearAllDialog() {
    return(
        <AlertDialog>
            <AlertDialogTrigger>
                <Button variant="link">Clear All</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="p-7">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-xl">
                        Are you sure you want to clear all tasks?

                    </AlertDialogTitle>
                    <AlertDialogDescription className="mt-7">
                        This action cannot be undone. This will permanently delete all tasks!
                    </AlertDialogDescription>

                </AlertDialogHeader>
                <AlertDialogFooter className="mt-7">
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction>
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>

            </AlertDialogContent>
        </AlertDialog>
    )
}
  