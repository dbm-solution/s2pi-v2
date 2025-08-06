// src/app/[locale]/(nos-produits)/isolation-thermique-par-lexterieur/ThermalInsulationContent.tsx
"use client";

import { MainLayout } from "@/components/layout/main-layout/MainLayout";
import { InfoCard } from "@/components/ui/cards/info-card/info-card";
import { ProductCard } from "@/components/ui/cards/ProductCard";
import { RegularButton } from "@/components/ui/buttons/regular-button/regular-button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PDFLink } from "@/components/ui/PDFLink";
import { useThermalInsulationContent } from "@/content/pages/thermal-insulation.content";
import { useClientLocale } from '@/components/providers/ClientTranslationProvider';

export default function ThermalInsulationContent() {
  const { isLoading } = useClientLocale();
  const content = useThermalInsulationContent();

  // Show loading spinner while translations are loading
  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement des traductions...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.hero?.title || 'Isolation Thermique par l\'Extérieur'}</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {content.hero?.subtitle || 'Solutions innovantes d\'isolation thermique'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RegularButton variant="default" size="lg">
                {content.hero?.buttons?.discover || 'Découvrir'}
              </RegularButton>
              <RegularButton variant="outline" size="lg">
                {content.hero?.buttons?.quote || 'Devis'}
              </RegularButton>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title={content.introduction?.title || 'Introduction'}
              subtitle={content.introduction?.subtitle || ''}
            />
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                {content.introduction?.paragraph1 || ''}
              </p>
              <p className="text-lg leading-relaxed">
                {content.introduction?.paragraph2 || ''}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={content.advantages?.title || 'Avantages'} 
            subtitle={content.advantages?.subtitle || ''} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.advantages?.items?.map((advantage, index) => (
              <InfoCard
                key={index}
                title={advantage?.title || `Avantage ${index + 1}`}
                description={advantage?.description || ''}
                icon={advantage?.icon || '🔧'}
                variant="primary"
              />
            )) || (
              // Fallback if no advantages
              <div className="col-span-full text-center text-gray-500">
                Contenu en cours de chargement...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title={content.products?.title || 'Nos Produits'}
            subtitle={content.products?.subtitle || ''}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.products?.items?.map((product) => (
              <ProductCard
                key={product?.id || Math.random()}
                name={product?.name || 'Produit'}
                category={product?.category || 'Catégorie'}
                description={product?.description || ''}
                features={product?.features || []}
                applications={product?.applications || []}
                technicalSpecs={product?.technicalSpecs || {}}
                pdfUrl={product?.pdfUrl || ''}
                imageUrl={product?.imageUrl || ''}
              />
            )) || (
              <div className="col-span-full text-center text-gray-500">
                Produits en cours de chargement...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Technical Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle 
              title={content.technical?.title || 'Informations Techniques'} 
              subtitle={content.technical?.subtitle || ''} 
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Technical Specs */}
              <div className="space-y-8">
                {/* Performance Card */}
                {content.technical?.sections?.performance && (
                  <InfoCard
                    title={content.technical.sections.performance.title || 'Performance'}
                    description={content.technical.sections.performance.description || ''}
                    variant="primary"
                  >
                    <ul className="space-y-3 text-sm text-gray-600 mt-4">
                      {content.technical.sections.performance.specs && content.technical.sections.performance.values && (
                        <>
                          <li className="flex justify-between">
                            <span>{content.technical.sections.performance.specs.thermalConductivity || 'Conductivité thermique'}</span>
                            <span className="font-semibold">{content.technical.sections.performance.values.thermalConductivity || 'N/A'}</span>
                          </li>
                          <li className="flex justify-between">
                            <span>{content.technical.sections.performance.specs.thermalResistance || 'Résistance thermique'}</span>
                            <span className="font-semibold">{content.technical.sections.performance.values.thermalResistance || 'N/A'}</span>
                          </li>
                          <li className="flex justify-between">
                            <span>{content.technical.sections.performance.specs.thickness || 'Épaisseur'}</span>
                            <span className="font-semibold">{content.technical.sections.performance.values.thickness || 'N/A'}</span>
                          </li>
                          <li className="flex justify-between">
                            <span>{content.technical.sections.performance.specs.density || 'Densité'}</span>
                            <span className="font-semibold">{content.technical.sections.performance.values.density || 'N/A'}</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </InfoCard>
                )}

                {/* Implementation Card */}
                {content.technical?.sections?.implementation && (
                  <InfoCard
                    title={content.technical.sections.implementation.title || 'Mise en œuvre'}
                    description={content.technical.sections.implementation.description || ''}
                    variant="primary"
                  >
                    <ul className="space-y-2 text-sm text-gray-600 mt-4">
                      {/* Safe array mapping with fallback */}
                      {(content.technical.sections.implementation.points || []).map((point, index) => (
                        <li key={index}>• {point}</li>
                      ))}
                      {(!content.technical.sections.implementation.points || content.technical.sections.implementation.points.length === 0) && (
                        <li className="text-gray-400">Points de mise en œuvre en cours de chargement...</li>
                      )}
                    </ul>
                  </InfoCard>
                )}
              </div>

              {/* Right Column - Applications */}
              <div className="space-y-8">
                {/* Applications Card */}
                {content.technical?.sections?.applications && (
                  <InfoCard
                    title={content.technical.sections.applications.title || 'Applications'}
                    description={content.technical.sections.applications.description || ''}
                    variant="primary"
                  >
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800 mb-2">
                          {content.technical.sections.applications.categories?.buildings?.title || 'Bâtiments'}
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {(content.technical.sections.applications.categories?.buildings?.items || []).map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800 mb-2">
                          {content.technical.sections.applications.categories?.supports?.title || 'Supports'}
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {(content.technical.sections.applications.categories?.supports?.items || []).map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </InfoCard>
                )}

                {/* Certifications Card */}
                {content.technical?.sections?.certifications && (
                  <InfoCard
                    title={content.technical.sections.certifications.title || 'Certifications'}
                    description={content.technical.sections.certifications.description || ''}
                    variant="primary"
                  >
                    <div className="space-y-3 mt-4">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                          CE
                        </span>
                        <span className="text-sm text-gray-600">
                          {content.technical.sections.certifications.items?.ce || 'Certification CE'}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                          A
                        </span>
                        <span className="text-sm text-gray-600">
                          {content.technical.sections.certifications.items?.acermi || 'Certification ACERMI'}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-sm">
                          AT
                        </span>
                        <span className="text-sm text-gray-600">
                          {content.technical.sections.certifications.items?.cstb || 'Avis Technique CSTB'}
                        </span>
                      </div>
                    </div>
                  </InfoCard>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={content.documentation?.title || 'Documentation'} 
            subtitle={content.documentation?.subtitle || ''} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.documentation?.items?.map((item, index) => (
              <PDFLink
                key={index}
                title={item?.title || 'Document'}
                description={item?.description || ''}
                href={item?.href || '#'}
                size={item?.size || ''}
              />
            )) || (
              <div className="col-span-full text-center text-gray-500">
                Documentation en cours de chargement...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.cta?.title || 'Contactez-nous'}
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            {content.cta?.description || 'Nous sommes à votre disposition pour tous vos projets.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RegularButton variant="default" size="lg">
              {content.cta?.buttons?.quote || 'Demander un devis'}
            </RegularButton>
            <RegularButton variant="outline" size="lg">
              {content.cta?.buttons?.contact || 'Nous contacter'}
            </RegularButton>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}