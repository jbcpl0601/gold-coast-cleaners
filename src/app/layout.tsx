import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SERVICES } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jamesbondcleaning.au"),
  title: {
    default: "James Bond Cleaning | Trusted Bond Cleaning on the Gold Coast",
    template: "%s | James Bond Cleaning",
  },
  description:
    "Professional end-of-lease cleaning on the Gold Coast that helps you secure your full bond refund. Reliable, detail-oriented, and real estate-approved.",
  keywords: [
    "James Bond Cleaning",
    "Bond Cleaning Gold Coast",
    "End of Lease Cleaning Gold Coast",
    "Exit Cleaning Gold Coast",
    "Carpet Cleaning Gold Coast",
    "Deep Cleaning Gold Coast",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://jamesbondcleaning.au",
    title: "James Bond Cleaning | Trusted Bond Cleaning on the Gold Coast",
    description:
      "Professional end-of-lease cleaning on the Gold Coast that helps you secure your full bond refund. Reliable, detail-oriented, and real estate-approved.",
    siteName: "James Bond Cleaning",
    images: [
      {
        url: "/logos/JBC-logo-JB-with-full-name-noBG.png",
        width: 1200,
        height: 630,
        alt: "James Bond Cleaning Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "James Bond Cleaning | Trusted Bond Cleaning on the Gold Coast",
    description:
      "Professional end-of-lease cleaning on the Gold Coast that helps you secure your full bond refund.",
    images: ["/logos/JBC-logo-JB-with-full-name-noBG.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate JSON-LD Schema for Local Business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    name: "James Bond Cleaning",
    image:
      "https://jamesbondcleaning.au/logos/JBC-logo-JB-with-full-name-noBG.png",
    "@id": "https://jamesbondcleaning.au/#organization",
    url: "https://jamesbondcleaning.au",
    telephone: "07 5620 1066",
    email: "support@jamesbondcleaning.au",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 501, 18 Cypress Avenue",
      addressLocality: "Surfers Paradise",
      addressRegion: "QLD",
      postalCode: "4217",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.9996,
      longitude: 153.4295,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "06:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Gold Coast",
      },
      {
        "@type": "City",
        name: "Brisbane",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `https://jamesbondcleaning.au${service.href}`,
        },
      })),
    },
    sameAs: [
      "https://www.facebook.com/share/1FtNkUCPgM/?mibextid=wwXIfr",
      "https://www.instagram.com/jamesbondcleaning?igsh=cW9nNXk2OWZ1NzF5",
    ],
  };

  return (
    <html
      lang="en"
      className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          outfit.variable,
          playfair.variable,
        )}>
        {/* Inject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingCallButton />
        <Toaster />
        <Analytics />
        <GoogleAnalytics gaId="G-FLZ538CG8H" />
      </body>
    </html>
  );
}
