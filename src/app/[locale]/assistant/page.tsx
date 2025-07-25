import { ReactNode } from "react";

interface AssistantPageProps {
  params: {
    locale: string;
  };
}

export default function AssistantPage({ params }: AssistantPageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        Assistant - {params.locale.toUpperCase()}
      </h1>
    </div>
  );
}
