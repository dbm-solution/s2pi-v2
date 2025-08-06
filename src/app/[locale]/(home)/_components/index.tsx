// src/app/[locale]/(home)/_components/index.tsx
"use client";

import { ClientTranslationProvider } from '@/components/providers/ClientTranslationProvider';
import { S2PIHeroSlider } from '@/components/ui/slider/hero-slider/s2pi-hero-slider';
import NewYearMessage from './NewYearMessage';             
import CompanyInfo from './CompanyInfo';                     
import QualityControl  from './QualityControl';           
import  ProtectionSection   from './ProtectionSection';     
import { S2PILayerSlider } from '@/components/ui/slider/hero-slider/S2PILayerSlider';

interface HomeContentProps {
  locale: string;
}

export default function HomeContent({ locale }: HomeContentProps) {
  return (
    <ClientTranslationProvider initialLocale={locale}>
      <S2PILayerSlider />
      <NewYearMessage />
      <CompanyInfo />
      <QualityControl />
      <ProtectionSection />
    </ClientTranslationProvider>
  );
}