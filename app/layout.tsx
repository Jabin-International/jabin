import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DynamicFavicon from "@/components/DynamicFavicon";
import CloudySky from "@/components/ui/CloudySky";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Jabin International Private Limited - Digital Solutions & Business Services",
    template: "%s | Jabin International"
  },
  description: "Comprehensive business solutions including custom web development, creative products, expert consultancy, and technology training. Established 2024 with CIN: U63122UP2024PTC202046.",
  keywords: ["web development", "business consultancy", "digital solutions", "training", "creative products", "Jabin International", "website design", "business setup"],
  authors: [{ name: "Jabin International Private Limited" }],
  creator: "Jabin International",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jabin.org",
    title: "Jabin International Private Limited - Digital Solutions & Business Services",
    description: "Custom web solutions, creative products, business consultancy, and technology training services.",
    siteName: "Jabin International",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jabin International Private Limited - Digital Solutions & Business Services",
    description: "Custom web solutions, creative products, business consultancy, and technology training services.",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Jabin International"
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* Font Awesome CDN */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-body antialiased min-h-screen flex flex-col bg-white text-gray-900`}>
        <DynamicFavicon />
        <CloudySky>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CloudySky>
      </body>
    </html>
  );
}