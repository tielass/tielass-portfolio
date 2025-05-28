import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Mihail Mihaylov - Frontend Developer, Illustrator",
  description:
    "I'm a frontend developer and illustrator based in Berlin. I'm passionate about creating beautiful and functional web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
