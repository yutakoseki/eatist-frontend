/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                },
            ],
        });
        return config;
    },
    images: {
        disableStaticImages: true, // importした画像の型定義設定を無効にする
    },
    images: {
        domains: ["raw.githubusercontent.com", "swiperjs.com", "github.com"], // 必要に応じて他のドメインも追加
    },
};

module.exports = nextConfig;
