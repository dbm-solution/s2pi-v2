// src/app/[locale]/(nos-produits)/isolation-thermique-par-lexterieur/page.tsx
import type { Metadata } from "next";
import ThermalInsulationContent from "./_components/ThermalInsulationContent";

export const metadata: Metadata = {
  title: "Isolation Thermique par l'Extérieur - S2PI",
  description: "Solutions d'isolation thermique par l'extérieur avec nos produits innovants iTarn et systèmes de projection.",
  keywords: "isolation thermique extérieur, iTarn, projection thermique, économies énergie",
};

export default function IsolationThermiqueExterieurPage() {
  return <ThermalInsulationContent />;
}