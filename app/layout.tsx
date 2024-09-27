import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QuerProvider";
import { Toaster } from "sonner";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Pattern Crafter Online",
  description: "Best Shirt Store in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html lang="en">
        <head>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-11019862715"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('set', 'linker', {
                'domains': ['ronotv.com', 'patterncrafteronline.com']
              });
              gtag('config', 'AW-11019862715');
            `}
          </Script>
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <Toaster
              richColors
              position="top-center"
              theme="dark"
              visibleToasts={1}
            />
            <NavBar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </QueryProvider>
  );
}
