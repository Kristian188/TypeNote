import { useTasksStore } from "@/store/useTasksStore";
import { ClearAllDialog } from "../Dialogs/ClearAllDialog/ClearAllDialog";

export function TaskFooter() {
    const { tasks } = useTasksStore();
    return (
        <div>
            <div className="flex justify-between mt-5 items-center">
                <p className="text-gray-500 text-sm">{tasks.length}</p>
                <ClearAllDialog />

            </div>
        </div>
    )
}