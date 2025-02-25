import { Result } from "@/app/api/signin/route";
import {create} from "zustand";

type User = {
    id: string;
    email: string;
};

interface UserStoreInterface {
    user: User | null;
    setUser: (user: User) => void;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
    handleLogout: () => Promise<void>;
    validateUser: () => Promise<boolean>;
    loginFunction: (data: {
        email:string; 
        password:string
    }) => Promise<{ result?: Result; error?: string; isLoggedIn: boolean }>;
    signUpFunction: (data: {
        email: string; 
        password: string
    }) => Promise<{ result?: Result; error?: string }>;
}

export const useUserStore = create<UserStoreInterface>((set) => {
    return {
        user: null,
        isLoading: false,
        setUser: (newUser: User | null) => set({ user: newUser }),
        setIsLoading: (isLoading: boolean) => set({ isLoading: isLoading }),
        handleLogout: async () => {
            try {
                set({ isLoading: true });
                const response = await fetch("/api/logout", {method: "GET"});
                const data = await response.json();
                if (data.success) {
                    set({ user: null });
    
                    
                } else {
                    throw new Error(data.error || "Logout failed");
                }
            } catch (error) {
                console.error("Logout error:", error);
            } finally {
                set({ isLoading: false });
            }
        },
        loginFunction: async (data: {email:string; password:string}) => {
            set({ isLoading: true });
            try {
                const response = await fetch("/api/signin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({email: data.email, password: data.password}),
                });
                const result: Result = await response.json();

                if("success" in result && result.success === true) {
                    return { result, isLoggedIn: true };
                } else if ("error" in result) {
                    return {error: result.error || "Sign in failed", isLoggedIn: false};
                }
            } catch (error) {
                console.log("Sign in error:", error);
                return {error: "An unknown error occured", isLoggedIn: false};
            } finally {
                set({ isLoading: false });
            }

            return {error: "An unknown error occured", isLoggedIn: false};
        },
        signUpFunction: async (data: { email: string; password: string }) => {
            set({ isLoading: true });
      
            try {
              const response = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: data.email, password: data.password }),
              });
      
              const result: Result = await response.json();
      
              if ("success" in result && result.success) {
                return { result };
              } else if ("error" in result && result.error) {
                return { error: result.error };
              }
            } catch (error) {
              console.log("sign in error", error);
              return { error: "An unexpected error occurred" };
            } finally {
              set({ isLoading: false });
            }
      
            return { error: "Unknown error" };
          },

    };
});
