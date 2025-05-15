import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_Display({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Encuestas360",
  description: "Encuestas360 es una plataforma para la gestión de encuestas en línea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
