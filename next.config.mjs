/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'pub-f2a813d11ebf44f2a490dcee448a0e2d.r2.dev',
				protocol: 'https',
				port: '',
			},
			{
				hostname: 'lh3.googleusercontent.com',
				protocol: 'https',
				port: '',
			},
		],
	},
}

export default nextConfig
