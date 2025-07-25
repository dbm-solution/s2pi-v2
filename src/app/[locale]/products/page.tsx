import { ReactNode } from "react";

interface ProductsPageProps {
  params: {
    locale: string;
  };
}

export default function ProductsPage({ params }: ProductsPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        Products - {params.locale.toUpperCase()}
      </h1>
    </div>
  );
}
