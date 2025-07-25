import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions Isolation Thermique | S2PI',
  description: 'INNOSPRAY-FTH - Isolation thermique par projection pour dalles béton, planchers à poutrelles et hourdis. Solutions S2PI pour l\'efficacité énergétique.',
  keywords: 'isolation thermique, projection, dalles béton, INNOSPRAY-FTH, efficacité énergétique, S2PI'
};

export default function ThermalSolutionsPage() {
  return (
    <div className="min-h-screen bg-s2pi-background-body">
      {/* Hero Section */}
      <div className="bg-exterior-thermal bg-overlay">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-s2pi-text-primary mb-6">
              Solutions Isolation Thermique
            </h1>
            <p className="text-xl text-s2pi-text-secondary leading-relaxed">
              L'isolation par projection de laine de laitier, la solution pour l'efficacité énergétique
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-s2pi-text-primary mb-6">
              INNOSPRAY-FTH - Isolation Thermique par Projection
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-s2pi-text-secondary leading-relaxed mb-6">
                <strong>INNOSPRAY-FTH</strong> est destiné à l'isolation thermique par projection des dalles en béton, 
                des planchers à poutrelles et hourdis béton, des planchers béton à bac collaborant en acier.
              </p>
              <div className="bg-s2pi-blue/5 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-s2pi-blue mb-4">Avantages clés :</h3>
                <ul className="list-disc list-inside space-y-2 text-s2pi-text-secondary">
                  <li>Limite les ponts thermiques</li>
                  <li>Évite tout percement dans la dalle</li>
                  <li>Particulièrement adapté pour les dalles avec passage des réseaux</li>
                  <li>Idéal pour les dalles précontraintes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button className="bg-s2pi-red hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200 mr-4">
              En savoir plus
            </button>
            <button className="bg-white border-2 border-s2pi-blue text-s2pi-blue hover:bg-s2pi-blue hover:text-white font-medium py-3 px-8 rounded-md transition-colors duration-200">
              Télécharger la fiche technique
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
