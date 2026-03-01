import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "【無料】野球成績計算機｜打率・OPS・防御率を一瞬で計算",
  description: "草野球や部活動の個人成績を簡単に管理。打率、出塁率、OPS、防御率などを瞬時に計算し、SNSで共有可能。指標の解説付き。",
  verification: { google: "MKEF_smWrAbRGi3_yRA8pKHuZsnBMgxdywD9RCVe5YU" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="bg-[#0f172a]">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6133318886564900"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f172a] min-h-screen flex flex-col`}>
        <div className="flex-grow">
          {children}
        </div>

        <footer className="py-10 mt-20 border-t border-slate-800 bg-[#0f172a] text-center">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-6 px-4 text-sm font-medium text-slate-400">
            <a href="/" className="hover:text-blue-400 transition">ホーム</a>
            <a href="/guide/batter" className="hover:text-blue-400 transition">野手解説</a>
            <a href="/guide/pitcher" className="hover:text-blue-400 transition">投手解説</a>
            <a href="/contact" className="hover:text-blue-400 transition">お問い合わせ</a>
            <a href="/privacy" className="hover:text-blue-400 transition">プライバシーポリシー</a>
          </div>
          <p className="text-xs text-slate-600">© 2026 野球成績計算機</p>
        </footer>

        <GoogleAnalytics gaId="G-8EHSFZQ7XL" />
      </body>
    </html>
  );
}