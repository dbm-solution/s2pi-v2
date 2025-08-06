import { useClientTranslations } from '@/components/providers/ClientTranslationProvider';
import { ASSETS } from '@/lib/assets';

export function useThermalInsulationContent() {
  const t = useClientTranslations('thermalInsulation');

  return {
    metadata: {
      title: t('metadata.title'),
      description: t('metadata.description'),
      keywords: t('metadata.keywords'),
    },
    hero: {
      title: t('hero.title'),
      subtitle: t('hero.subtitle'),
      buttons: {
        discover: t('hero.buttons.discover'),
        quote: t('hero.buttons.quote'),
      },
    },
    introduction: {
      title: t('introduction.title'),
      subtitle: t('introduction.subtitle'),
      paragraph1: t('introduction.paragraph1'),
      paragraph2: t('introduction.paragraph2'),
    },
    advantages: {
      title: t('advantages.title'),
      subtitle: t('advantages.subtitle'),
      items: [
        {
          title: t('advantages.items.energy.title'),
          description: t('advantages.items.energy.description'),
          icon: t('advantages.items.energy.icon'),
        },
        {
          title: t('advantages.items.speed.title'),
          description: t('advantages.items.speed.description'),
          icon: t('advantages.items.speed.icon'),
        },
        {
          title: t('advantages.items.continuity.title'),
          description: t('advantages.items.continuity.description'),
          icon: t('advantages.items.continuity.icon'),
        },
        {
          title: t('advantages.items.durability.title'),
          description: t('advantages.items.durability.description'),
          icon: t('advantages.items.durability.icon'),
        },
      ],
    },
    products: {
      title: t('products.title'),
      subtitle: t('products.subtitle'),
      items: [
        {
          id: "itarn",
          name: t('products.items.itarn.name'),
          category: t('products.items.itarn.category'),
          description: t('products.items.itarn.description'),
          features: t.raw('products.items.itarn.features') as string[],
          applications: t.raw('products.items.itarn.applications') as string[],
          technicalSpecs: {
            density: t('products.items.itarn.technicalSpecs.density'),
            thermalConductivity: t('products.items.itarn.technicalSpecs.thermalConductivity'),
            fireResistance: t('products.items.itarn.technicalSpecs.fireResistance'),
            thickness: t('products.items.itarn.technicalSpecs.thickness'),
          },
          pdfUrl: ASSETS.pdfs.itarn,
          imageUrl: "/images/products/itarn-isolation.jpg",
        },
        {
          id: "innospray-fth",
          name: t('products.items.innosprayFTH.name'),
          category: t('products.items.innosprayFTH.category'),
          description: t('products.items.innosprayFTH.description'),
          features: t.raw('products.items.innosprayFTH.features') as string[],
          applications: t.raw('products.items.innosprayFTH.applications') as string[],
          technicalSpecs: {
            density: t('products.items.innosprayFTH.technicalSpecs.density'),
            thermalConductivity: t('products.items.innosprayFTH.technicalSpecs.thermalConductivity'),
            fireResistance: t('products.items.innosprayFTH.technicalSpecs.fireResistance'),
            thickness: t('products.items.innosprayFTH.technicalSpecs.thickness'),
          },
          pdfUrl: ASSETS.pdfs.innosprayFTH.plancher,
          imageUrl: "/images/products/innospray-fth.jpg",
        },
      ],
    },
    technical: {
      title: t('technical.title'),
      subtitle: t('technical.subtitle'),
      sections: {
        performance: {
          title: t('technical.sections.performance.title'),
          description: t('technical.sections.performance.description'),
          specs: {
            thermalConductivity: t('technical.sections.performance.specs.thermalConductivity'),
            thermalResistance: t('technical.sections.performance.specs.thermalResistance'),
            thickness: t('technical.sections.performance.specs.thickness'),
            density: t('technical.sections.performance.specs.density'),
          },
          values: {
            thermalConductivity: t('technical.sections.performance.values.thermalConductivity'),
            thermalResistance: t('technical.sections.performance.values.thermalResistance'),
            thickness: t('technical.sections.performance.values.thickness'),
            density: t('technical.sections.performance.values.density'),
          },
        },
        implementation: {
          title: t('technical.sections.implementation.title'),
          description: t('technical.sections.implementation.description'),
          points: t.raw('technical.sections.implementation.points') as string[],
        },
        applications: {
          title: t('technical.sections.applications.title'),
          description: t('technical.sections.applications.description'),
          categories: {
            buildings: {
              title: t('technical.sections.applications.categories.buildings.title'),
              items: t.raw('technical.sections.applications.categories.buildings.items') as string[],
            },
            supports: {
              title: t('technical.sections.applications.categories.supports.title'),
              items: t.raw('technical.sections.applications.categories.supports.items') as string[],
            },
          },
        },
        certifications: {
          title: t('technical.sections.certifications.title'),
          description: t('technical.sections.certifications.description'),
          items: {
            ce: t('technical.sections.certifications.items.ce'),
            acermi: t('technical.sections.certifications.items.acermi'),
            cstb: t('technical.sections.certifications.items.cstb'),
          },
        },
      },
    },
    documentation: {
      title: t('documentation.title'),
      subtitle: t('documentation.subtitle'),
      items: [
        {
          title: t('documentation.items.itarnSheet.title'),
          description: t('documentation.items.itarnSheet.description'),
          href: ASSETS.pdfs.itarn,
          size: t('documentation.items.itarnSheet.size'),
        },
        {
          title: t('documentation.items.innosprayFTHFloor.title'),
          description: t('documentation.items.innosprayFTHFloor.description'),
          href: ASSETS.pdfs.innosprayFTH.plancher,
          size: t('documentation.items.innosprayFTHFloor.size'),
        },
        {
          title: t('documentation.items.acousticPerformance.title'),
          description: t('documentation.items.acousticPerformance.description'),
          href: ASSETS.pdfs.innosprayFTH.acoustique,
          size: t('documentation.items.acousticPerformance.size'),
        },
        {
          title: t('documentation.items.acermiCert.title'),
          description: t('documentation.items.acermiCert.description'),
          href: ASSETS.pdfs.acermiCertificat,
          size: t('documentation.items.acermiCert.size'),
        },
        {
          title: t('documentation.items.cstbOpinion.title'),
          description: t('documentation.items.cstbOpinion.description'),
          href: ASSETS.pdfs.avisTechnique,
          size: t('documentation.items.cstbOpinion.size'),
        },
        {
          title: t('documentation.items.atexCert.title'),
          description: t('documentation.items.atexCert.description'),
          href: ASSETS.pdfs.atexCertification,
          size: t('documentation.items.atexCert.size'),
        },
      ],
    },
    cta: {
      title: t('cta.title'),
      description: t('cta.description'),
      buttons: {
        quote: t('cta.buttons.quote'),
        contact: t('cta.buttons.contact'),
      },
    },
    common: {
      technicalSheet: t('common.technicalSheet'),
      moreInfo: t('common.moreInfo'),
      mainFeatures: t('common.mainFeatures'),
      technicalSpecs: t('common.technicalSpecs'),
      applications: t('common.applications'),
    },
  };
}