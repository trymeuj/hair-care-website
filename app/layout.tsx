import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hair Care Routine | Get Your Personalized Plan",
  description: "Answer a few questions. Get a clear, personalized hair care routine. No research. No guessing. No overthinking.",
  icons: {
    icon: '/hair facebook page logo.jpeg',
    apple: '/hair facebook page logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

