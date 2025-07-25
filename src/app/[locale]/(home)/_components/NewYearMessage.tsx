'use client';

import { InfoCard } from "@/components/ui/cards/info-card/info-card";

export const NewYearMessage = () => {
  return (
    <div style={{ maxWidth: '1300px', margin: '70px auto 0 auto' }} className="bg-[#06528a] py-12 px-8">
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
          <p className="text-sm opacity-90 font-medium text-white">
            Merci à tous pour votre soutien et votre confiance. Ensemble, faisons de 2025 une année exceptionnelle !
          </p>
        }
        fullWidth
        className="bg-transparent border-none shadow-none"
      />
    </div>
  );
}; 