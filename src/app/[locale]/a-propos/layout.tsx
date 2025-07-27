import { MainLayout } from "@/components/layout/main-layout/MainLayout";

interface AProposLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function AProposLayout({ children, params }: AProposLayoutProps) {
  const { locale } = await params;
  
  return (
    <MainLayout >
      {children}
    </MainLayout>
  );
}