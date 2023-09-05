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
                            DEFAULT: "#808080",
                            foreground: "#ffffff",
                        },
                        primary: {
                            DEFAULT: "#6C4F70",
                            foreground: "#ffffff",
                        },
                        secondary: {
                            DEFAULT: "#757081",
                            foreground: "#ffffff",
                        },
                        success: {
                            DEFAULT: "#193446",
                            foreground: "#193446",
                        },
                        warning: {
                            DEFAULT: "#D1D3CF",
                            foreground: "#ffffff",
                        },
                        danger: {
                            DEFAULT: "#AB3E16",
                            foreground: "#AB3E16",
                        },
                    },
                },
            },
        }),
    ],
};
export default config;