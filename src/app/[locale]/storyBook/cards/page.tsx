"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/cards/card';
import { InfoCard } from '@/components/ui/cards/info-card/info-card';
import { ProductCard } from '@/components/ui/cards/ProductCard';
import CertificationBadge from '@/components/ui/CertificationBadge';
import { PDFLink } from '@/components/ui/PDFLink';
import { PDFImage } from '@/components/ui/pdf-image/pdfImage';

export default function CardsShowcase() {
  return (
    <div className="p-8 ml-64">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Card Components</h1>
        
        {/* Basic Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Basic Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p>This is a basic card component with header and content.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Card with Image</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg mb-4"></div>
                <p>Card with a placeholder image area.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <p>Card without header - just content.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Info Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Info Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard
              title="Primary Info Card"
              description="This is an info card with primary variant styling."
              variant="primary"
            />
            
            <InfoCard
              title="Secondary Info Card"
              description="This is an info card with secondary variant styling."
              variant="secondary"
            />
            
            <InfoCard
              title="Success Info Card"
              description="This is an info card with success variant styling."
              variant="success"
            />
            
            <InfoCard
              title="Warning Info Card"
              description="This is an info card with warning variant styling."
              variant="warning"
            />
            
            <InfoCard
              title="Danger Info Card"
              description="This is an info card with danger variant styling."
              variant="danger"
            />
            
            <InfoCard
              title="Info Info Card"
              description="This is an info card with info variant styling."
              variant="info"
            />
            
            <InfoCard
              title="Dark Info Card"
              description="This is an info card with dark variant styling."
              variant="dark"
            />
            
            <InfoCard
              title="Light Info Card"
              description="This is an info card with light variant styling."
              variant="light"
            />
            
            <InfoCard
              title="Interactive Info Card"
              description="This is an interactive info card that can be clicked."
              variant="primary"
              href="/test"
            />
          </div>
        </section>

        {/* Product Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Product Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProductCard
              name="ITARN - Isolation Thermique"
              category="Thermal Insulation"
              description="A high-performance thermal insulation product designed for exterior wall applications."
              features={[
                "Based on slag mineral wool",
                "Hydraulic binder association",
                "Thermal performance optimization",
                "Fire safety compliance"
              ]}
              applications={[
                "Residential buildings",
                "Collective housing",
                "Tertiary buildings",
                "Ventilated cladding systems"
              ]}
              technicalSpecs={{
                density: "120 kg/m³",
                thermalConductivity: "0.035 W/mK",
                fireResistance: "A1",
                thickness: "40-200 mm"
              }}
              pdfUrl="/sample.pdf"
              imageUrl="/images/home-page/slider-cards/1/10005.jpg"
              className="h-full"
            />
            
            <ProductCard
              name="INNOSPRAY-FTH"
              category="Thermal Solutions"
              description="Sprayed slag wool insulation for concrete slabs and steel deck floors."
              features={[
                "Sprayed application method",
                "Thermal bridge limitation",
                "No slab perforation required",
                "Network passage compatibility"
              ]}
              applications={[
                "Concrete slabs",
                "Steel deck floors",
                "Pre-stressed slabs",
                "Industrial buildings"
              ]}
              technicalSpecs={{
                density: "100 kg/m³",
                thermalConductivity: "0.040 W/mK",
                fireResistance: "A1",
                thickness: "50-300 mm"
              }}
              pdfUrl="/sample.pdf"
              imageUrl="/images/home-page/slider-cards/2/10006.jpg"
              className="h-full"
            />
          </div>
        </section>

        {/* Certification Badges */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Certification Badges</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Types</h3>
              <div className="flex gap-4 flex-wrap">
                <CertificationBadge type="thermal" size="md" />
                <CertificationBadge type="fire" size="md" />
                <CertificationBadge type="acoustic" size="md" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Sizes</h3>
              <div className="flex gap-4 flex-wrap items-center">
                <CertificationBadge type="thermal" size="sm" />
                <CertificationBadge type="thermal" size="md" />
                <CertificationBadge type="thermal" size="lg" />
              </div>
            </div>
          </div>
        </section>

        {/* PDF Components */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">PDF Components</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-3">PDF Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <PDFLink
                  href="/sample.pdf"
                  title="Default PDF Link"
                  description="Standard PDF link component"
                  variant="default"
                />
                
                <PDFLink
                  href="/sample.pdf"
                  title="Card PDF Link"
                  description="PDF link with card styling"
                  variant="card"
                />
                
                <PDFLink
                  href="/sample.pdf"
                  title="Inline PDF Link"
                  description="Inline PDF link component"
                  variant="inline"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">PDF Images</h3>
              <div className="space-y-6">
                <PDFImage
                  title="Technical Documentation"
                  description="Complete technical specifications and installation guide for thermal insulation products."
                  pdfUrl="/sample.pdf"
                  pdfImageSrc="/images/home-page/10021.jpg"
                  pdfImageAlt="PDF Preview"
                  imagePosition="left"
                  imageSize="a4"
                />
                
                <PDFImage
                  title="Product Catalog"
                  description="Comprehensive product catalog with specifications and applications."
                  pdfUrl="/sample.pdf"
                  pdfImageSrc="/images/home-page/10021.jpg"
                  pdfImageAlt="PDF Preview"
                  imagePosition="right"
                  imageSize="a3"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 