import { MainLayout } from "@/components/layout/main-layout/MainLayout";

interface HomeLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function AboutLayout({ children, params }: HomeLayoutProps) {
  const { locale } = await params;
  
  return (
    <MainLayout >
      {children}
    </MainLayout>
  );
}