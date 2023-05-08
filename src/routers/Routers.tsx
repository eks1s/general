import { Layout } from "@components/Layout/Layout";
import LoginPage from "@pages/login/LoginPage";
import { MainPage } from "@pages/main/Main";
import { NotFoundPage } from "@pages/notFound/NotFoundPage";
import RegisterPage from "@pages/register/RegisterPage";
import { Route, Routes } from "react-router-dom";

export function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}
