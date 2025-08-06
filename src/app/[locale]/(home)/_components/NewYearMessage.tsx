"use client";

import React from 'react';
import { useClientTranslations } from '@/components/providers/ClientTranslationProvider';

export default function NewYearMessage() {
  const t = useClientTranslations('home');

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-bold mb-2">
          {t('newYear.title')}
        </h2>
        <p className="text-base mb-3 max-w-4xl mx-auto leading-relaxed">
          {t('newYear.description')}
        </p>
        <p className="text-sm font-medium opacity-90">
          {t('newYear.footer')}
        </p>
      </div>
    </div>
  );
} 