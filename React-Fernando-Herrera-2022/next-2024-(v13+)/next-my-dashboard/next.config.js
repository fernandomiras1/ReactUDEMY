/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Aca acepatmos las URL de la imagen, para que se llame del lado del servidor
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
