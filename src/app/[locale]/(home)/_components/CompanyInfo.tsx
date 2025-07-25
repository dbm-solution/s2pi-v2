'use client';

import { Typography } from "@/components/ui/typography/typography";

export const CompanyInfo = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="container-s2pi">
        <Typography variant="h1" className="mb-16 text-center">
          S2PI - VOTRE PARTENAIRE EN ISOLATION
        </Typography>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Column 1 - Company History */}
          <div className="space-y-6">
            <Typography variant="body" className="text-justify">
              <strong>S2PI, c'est un projet industriel initié par Jean-Luc BELLI</strong>, fort de plus de deux décennies d'expérience dans le secteur de la production d'isolants. S2PI, c'est aussi une équipe de collaborateurs unis par la volonté de donner le meilleur d'eux-même pour que les clients profitent de la qualité des produits de l'entreprise. S2PI améliore constamment ses produits et ses process internes pour s'adapter aux évolutions de la demande, du marché et des normes.
            </Typography>
            
            {/* Industrial facility image */}
            <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/images/s2pi-facility.jpg" 
                alt="Installation industrielle S2PI" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Column 2 - Company Details */}
          <div>
            <Typography variant="body" className="text-justify">
              Installée dans le département du Rhône, <strong>S2PI est une entreprise humaine innovante</strong> à taille humaine qui fabrique et distribue des isolants thermiques, acoustiques et de protection incendie à base de laine de laitier. S2PI s'inscrit dans une recherche permanente d'amélioration de ses process de production. S2PI met le client au cœur de ses préoccupations. Chaque produit est conforme aux besoins et aux normes du marché, il est soumis à un contrôle de qualité extrêmement rigoureux par des laboratoires d'essais accrédités (EFECTIS, LNE). Nos produits sont certifiés ACERMI et font l'objet d'Avis Techniques délivrés par le CCFAT en l'absence de DTU.
            </Typography>
          </div>

          {/* Column 3 - Philosophy & Certifications */}
          <div>
            <Typography variant="h4" className="mb-6 text-center text-[#2d2d2d]">
              Notre philosophie
            </Typography>
            
            <ul className="space-y-4 mb-8 text-left">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#b52626] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <Typography variant="body" as="span" className="text-justify">
                  Offrir à nos clients la garantie de la qualité et la performance de nos produits
                </Typography>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#b52626] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <Typography variant="body" as="span" className="text-justify">
                  Nos produits mis sur le marché sont certifiés
                </Typography>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#b52626] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <Typography variant="body" as="span" className="text-justify">
                  Respecter nos engagements sur les délais de livraison
                </Typography>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#b52626] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <Typography variant="body" as="span" className="text-justify">
                  Fabriquer nos produits en France et garantir la constance de leur qualité, entreprise certifiée ISO 9001
                </Typography>
              </li>
            </ul>

            {/* Bureau Veritas Certification Badge */}
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
  );
}; 