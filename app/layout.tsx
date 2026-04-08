import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoShats — Fast, Reliable Delivery in Nigeria",
  description:
    "Move anything across Nigeria — documents, packages, food, and more. Book a rider in seconds, track in real-time, and get it delivered fast.",
  keywords: ["delivery", "Nigeria", "logistics", "GoShats", "rider", "package delivery"],
  openGraph: {
    title: "GoShats — Fast, Reliable Delivery in Nigeria",
    description:
      "Move anything across Nigeria — documents, packages, food, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
