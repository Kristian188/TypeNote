"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogoutButton } from "@/LogoutBtn";
import { useUserStore } from "@/store/useUserStore"; 
import { TaskHeader } from "./Components/TaskHeader/TaskHeader";
import Stats from "./Components/Stats/Stats";
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
        <div className="min-h-screen border flex items-center w-full justify-center ">
            <div className="w-[55%] h-[90%] border flex flex-col gap-2 bg-white shadow-md rounded-md p-7">
                <TaskHeader />
                <Stats />
            </div>

        </div>
    )

}