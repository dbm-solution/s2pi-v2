"use client";

import { Typography } from "@/components/ui/typography/typography";
import { useClientTranslations, useClientLocale } from '@/components/providers/ClientTranslationProvider';

export default function CompanyInfo() {
  const { isLoading } = useClientLocale();
  const t = useClientTranslations('home.companyInfo');
  
  // Show loading state while translations are loading
  if (isLoading) {
    return (
      <div className="bg-white py-20 px-4">
        <div className="container-s2pi">
          <div className="flex items-center justify-center min-h-48">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Chargement...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Get philosophy points with fallback
  const philosophyPoints = t.raw('philosophy.points') || [];

  return (
    <div className="bg-white py-20 px-4">
      <div className="container-s2pi">
        <Typography variant="h1" className="mb-16 text-center">
          {t('title') || 'Notre Entreprise'}
        </Typography>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Column 1 - Company History */}
          <div className="space-y-6">
            <Typography variant="body" className="text-justify">
              <strong>S2PI, c'est un projet industriel initié par Jean-Luc BELLI</strong>, {t('history') || 'notre histoire continue...'}
            </Typography>
            
            {/* Industrial facility image */}
            <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/images/s2pi-facility.jpg" 
                alt={t('images.facility') || 'Installation industrielle S2PI'}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Column 2 - Company Details */}
          <div>
            <Typography variant="body" className="text-justify">
              Installée dans le département du Rhône, <strong>S2PI est une entreprise humaine innovante</strong> {t('description') || 'qui se développe constamment.'}
            </Typography>
          </div>

          {/* Column 3 - Philosophy & Certifications */}
          <div>
            <Typography variant="h4" className="mb-6 text-center text-[#2d2d2d]">
              {t('philosophy.title') || 'Notre Philosophie'}
            </Typography>
            
            <ul className="space-y-4 mb-8 text-left">
              {/* Safe array mapping with fallback */}
              {philosophyPoints.length > 0 ? (
                philosophyPoints.map((point: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-[#b52626] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <Typography variant="body" as="span" className="text-justify">
                      {point}
                    </Typography>
                  </li>
                ))
              ) : (
                // Fallback content while loading
                <>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#b52626] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <Typography variant="body" as="span" className="text-justify">
                      Qualité et performance de nos produits
                    </Typography>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#b52626] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <Typography variant="body" as="span" className="text-justify">
                      Service client réactif et personnalisé
                    </Typography>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#b52626] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <Typography variant="body" as="span" className="text-justify">
                      Innovation continue dans nos solutions
                    </Typography>
                  </li>
                </>
              )}
            </ul>

            {/* Bureau Veritas Certification Badge */}
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img 
                  src="/images/bureau-veritas-logo.jpg" 
                  alt={t('images.certification') || 'Certification Bureau Veritas ISO 9001:2015'}
                  className="h-20 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 