"use client";

import React from 'react';
import { DottedDivider, HorizontalDottedDivider, VerticalDottedDivider, SectionDivider, HeaderDivider } from '@/components/ui/dotted-divider/DottedDivider';
import { S2PIAccordion, S2PIAccordionItem } from '@/components/ui/accordion.tsx/simple-accordion/simple-accordion';
import { Badge } from '@/components/ui/badge/badge';
import { ActionsButton } from '@/components/ui/buttons/actions-button/actions-button';
import { MenuButton } from '@/components/ui/buttons/menu-button/menu-button';
import { SocialButton } from '@/components/ui/buttons/social-button/Social-button';
import MicroWidgetButton from '@/components/ui/MicroWidgetButton';
import EnquetteButton from '@/components/ui/buttons/enquette/enquette.button';
import SocialIcon from '@/components/ui/buttons/social/SocialIcon';
import { PDFLink } from '@/components/ui/PDFLink';
import { SectionTitle } from '@/components/ui/SectionTitle';
import CertificationBadge from '@/components/ui/CertificationBadge';
import ChevronDown from '@/components/ui/ChevronDown';
import { LanguageSelector } from '@/components/ui/language-selector/language-selector';
import { S2PIProductGrid } from '@/components/ui/product-grid/ui-grid/s2pi-product-grid';
import { PDFImage } from '@/components/ui/pdf-image/pdfImage';
import { InfoCard } from '@/components/ui/cards/info-card/info-card';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/cards/card';
import { ProductCard } from '@/components/ui/cards/ProductCard';
import { S2PILayerSlider } from '@/components/ui/slider/hero-slider/S2PILayerSlider';

export default function UIComponentsShowcase() {
  const sampleProducts = [
    {
      id: '1',
      title: 'ITARN - Isolation Thermique',
      image: '/images/home-page/slider-cards/1/10005.jpg',
      imageAlt: 'ITARN Product',
      link: '/isolation-thermique-par-lexterieur',
      buttonText: 'En savoir +'
    },
    {
      id: '2',
      title: 'Solutions Isolation Thermique',
      image: '/images/home-page/slider-cards/2/10006.jpg',
      imageAlt: 'Thermal Solutions',
      link: '/solutions-isolation-thermique',
      buttonText: 'En savoir +'
    },
    {
      id: '3',
      title: 'Protection Incendie',
      image: '/images/home-page/slider-cards/3/10007.jpg',
      imageAlt: 'Fire Protection',
      link: '/solutions-protection-securite-incendie',
      buttonText: 'En savoir +'
    },
    {
      id: '4',
      title: 'Solutions Acoustiques',
      image: '/images/home-page/slider-cards/4/10008.jpg',
      imageAlt: 'Acoustic Solutions',
      link: '/solutions-acoustiques',
      buttonText: 'En savoir +'
    }
  ];

  return (
    <div className="p-8 ml-64">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">S2PI UI Components Library</h1>
        
        {/* Dotted Dividers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Dotted Dividers</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Basic Dotted Divider</h3>
              <DottedDivider dotCount={20} dotColor="#dc2626" />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">With Text</h3>
              <DottedDivider 
                dotCount={30} 
                dotColor="#1d4572" 
                text="Section" 
                textColor="#1d4572"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Split Configuration</h3>
              <DottedDivider 
                split={{ left: 15, right: 15 }}
                dotColor="#7b6a58"
                text="OR"
                textColor="#7b6a58"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Predefined Variants</h3>
              <div className="space-y-4">
                <SectionDivider dotColor="#13abd1" />
                <HeaderDivider dotColor="#ad0309" text="Header" textColor="#ad0309" />
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Buttons</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Regular Buttons</h3>
              <div className="flex gap-4 flex-wrap">
                <ActionsButton variant="primary">Default</ActionsButton>
                <ActionsButton variant="danger">Destructive</ActionsButton>
                <ActionsButton variant="secondary">Secondary</ActionsButton>
                <MicroWidgetButton href="/test" variant="outline">Outline</MicroWidgetButton>
                <MicroWidgetButton href="/test" variant="ghost">Ghost</MicroWidgetButton>
                <MicroWidgetButton href="/test" variant="primary">Link</MicroWidgetButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Action Buttons</h3>
              <div className="flex gap-4 flex-wrap">
                <ActionsButton variant="primary">Primary</ActionsButton>
                <ActionsButton variant="secondary">Secondary</ActionsButton>
                <ActionsButton variant="success">Success</ActionsButton>
                <ActionsButton variant="warning">Warning</ActionsButton>
                <ActionsButton variant="danger">Danger</ActionsButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Menu Buttons</h3>
              <div className="flex gap-4 flex-wrap">
                <MenuButton variant="default">Default</MenuButton>
                <MenuButton variant="active">Active</MenuButton>
                <MenuButton variant="highlight">Highlight</MenuButton>
                <MenuButton variant="secondary">Secondary</MenuButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Social Buttons</h3>
              <div className="flex gap-4 flex-wrap">
                <SocialButton variant="facebook">Facebook</SocialButton>
                <SocialButton variant="linkedin">LinkedIn</SocialButton>
                <SocialButton variant="email">Email</SocialButton>
                <SocialButton variant="twitter">Twitter</SocialButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Micro Widget Buttons</h3>
              <div className="flex gap-4 flex-wrap">
                <MicroWidgetButton href="/test" variant="primary">Primary</MicroWidgetButton>
                <MicroWidgetButton href="/test" variant="secondary">Secondary</MicroWidgetButton>
                <MicroWidgetButton href="/test" variant="outline">Outline</MicroWidgetButton>
                <MicroWidgetButton href="/test" variant="ghost">Ghost</MicroWidgetButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Enquête Button</h3>
              <EnquetteButton variant="standard" />
            </div>
          </div>
        </section>

        {/* Social Icons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Social Icons</h2>
          <div className="flex gap-4 flex-wrap">
            <SocialIcon platform="linkedin" href="#" variant="s2pi-standard" />
            <SocialIcon platform="facebook" href="#" variant="s2pi-standard" />
            <SocialIcon platform="twitter" href="#" variant="s2pi-standard" />
            <SocialIcon platform="email" href="#" variant="s2pi-standard" />
            <SocialIcon platform="instagram" href="#" variant="s2pi-standard" />
          </div>
        </section>

        {/* Badges */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Badges</h2>
          <div className="flex gap-4 flex-wrap">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        {/* Certification Badges */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Certification Badges</h2>
          <div className="flex gap-4 flex-wrap">
            <CertificationBadge type="thermal" size="md" />
            <CertificationBadge type="fire" size="md" />
            <CertificationBadge type="acoustic" size="md" />
          </div>
        </section>

        {/* Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p>This is a basic card component with header and content.</p>
              </CardContent>
            </Card>
            
            <InfoCard
              title="Info Card"
              description="This is an info card with custom styling and variants."
              variant="primary"
            />
            
            <ProductCard
              name="Sample Product"
              category="Thermal Insulation"
              description="A high-performance thermal insulation product."
              features={["Feature 1", "Feature 2", "Feature 3"]}
              applications={["Application 1", "Application 2"]}
              technicalSpecs={{
                density: "120 kg/m³",
                thermalConductivity: "0.035 W/mK"
              }}
              className="h-full"
            />
          </div>
        </section>

        {/* PDF Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">PDF Components</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">PDF Link</h3>
              <PDFLink
                href="/sample.pdf"
                title="Sample PDF"
                description="Download our sample PDF document"
                variant="card"
              />
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">PDF Image</h3>
              <PDFImage
                title="Technical Documentation"
                description="Complete technical specifications and installation guide"
                pdfUrl="/sample.pdf"
                pdfImageSrc="/images/home-page/10021.jpg"
                pdfImageAlt="PDF Preview"
                imagePosition="left"
                imageSize="a4"
              />
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Product Grid</h2>
          <S2PIProductGrid
            title="Our Products"
            items={sampleProducts}
            columnsPerRow={4}
            enableScrollAnimation={true}
          />
        </section>

        {/* Accordion */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Accordion</h2>
          <S2PIAccordion type="single" variant="primary">
            <S2PIAccordionItem title="Section 1" defaultOpen>
              <p>This is the content for section 1. It can contain any HTML elements.</p>
            </S2PIAccordionItem>
            <S2PIAccordionItem title="Section 2">
              <p>This is the content for section 2. It can contain any HTML elements.</p>
            </S2PIAccordionItem>
            <S2PIAccordionItem title="Section 3">
              <p>This is the content for section 3. It can contain any HTML elements.</p>
            </S2PIAccordionItem>
          </S2PIAccordion>
        </section>

        {/* Section Title */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Section Title</h2>
          <div className="space-y-6">
            <SectionTitle 
              title="Centered Title" 
              subtitle="This is a subtitle"
              alignment="center"
            />
            <SectionTitle 
              title="Left Aligned Title" 
              subtitle="This is a subtitle"
              alignment="left"
            />
            <SectionTitle 
              title="Right Aligned Title" 
              subtitle="This is a subtitle"
              alignment="right"
            />
          </div>
        </section>

        {/* Language Selector */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Language Selector</h2>
          <LanguageSelector 
            languages={[
              { code: 'fr', name: 'Français', flag: '🇫🇷' },
              { code: 'en', name: 'English', flag: '🇬🇧' },
              { code: 'es', name: 'Español', flag: '🇪🇸' },
              { code: 'it', name: 'Italiano', flag: '🇮🇹' },
              { code: 'ar', name: 'العربية', flag: '🇸🇦' }
            ]}
            selectedLanguage="fr"
            onLanguageChange={(lang) => console.log('Language changed to:', lang)}
            variant="dropdown"
            size="md"
          />
        </section>

        {/* Icons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Icons</h2>
          <div className="flex gap-4 items-center">
            <ChevronDown className="h-6 w-6" />
            <span>Chevron Down Icon</span>
          </div>
        </section>

        {/* Slider */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Hero Slider</h2>
          <div className="h-96">
            <S2PILayerSlider />
          </div>
        </section>
      </div>
    </div>
  );
} 