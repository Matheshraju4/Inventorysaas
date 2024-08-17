import type { Metadata } from "next";

import "./globals.css";

import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Inventra",
  description: "Elevate your e-commerce with Inventra. Sync and manage your Shopify, WooCommerce, and WhatsApp inventories seamlessly in one platform.",
  icons:"./activity.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>{children}</body>
    </html>
  );
}
