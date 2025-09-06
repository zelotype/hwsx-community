import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // ให้ Next.js build แบบ static
  basePath: '', // ใส่ชื่อ repo ของคุณ
};

export default nextConfig;
