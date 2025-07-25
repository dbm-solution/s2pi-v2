'use client';

import { S2PIHeroSlider } from '@/components/ui/slider/hero-slider/s2pi-hero-slider';
import { NewYearMessage, CompanyInfo, QualityControl } from './_components';
import { ProtectionSection } from './_components/ProtectionSection';

export default function Home() {
  return (
    <div>
      <S2PIHeroSlider />
      <NewYearMessage />
      <CompanyInfo />
      <QualityControl />
      <ProtectionSection />
    </div>
  );
}
