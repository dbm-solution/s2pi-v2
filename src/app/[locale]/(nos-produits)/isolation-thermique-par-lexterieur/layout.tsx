import { MainLayout } from "@/components/layout/main-layout/MainLayout";

interface IsolationThermiqueExterieurLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function IsolationThermiqueExterieurLayout({ children, params }: IsolationThermiqueExterieurLayoutProps) {
  const { locale } = await params;
  
  return (
    <MainLayout >
      {children}
    </MainLayout>
  );
}