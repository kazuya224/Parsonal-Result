import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "野球成績計算機 | 打率・個人成績・OPSを自動計算",
  description: "草野球や部活動の個人成績を簡単に管理。打席数や安打を入力するだけで、打率、出塁率、OPS、セイバーメトリクス指標を瞬時に計算します。SNS共有機能付き。",
  verification: {google:"MKEF_smWrAbRGi3_yRA8pKHuZsnBMgxdywD9RCVe5YU",},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* AdSense 審査用コードをここに追加 */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6133318886564900"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-8EHSFZQ7XL" />
      <footer className="py-4 text-center">
        <a href="/privacy" className="text-blue-600 hover:underline">プライバシーポリシー</a>
      </footer>
    </html>
  );
}
