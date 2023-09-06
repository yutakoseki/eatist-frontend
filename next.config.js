/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["raw.githubusercontent.com", "swiperjs.com", "github.com"], // 必要に応じて他のドメインも追加
    },
    reactStrictMode: true,
};

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA(nextConfig);
