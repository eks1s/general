import { useAuthStore } from "@zustand/useAuthZustand";
import { auth } from "../firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextState {
    user: User;
    isLoading: boolean;
}

export const ProviderContext = createContext<AuthContextState>({
    isLoading: false,
    user: {} as User,
});

export const Provider = ({ children }: { children: ReactNode }) => {
    const { user, isLoading, setUser, setIsLoading } = useAuthStore();
    const [contextLoading, setContextLoading] = useState<boolean>(false);
    const value = useMemo(() => ({ user, isLoading }), [user, isLoading]);
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setIsLoading(true);
                setContextLoading(true);
                setUser({} as User);
                navigate("/login");
            }

            setContextLoading(false);
            setIsLoading(false);
        });
    }, [navigate, setIsLoading, setUser]);

    return (
        <ProviderContext.Provider value={value}>
            {contextLoading ? "Loading..." : children}
        </ProviderContext.Provider>
    );
};
