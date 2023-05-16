import ReactDOM from "react-dom";
import styles from "./Loader.module.scss";

export const Loader = () => {
    return ReactDOM.createPortal(
        <div className={styles.loaderWrapper}>
            <span className={styles.loader} />
        </div>,
        document.body
    );
};
