import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import PaddleProvider from "@/components/providers/PaddleProvider";
import AuthProvider from "@/components/providers/AuthProvider";
import { getServerSession } from "next-auth";

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
  const session = await getServerSession();

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.className} antialiased bg-gradient-to-b from-[#1C2943] to-black text-white`}
      >
        <AuthProvider session={session}>
          <PaddleProvider>{children}</PaddleProvider>
        </AuthProvider>

        <Analytics />
      </body>
    </html>
  );
}
