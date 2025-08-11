import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PaddleProvider from "@/components/providers/PaddleProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creobots",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className} antialiased`}>
        <PaddleProvider>{children}</PaddleProvider>
      </body>
    </html>
  );
}
