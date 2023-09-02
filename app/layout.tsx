import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | QR code component",
  description: "Created by njpoli",
};

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
      </head>
      <body className={`${outfit.className} bg-[--color-lightgray]`}>{children}</body>
    </html>
  );
}
