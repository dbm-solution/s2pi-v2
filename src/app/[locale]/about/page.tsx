import { ReactNode } from "react";

interface AboutPageProps {
  params: {
    locale: string;
  };
}

export default function AboutPage({ params }: AboutPageProps) {
  return (
    <div className="container-responsive section-padding">
      <h1 className="heading-primary text-s2pi-text-heading mb-lg">
        About Us - {params.locale}
      </h1>
    </div>
  );
}