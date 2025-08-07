"use client";

import React from 'react';
import { useClientTranslations } from '@/components/providers/ClientTranslationProvider';
import { InfoCard } from '@/components/ui/cards/info-card/info-card';

export default function NewYearMessage() {
  const t = useClientTranslations('home');

  return (
    <div className="text-white py-8">
      <InfoCard
        className="mt-10 scroll-fade-in-large"
        variant="primary"
        size="xl"
        layout="banner"
        shape="rectangle"
        textAlign="center"
        title={t('newYear.title')}
        description={t('newYear.description')}
        transition="slideInTop"
        animation="none"
        footer={
          <p className="text-sm opacity-90 font-medium">
            {t('newYear.footer')}
          </p>
        }
        fullWidth={false}
      />

    </div>
  );
} 