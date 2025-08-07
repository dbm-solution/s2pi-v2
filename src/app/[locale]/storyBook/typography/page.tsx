"use client";

import React from 'react';
import { Typography } from '@/components/ui/typography/typography';
import { TextContent } from '@/components/ui/text-field/text-content';

export default function TypographyShowcase() {
  return (
    <div className="p-8 ml-64">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Typography Components</h1>
        
        {/* Typography Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Typography Component</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Heading Variants</h3>
              <div className="space-y-4">
                <Typography variant="h1">Heading 1 - Main Title</Typography>
                <Typography variant="h2">Heading 2 - Section Title</Typography>
                <Typography variant="h3">Heading 3 - Subsection</Typography>
                <Typography variant="h4">Heading 4 - Sub-subsection</Typography>
                <Typography variant="h5">Heading 5 - Minor Title</Typography>
                <Typography variant="h6">Heading 6 - Small Title</Typography>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Body Text Variants</h3>
              <div className="space-y-4">
                <Typography variant="body" size="lg">
                  Body Large - This is larger body text for important content.
                </Typography>
                <Typography variant="body" size="base">
                  Body Base - This is standard body text for regular content.
                </Typography>
                <Typography variant="body" size="sm">
                  Body Small - This is smaller body text for secondary content.
                </Typography>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Special Variants</h3>
              <div className="space-y-4">
                <Typography variant="quote">
                  Quote Text - This is quote text for introducing sections.
                </Typography>
                <Typography variant="small">
                  Small Text - This is small text for less important information.
                </Typography>
                <Typography variant="small">
                  Small Text - This is small text for captions and details.
                </Typography>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Custom Colors</h3>
              <div className="space-y-4">
                <Typography variant="body" customColor="#3b82f6">
                  Blue Text - Custom blue color
                </Typography>
                <Typography variant="body" customColor="#10b981">
                  Green Text - Custom green color
                </Typography>
                <Typography variant="body" customColor="#f59e0b">
                  Orange Text - Custom orange color
                </Typography>
                <Typography variant="body" customColor="#ef4444">
                  Red Text - Custom red color
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* Text Content Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Text Content Component</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">S2PI Style Variants</h3>
              <div className="space-y-4">
                <TextContent as="h1" variant="heading" size="3xl" s2piStyle>
                  S2PI Heading 3XL - Main Title
                </TextContent>
                <TextContent as="h2" variant="heading" size="2xl" s2piStyle>
                  S2PI Heading 2XL - Section Title
                </TextContent>
                <TextContent as="h3" variant="heading" size="xl" s2piStyle>
                  S2PI Heading XL - Subsection
                </TextContent>
                <TextContent as="p" variant="body" size="lg" s2piStyle>
                  S2PI Body Large - This is larger body text for important content.
                </TextContent>
                <TextContent as="p" variant="body" size="md" s2piStyle>
                  S2PI Body Medium - This is standard body text for regular content.
                </TextContent>
                <TextContent as="p" variant="caption" size="sm" s2piStyle>
                  S2PI Caption Small - This is caption text for small details.
                </TextContent>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Content Styles</h3>
              <div className="space-y-4">
                <TextContent variant="highlight" s2piStyle>
                  Highlight Text - This text is highlighted for emphasis.
                </TextContent>
                <TextContent variant="body" weight="bold" s2piStyle>
                  Bold Text - This text is bold for strong emphasis.
                </TextContent>
                <TextContent variant="body" weight="medium" s2piStyle>
                  Medium Weight - This text has medium weight.
                </TextContent>
                <TextContent variant="body" weight="light" s2piStyle>
                  Light Weight - This text has light weight.
                </TextContent>
                <TextContent variant="body" dotted s2piStyle>
                  Dotted Text - This text has a dotted underline effect.
                </TextContent>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Text Alignments</h3>
              <div className="space-y-4">
                <TextContent align="left" s2piStyle>
                  Left Aligned Text - This text is aligned to the left.
                </TextContent>
                <TextContent align="center" s2piStyle>
                  Center Aligned Text - This text is centered.
                </TextContent>
                <TextContent align="right" s2piStyle>
                  Right Aligned Text - This text is aligned to the right.
                </TextContent>
                <TextContent align="justify" s2piStyle>
                  Justified Text - This text is justified and will spread across the full width of its container, creating even margins on both sides.
                </TextContent>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Color Variants</h3>
              <div className="space-y-4">
                <TextContent color="primary" s2piStyle>
                  Primary Color - This text uses the primary color.
                </TextContent>
                <TextContent color="secondary" s2piStyle>
                  Secondary Color - This text uses the secondary color.
                </TextContent>
                <TextContent color="muted" s2piStyle>
                  Muted Color - This text uses the muted color.
                </TextContent>
                <TextContent color="accent" s2piStyle>
                  Accent Color - This text uses the accent color.
                </TextContent>
              </div>
            </div>
          </div>
        </section>

        {/* Real-world Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Real-world Examples</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Article Layout</h3>
              <TextContent as="h1" variant="heading" size="3xl" s2piStyle>
                Article Title
              </TextContent>
              <TextContent as="p" variant="body" size="lg" s2piStyle>
                This is the lead paragraph that introduces the article content.
              </TextContent>
              <TextContent as="p" variant="body" size="md" s2piStyle>
                This is the main body text of the article. It contains the primary content and information that readers need to understand the topic.
              </TextContent>
              <TextContent as="p" variant="body" size="md" s2piStyle>
                Additional paragraphs provide more details and context to support the main points of the article.
              </TextContent>
              <TextContent as="p" variant="caption" size="sm" s2piStyle>
                Published on January 15, 2024 | Author: John Doe
              </TextContent>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Product Description</h3>
              <TextContent as="h2" variant="heading" size="2xl" s2piStyle>
                ITARN - Isolation Thermique
              </TextContent>
              <TextContent as="p" variant="body" size="lg" s2piStyle>
                Un produit à base de laine minérale de laitier associé à un liant hydraulique.
              </TextContent>
              <TextContent as="p" variant="body" size="md" s2piStyle>
                Destiné à l'isolation thermique des parois verticales par l'extérieur sous bardage ventilé des bâtiments résidentiels individuels, collectifs ou tertiaires.
              </TextContent>
              <TextContent variant="highlight" s2piStyle>
                Performance thermique optimale garantie
              </TextContent>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-lg font-medium mb-4">Contact Information</h3>
              <TextContent as="h3" variant="heading" size="xl" s2piStyle>
                Contactez-nous
              </TextContent>
              <TextContent as="p" variant="body" size="md" s2piStyle>
                Pour toute question concernant nos produits et services :
              </TextContent>
              <TextContent as="p" variant="body" size="md" weight="bold" s2piStyle>
                Téléphone : +33 1 23 45 67 89
              </TextContent>
              <TextContent as="p" variant="body" size="md" weight="bold" s2piStyle>
                Email : contact@s2pi.fr
              </TextContent>
              <TextContent as="p" variant="caption" size="sm" s2piStyle>
                Horaires d'ouverture : Lundi-Vendredi 8h-18h
              </TextContent>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Usage Guidelines</h2>
          <div className="bg-yellow-50 p-8 rounded-lg">
            <TextContent as="h3" variant="heading" size="lg" s2piStyle>
              Best Practices
            </TextContent>
            <div className="space-y-4 mt-4">
              <TextContent as="p" variant="body" size="md" s2piStyle>
                • Use <strong>Heading 1 (h1)</strong> only once per page for the main title
              </TextContent>
              <TextContent as="p" variant="body" size="md" s2piStyle>
                • Use <strong>Heading 2-6 (h2-h6)</strong> for section hierarchy
              </TextContent>
              <TextContent as="p" variant="body" size="md" s2piStyle>
                • Use <strong>Body Large</strong> for important content and introductions
              </TextContent>
              <TextContent as="p" variant="body" size="md" s2piStyle>
                • Use <strong>Body Medium</strong> for regular content
              </TextContent>
              <TextContent as="p" variant="body" size="md" s2piStyle>
                • Use <strong>Caption/Small</strong> for metadata, dates, and secondary information
              </TextContent>
              <TextContent as="p" variant="body" size="md" s2piStyle>
                • Use <strong>Highlight</strong> for emphasizing key points
              </TextContent>
              <TextContent as="p" variant="body" size="md" s2piStyle>
                • Use <strong>Muted</strong> for less important information
              </TextContent>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 