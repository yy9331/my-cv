import type { Metadata, Viewport } from "next";
import "./globals.css";
import BackgroundAnim from "./components/BackgroundAnim";
import { LanguageProvider } from "./contexts/LanguageContext";
import { WalletProvider } from "./contexts/WalletContext";
import SessionProvider from "./components/SessionProvider";


export const metadata: Metadata = {
  title: "Yu Yi (Yves), cv.zyzy.info, Full Stack DApp Developer",
  description: "余翼 · 全栈工程师（React/Next.js/Electron/Node）",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/favicon-32x32.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`antialiased`}
        data-theme="dark"
      >
        <BackgroundAnim />
        <SessionProvider>
          <LanguageProvider>
            <WalletProvider>
              {children}
            </WalletProvider>
          </LanguageProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
