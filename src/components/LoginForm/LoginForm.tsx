import Form from "@components/Form/Form";
import useAuth from "@hooks/useAuth";

function LoginForm() {
    const { signIn } = useAuth();

    return <Form handleCLick={signIn} />;
}

export default LoginForm;
