import { Layout } from "@components/Layout/Layout";
import LoginPage from "@pages/login/LoginPage";
import { MainPage } from "@pages/main/Main";
import { NotFoundPage } from "@pages/notFound/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route element={<PublicRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>

                <Route element={<PrivateRoute />}>
                    <Route index element={<MainPage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}
