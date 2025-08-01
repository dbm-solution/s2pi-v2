// S2PI Asset Management
// This file provides easy access to all static assets from the official S2PI website

export const ASSETS = {
  // Main Branding
  logos: {
    main: '/images/logo-s2pi.png',
    mobile: '/images/STIOCKY.png',
    bureauVeritas: '/images/bureau-veritas-logo.jpg',
    favicon: '/favicon.ico',
  },

  // Header Elements
  header: {
    pictogrammes: '/images/s2pi-pictogrammes-header-03.png',
  },

  // Leadership Photos
  team: {
    jeanLucBelli: '/images/jean-luc-belli.jpg',
  },

  // Background Images
  backgrounds: {
    isolationThermique: '/images/backgrounds/isolation-thermique.jpg',
    isolationThermiqueExterieur: '/images/backgrounds/isolation-thermique-exterieur.jpg',
    s2piFond: '/images/backgrounds/s2pi-fond-05.jpg',
  },

  // Product Documentation (PDFs)
  pdfs: {
    // ISO Certification
    isoCertification: '/pdf/S2PI-SOCIETE-DE-PRODUCTION-DE-ISO-9001.pdf',
    
    // Product Specifications
    itarn: '/pdf/S2PI-Fiche-iTarn.pdf',
    farbocustic: '/pdf/S2PI-Fiche-FARBOCUSTIC.pdf',
    
    // INNOSPRAY Products
    innosprayFTH: {
      plancher: '/pdf/S2PI-Fiche-INNOSPRAY-FTH-Plancher-beton.pdf',
      acoustique: '/pdf/S2PI-Fiche-INNOSPRAY-FTH-Performances-acoustiques.pdf',
    },
    innosprayFMM: {
      acier: '/pdf/S2PI-Fiche-INNOSPRAY-FMM-Acier.pdf',
      plancher: '/pdf/S2PI-Fiche-INNOSPRAY-FMM-Plancher-membrane.pdf',
      toiture: '/pdf/S2PI-Fiche-INNOSPRAY-FMM-Toiture.pdf',
    },
    innosprayPX: {
      acier: '/pdf/S2PI-Fiche-INNOSPRAY-PX-Acier.pdf',
      beton: '/pdf/S2PI-Fiche-INNOSPRAY-PX-Beton.pdf',
    },
    
    // INNOFIX Products
    innofix: {
      spray: '/pdf/S2PI-Fiche-INNOFIX-SPRAY.pdf',
      tr: '/pdf/S2PI-Fiche-INNOFIX-TR.pdf',
      m: '/pdf/S2PI-Fiche-INNOFIX-M.pdf',
      b: '/pdf/S2PI-Fiche-INNOFIX-B.pdf',
    },
    
    // Other Products
    innocoatFin: '/pdf/S2PI-Fiche-INNOCOAT-FIN.pdf',
    innodurT: '/pdf/S2PI-Fiche-INNODUR-T.pdf',
    panneauPN70F: '/pdf/S2PI-Fiche-Panneau-PN-70-F.pdf',
    panneauPN70FCEE: '/pdf/S2PI-Fiche-Panneau-PN-70-F-CEE-100-mm.pdf',
    lattisMetallique: '/pdf/S2PI-Fiche-Lattis-métallique.pdf',
    pistoletProjection: '/pdf/S2PI-Fiche-Pistolet-de-Projection.pdf',
    
    // Certifications & Technical Documents
    acermiCertificat: '/pdf/S2PI-Certificat-Acermi-INNOSPRAY-FTH.pdf',
    avisTechnique: '/pdf/Avis-Technique-2015-344_V1.pdf',
    atexCertification: '/pdf/ATEX_CAS_A_3029_V1_ITARN-FILIGRANE.pdf',
    
    // Paint Products
    promapaintSC3SC4: '/pdf/S2PI-PROMAT-Peinture-SC3-et-SC4.pdf',
  },

  // Product Images (from WordPress uploads)
  images: {
    products: {
      itarn: '/wp-content/uploads/2023/05/S2PI-Fiche-iTarn.jpg',
      farbocustic: '/wp-content/uploads/2022/02/S2PI-Fiche-FARBOCUSTIC-02.jpg',
    },
    
    // Project/Construction Images
    projects: {
      chantier009: '/wp-content/uploads/2022/02/s2pi-chantiers-09.jpg',
      chantier010: '/wp-content/uploads/2022/02/s2pi-chantiers-010.jpg',
      chantier012: '/wp-content/uploads/2022/02/s2pi-chantiers-012.jpg',
      chantier013: '/wp-content/uploads/2022/02/s2pi-chantiers-013.jpg',
    },
    
    // Certifications
    certifications: {
      iso9001: '/wp-content/uploads/2022/02/S2PI-SOCIETE-DE-PRODUCTION-DE-ISO-9001.jpg',
      politiqueQualite: '/wp-content/uploads/2022/02/Politique-Qualite-S2PI-V5-2020.jpg',
      logoCE: '/wp-content/uploads/2022/02/LOGO_CE.jpg',
      ambassadeur2020: '/wp-content/uploads/2022/02/ambassadeur_2020_gris.png',
    },
    
    // Partner Logos
    partners: {
      laFrenchTech: '/wp-content/uploads/2021/12/logo-la-french-tech-min.png',
      transportGranger: '/wp-content/uploads/2021/12/transport-granger-logo.jpg',
      symbiote: '/wp-content/uploads/2021/12/logo_symbiote_horizontal_bleu.png',
      sni: '/wp-content/uploads/2021/12/sni.png',
      gtfi: '/wp-content/uploads/2021/12/gtfi.png',
      stiocky: '/wp-content/uploads/2021/11/STIOCKY.png',
    },
  },
} as const;

// Helper functions for asset management
export const getAssetUrl = (path: string): string => {
  return path.startsWith('/') ? path : `/${path}`;
};

export const getProductPDF = (productName: keyof typeof ASSETS.pdfs): string => {
  return ASSETS.pdfs[productName] as string;
};

export const getProjectImage = (projectName: keyof typeof ASSETS.images.projects): string => {
  return ASSETS.images.projects[projectName];
};

// Asset categories for easy navigation
export const ASSET_CATEGORIES = {
  BRANDING: 'branding',
  PRODUCTS: 'products', 
  CERTIFICATIONS: 'certifications',
  PROJECTS: 'projects',
  TEAM: 'team',
  PARTNERS: 'partners',
} as const;

export type AssetCategory = typeof ASSET_CATEGORIES[keyof typeof ASSET_CATEGORIES]; 