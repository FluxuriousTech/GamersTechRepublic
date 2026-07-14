import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { PageTransition } from "@/components/providers/page-transition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "GamersTechRepublic | Premium Esports Gaming Cafe",
  description: "Gaming For The People, By The People. Thane's Premium Esports Gaming Cafe with High-End PC Builds, Sim Racing, and Competitive Leaderboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className={`${inter.variable} ${orbitron.variable} antialiased min-h-full bg-black text-white flex flex-col`}>
        <PageTransition>
          <SmoothScroll>{children}</SmoothScroll>
          <WhatsAppFloatingButton />
        </PageTransition>
      </body>
    </html>
  );
}
