import RegisterForm from "@components/RegisterForm/RegisterForm";
import { useAuthStore } from "@zustand/useAuthZustand";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
    const { user } = useAuthStore();
    const navigate = useNavigate();

    if (user) {
        navigate("/");
    }
    return (
        <>
            <h1>Register</h1>
            <RegisterForm />
            <p>
                or{" "}
                <Link style={{ color: "red" }} to="/login">
                    Go to Login
                </Link>
            </p>
        </>
    );
}

export default RegisterPage;
