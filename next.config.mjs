/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.cache = {
      type: "filesystem",
      compression: "gzip" // Enables compression to reduce cache size
    };
    return config;
  }
};

export default nextConfig;
