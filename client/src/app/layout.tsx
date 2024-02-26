import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio",
  description: "Next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}