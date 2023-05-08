import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "@routers/Routers";
import { Provider } from "@context/app.context";
import "./firebase";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider>
                <Routers />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
