/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		externalDir: true,
	},
	reactStrictMode: true,
	images: {
		loader: 'akamai',
		path: '',
	},
};

module.exports = nextConfig;
