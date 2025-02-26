"use client";

import { useRouter } from "next/navigation";
import { useUserStore } from "./store/useUserStore";
import { IoMdLogOut } from "react-icons/io";

export function LogoutButton() {
  const router = useRouter();
  const { handleLogout, isLoading } = useUserStore();


  const handleLogoutWithRedirect = async () => {
    await handleLogout(); // Call the store's logout function
    router.push("/"); // Redirect to the home page after logging out
  };

  return (
    <div onClick={handleLogoutWithRedirect} className="font-semibold text-primary flex items-center gap-1">
      <IoMdLogOut className="text-lg" />
      <span> {isLoading ? "loading..." : "logout"}</span>

    </div>


  );

}