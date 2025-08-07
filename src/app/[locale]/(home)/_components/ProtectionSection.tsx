"use client";

import { useClientTranslations } from '@/components/providers/ClientTranslationProvider';
import { DottedDivider } from '@/components/ui/dotted-divider/DottedDivider';
import Image from 'next/image';

export default function ProtectionSection() {
  const t = useClientTranslations('home');
  
  return (
    <div className="py-20 scroll-fade-in">
      <div className="container-s2pi">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className='scroll-fade-in' style={{
            fontSize: '36px',
            color: '#565656',
            lineHeight: '46px',
            textAlign: 'center',
            fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
            fontWeight: '300',
            margin: '0 0 20px 0',
          }}>
            {t('protection.title')}
          </h2>
          <DottedDivider 
            dotCount={30} 
            dotSize={2} 
            dotColor="#565656" 
            spacing="superTight" 
          />
        </div>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - CEO Photo and Text */}
          <div className="space-y-8">
            {/* CEO Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/home-page/jean-luc-belli.jpg"
                  alt={t('protection.images.ceo')}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div style={{
              color: '#232323',
              fontSize: '17px',
              fontWeight: 400,
              lineHeight: '31px',
              textAlign: 'justify',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
            }}>
              {t('protection.content.part1')}
            </div>
          </div>
          
          {/* Right Column - Text, Quote, and Signature */}
          <div className="space-y-8">
            {/* Main Text */}
            <div style={{
              color: '#232323',
              fontSize: '17px',
              fontWeight: 400,
              lineHeight: '31px',
              textAlign: 'justify',
              fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
            }}>
              {t('protection.content.part2')}
            </div>
            
            {/* Quote */}
            <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-blue-600">
              <blockquote style={{
                color: '#232323',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '32px',
                fontStyle: 'italic',
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                margin: '0 0 16px 0',
              }}>
                "{t('protection.content.quote')}"
              </blockquote>
              <cite style={{
                color: '#565656',
                fontSize: '16px',
                fontWeight: 400,
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                fontStyle: 'normal',
                textAlign: 'right',
                display: 'block',
              }}>
                {t('protection.content.quoteAuthor')}
              </cite>
            </div>
            
            {/* Signature */}
            <div className="pt-8">
              <div style={{
                color: '#232323',
                fontSize: '18px',
                fontWeight: 700,
                lineHeight: '32px',
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                margin: '0 0 8px 0',
              }}>
                {t('protection.content.signature')}
              </div>
              <div style={{
                color: '#565656',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '28px',
                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
              }}>
                {t('protection.content.title')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 