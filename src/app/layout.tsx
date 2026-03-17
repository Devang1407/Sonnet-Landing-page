import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sleep Supplements | Sonnet Sleep + Calm",
  description: "Discover sleep supplements designed for busy minds. Sonnet Sleep + Calm is a science-backed, non habit-forming sleep supplement that supports relaxation, everyday stress relief, and better sleep without grogginess.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-sonnet-cream text-sonnet-navy antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
