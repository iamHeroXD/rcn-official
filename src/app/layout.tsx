import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { GlobalCanvas } from "@/components/canvas/global-canvas";
import { Navbar } from "@/components/ui/navbar";
import { MobileNav } from "@/components/ui/mobile-nav";
import { ToastProvider } from "@/components/providers/toast-provider";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "RCN PRIME | The Future of Roblox Creation",
  description: "The elite Roblox Creator Network. Build faster, hire smarter, and trade in a trusted marketplace.",
  openGraph: {
    title: "RCN PRIME | The Future of Roblox Creation",
    description: "The elite Roblox Creator Network. Build faster, hire smarter, and trade in a trusted marketplace.",
    url: "https://rcn-prime.com",
    siteName: "RCN PRIME",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RCN PRIME | The Future of Roblox Creation",
    description: "The elite Roblox Creator Network. Build faster, hire smarter, and trade in a trusted marketplace.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-black`}>
        <div className="noise-overlay" />
        <ToastProvider>
          <LenisProvider>
            <LoadingScreen />
            <CustomCursor />
            <ScrollProgress />
            <BackToTop />
            <GlobalCanvas />
            <Navbar />
            <MobileNav />
            <main className="relative z-10">{children}</main>
          </LenisProvider>
        </ToastProvider>
      </body>
    </html>
  );
}