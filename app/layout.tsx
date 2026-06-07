import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://riyanshxdigital.com"),
  title: {
    default: "RiyanshX Digital | Lead Generation Marketing Agency",
    template: "%s | RiyanshX Digital",
  },
  description:
    "RiyanshX Digital builds websites, ads, CRM automation, SEO systems, and lead funnels for local service businesses.",
  keywords: [
    "digital marketing agency",
    "lead generation agency",
    "website development",
    "Meta ads",
    "Google ads",
    "CRM automation",
    "local SEO",
  ],
  authors: [{ name: "RiyanshX Digital" }],
  creator: "RiyanshX Digital",
  openGraph: {
    title: "RiyanshX Digital",
    description:
      "Predictable lead systems for ambitious local service businesses.",
    url: "https://riyanshxdigital.com",
    siteName: "RiyanshX Digital",
    images: [
      {
        url: "/rx-og.svg",
        width: 1200,
        height: 630,
        alt: "RiyanshX Digital growth dashboard",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RiyanshX Digital",
    description:
      "Websites, ads, automation, and SEO for predictable lead growth.",
    images: ["/rx-og.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
