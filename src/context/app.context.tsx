import { useAuthStore } from "@zustand/useAuthZustand";
import { auth } from "../firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useEffect, useMemo } from "react";
import { Loader } from "@components/Loader/Loader";

interface AuthContextState {
    user: User;
}

export const ProviderContext = createContext<AuthContextState>({
    user: {} as User,
});

export const Provider = ({ children }: { children: ReactNode }) => {
    const { user, setUser, isLoading, setIsLoading } = useAuthStore();
    const value = useMemo(() => ({ user }), [user]);

    useEffect(() => {
        setIsLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({} as User);
            }

            setIsLoading(false);
        });
    }, [setUser, setIsLoading]);

    return (
        <ProviderContext.Provider value={value}>
            {isLoading ? <Loader /> : children}
        </ProviderContext.Provider>
    );
};
