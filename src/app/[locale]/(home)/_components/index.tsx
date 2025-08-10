"use client";

import { ClientTranslationProvider } from '@/components/providers/ClientTranslationProvider';
import { S2PIHeroSlider } from '@/components/ui/slider/hero-slider/s2pi-hero-slider';
import NewYearMessage from './NewYearMessage';             
import CompanyInfo from './CompanyInfo';                     
import QualityControl  from './QualityControl';           
import  ProtectionSection   from './ProtectionSection';     
import { S2PILayerSlider } from '@/components/ui/slider/hero-slider/S2PILayerSlider';
import { useAutoScrollAnimation } from '@/hooks/use-scroll-animation';
import Parallex from './Parallex';

interface HomeContentProps {
  locale: string;
}

export default function HomeContent({ locale }: HomeContentProps) {
  useAutoScrollAnimation();

  return (
    <ClientTranslationProvider initialLocale={locale}>
      <S2PILayerSlider />
      <NewYearMessage />
      <CompanyInfo />
      <QualityControl />
      <ProtectionSection />
      <Parallex />
    </ClientTranslationProvider>
  );
}