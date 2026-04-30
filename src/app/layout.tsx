import type { Metadata } from "next";
import { Forum, Instrument_Sans, Inter_Tight } from "next/font/google";
import "./globals.css";

const forum = Forum({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-forum",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "MRNP & Co. LLP | Chartered Accountants",
  description: "Smart approaches to solution with exceptional service. Talent and expertise necessary to meet our clients' needs in an ever-changing and fast-paced environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${forum.variable} ${instrumentSans.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

