import { MainLayout } from "@/components/layout/main-layout/MainLayout";

interface ProduitsFibreuxDeProjectionLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function ProduitsFibreuxDeProjectionLayout({ children, params }: ProduitsFibreuxDeProjectionLayoutProps) {
  const { locale } = await params;
  
  return (
    <MainLayout >
      {children}
    </MainLayout>
  );
}