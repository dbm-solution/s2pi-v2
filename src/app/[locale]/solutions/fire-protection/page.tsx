import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions Protection Sécurité Incendie | S2PI',
  description: 'INNOSPRAY-FFM - Enduits de protection incendie pour structures acier. Solutions S2PI pour la protection au feu des bâtiments.',
  keywords: 'protection incendie, enduits protection feu, INNOSPRAY-FFM, structures acier, sécurité incendie, S2PI'
};

export default function FireProtectionPage() {
  return (
    <div className="min-h-screen bg-s2pi-background-body">
      {/* Hero Section */}
      <div className="bg-thermal-section bg-overlay">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-s2pi-text-primary mb-6">
              Solutions Protection Sécurité Incendie
            </h1>
            <p className="text-xl text-s2pi-text-secondary leading-relaxed">
              Protection passive au feu des structures pour la sécurité des bâtiments
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-s2pi-text-primary mb-6">
              INNOSPRAY-FFM - Protection au Feu des Structures Acier
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-s2pi-text-secondary leading-relaxed mb-6">
                Les enduits de protection incendie sont des revêtements projetés sur support de type métal déployé, 
                à base de laine minérale et liants spéciaux destiné à la protection au feu des planchers non exposés aux intempéries.
              </p>
              <div className="bg-s2pi-red/5 p-6 rounded-lg mb-6">
                <p className="text-s2pi-text-secondary leading-relaxed mb-4">
                  <strong>INNOSPRAY-FFM</strong> est un revêtement projeté, à base de laine minérale de laitier 
                  et de liants spéciaux, destiné à la protection au feu des structures acier non exposées aux intempéries.
                </p>
                <h3 className="text-lg font-semibold text-s2pi-red mb-4">Caractéristiques techniques :</h3>
                <ul className="list-disc list-inside space-y-2 text-s2pi-text-secondary">
                  <li>Base laine minérale de laitier</li>
                  <li>Liants spéciaux haute performance</li>
                  <li>Application par projection</li>
                  <li>Protection structures acier intérieures</li>
                  <li>Résistance au feu certifiée</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-s2pi-text-primary mb-4">
                Protection Passive
              </h3>
              <p className="text-s2pi-text-secondary">
                La protection passive reste la plus efficace et se décide dès le début du projet 
                en prévoyant des matériaux non combustibles.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-s2pi-text-primary mb-4">
                Efficacité Énergétique
              </h3>
              <p className="text-s2pi-text-secondary">
                La protection passive s'allie avec l'efficacité énergétique pour répondre 
                aux objectifs de lutte contre le changement climatique.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button className="bg-s2pi-red hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200 mr-4">
              En savoir plus
            </button>
            <button className="bg-white border-2 border-s2pi-red text-s2pi-red hover:bg-s2pi-red hover:text-white font-medium py-3 px-8 rounded-md transition-colors duration-200">
              Télécharger la documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
