import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Portfolio | Your Name",
  description: "Minimal personal portfolio showcasing professional experience, skills, and projects.",
  keywords: ["portfolio", "web developer", "software engineer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
