import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: fileURLToPath(new URL("./src", import.meta.url)),
            },
            {
                find: "@assets",
                replacement: fileURLToPath(
                    new URL("./src/assets", import.meta.url)
                ),
            },
            {
                find: "@helpers",
                replacement: fileURLToPath(
                    new URL("./src/helpers", import.meta.url)
                ),
            },
            {
                find: "@components",
                replacement: fileURLToPath(
                    new URL("./src/components", import.meta.url)
                ),
            },
            {
                find: "@hooks",
                replacement: fileURLToPath(
                    new URL("./src/hooks", import.meta.url)
                ),
            },
            {
                find: "@pages",
                replacement: fileURLToPath(
                    new URL("./src/pages", import.meta.url)
                ),
            },
            {
                find: "@routers",
                replacement: fileURLToPath(
                    new URL("./src/routers", import.meta.url)
                ),
            },
            {
                find: "@redux",
                replacement: fileURLToPath(
                    new URL("./src/redux", import.meta.url)
                ),
            },
            {
                find: "@context",
                replacement: fileURLToPath(
                    new URL("./src/context", import.meta.url)
                ),
            },
            {
                find: "@zustand",
                replacement: fileURLToPath(
                    new URL("./src/zustand", import.meta.url)
                ),
            },
        ],
    },
});
