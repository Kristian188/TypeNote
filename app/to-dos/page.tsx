"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogoutButton } from "@/LogoutBtn";
import { useUserStore } from "@/store/useUserStore"; 
import { TaskHeader } from "./Components/TaskHeader/TaskHeader";
import Stats from "./Components/Stats/Stats";
import { Button } from "@/components/ui/button";
import { TasksArea } from "./Components/TasksArea/TasksArea";
import { TaskFooter } from "./Components/TaskFooter/TaskFooter";
export default function Dashboard() {
    const { setUser, user } = useUserStore();
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const validateUser = async () => { 
            try {
            const response = await fetch("/api/validate-user");
            const data = await response.json();

            if(data.isAuthenticated) {
                console.log(data)
                setUser(data.user);
                
            } else {
                router.push("/");
            }
            } catch (error) {
                console.error("User validation error:", error);
                router.push("/");
            } finally {
                setLoading(false);
            }
        }
        validateUser();

    }, [router]);

    if(loading) {
        return <div>Loading...</div>
    }

    if(!user) {
        return null;
    }

    return (
        <div className="min-h-screen border flex items-center w-full justify-center popins ">
            <div className="w-[55%] border flex flex-col gap-6 bg-white shadow-md rounded-md p-8">
                <TaskHeader />
                <Stats />
                <AllTasksHeader />
                <TasksArea />
                <TaskFooter />
            </div>

        </div>
    )

}

function AllTasksHeader() {
    return (
        <div className="flex justify-between items-center mt-4 mb-3">
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold">Today's Task</h2>
                <p className="text-sm text-gray-400">27 February 2025</p>
            </div>

            <Button>Add Task</Button>

        </div>
    )
}