import { useAuthStore } from "@zustand/useAuthZustand";
import { Navigate, Outlet } from "react-router-dom";
import { isEmpty } from "lodash";

export const PublicRoute = () => {
    const { user } = useAuthStore();

    return !isEmpty(user) ? <Navigate to="/" replace /> : <Outlet />;
};
