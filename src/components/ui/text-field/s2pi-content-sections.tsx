"use client"

import React from "react"
import { S2PIHeading2, S2PIBody, S2PIList, S2PIStrong, S2PITwoColumn } from "../typography/typography"
import {
  S2PITextSeparator,
  S2PIDottedSeparator,
  S2PILineSeparator,
  S2PISpacedSeparator,
  S2PIContentDivider,
} from "./s2pi-separators"
import { cn } from "@/lib/utils"

export const S2PIContentShowcase = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const technicalQuestions = [
      "Quel produit ?",
      "Quel PV ?",
      "Quelle épaisseur* ? (*La résistance thermique R dépend de l'épaisseur et de la conductivité thermique de l'Innospray).",
      "Note de calcul ?",
      "Puis-je répondre à la contrainte technique ?",
      "CF 1 heure, que dois-appliquer ?",
      "CF 2 heure, que dois-appliquer ?",
    ]

    return (
      <div ref={ref} className={cn("bg-white", className)} {...props}>
        {/* Service Client Section */}
        <S2PIContentDivider title="SERVICE CLIENT S2PI" showTopLine={false} showBottomLine={false}>
          <S2PIBody className="text-center max-w-4xl mx-auto">
            Pionnier dans le domaine de la fabrication d'isolants projetés, nous avons pour ambition de proposer le
            meilleur Service Client dans le secteur d'isolants thermiques à base de laine de laitier mais également dans
            la protection incendie et phonique.
          </S2PIBody>
        </S2PIContentDivider>

        <S2PIDottedSeparator />

        {/* Satisfaction Section */}
        <S2PISpacedSeparator>
          <S2PITwoColumn
            leftContent={
              <div>
                <S2PIHeading2 className="text-left">
                  LA SATISFACTION DE NOS CLIENTS - <S2PIStrong large>UN RÉEL OBJECTIF</S2PIStrong>
                </S2PIHeading2>

                <S2PIBody>
                  <S2PIStrong>
                    L'amélioration de la qualité de nos services est un objectif primordial pour l'ensemble de l'équipe
                    S2PI.
                  </S2PIStrong>
                </S2PIBody>

                <S2PIBody>
                  La satisfaction de nos clients dépend non seulement de la qualité des conseils prodigués concernant le
                  choix de vos solutions techniques, mais aussi et surtout, des services complémentaires que nous nous
                  efforçons de développer et d'améliorer jour après jour.
                </S2PIBody>
              </div>
            }
            rightContent={
              <div>
                <S2PIBody>
                  En effet, entreprendre une prestation de travaux pose souvent plusieurs interrogations comme :
                </S2PIBody>
                <S2PIList items={technicalQuestions} />
              </div>
            }
          />
        </S2PISpacedSeparator>

        <S2PILineSeparator />

        {/* Additional Content Sections */}
        <S2PIContentDivider
          title="NOS SERVICES COMPLÉMENTAIRES"
          subtitle="Une approche globale pour vos projets d'isolation"
        >
          <S2PITwoColumn
            leftContent={
              <div>
                <S2PIHeading2 className="text-left">Conseil Technique</S2PIHeading2>
                <S2PIBody>
                  Nos experts techniques vous accompagnent dans le choix des solutions les plus adaptées à vos
                  contraintes spécifiques. Nous analysons vos besoins en isolation thermique, protection incendie et
                  correction acoustique.
                </S2PIBody>
                <S2PIBody>
                  <S2PIStrong>Bénéficiez de notre expertise</S2PIStrong> acquise sur plus de 20 ans d'expérience dans
                  l'isolation projetée.
                </S2PIBody>
              </div>
            }
            rightContent={
              <div>
                <S2PIHeading2 className="text-left">Support Technique</S2PIHeading2>
                <S2PIBody>
                  Un support technique réactif et disponible pour répondre à toutes vos questions pendant et après
                  l'application de nos produits.
                </S2PIBody>
                <S2PIList
                  items={[
                    "Assistance téléphonique dédiée",
                    "Intervention sur site si nécessaire",
                    "Documentation technique complète",
                    "Formation des applicateurs",
                  ]}
                />
              </div>
            }
          />
        </S2PIContentDivider>

        <S2PITextSeparator text="Nos Domaines d'Expertise" />

        <S2PISpacedSeparator>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <S2PIHeading2>Isolation Thermique</S2PIHeading2>
              <S2PIBody>
                Solutions d'isolation thermique haute performance à base de laine de laitier pour tous types de
                bâtiments.
              </S2PIBody>
            </div>

            <div className="text-center">
              <S2PIHeading2>Protection Incendie</S2PIHeading2>
              <S2PIBody>
                Systèmes de protection passive contre l'incendie certifiés pour structures métalliques et béton.
              </S2PIBody>
            </div>

            <div className="text-center">
              <S2PIHeading2>Correction Acoustique</S2PIHeading2>
              <S2PIBody>Solutions d'isolation phonique pour améliorer le confort acoustique de vos espaces.</S2PIBody>
            </div>
          </div>
        </S2PISpacedSeparator>

        <S2PIDottedSeparator />

        {/* Quality Commitment */}
        <S2PIContentDivider title="NOTRE ENGAGEMENT QUALITÉ" showBottomLine={false}>
          <S2PIBody className="text-center">
            <S2PIStrong large>La qualité de nos produits et services est au cœur de nos préoccupations.</S2PIStrong>
          </S2PIBody>

          <S2PITwoColumn
            leftContent={
              <div>
                <S2PIHeading2 className="text-left">Certifications</S2PIHeading2>
                <S2PIList
                  items={[
                    "Certification CE des produits",
                    "Procès-verbaux d'essais officiels",
                    "Marquage CE selon EN 13501-2",
                    "Certification ISO 9001",
                  ]}
                />
              </div>
            }
            rightContent={
              <div>
                <S2PIHeading2 className="text-left">Contrôle Qualité</S2PIHeading2>
                <S2PIList
                  items={[
                    "Contrôle qualité en continu",
                    "Tests de performance réguliers",
                    "Traçabilité complète des produits",
                    "Amélioration continue des processus",
                  ]}
                />
              </div>
            }
          />
        </S2PIContentDivider>
      </div>
    )
  },
)

S2PIContentShowcase.displayName = "S2PIContentShowcase"
