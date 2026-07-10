import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tharindu Kothalawala | Data Science & Mechatronics Portfolio",
  description:
    "Portfolio of Tharindu Kothalawala — Data Science Undergraduate and Mechatronics Engineer. Explore projects in AI, machine learning, robotics, and data analysis.",
  keywords: [
    "Tharindu Kothalawala",
    "Data Science",
    "Mechatronics Engineer",
    "Portfolio",
    "Machine Learning",
    "Sri Lanka",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}