import { S2PIHeroSlider } from '@/components/ui/slider/hero-slider/s2pi-hero-slider';
import { NewYearMessage, CompanyInfo, QualityControl } from './_components';
import { ProtectionSection } from './_components/ProtectionSection';

interface HomeProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
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
