import { useAuthStore } from "@zustand/useAuthZustand";
import { Navigate, Outlet } from "react-router-dom";
import { isEmpty } from "lodash";

export const PrivateRoute = () => {
    const { user } = useAuthStore();

    return !isEmpty(user) ? <Outlet /> : <Navigate to="/login" replace />;
};
