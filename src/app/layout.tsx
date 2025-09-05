import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import PaddleProvider from "@/components/providers/PaddleProvider";
import AuthProvider from "@/components/providers/AuthProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creobots",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.className} antialiased bg-gradient-to-b from-[#5b92ff] to-black text-white`}
      >
        <AuthProvider>
          <PaddleProvider>{children}</PaddleProvider>
        </AuthProvider>

        <Analytics />
      </body>
    </html>
  );
}
