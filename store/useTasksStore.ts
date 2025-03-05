import {create} from 'zustand';
import { allTasks, Task } from '@/app/data/Task';

interface useTasksStoreInterface {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
    fetchTasks: () => void;
    updateTaskfunction: (Task: Task) => void;
    
}

export const useTasksStore = create<useTasksStoreInterface>((set, get) => {
    return {
        tasks: [],
        setTasks: (tasks: Task[]) => set({ tasks: tasks }),
        fetchTasks: async () => {
            const fetchedTasks = await new Promise<Task[]>((resolve) => {
                setTimeout(() => {
                    resolve(allTasks);
                }, 1000);
            });
            set({ tasks: fetchedTasks });
        },

        updateTaskfunction: (task: Task) => {
            const currentTasks = get().tasks;
            const updatedTasks: Task[] = currentTasks.map((t) => {
                if(t.id === task.id) {
                    return { ...t, ...task };
                }
                return t;

            });
            set({ tasks: updatedTasks });
        }
    };

});

function sortTasksByCompleted(tasks: Task[]): Task[] {
   
    const sortedTasks = tasks.sort((a, b) => {
      if (a.status === "in progress" && b.status !== "in progress") {
        return -1; 
      }
      if (a.status !== "in progress" && b.status === "in progress") {
        return 1;
      }
      return 0; 
    });
  
    return sortedTasks;
  }
            
