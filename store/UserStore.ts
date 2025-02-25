import {create} from "zustand";

type User = {
    id: string;
    email: string;
};

interface UserStoreInterface {
    user: User | null;
    setUser: (user: User) => void;
    isLoading: boolean;
    setLoading: (loading: boolean) => void;
    handleLogout: () => Promise<void>;
}

export const useUserStore = create<UserStoreInterface>((set) => {
    return {
        user: null,
        isLoading: false,
        setUser: (newUser: User | null) => set({ user: newUser }),
        setLoading: (isLoading: boolean) => set({ isLoading: isLoading }),
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
    };
});
