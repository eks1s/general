import classNames from "classnames";
import { FC } from "react";

import styles from "./Button.module.scss";

interface Props {
    label: string;
    className?: string;
    onClick: () => void;
}

export const Button: FC<Props> = ({ label, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={classNames(styles.button, className)}
        >
            {label}
        </button>
    );
};
