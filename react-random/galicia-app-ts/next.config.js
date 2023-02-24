/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Basicamente le decimos cuales van a ser la imagenes src pemitidas de que dominio. 
    // De es forma no te da error. YO CONFIO EN ESE SITIO.
    domains: ['raw.githubusercontent.com']
  }
}

module.exports = nextConfig
