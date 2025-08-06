import { MainLayout } from "@/components/layout/main-layout/MainLayout";

interface ProduitsPateuxDeProjectionLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function ProduitsPateuxDeProjectionLayout({ children, params }: ProduitsPateuxDeProjectionLayoutProps) {
  const { locale } = await params;
  
  return (
    <MainLayout >
      {children}
    </MainLayout>
  );
}