import { ReactNode } from "react";

interface SolutionsPageProps {
  params: {
    locale: string;
  };
}

export default function SolutionsPage({ params }: SolutionsPageProps) {
  return (
    <div className="container-responsive section-padding">
      <h1 className="heading-primary text-s2pi-text-heading mb-lg">
        Our Solutions - {params.locale.toUpperCase()}
      </h1>
    </div>
  );
}