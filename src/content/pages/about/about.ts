export interface AboutPageContent {
  title: string;
  introduction: {
    paragraphs: string[];
  };
  slider: {
    images: Array<{
      src: string;
      title: string;
      alt: string;
    }>;
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

export const aboutPageContent: AboutPageContent = {
  title: "UNE ENTREPRISE À VOTRE ÉCOUTE",
  
  introduction: {
    paragraphs: [
      "La société S2PI a été créée en 2014. Il s'agit d'une société de fabrication d'isolants à base de laine de laitier destinés au marché de l'isolation thermique, acoustique et de protection incendie des parois horizontales tels que les planchers. Ce marché de la projection est traditionnel depuis plus de 80 ans.",
      "S2PI est le second acteur et représente environ un tiers du marché soit 20 millions de m² de surfaces isolées par la projection. S2PI est aussi distributeur de produits comme les panneaux isolants destinés à la protection incendie ainsi que la peinture intumescente."
    ]
  },

  slider: {
    images: [
      {
        src: "/images/slider-image/s2pi-chantiers-01.jpg",
        title: "s2pi-chantiers-01",
        alt: "Chantier S2PI - Isolation thermique par projection",
      },
      {
        src: "/images/slider-image/s2pi-chantiers-02.jpg",
        title: "s2pi-chantiers-02",
        alt: "Chantier S2PI - Installation d'isolation industrielle",
      },
      {
        src: "/images/slider-image/s2pi-chantiers-03.jpg",
        title: "s2pi-chantiers-03",
        alt: "Chantier S2PI - Protection incendie par isolation",
      },
      {
        src: "/images/slider-image/s2pi-chantiers-04.jpg",
        title: "s2pi-chantiers-04",
        alt: "Chantier S2PI - Projet d'isolation thermique",
      },
      {
        src: "/images/slider-image/s2pi-chantiers-05.jpg",
        title: "s2pi-chantiers-05",
        alt: "Chantier S2PI - Travaux d'isolation acoustique",
      },
      {
        src: "/images/slider-image/s2pi-chantiers-06.jpg",
        title: "s2pi-chantiers-06",
        alt: "Chantier S2PI - Isolation de bâtiment industriel",
      },
      {
        src: "/images/slider-image/s2pi-chantiers-07.jpg",
        title: "s2pi-chantiers-07",
        alt: "Chantier S2PI - Projet d'isolation commercial",
      },
      {
        src: "/images/slider-image/s2pi-chantiers-08.jpg",
        title: "s2pi-chantiers-08",
        alt: "Chantier S2PI - Isolation résidentielle",
      },
      {
        src: "/images/slider-image/s2pi-chantiers-012.jpg",
        title: "s2pi-chantiers-012",
        alt: "Chantier S2PI - Installation spécialisée d'isolation",
      },
      {
        src: "/images/slider-image/s2pi-chantiers-013.jpg",
        title: "s2pi-chantiers-013",
        alt: "Chantier S2PI - Techniques avancées d'isolation",
      },
    ]
  },

  commitments: {
    title: "Les engagements majeurs de S2PI vis-à-vis de ses clients :",
    items: [
      "Une entreprise certifiée ISO 9001 pour garantir la constance de la fabrication et de la qualité des produits fabriqués et distribués par S2PI.",
      "Des produits de qualité pour les entreprises zéro casse machine.",
      "Un engagement du respect des délais de livraison.",
      "Des produits fabriqués en France.",
      "Des produits qualifiés dont les performances sont validées par des procès-verbaux d'essais et des certifications délivrées par des organismes tiers indépendants.",
      "Des produits satisfaisant les exigences réglementaires tant en thermique, acoustique, sécurité incendie, qu'en environnement et santé.",
      "Des produits dont les performances sont éligibles aux aides et subventions notamment pour les CEE, MaPrimeRénov...",
      "Des produits dont les performances environnementales et de santé sont évaluées pour permettre de mettre en œuvre la politique des pouvoirs publics sur ces sujets."
    ]
  },

  environmental: {
    paragraphs: [
      "Les engagements et le développement de S2PI sont aussi liés aux politiques environnementales. Depuis les lois Grenelle et la LTECV (Loi de Transition Énergétique pour la Croissance Verte), la nécessité de proposer au marché des solutions complètes d'isolation en neuf comme en rénovation, à la fois fiables sur les performances réalisées sur site et pratiques pour les entreprises, est devenue une évidence. Celle-ci s'est encore affirmée lors de loi Climat et Résilience.",
      "C'est dans ce contexte à la fois d'efficacité énergétique et de sécurité des personnes en matière de sécurité incendie que la société S2PI a décidé de s'investir dans le développement de produits et procédés alliant les performances thermiques et de sécurité incendie tout en tenant compte des impératifs des professionnels pour un apprentissage rapide de la mise en œuvre de ses procédés et une garantie de résultat avérée et contrôlable"
    ]
  },

  associations: {
    title: "La société S2PI est membre d'associations et de syndicats dont elle partage les messages et les convictions",
    subtitle: "",
    items: [
      {
        id: "gtfi",
        title: "GROUPEMENT TECHNIQUE FRANÇAIS CONTRE L'INCENDIE",
        subtitle: "GTFI",
        description: "Le GTFI : GROUPEMENT TECHNIQUE FRANÇAIS CONTRE L'INCENDIE dont la mission principale est de promouvoir la protection passive contre l'incendie et d'engager des actions.",
        points: [
          "Représenter les professionnels de la protection passive contre l'incendie",
          "Concourir au développement des techniques, des produits et des applications pour l'amélioration du comportement au feu des matériaux et promouvoir les métiers de la protection incendie.",
          "Être force de proposition auprès des pouvoirs publics et instances officielles lors de l'élaboration des textes réglementaires, normatifs et les évolutions européennes.",
          "Aider ses adhérents à mettre en œuvre les normes et la législation afin de leur permettre d'adapter et maîtriser l'évolution de leurs produits.",
          "Mettre en place des liens avec les laboratoires d'essais, centres techniques, bureaux d'étude et de contrôle pour susciter des partenariats technologiques et des études sur les produits et matériaux classés au feu.",
          "Participer à l'élaboration de documents tels que les DTU et les règles ou guides professionnels afin de développer des produits et prestations de qualité conformes aux normes européennes et aux règlements nationaux.",
          "Permettre à ses adhérents, d'être au cœur d'un réseau d'informations et de partage d'expérience et de savoir-faire unique dans leur métier de la protection incendie.",
          "Renforcer l'image de la profession par ses actions d'information et de communication : organisation de manifestations"
        ]
      },
      {
        id: "sni",
        title: "SYNDICAT NATIONAL DE L'ISOLATION",
        subtitle: "SNI",
        description: "Le SNI : Syndicat national de l'isolation qui regroupe l'expertise consolidée depuis plus de 80 années est une organisation professionnelle dont l'objet social est de promouvoir la filière professionnelle de l'isolation thermique et acoustique en France ainsi qu'en Europe et d'accompagner ses adhérents dans les domaines techniques, juridiques et sociaux.",
        points: [
          "Le SNI réunit aujourd'hui près de 200 adhérents répartis en trois collèges : entreprises, fabricants/distributeurs et associés (organismes de formation, experts juridiques, etc.) qui apportent chacun leurs compétences pour valoriser leurs métiers tant dans l'industrie que dans le secteur du bâtiment.",
          "Représenté auprès des ministères, dans les commissions de normalisation, les comités de qualification et de certification, le SNI est un acteur privilégié pour proposer et apporter des solutions globales telles que les performances acoustiques, les économies d'énergie et la réduction des émissions de CO2.",
          "Le SNI promeut aujourd'hui sept métiers complémentaires."
        ]
      },
      {
        id: "symbiote",
        title: "SYMBIOTE MOUVEMENT",
        subtitle: "SYMBIOTE",
        description: "Le SYMBIOTE MOUVEMENT (Syndicat Multi Branches des Industries et des Opérateurs de la Transition Énergétique) est un regroupement d'acteurs s'engageant pour une transition énergétique maitrisée et de qualité. Le mouvement poursuit une seule ambition : permettre au plus grand nombre de bénéficier de travaux d'économies d'énergie.",
        points: [
          "Valoriser et démocratiser l'ensemble des dispositifs d'aides existants.",
          "La formation, un enjeu majeur pour les acteurs de la rénovation énergétique",
          "Les enjeux environnementaux, le plan de relance, la feuille de route de la rénovation énergétique et les engagements de la France à réduire les consommations d'énergie nécessitent que la filière professionnelle de la rénovation se structure, qu'elle investisse dans la montée en compétence de ses acteurs et qu'elle définisse les critères d'exigences et de qualité."
        ]
      }
    ]
  }
};
