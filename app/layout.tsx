import type { Metadata } from "next";
import { dm_sans } from "@/app/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Framer For Developers",
  description: "Framer For Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  );
}
