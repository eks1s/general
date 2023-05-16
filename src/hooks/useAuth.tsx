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
    const { user, setUser, isLoading, error, setError } = useAuthStore();
    const navigate = useNavigate();

    const signUp = async (email: string, password: string) => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);

                navigate("/");
            })
            .catch((error: Error) => setError(error.message));
    };

    const signIn = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setUser(res.user);

                navigate("/");
            })
            .catch((error: Error) => setError(error.message));
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({} as User);
                navigate("/login");
            })
            .catch((error: Error) => setError(error.message));
    };

    return { signIn, signUp, logOut, user, isLoading, error };
}

export default useAuth;
