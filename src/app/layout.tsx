import type { Metadata, Viewport } from "next";
import { Roboto, Oswald, Prata, Poppins, Open_Sans } from "next/font/google";
import { headers } from 'next/headers';
import { LANGUAGE_CONFIG } from "@/lib/i18n/config";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | S2PI",
    default: "S2PI - Société de Production de Produits Isolants",
  },
  description: "S2Pi - Production d'isolants thermiques à base de laine de roche mais également dans la protection incendie et phonique.",
  metadataBase: new URL('https://www.s2pi.fr'),
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#b52626',
};

async function getLocaleFromHeaders(): Promise<{ locale: string; dir: string }> {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/fr';
  
  // Extract locale from pathname
  const locale = pathname.split('/')[1] || 'fr';
  const isValidLocale = ['fr', 'en', 'ar', 'es', 'it'].includes(locale);
  const finalLocale = isValidLocale ? locale : 'fr';
  
  const langConfig = LANGUAGE_CONFIG[finalLocale as keyof typeof LANGUAGE_CONFIG];
  const dir = langConfig?.dir || 'ltr';
  
  return { locale: finalLocale, dir };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale, dir } = await getLocaleFromHeaders();
  
  return (
    <html lang={locale} dir={dir} className="no-js" suppressHydrationWarning>
      <body
        id="the7-body"
        className={`${roboto.variable} ${oswald.variable} ${prata.variable} ${poppins.variable} ${openSans.variable} font-sans antialiased`}
      >
        {/* Global Loading Spinner */}
        <div id="load" className="ring-loader">
          <div className="load-wrap">
            <div className="the7-spinner">
              <div className="the7-spinner-ring-bg"></div>
              <div className="the7-spinner-ring"></div>
            </div>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}