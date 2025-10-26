import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "Personal portfolio showcasing my work and skills as a developer",
  openGraph: {
    title: "Your Name | Portfolio",
    description: "Personal portfolio showcasing my work and skills as a developer",
    type: "website",
    url: "https://your-portfolio-url.com",
  },
  keywords: ["developer", "portfolio", "web development", "software engineer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
