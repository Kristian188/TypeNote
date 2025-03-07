import { useTasksStore } from "@/app/store/useTasksStore";
import { DeleteDialog } from "../Dialogs/ClearAllDialog/ClearAllDialog"; 

export function TasksFooter() {
  const { tasks } = useTasksStore();
  return (
    <div>
      <div className="flex justify-between mt-5 items-center">
        <p className="text-gray-500 text-sm">{tasks.length} Notes</p>
        <DeleteDialog />
      </div>
    </div>
  );
}
