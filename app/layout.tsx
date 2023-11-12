import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { GeistSans } from "geist/font/sans";
import { Agbalumo } from "next/font/google";

export const metadata: Metadata = {
  title: "4th Fret",
  description: "A pop rock band in Manila.",
};

const agbalumo = Agbalumo({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-agbalumo",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} ${agbalumo.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
