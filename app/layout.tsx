import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { GeistSans } from "geist/font/sans";
import { Agbalumo } from "next/font/google";

export const metadata: Metadata = {
  title: "4th Fret",
  description:
    "A vibrant and energetic boy band based in Manila, creating fresh music that resonates with fans worldwide.",
  metadataBase: new URL("https://4thfretmusic.com"),
  twitter: {
    title: "4th Fret",
    description:
      "A vibrant and energetic boy band based in Manila, creating fresh music that resonates with fans worldwide.",
    card: "summary_large_image",
    creator: "@dondycles",
    images: {
      url: "/images/summary.png",
      alt: "4thfret",
    },
  },
  openGraph: {
    title: "4th Fret",
    description:
      "A vibrant and energetic boy band based in Manila, creating fresh music that resonates with fans worldwide.",
    type: "website",
    siteName: "4th Fret",
    url: "https://4thfretmusic.com",
    images: [
      {
        url: "/bg.jpg",
        width: 800,
        height: 800,
      },
      {
        url: "/bg.jpg",
        width: 1920,
        height: 1080,
      },
    ],
  },
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
