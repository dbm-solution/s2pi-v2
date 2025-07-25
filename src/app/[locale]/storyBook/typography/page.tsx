"use client"

import { useState } from "react"
import { S2PIContentShowcase } from "@/components/ui/text-field/s2pi-content-sections"
import { S2PIContactForm } from "@/components/ui/text-field/s2pi-contact-form"
import {
  S2PITextSeparator,
  S2PIDottedSeparator,
  S2PILineSeparator,
  S2PISpacedSeparator,
  S2PIContentDivider,
} from "@/components/ui/text-field/s2pi-separators"
import { S2PIHeading1, S2PIHeading2, S2PIBody, S2PIStrong, S2PIList } from "@/components/ui/typography/typography"
import { TextField, S2PITextField, S2PITextArea } from "@/components/ui/text-field/TextField"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/cards/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/text-field/tabs"
import { Badge } from "@/components/ui/text-field/badge"
import { applyS2PITheme, s2piThemeVariations, type S2PIThemeVariation } from "@/lib/theme/s2pi-theme"
import { Settings, Palette, Type, Ruler, Eye } from "lucide-react"
import { Button } from "@/components/ui/text-field/button"

export default function HomePage() {
  const [currentTheme, setCurrentTheme] = useState<S2PIThemeVariation>("default")
  const [showCustomization, setShowCustomization] = useState(false)

  const handleThemeChange = (theme: S2PIThemeVariation) => {
    setCurrentTheme(theme)
    applyS2PITheme(s2piThemeVariations[theme])
  }

  return (
    <div className="min-h-screen bg-[var(--s2pi-bg-primary)]">
      {/* Theme Customization Panel */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={() => setShowCustomization(!showCustomization)}
          className="bg-[var(--s2pi-primary)] hover:bg-[var(--s2pi-primary-hover)] text-white shadow-lg"
        >
          <Settings className="w-4 h-4 mr-2" />
          Customize
        </Button>

        {showCustomization && (
          <Card className="absolute top-12 right-0 w-80 shadow-xl border-[var(--s2pi-border-medium)]">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-[var(--s2pi-text-primary)]">
                <Palette className="w-5 h-5 mr-2" />
                S2PI Theme Customization
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-[var(--s2pi-text-primary)] mb-2 block">
                  Theme Variations
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(s2piThemeVariations).map((theme) => (
                    <Button
                      key={theme}
                      variant={currentTheme === theme ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleThemeChange(theme as S2PIThemeVariation)}
                      className="capitalize"
                    >
                      {theme}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--s2pi-border-light)]">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--s2pi-text-muted)]">Current Theme:</span>
                  <Badge variant="secondary" className="capitalize">
                    {currentTheme}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="showcase" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="showcase" className="flex items-center">
              <Eye className="w-4 h-4 mr-2" />
              Showcase
            </TabsTrigger>
            <TabsTrigger value="typography" className="flex items-center">
              <Type className="w-4 h-4 mr-2" />
              Typography
            </TabsTrigger>
            <TabsTrigger value="separators" className="flex items-center">
              <Ruler className="w-4 h-4 mr-2" />
              Separators
            </TabsTrigger>
            <TabsTrigger value="forms" className="flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              Forms
            </TabsTrigger>
          </TabsList>

          {/* S2PI Content Showcase */}
          <TabsContent value="showcase">
            <S2PIContentShowcase />
          </TabsContent>

          {/* Typography Showcase */}
          <TabsContent value="typography">
            <S2PIContentDivider
              title="S2PI Typography System"
              subtitle="Scalable and customizable typography components with CSS variables"
            >
              <div className="space-y-12">
                {/* Headings */}
                <div>
                  <S2PIHeading2 className="mb-6">Headings</S2PIHeading2>
                  <div className="space-y-4">
                    <S2PIHeading1>H1 - Main Page Title (48px, Light, Open Sans)</S2PIHeading1>
                    <S2PIHeading2>H2 - Section Heading (22px, Normal, Open Sans)</S2PIHeading2>
                  </div>
                </div>

                <S2PILineSeparator />

                {/* Body Text */}
                <div>
                  <S2PIHeading2 className="mb-6">Body Text</S2PIHeading2>
                  <div className="space-y-4">
                    <S2PIBody>
                      Regular body text (17px, Light, 31px line-height) - Pionnier dans le domaine de la fabrication
                      d'isolants projetés, nous avons pour ambition de proposer le meilleur Service Client dans le
                      secteur d'isolants thermiques à base de laine de laitier.
                    </S2PIBody>
                    <S2PIBody>
                      <S2PIStrong>Strong text (17px, Bold, 31px line-height)</S2PIStrong> - L'amélioration de la qualité
                      de nos services est un objectif primordial pour l'ensemble de l'équipe S2PI.
                    </S2PIBody>
                    <S2PIBody className="text-center">
                      <S2PIStrong large>Large Strong (28px, Bold, Center)</S2PIStrong>
                    </S2PIBody>
                  </div>
                </div>

                <S2PILineSeparator />

                {/* Lists */}
                <div>
                  <S2PIHeading2 className="mb-6">Lists (Roboto Font)</S2PIHeading2>
                  <S2PIList
                    items={[
                      "Quel produit ?",
                      "Quel PV ?",
                      "Quelle épaisseur* ? (*La résistance thermique R dépend de l'épaisseur)",
                      "Note de calcul ?",
                      "Puis-je répondre à la contrainte technique ?",
                    ]}
                    fontFamily="secondary"
                  />
                </div>

                <S2PILineSeparator />

                {/* Size Variations */}
                <div>
                  <S2PIHeading2 className="mb-6">Size Variations</S2PIHeading2>
                  <div className="space-y-3">
                    <S2PIBody size="xs">Extra Small Text (12px)</S2PIBody>
                    <S2PIBody size="sm">Small Text (14px)</S2PIBody>
                    <S2PIBody size="md">Medium Text (17px) - Default</S2PIBody>
                    <S2PIBody size="lg">Large Text (20px)</S2PIBody>
                    <S2PIBody size="xl">Extra Large Text (22px)</S2PIBody>
                    <S2PIBody size="2xl">2XL Text (28px)</S2PIBody>
                  </div>
                </div>
              </div>
            </S2PIContentDivider>
          </TabsContent>

          {/* Separators Showcase */}
          <TabsContent value="separators">
            <S2PIContentDivider
              title="S2PI Separator System"
              subtitle="Flexible separators with customizable spacing, colors, and styles"
            >
              <div className="space-y-12">
                {/* Basic Separators */}
                <div>
                  <S2PIHeading2 className="mb-6">Basic Separators</S2PIHeading2>

                  <S2PIBody className="mb-4">Simple Line Separator:</S2PIBody>
                  <S2PILineSeparator />

                  <S2PIBody className="mb-4">Dotted Separator:</S2PIBody>
                  <S2PIDottedSeparator />

                  <S2PIBody className="mb-4">Text Separator:</S2PIBody>
                  <S2PITextSeparator text="Section Divider" />
                </div>

                {/* Customizable Separators */}
                <div>
                  <S2PIHeading2 className="mb-6">Customizable Options</S2PIHeading2>

                  <S2PIBody className="mb-4">Custom Colors & Sizes:</S2PIBody>
                  <S2PIDottedSeparator dotCount={10} dotSize="6px" lineColor="var(--s2pi-primary)" lineOpacity={0.6} />

                  <S2PIBody className="mb-4">Different Spacing:</S2PIBody>
                  <S2PILineSeparator spacing="xs" />
                  <S2PILineSeparator spacing="sm" />
                  <S2PILineSeparator spacing="md" />
                  <S2PILineSeparator spacing="lg" />

                  <S2PIBody className="mb-4">Custom Text with Styling:</S2PIBody>
                  <S2PITextSeparator
                    text="Custom Separator"
                    textColor="var(--s2pi-primary)"
                    lineColor="var(--s2pi-primary)"
                    size="lg"
                  />
                </div>

                {/* Spaced Content */}
                <S2PISpacedSeparator>
                  <S2PIHeading2 className="mb-6">Spaced Content Section</S2PIHeading2>
                  <S2PIBody>
                    This content uses the S2PISpacedSeparator with custom padding (60px top, 25px bottom) exactly as
                    specified in the original S2PI website CSS.
                  </S2PIBody>
                </S2PISpacedSeparator>
              </div>
            </S2PIContentDivider>
          </TabsContent>

          {/* Forms Showcase */}
          <TabsContent value="forms">
            <div className="space-y-12">
              {/* Form Fields Demo */}
              <S2PIContentDivider
                title="S2PI Form Components"
                subtitle="Scalable text fields with S2PI styling and full customization"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <S2PITextField
                    label="Standard S2PI Field"
                    placeholder="Enter text here..."
                    helperText="This uses S2PI styling automatically"
                  />

                  <TextField
                    label="Custom Styled Field"
                    placeholder="Custom colors..."
                    variant="outlined"
                    className="text-[var(--s2pi-primary)] border-[var(--s2pi-primary)]"
                  />

                  <TextField
                    label="With Icons"
                    placeholder="Search..."
                    startIcon={<Settings size={16} />}
                    s2piStyle
                  />

                  <TextField label="Password Field" type="password" placeholder="Enter password..." s2piStyle />

                  <S2PITextArea
                    label="Multi-line Text"
                    placeholder="Enter your message..."
                    rows={4}
                    characterCount
                    maxLength={500}
                  />

                  <TextField label="Basic Field" placeholder="Type here..." s2piStyle />
                </div>

                <S2PITextSeparator text="Size Variations" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <S2PITextField label="Small" placeholder="Small field..." />
                  <S2PITextField label="Medium" placeholder="Medium field..." />
                  <S2PITextField label="Large" placeholder="Large field..." />
                  <S2PITextField label="Extra Large" placeholder="XL field..." />
                </div>

                <S2PITextSeparator text="State Variations" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <S2PITextField
                    label="Error State"
                    placeholder="Invalid input..."
                    errorText="This field is required"
                    value="invalid"
                  />

                  <S2PITextField
                    label="Success State"
                    placeholder="Valid input..."
                    helperText="Looks good!"
                    value="valid@email.com"
                  />

                  <S2PITextField
                    label="Warning State"
                    placeholder="Warning input..."
                    helperText="Please double-check this value"
                    value="warning"
                  />

                  <S2PITextField label="Disabled State" placeholder="Disabled field..." disabled value="Cannot edit" />
                </div>
              </S2PIContentDivider>

              {/* Full Contact Form */}
              <S2PIContactForm />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
