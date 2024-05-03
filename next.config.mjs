/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },

    experimental: {
        instrumentationHook: true,
        turbotrace: {
            logLevel: 'bug',
            logDetail: true,
            logAll: true,
        },
    }
}

export default nextConfig;
