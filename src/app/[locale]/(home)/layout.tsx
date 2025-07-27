import React from 'react';
import LandingLayout from '@/components/layout/landing-layout/LandingLayout';

interface HomeLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function HomeLayout({ children, params }: HomeLayoutProps) {
  const { locale } = await params;
  
  return (
    <LandingLayout 
      locale={locale}
      showTopBar={true}
      showHeader={true}
      showNavigation={true}
      showFooter={true}
    >
      {children}
    </LandingLayout>
  );
}