import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Embedded/IoT Developer | Portfolio",
  description: "Professional portfolio of an Embedded Systems and IoT Developer specializing in microcontrollers, real-time systems, and innovative hardware solutions.",
  keywords: "embedded systems, IoT, microcontrollers, STM32, ESP32, C/C++, RTOS, hardware design, firmware development",
  authors: [{ name: "Embedded Developer" }],
  creator: "Embedded Developer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://embedded-portfolio.com",
    title: "Embedded/IoT Developer Portfolio",
    description: "Professional portfolio showcasing embedded systems and IoT projects",
    siteName: "EmbeddedDev Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Embedded/IoT Developer Portfolio",
    description: "Professional portfolio showcasing embedded systems and IoT projects",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
