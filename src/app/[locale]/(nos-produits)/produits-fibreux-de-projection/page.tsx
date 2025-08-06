import type { Metadata } from "next"
import { MainLayout } from "@/components/layout/main-layout/MainLayout"
import { InfoCard } from "@/components/ui/cards/info-card/info-card"
import { ProductCard } from "@/components/ui/cards/ProductCard"
import { RegularButton } from "@/components/ui/buttons/regular-button/regular-button"
import { ASSETS } from "@/lib/assets"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { PDFLink } from "@/components/ui/PDFLink"

export const metadata: Metadata = {
  title: "Isolation Thermique par l'Extérieur - S2PI",
  description:
    "Solutions d'isolation thermique par l'extérieur avec nos produits innovants iTarn et systèmes de projection.",
  keywords: "isolation thermique extérieur, iTarn, projection thermique, économies énergie",
}

const thermalInsulationProducts = [
  {
    id: "itarn",
    name: "iTarn",
    category: "Isolation Thermique",
    description: "Solution innovante d'isolation thermique par projection pour l'extérieur des bâtiments.",
    features: [
      "Conductivité thermique λ = 0,034 W/m.K",
      "Résistance au feu Euroclasse E",
      "Application par projection",
      "Épaisseur modulable selon besoins",
    ],
    applications: ["Façades extérieures", "Murs de refend", "Isolation continue", "Rénovation énergétique"],
    technicalSpecs: {
      density: "65 kg/m³",
      thermalConductivity: "0,034 W/m.K",
      fireResistance: "Euroclasse E",
      thickness: "20 à 200 mm",
    },
    pdfUrl: ASSETS.pdfs.itarn,
    imageUrl: "/images/products/itarn-isolation.jpg",
  },
  {
    id: "innospray-fth",
    name: "INNOSPRAY FTH",
    category: "Isolation Thermique",
    description: "Produit fibreux de projection pour isolation thermique haute performance.",
    features: [
      "Excellente performance thermique",
      "Application rapide par projection",
      "Adhérence optimale",
      "Résistance mécanique élevée",
    ],
    applications: ["Planchers béton", "Structures métalliques", "Isolation acoustique", "Protection thermique"],
    technicalSpecs: {
      density: "70 kg/m³",
      thermalConductivity: "0,035 W/m.K",
      fireResistance: "A2-s1,d0",
      thickness: "10 à 150 mm",
    },
    pdfUrl: ASSETS.pdfs.innosprayFTH.plancher,
    imageUrl: "/images/products/innospray-fth.jpg",
  },
]

const advantages = [
  {
    title: "Performance Énergétique",
    description: "Réduction significative des déperditions thermiques et des coûts de chauffage.",
    icon: "🔥",
  },
  {
    title: "Application Rapide",
    description: "Mise en œuvre par projection permettant un gain de temps considérable.",
    icon: "⚡",
  },
  {
    title: "Continuité d'Isolation",
    description: "Suppression des ponts thermiques grâce à l'application continue.",
    icon: "🔗",
  },
  {
    title: "Durabilité",
    description: "Solutions pérennes avec une excellente tenue dans le temps.",
    icon: "🛡️",
  },
]

export default function IsolationThermiqueExterieurPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Isolation Thermique par l'Extérieur</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Solutions innovantes de projection thermique pour optimiser les performances énergétiques de vos bâtiments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RegularButton variant="default" size="lg">
                Découvrir nos solutions
              </RegularButton>
              <RegularButton variant="outline" size="lg">
                Demander un devis
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
              title="L'isolation thermique par l'extérieur"
              subtitle="Une solution performante pour l'efficacité énergétique"
            />
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                L'isolation thermique par l'extérieur (ITE) représente une solution technique de premier plan pour
                améliorer les performances énergétiques des bâtiments. Nos produits de projection permettent une mise en
                œuvre rapide et efficace, garantissant une continuité d'isolation optimale.
              </p>
              <p className="text-lg leading-relaxed">
                Grâce à nos technologies innovantes comme l'iTarn et les systèmes INNOSPRAY, nous proposons des
                solutions adaptées à tous types de supports et de configurations architecturales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Les avantages de nos solutions" subtitle="Performance, rapidité et durabilité" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <InfoCard
                key={index}
                title={advantage.title}
                description={advantage.description}
                icon={advantage.icon}
                variant="primary"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nos produits d'isolation thermique extérieure"
            subtitle="Solutions techniques haute performance"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {thermalInsulationProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                category={product.category}
                description={product.description}
                features={product.features}
                applications={product.applications}
                technicalSpecs={product.technicalSpecs}
                pdfUrl={product.pdfUrl}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle title="Informations techniques" subtitle="Spécifications et performances" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Technical Specs */}
              <div className="space-y-8">
                <InfoCard
                  title="Performances thermiques"
                  description="Nos solutions d'isolation thermique par l'extérieur offrent des performances exceptionnelles"
                  variant="primary"
                >
                  <ul className="space-y-3 text-sm text-gray-600 mt-4">
                    <li className="flex justify-between">
                      <span>Conductivité thermique λ:</span>
                      <span className="font-semibold">0,034 - 0,035 W/m.K</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Résistance thermique R:</span>
                      <span className="font-semibold">Jusqu'à 5,7 m².K/W</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Épaisseur d'application:</span>
                      <span className="font-semibold">10 à 200 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Densité:</span>
                      <span className="font-semibold">65 - 70 kg/m³</span>
                    </li>
                  </ul>
                </InfoCard>

                <InfoCard
                  title="Mise en œuvre"
                  description="Application par projection pour une mise en œuvre rapide et efficace"
                  variant="primary"
                >
                  <ul className="space-y-2 text-sm text-gray-600 mt-4">
                    <li>• Application par machine de projection</li>
                    <li>• Adhérence directe sur support</li>
                    <li>• Finition lisse ou texturée</li>
                    <li>• Temps de séchage optimisé</li>
                  </ul>
                </InfoCard>
              </div>

              {/* Right Column - Applications */}
              <div className="space-y-8">
                <InfoCard
                  title="Domaines d'application"
                  description="Solutions adaptées à tous types de bâtiments et de supports"
                  variant="primary"
                >
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800 mb-2">Bâtiments</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Logements collectifs</li>
                        <li>• Maisons individuelles</li>
                        <li>• Bâtiments tertiaires</li>
                        <li>• Constructions industrielles</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800 mb-2">Supports</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Béton</li>
                        <li>• Maçonnerie</li>
                        <li>• Structures métalliques</li>
                        <li>• Panneaux préfabriqués</li>
                      </ul>
                    </div>
                  </div>
                </InfoCard>

                <InfoCard
                  title="Certifications et normes"
                  description="Conformité aux réglementations en vigueur"
                  variant="primary"
                >
                  <div className="space-y-3 mt-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                        CE
                      </span>
                      <span className="text-sm text-gray-600">Marquage CE</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                        A
                      </span>
                      <span className="text-sm text-gray-600">Certification ACERMI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-sm">
                        AT
                      </span>
                      <span className="text-sm text-gray-600">Avis Technique CSTB</span>
                    </div>
                  </div>
                </InfoCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Documentation technique" subtitle="Téléchargez nos fiches produits et certifications" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PDFLink
              title="Fiche technique iTarn"
              description="Spécifications complètes du produit iTarn"
              href={ASSETS.pdfs.itarn}
              size="2.1 MB"
            />
            <PDFLink
              title="INNOSPRAY FTH - Plancher"
              description="Application sur planchers béton"
              href={ASSETS.pdfs.innosprayFTH.plancher}
              size="1.8 MB"
            />
            <PDFLink
              title="Performances acoustiques"
              description="Données acoustiques INNOSPRAY FTH"
              href={ASSETS.pdfs.innosprayFTH.acoustique}
              size="1.5 MB"
            />
            <PDFLink
              title="Certificat ACERMI"
              description="Certification ACERMI INNOSPRAY FTH"
              href={ASSETS.pdfs.acermiCertificat}
              size="0.9 MB"
            />
            <PDFLink
              title="Avis Technique CSTB"
              description="Avis Technique 2015-344_V1"
              href={ASSETS.pdfs.avisTechnique}
              size="3.2 MB"
            />
            <PDFLink
              title="Certification ATEX"
              description="Certification ATEX iTarn"
              href={ASSETS.pdfs.atexCertification}
              size="1.2 MB"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'une solution d'isolation thermique ?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Nos experts sont à votre disposition pour vous conseiller et vous accompagner dans vos projets d'isolation
            thermique par l'extérieur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RegularButton variant="default" size="lg">
              Demander un devis
            </RegularButton>
            <RegularButton variant="outline" size="lg">
              Nous contacter
            </RegularButton>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
