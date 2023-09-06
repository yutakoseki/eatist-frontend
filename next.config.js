/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        svgoConfig: {
                            plugins: [
                                {
                                    name: "removeViewBox",
                                    active: false,
                                },
                            ],
                        },
                    },
                },
            ],
        });
        return config;
    },
    images: {
        domains: ["raw.githubusercontent.com", "swiperjs.com", "github.com"], // 必要に応じて他のドメインも追加
    },
};

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
});

module.exports = Object.assign({}, withPWA, nextConfig);
