import type { Metadata } from "next";
import { Poppins, Clicker_Script, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const clickerScript = Clicker_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-clicker",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dilzo Coffee",
  description: "A coxy place for your coffee cravibngs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${clickerScript.variable} ${playfair.variable} antialiased font-clickerScript`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
