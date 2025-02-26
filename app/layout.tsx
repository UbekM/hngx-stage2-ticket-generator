/** @format */

import type { Metadata } from "next";
import { Roboto, Road_Rage } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://db.onlinewebfonts.com/c/1a5c2d8bbd4e28d99a6efcbb9a5b378f?family=JejuMyeongjo"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${roboto.variable} ${roadRage.variable}  antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
