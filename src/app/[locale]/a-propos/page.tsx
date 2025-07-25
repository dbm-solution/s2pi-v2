import { ImageSlider } from "@/components/ui/slider/image-slider/imageSlider";
import { Typography } from "@/components/ui/typography/typography";
import { ReactNode } from "react";

interface AProposPageProps {
  params: {
    locale: string;
  };
}

  // Sample images for the slider
  const sampleImages = [
    {
      src: "/placeholder.svg?height=600&width=800&text=Construction Site 1",
      title: "s2pi-chantiers-01",
      alt: "Construction site showing insulation work",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Construction Site 2",
      title: "s2pi-chantiers-02",
      alt: "Industrial insulation installation",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Construction Site 3",
      title: "s2pi-chantiers-03",
      alt: "Fire protection insulation",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Construction Site 4",
      title: "s2pi-chantiers-04",
      alt: "Thermal insulation project",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Construction Site 5",
      title: "s2pi-chantiers-05",
      alt: "Acoustic insulation work",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Construction Site 6",
      title: "s2pi-chantiers-06",
      alt: "Industrial building insulation",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Construction Site 7",
      title: "s2pi-chantiers-07",
      alt: "Commercial insulation project",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Construction Site 8",
      title: "s2pi-chantiers-08",
      alt: "Residential insulation work",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Construction Site 9",
      title: "s2pi-chantiers-09",
      alt: "Specialized insulation installation",
    },
    {
      src: "/placeholder.svg?height=600&width=800&text=Construction Site 10",
      title: "s2pi-chantiers-10",
      alt: "Advanced insulation techniques",
    },
  ]

export default function AProposPage({ params }: AProposPageProps) {
  return (

    <div>
      <Typography className="heading-primary text-s2pi-text-heading mb-lg">
        UNE ENTREPRISE À VOTRE ÉCOUTE
      </Typography>

      <div className="grid-responsive-2">
        <div className="grid-item">
          <Typography>
            La société S2PI a été créée en 2014.
            Il s’agit d’une société de fabrication
            d’isolants à base de laine de laitier
            destinés au marché de l’isolation thermique,
            acoustique et de protection incendie des parois
            horizontales tels que les planchers. Ce marché de
            la projection est traditionnel depuis plus de 80 ans.
          </Typography>
        </div>
        <div className="grid-item">
          <Typography >
            S2PI est le second acteur et représente environ un tiers du marché soit 20 millions de m² de surfaces isolées par la projection. S2PI est aussi distributeur de produits comme les panneaux isolants destinés à la protection incendie ainsi que la peinture intumescente.          </Typography>
        </div>
      </div>
      <ImageSlider images={sampleImages} />


    </div>



  );
}