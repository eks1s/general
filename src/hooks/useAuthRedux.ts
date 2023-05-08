import { useAppSelector } from "./reduxHooks";

export const useAuthRedux = () => {
    const { email, id, token } = useAppSelector((state) => state.user);

    return { isAuth: !!email, email, token, id };
};
