import { notFound } from 'next/navigation';
import type { Metadata } from "next";
import { ReactNode } from "react";
import { IntlProvider } from '@/components/providers/IntlProvider';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

// Supported locales
const locales = ['fr', 'en', 'ar', 'es', 'it'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  
  // Locale-specific metadata
  const localeMetadata = {
    fr: {
      title: "Production Produits Isolants Incendie Protection Phonique",
      description: "S2Pi - Production d'isolants thermiques à base de laine de roche mais également dans la protection incendie et phonique.",
    },
    en: {
      title: "Insulation Products Fire Protection Acoustic Production",
      description: "S2Pi - Production of thermal insulation based on rock wool as well as fire and acoustic protection.",
    },
    es: {
      title: "Producción Productos Aislantes Protección Contra Incendios Acústicos",
      description: "S2Pi - Producción de aislamiento térmico a base de lana de roca así como protección contra incendios y acústica.",
    },
    it: {
      title: "Produzione Prodotti Isolanti Protezione Antincendio Acustica",
      description: "S2Pi - Produzione di isolamento termico a base di lana di roccia nonché protezione antincendio e acustica.",
    },
    ar: {
      title: "إنتاج منتجات العزل الحماية من الحرائق الصوتية",
      description: "S2Pi - إنتاج العزل الحراري على أساس الصوف الصخري وكذلك الحماية من الحرائق والصوتية.",
    },
  };

  const meta = localeMetadata[locale as keyof typeof localeMetadata] || localeMetadata.fr;
  
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.s2pi.fr/${locale}`,
      siteName: "S2PI",
      locale: locale,
      type: "website",
      images: [
        {
          url: "/images/jean-luc-belli.jpg",
          width: 800,
          height: 600,
          alt: "Jean-Luc Belli - Président Directeur Général S2PI",
        },
      ],
    },
    alternates: {
      languages: {
        'fr': '/fr',
      },
    },
    other: {
      'google-site-verification': 'your-google-verification-code',
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  
  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }
  
  // Load messages for the current locale
  let messages = {};
  try {
    messages = (await import(`../../locales/${locale}/index`)).default;
  } catch (error) {
    console.warn(`Failed to load ${locale} messages, falling back to French:`, error);
    try {
      messages = (await import(`../../locales/fr/index`)).default;
    } catch (fallbackError) {
      console.error('Failed to load French fallback messages:', fallbackError);
      messages = {};
    }
  }
  
  return (
    <IntlProvider locale={locale} messages={messages}>
      <div data-locale={locale}>
        {children}
      </div>
    </IntlProvider>
  );
}
