"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogoutButton } from "@/LogoutBtn"; 
import { useUserStore } from "@/store/UserStore"; 
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

    }, []);

    if(loading) {
        return <div>Loading...</div>
    }

    if(!user) {
        return null;
    }

    return (
        <div>
            <p>Welcome, {user.email}</p>
            <LogoutButton />
        </div>
    )

}