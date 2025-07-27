"use client";

import { InfoCard } from "@/components/ui/cards/info-card/info-card";
import { useTranslations } from '@/components/providers/IntlProvider';

export const NewYearMessage = () => {
  const t = useTranslations('home.newYear');
  
  return (
    <div style={{ maxWidth: '1300px', margin: '70px auto 0 auto' }} className="bg-[#06528a] py-12 px-8">
      <InfoCard
        variant="primary"
        shape="rectangle"
        size="lg"
        layout="default"
        textAlign="center"
        animation="none"
        title={t('title')}
        description={t('description')}
        footer={
          <p className="text-sm opacity-90 font-medium text-white">
            {t('footer')}
          </p>
        }
        fullWidth
        className="bg-transparent border-none shadow-none"
      />
    </div>
  );
}; 