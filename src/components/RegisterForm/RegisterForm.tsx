import Form from "@components/Form/Form";
import useAuth from "@hooks/useAuth";

function RegisterForm() {
    const { signUp } = useAuth();

    return <Form handleCLick={signUp} />;
}

export default RegisterForm;
