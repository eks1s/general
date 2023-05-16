import RegisterForm from "@components/RegisterForm/RegisterForm";
import { Link } from "react-router-dom";

function RegisterPage() {
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
