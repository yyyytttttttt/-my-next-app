/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Включение строгого режима React
    env: {
      MONGO_URI: process.env.MONGO_URI, // Подключение переменной MONGO_URI из окружения
    },
    experimental: {
      appDir: true, // Включение поддержки папки `/app` (если используется)
    },
  };
  
  export default nextConfig;
  