import type { Metadata } from "next";
import { Geist, Geist_Mono, Sarabun } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sarabun = localFont({
  src: [
    {
      path: "../public/fonts/Sarabun-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Sarabun-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sarabun",
});

export const metadata: Metadata = {
  title: "HWSX Community",
  description: "HWSX Website for community",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sarabun.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
