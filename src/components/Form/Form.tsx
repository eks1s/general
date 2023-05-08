import Input from "@components/Input/Input";
import { useState } from "react";
import { Button } from "@components/Button/Button";
import styles from "./Form.module.scss";

interface Props {
    handleCLick: (email: string, password: string) => void;
}

function Form({ handleCLick }: Props) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (
        <div className={styles.formWrapper}>
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={styles.email}
            />
            <Input
                type="password"
                placeholder="Password"
                value={pass}
                onChange={(event) => setPass(event.target.value)}
                className={styles.password}
            />
            <Button
                className={styles.button}
                label="Login"
                onClick={() => handleCLick(email, pass)}
            />
        </div>
    );
}

export default Form;
