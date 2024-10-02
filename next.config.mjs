import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        TMDB_API_KEY: process.env.TMDB_API_KEY,
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    },
    pageExtensions: ["html", "jsx", "tsx", "ts"],
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {protocol: "https", hostname: "*"},
            // {protocol: "https", hostname: "cdn.sanity.io"},
            // { protocol: "http", hostname: "image.tmdb.org" },
            // { protocol: "https", hostname: "upload.wikimedia.org" },
            // { protocol: "https", hostname: "links.papareact.com" },
        ],
    },
    // https://nextjs.org/docs/pages/building-your-application/routing/internationalization
    // i18n: {
    //     // These are all the locales you want to support in
    //     // your application
    //     locales: ["en", "fr", "ar"],
    //     // This is the default locale you want to be used when visiting
    //     // a non-locale prefixed path e.g. `/hello`
    //     defaultLocale: "en-US",
    //     // This is a list of locale domains and the default locale they
    //     // should handle (these are only required when setting up domain routing)
    //     // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    //     domains: [
    //         {
    //             domain: "example.com",
    //             defaultLocale: "en",
    //         },
    //         {
    //             domain: "example.tn",
    //             defaultLocale: "ar",
    //         },
    //         {
    //             domain: "example.fr",
    //             defaultLocale: "fr",
    //             // an optional http field can also be used to test
    //             // locale domains locally with http instead of https
    //             http: true,
    //         },
    //     ],
    // },
};
export default withNextIntl(nextConfig);
// module.exports = nextConfig;
