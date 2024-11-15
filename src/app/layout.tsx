import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WhatsAppButton from "./components/OtherComponents/WhatsAppButton";
import Script from "next/script";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://imaginedigi.com'),
  title: "Imagine Digi",
  description: "Website Development Company | App Development Company | Digital Marketing Company | Data Entry Company",
  openGraph: {
    title: "Imagine Digi",
    description: "Website Development Company | App Development Company | Digital Marketing Company | Data Entry Company",
    images: [
      {
        url: "/images/Colorlogo-nobackground.png",
        width: 800,
        height: 800,
        alt: "Imagine Digi Logo",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
        <Script src="https://embed.tawk.to/673205304304e3196ae02701/1icdm8i2k" async />
      </body>

    </html>
  );
}


