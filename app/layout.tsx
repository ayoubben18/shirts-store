import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QuerProvider";
import { Toaster } from "sonner";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ApolloClientProvider from "@/providers/ApolloProvider";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "IPTV",
  description: "Best Iptv provider in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloClientProvider>
      <QueryProvider>
        <html lang="en">
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
              <Toaster richColors position="top-center" theme="dark" />
              <NavBar />
              {children}
              <Footer />
            </ThemeProvider>
          </body>
        </html>
      </QueryProvider>
    </ApolloClientProvider>
  );
}
