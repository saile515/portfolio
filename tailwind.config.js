import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Noto", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require("@catppuccin/tailwindcss")({
            defaultFlavour: "mocha",
        }),
    ],
};
