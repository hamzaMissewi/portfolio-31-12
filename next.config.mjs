import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    // reactStrictMode: true,
    pageExtensions: ["html", "jsx", "tsx", "ts"],
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {protocol: "https", hostname: "*"},
            // {protocol: "https", hostname: "cdn.sanity.io"},
            // { protocol: "http", hostname: "image.tmdb.org" },
            // { protocol: "https", hostname: "upload.wikimedia.org" },
        ],
    },
    // https://nextjs.org/docs/pages/building-your-application/routing/internationalization
};
export default withNextIntl(nextConfig);
// module.exports = nextConfig;