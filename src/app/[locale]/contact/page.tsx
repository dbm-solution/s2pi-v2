import { ReactNode } from "react";

interface ContactPageProps {
  params: {
    locale: string;
  };
}

export default function ContactPage({ params }: ContactPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        Contact Us - {params.locale.toUpperCase()}
      </h1>
    </div>
  );
}
