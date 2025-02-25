"use client";

import { useRouter } from "next/navigation";
import { useUserStore } from "./store/useUserStore";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const router = useRouter();
  const { handleLogout, isLoading } = useUserStore();

  
  const handleLogoutWithRedirect = async () => {
    await handleLogout(); // Call the store's logout function
    router.push("/"); // Redirect to the home page after logging out
  };

  return (
    <Button onClick={handleLogoutWithRedirect} variant={"default"}>
        {isLoading ? "loading..." : "Logout"}
    </Button>
    );

}