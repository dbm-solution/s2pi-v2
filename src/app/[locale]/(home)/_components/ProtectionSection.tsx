"use client";

import { useTranslations } from '@/components/providers/IntlProvider';

export const ProtectionSection = () => {
  const t = useTranslations('home.protection');
  
  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto" style={{ maxWidth: '1200px' }}>
        <h3 style={{
          fontSize: '36px',
          color: '#565656',
          lineHeight: '46px',
          textAlign: 'center',
          fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
          fontWeight: '300',
          margin: '0 0 30px 0',
        }}>
          {t('title')}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Fire Protection</h4>
            <p>Innovative solutions for fire protection</p>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Thermal Insulation</h4>
            <p>High-performance thermal insulation products</p>
          </div>
          
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Acoustic Protection</h4>
            <p>Solutions for sound and acoustic insulation</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 