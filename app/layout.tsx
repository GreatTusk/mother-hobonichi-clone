import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/app/ui/navbar";
import { PageFooter } from "@/app/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hobonichi Mother Project",
  description: "Online Mother merchandise shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}
        <PageFooter />
      </body>
    </html>
  );
}
