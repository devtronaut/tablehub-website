import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tablehub website",
  description: "Website for tablehub. Showcase and information for interested clubs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`font-normal antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
