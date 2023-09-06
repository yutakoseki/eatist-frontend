import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        default: {
                            DEFAULT: "#ffffff",
                            foreground: "#ffffff",
                        },
                        primary: {
                            DEFAULT: "#EFAA52",
                            foreground: "#ffffff",
                        },
                        secondary: {
                            DEFAULT: "#E7CC8F",
                            foreground: "#ffffff",
                        },
                        success: {
                            DEFAULT: "#008000",
                            foreground: "#ffffff",
                        },
                        warning: {
                            DEFAULT: "#F8F3E6",
                            foreground: "#ffffff",
                        },
                        danger: {
                            DEFAULT: "#b22222",
                            foreground: "#ffffff",
                        },
                    },
                },
                dark: {
                    colors: {
                        default: {
                            DEFAULT: "#000000",
                            foreground: "#282828",
                        },
                        primary: {
                            DEFAULT: "#6C4F70",
                            foreground: "#282828",
                        },
                        secondary: {
                            DEFAULT: "#757081",
                            foreground: "#282828",
                        },
                        success: {
                            DEFAULT: "#193446",
                            foreground: "#282828",
                        },
                        warning: {
                            DEFAULT: "#ffffff",
                            foreground: "#282828",
                        },
                        danger: {
                            DEFAULT: "#AB3E16",
                            foreground: "#282828",
                        },
                    },
                },
            },
        }),
    ],
};
export default config;