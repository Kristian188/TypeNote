"use client";

import { useRouter } from "next/navigation";
import { useUserStore } from "./app/stores/useUserStore";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const router = useRouter();
  const { handleLogout, isLoading } = useUserStore();

  // Combine handleLogout with navigation logic
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