import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import Preloader from '@/components/Preloader';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "Naveen in Cyber",
    template: "%s | Naveen in Cyber"
  },
  description: "Portfolio of Naveen - Cyber Security Analyst. Specializing in Penetration Testing, Cloud Security, and Security Operations.",
  keywords: ["Cyber Security", "Penetration Testing", "Cloud Security", "Security Operations", "Naveen", "InfoSec", "Ethical Hacking"],
  authors: [{ name: "Naveen" }],
  creator: "Naveen",
  openGraph: {
    title: "Naveen in Cyber",
    description: "Portfolio of Naveen - Cyber Security Analyst. Specializing in Penetration Testing, Cloud Security, and Security Operations.",
    url: "/",
    siteName: "Naveen in Cyber",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naveen - Cyber Security Professional",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen in Cyber",
    description: "Portfolio of Naveen - Cyber Security Analyst",
    images: ["/og-image.png"],
    creator: "@naveen",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Naveen",
    jobTitle: "Cyber Security Analyst",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    sameAs: [
      "https://github.com/NaveenJc10",
      //"https://x.com/naveenjc10",
      "https://medium.com/@naveenjc10",
      "https://www.linkedin.com/in/naveen-thinarthan-70b346309/",
    ],
    description: "Cyber Security Analyst specializing in Penetration Testing, Cloud Security, and Security Operations.",
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/og-image.png`,
    knowsAbout: ["Penetration Testing", "Cloud Security", "Security Operations", "Splunk", "Azure", "AWS"],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased px-6 md:px-0`}>
        <Preloader />
        
        {/* Microsoft Clarity Analytics */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
              `,
            }}
          />
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}