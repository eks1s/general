import useAuth from "@hooks/useAuth";
import { FC } from "react";

export const MainPage: FC = () => {
    const { logOut } = useAuth();

    return (
        <div>
            Hello world!
            <button onClick={logOut}>Log out</button>
        </div>
    );
};
