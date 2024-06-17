import "@codebymedu/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Metadata, Viewport } from "next";
import clsx from "clsx";
import Script from "next/script";
import { Providers } from "./providers";

import { siteConfig } from "@codebymedu/config/site";
import { fontSans } from "@codebymedu/config/fonts";
import { Navbar } from "@codebymedu/components/navbar";
import { Footer } from "@codebymedu/components/footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "frontend engineer, portfolio, web development, JavaScript, React, Next.js, TypeScript, frontend services, blog, UI development, web performance, user experience, software engineering, coding, programming",
  authors: { name: "Meduard Krasniqi", url: siteConfig.url },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/presentational.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@codebymedu",
    title: siteConfig.name,
    description: siteConfig.description,
    images: "/presentational.png",
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XC4MEPERZ0"
        />

        <Script>
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-XC4MEPERZ0');`}
        </Script>
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />

            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>

            <Footer />
          </div>

          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
