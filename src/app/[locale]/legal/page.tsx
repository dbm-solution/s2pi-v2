import { ReactNode } from "react";

interface LegalPageProps {
  params: {
    locale: string;
  };
}

export default function LegalPage({ params }: LegalPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        Legal - {params.locale.toUpperCase()}
      </h1>
    </div>
  );
}
