import { notFound } from 'next/navigation';
import type { Metadata } from "next";
import { ReactNode } from "react";
import { ClientTranslationProvider } from '@/components/providers/ClientTranslationProvider';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

const locales = ['fr', 'en', 'ar', 'es', 'it'];

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  // Your metadata logic...
  return {
    title: "Your title",
    description: "Your description"
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  
  if (!locales.includes(locale)) {
    notFound();
  }
  
  return (
    <ClientTranslationProvider initialLocale={locale}>
      <div data-locale={locale}>
        {children}
      </div>
    </ClientTranslationProvider>
  );
}
