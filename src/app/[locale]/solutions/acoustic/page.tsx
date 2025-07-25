import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions Acoustiques - Isolation Acoustique & Thermique | S2PI',
  description: 'Découvrez nos solutions d\'isolation acoustique et thermique à base de laine de laitier. Correction acoustique pour bâtiments résidentiels et tertiaires.',
  keywords: 'isolation acoustique, correction acoustique, isolation thermique, laine de laitier, S2PI'
};

export default function AcousticSolutionsPage() {
  return (
    <div className="min-h-screen bg-s2pi-background-body">
      {/* Hero Section */}
      <div className="bg-s2pi-pattern bg-overlay">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-s2pi-text-primary mb-6">
              Solutions Acoustiques
            </h1>
            <p className="text-xl text-s2pi-text-secondary leading-relaxed">
              Correction acoustique – Isolation acoustique & thermique
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-s2pi-text-primary mb-6">
              La solution idéale pour les isolements horizontaux
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-s2pi-text-secondary leading-relaxed mb-6">
                La solution idéale pour les isolements horizontaux entre logement et locaux d'activités 
                ou logement et garages collectifs ou individuels.
              </p>
              <p className="text-s2pi-text-secondary leading-relaxed mb-6">
                <strong>Les solutions S2PI</strong> sont adaptées tant aux ouvrages neufs qu'existants 
                en secteur résidentiel et non résidentiel.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button className="bg-s2pi-red hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
