export interface AboutPageContent {
  title: string;
  introduction: {
    paragraphs: string[];
  };
  slider: {
    images: string[];
  };
  commitments: {
    title: string;
    items: string[];
  };
  environmental: {
    paragraphs: string[];
  };
  associations: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      subtitle: string;
      description: string;
      logo?: string;
      points: string[];
    }>;
  };
}

export const aboutPageContent = {
  slider: {
    images: [
      "/images/slider-image/s2pi-chantiers-01.jpg",
      "/images/slider-image/s2pi-chantiers-02.jpg",
      "/images/slider-image/s2pi-chantiers-03.jpg",
      "/images/slider-image/s2pi-chantiers-04.jpg",
      "/images/slider-image/s2pi-chantiers-05.jpg",
      "/images/slider-image/s2pi-chantiers-06.jpg",
      "/images/slider-image/s2pi-chantiers-07.jpg",
      "/images/slider-image/s2pi-chantiers-08.jpg",
      "/images/slider-image/s2pi-chantiers-012.jpg",
      "/images/slider-image/s2pi-chantiers-013.jpg"
    ]
  },
  associations: {
    items: [
      { id: "gtfi", logoPath: "/images/associations/gtfi-logo.png" },
      { id: "sni", logoPath: "/images/associations/sni-logo.png" },
      { id: "symbiote", logoPath: "/images/associations/symbiote-logo.png" }
    ]
  }
};