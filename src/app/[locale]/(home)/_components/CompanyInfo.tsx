"use client";

import { Typography } from "@/components/ui/typography/typography";
import { useTranslations } from '@/components/providers/IntlProvider';

export const CompanyInfo = () => {
  const t = useTranslations('home.companyInfo');
  
  return (
    <div className="bg-white py-20 px-4">
      <div className="container-s2pi">
        <Typography variant="h1" className="mb-16 text-center">
          {t('title')}
        </Typography>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Column 1 - Company History */}
          <div className="space-y-6">
            <Typography variant="body" className="text-justify">
              <strong>S2PI, c'est un projet industriel initié par Jean-Luc BELLI</strong>, {t('history')}
            </Typography>
            
            {/* Industrial facility image */}
            <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/images/s2pi-facility.jpg" 
                alt={t('images.facility')}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Column 2 - Company Details */}
          <div>
            <Typography variant="body" className="text-justify">
              Installée dans le département du Rhône, <strong>S2PI est une entreprise humaine innovante</strong> {t('description')}
            </Typography>
          </div>

          {/* Column 3 - Philosophy & Certifications */}
          <div>
            <Typography variant="h4" className="mb-6 text-center text-[#2d2d2d]">
              {t('philosophy.title')}
            </Typography>
            
            <ul className="space-y-4 mb-8 text-left">
              {t.raw('philosophy.points').map((point: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-[#b52626] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <Typography variant="body" as="span" className="text-justify">
                    {point}
                  </Typography>
                </li>
              ))}
            </ul>

            {/* Bureau Veritas Certification Badge */}
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img 
                  src="/images/bureau-veritas-logo.jpg" 
                  alt={t('images.certification')}
                  className="h-20 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 