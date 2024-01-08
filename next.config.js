/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['localhost', 'trialshopy-backend.onrender.com','trialshopy-backend-rk8d.onrender.com','picsum.photos','i.imgur.com','imgur.com', 'res.cloudinary.com'], // Add other domains if needed, separate with commas
	},
	env: {
		BASE_API_URL: process.env.BASE_API_URL,
	  }
};

module.exports = nextConfig;
