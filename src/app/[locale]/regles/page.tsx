import { ReactNode } from "react";

interface ReglesPageProps {
  params: {
    locale: string;
  };
}

export default function ReglesPage({ params }: ReglesPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        Rules - {params.locale.toUpperCase()}
      </h1>
    </div>
  );
}
