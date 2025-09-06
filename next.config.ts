import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // ให้ Next.js build แบบ static
  basePath: '/hwsx-community', // ใส่ชื่อ repo ของคุณ
};

export default nextConfig;
