import LandingLayout from '@/components/layout/landing-layout/LandingLayout';
import React from 'react';

interface HomeLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function HomeLayout({ children, params }: HomeLayoutProps) {
  const { locale } = await params;
  
  return (
    <LandingLayout>
      {children}
    </LandingLayout>
  );
}