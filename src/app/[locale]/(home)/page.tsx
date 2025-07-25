'use client';
import { SocialButton } from "@/components/ui/buttons/social-button/Social-button";
import { InfoCard } from "@/components/ui/cards/info-card/info-card";
import { CelebrationIcon } from "@/components/ui/icons/card-icons/card-icons";
import { FacebookIcon } from "@/components/ui/icons/socials/Facebook-icon";
import { S2PIHeroSlider } from "@/components/ui/slider/s2pi-hero-slider";
import { Typography } from "@/components/ui/typography/typography";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">

        <InfoCard
          variant="primary"
          shape="rectangle"
          size="lg"
          layout="default"
          textAlign="center"
          animation="none"
          title="Bonne année 2025 à tous nos clients et partenaires !"
          description="Nous savons que nous sommes un peu en retard, mais mieux vaut tard que jamais ! Nous vous souhaitons une année remplie de bonheur, de santé et de succès. Que cette nouvelle année soit synonyme de nouvelles opportunités, de moments inoubliables et de réalisations personnelles et professionnelles."
          footer={
            <p className="text-sm opacity-90 font-medium">
              Merci à tous pour votre soutien et votre confiance. Ensemble, faisons de 2025 une année exceptionnelle !
            </p>
          }
          fullWidth
        />

        {/* S2PI Company Information Section - Three Columns */}
        <div className="mt-16 mb-16">
          <Typography variant="h1" className="mb-8">
            S2PI - VOTRE PARTENAIRE EN ISOLATION
          </Typography>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column 1 - Company History */}
            <div>
              <Typography variant="body" className="mb-4">
                <Typography variant="bodyBold" as="span">S2PI, c'est un projet industriel initié par Jean-Luc BELLI</Typography>, fort de plus de deux décennies d'expérience dans le secteur de la production d'isolants. S2PI, c'est aussi une équipe de collaborateurs unis par la volonté de donner le meilleur d'eux-même pour que les clients profitent de la qualité des produits de l'entreprise. S2PI améliore constamment ses produits et ses process internes pour s'adapter aux évolutions de la demande, du marché et des normes.
              </Typography>
              
              {/* Industrial facility image placeholder */}
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Image de l'installation industrielle</span>
              </div>
            </div>

            {/* Column 2 - Company Details */}
            <div>
              <Typography variant="body">
                Installée dans le département du Rhône, <Typography variant="bodyBold" as="span">S2PI est une entreprise humaine innovante</Typography> à taille humaine qui fabrique et distribue des isolants thermiques, acoustiques et de protection incendie à base de laine de laitier. S2PI s'inscrit dans une recherche permanente d'amélioration de ses process de production. S2PI met le client au cœur de ses préoccupations. Chaque produit est conforme aux besoins et aux normes du marché, il est soumis à un contrôle de qualité extrêmement rigoureux par des laboratoires d'essais accrédités (EFECTIS, LNE). Nos produits sont certifiés ACERMI et font l'objet d'Avis Techniques délivrés par le CCFAT en l'absence de DTU.
              </Typography>
            </div>

            {/* Column 3 - Philosophy & Certifications */}
            <div>
              <Typography variant="h4" className="mb-4">
                Notre philosophie
              </Typography>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-s2pi-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <Typography variant="body" as="span">
                    Offrir à nos clients la garantie de la qualité et la performance de nos produits
                  </Typography>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-s2pi-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <Typography variant="body" as="span">
                    Nos produits mis sur le marché sont certifiés
                  </Typography>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-s2pi-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <Typography variant="body" as="span">
                    Respecter nos engagements sur les délais de livraison
                  </Typography>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-s2pi-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <Typography variant="body" as="span">
                    Fabriquer nos produits en France et garantir la constance de leur qualité, entreprise certifiée ISO 9001
                  </Typography>
                </li>
              </ul>

              {/* ISO Certification Badge */}
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img 
                    src="/images/bureau-veritas-logo.jpg" 
                    alt="Bureau Veritas ISO 9001:2015 Certification" 
                    className="h-20 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}