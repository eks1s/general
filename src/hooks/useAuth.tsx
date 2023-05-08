import { useAuthStore } from "@zustand/useAuthZustand";
import { auth } from "../firebase";
import {
    User,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function useAuth() {
    const { user, setUser, isLoading, setIsLoading, error, setError } =
        useAuthStore();
    const navigate = useNavigate();

    const signUp = async (email: string, password: string) => {
        setIsLoading(true);
        await createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);
                setIsLoading(false);
                navigate("/");
            })
            .catch((error: Error) => setError(error.message))
            .finally(() => setIsLoading(false));
    };

    const signIn = async (email: string, password: string) => {
        setIsLoading(true);
        await signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);
                setIsLoading(false);
                navigate("/");
            })
            .catch((error: Error) => setError(error.message))
            .finally(() => setIsLoading(false));
    };

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({} as User);
                navigate("/login");
            })
            .catch((error: Error) => setError(error.message))
            .finally(() => {
                setIsLoading(false);
            });
    };

    return { signIn, signUp, logOut, user, isLoading, error };
}

export default useAuth;
