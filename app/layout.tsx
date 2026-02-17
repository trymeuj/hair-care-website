import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";
import MetaPageView from "@/components/MetaPageView";

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
      <body className={inter.className}>
        <MetaPixel />
        <Suspense fallback={null}>
          <MetaPageView />
        </Suspense>
        {children}
      </body>
    </html>
  );
}

