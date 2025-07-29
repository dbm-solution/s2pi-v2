"use client"

import Link from "next/link"
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/cards/card"

// Typography Components
import { Typography } from "@/components/ui/typography/typography"

// Form Components
import { Button } from "@/components/ui/text-field/button"
import { TextField } from "@/components/ui/forms/text-field"
import { S2PITextField, S2PITextArea, S2PIEmailField, S2PIPhoneField } from "@/components/ui/forms/s2pi-form-fields"
import { RadioGroup, RadioGroupItem } from "@/components/ui/forms/radio-group"
import { Badge } from "@/components/ui/text-field/badge"

// Navigation & Selection
import { LanguageSelector } from "@/components/ui/language-selector/language-selector"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion.tsx/accordion"
import { S2PIAccordion } from "@/components/ui/accordion.tsx/simple-accordion/simple-accordion"

// Media Components
import { ImageSlider } from "@/components/ui/slider/image-slider/imageSlider"
import { S2PIHeroSlider } from "@/components/ui/slider/hero-slider/s2pi-hero-slider"
import { SliderCard } from "@/components/ui/slider/hero-slider/slider-card"

// Buttons
import { ActionsButton } from "@/components/ui/buttons/actions-button/actions-button"
import { MenuButton } from "@/components/ui/buttons/menu-button/menu-button"
import { MenuItem } from "@/components/ui/buttons/menu-item/menu-item"
import EnquetteButton from "@/components/ui/buttons/enquette/enquette.button"
import { SocialButton } from "@/components/ui/buttons/social-button/Social-button"
import MicroWidgetButton from "@/components/ui/MicroWidgetButton"

// Social & Sharing
import SocialIcon from "@/components/ui/buttons/social/SocialIcon"
import SocialShare from "@/components/ui/SocialShare"

// Cards & Info
import { InfoCard } from "@/components/ui/cards/info-card/info-card"
import CertificationBadge from "@/components/ui/CertificationBadge"

// Dividers & Separators
import { DottedDivider } from "@/components/ui/ditted-divider/dotted-divider"
import { Divider } from "@/components/ui/ditted-divider/empty-divider"

// Icons
import { MembershipIcon, LocationIcon, CelebrationIcon, InfoIcon, StarIcon, ShieldIcon } from "@/components/ui/cards/card-icons/card-icons"
import { EmailIcon } from "@/components/ui/icons/socials/Email-icon"
import { FacebookIcon } from "@/components/ui/icons/socials/Facebook-icon"
import { LinkedInIcon } from "@/components/ui/icons/socials/LinkedIn-icon"
import { TwitterIcon } from "@/components/ui/icons/socials/Twitter-icon"

// Utility
import { CookieConsent } from "@/components/ui/cookie-consent/cookie-consent"
import { Skeleton } from "@/components/ui/skeleton/skeleton"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip/tooltip"

// Sample data
const sampleLanguages = [
  { code: 'fr', name: 'Français', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'ar', name: 'العربية', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'it', name: 'Italiano', nativeName: 'Italiano', flag: '🇮🇹' },
]

const sampleImages = [
  { src: "/images/slider-image/s2pi-chantiers-01.jpg", title: "Chantier 1", alt: "Chantier S2PI 1" },
  { src: "/images/slider-image/s2pi-chantiers-02.jpg", title: "Chantier 2", alt: "Chantier S2PI 2" },
  { src: "/images/slider-image/s2pi-chantiers-03.jpg", title: "Chantier 3", alt: "Chantier S2PI 3" },
]

export default function StoryBookHome() {
  const [selectedLanguage, setSelectedLanguage] = useState('fr')
  const [switchChecked, setSwitchChecked] = useState(false)
  const [radioValue, setRadioValue] = useState("option1")
  const [showCookieConsent, setShowCookieConsent] = useState(false)

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Typography variant="h1" className="mb-4">
              S2PI Component Library
            </Typography>
            <Typography variant="body" className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive showcase of all UI components used in the S2PI project. 
              Each component is demonstrated with various configurations and states.
            </Typography>
          </div>

          {/* Typography Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Typography Components</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Typography variant="h3" className="mb-2">Headings</Typography>
                  <Typography variant="h1">Heading 1</Typography>
                  <Typography variant="h2">Heading 2</Typography>
                  <Typography variant="h3">Heading 3</Typography>
                  <Typography variant="h4">Heading 4</Typography>
                  <Typography variant="h5">Heading 5</Typography>
                  <Typography variant="h6">Heading 6</Typography>
                </div>
                <div>
                  <Typography variant="h3" className="mb-2">Text Variants</Typography>
                  <Typography variant="body">Body text - Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                  <Typography variant="bodyBold">Bold body text - Important information here.</Typography>
                  <Typography variant="quote">Quote text - "This is a beautiful quote"</Typography>
                  <Typography variant="small">Small text for fine print</Typography>
                  <Typography variant="caption">Caption text for images</Typography>
                  <Typography variant="link" as="a">Link text example</Typography>
                </div>
              </div>
              
              <div>
                <Typography variant="h3" className="mb-2">List Items</Typography>
                <ul className="space-y-2">
                  <Typography variant="listItem">Regular list item with proper styling</Typography>
                  <Typography variant="listItem">
                    List item with <Typography variant="listItemBold" as="span">bold text</Typography> inline
                  </Typography>
                  <Typography variant="listItem">Another list item example</Typography>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Buttons Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Button Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Regular Buttons */}
                <div>
                  <Typography variant="h4" className="mb-3">Standard Buttons</Typography>
                  <div className="space-y-2">
                    <Button variant="default">Default Button</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link Button</Button>
                  </div>
                </div>

                {/* Actions Buttons */}
                <div>
                  <Typography variant="h4" className="mb-3">Action Buttons</Typography>
                  <div className="space-y-2">
                    <ActionsButton variant="primary">Primary Action</ActionsButton>
                    <ActionsButton variant="secondary">Secondary Action</ActionsButton>
                    <ActionsButton variant="success">Success Action</ActionsButton>
                    <ActionsButton variant="warning">Warning Action</ActionsButton>
                    <ActionsButton variant="danger">Danger Action</ActionsButton>
                  </div>
                </div>

                {/* Specialized Buttons */}
                <div>
                  <Typography variant="h4" className="mb-3">Specialized Buttons</Typography>
                  <div className="space-y-2">
                    <EnquetteButton variant="standard" />
                    <MicroWidgetButton href="#" variant="primary">Widget Button</MicroWidgetButton>
                    <MenuButton>Menu Button</MenuButton>
                    <SocialButton variant="facebook">Facebook</SocialButton>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Form Components */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Form Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Typography variant="h4">Standard Form Fields</Typography>
                  <TextField 
                    label="Standard Text Field" 
                    placeholder="Enter text here..." 
                    helperText="This is helper text"
                  />
                  <TextField 
                    label="Text Field with Error" 
                    placeholder="Enter text..." 
                    errorText="This field has an error"
                  />
                  <TextField 
                    label="Multiline Text Field" 
                    placeholder="Enter multiple lines..." 
                    multiline 
                    rows={3}
                  />
                </div>

                <div className="space-y-4">
                  <Typography variant="h4">S2PI Form Fields</Typography>
                  <S2PIEmailField />
                  <S2PIPhoneField />
                  <S2PITextArea label="Message" rows={3} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Typography variant="h4" className="mb-3">Radio Group</Typography>
                  <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option1" id="option1" />
                      <label htmlFor="option1">Option 1</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option2" id="option2" />
                      <label htmlFor="option2">Option 2</label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Typography variant="h4" className="mb-3">Switch</Typography>
                  <div className="flex items-center space-x-2">
                    <Typography variant="body">Switch component not available</Typography>
                  </div>
                </div>

                <div>
                  <Typography variant="h4" className="mb-3">Badges</Typography>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Components */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Navigation & Selection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Typography variant="h4" className="mb-3">Language Selector</Typography>
                  <LanguageSelector
                    languages={sampleLanguages}
                    selectedLanguage={selectedLanguage}
                    onLanguageChange={(lang) => setSelectedLanguage(lang.code)}
                    variant="dropdown"
                    showFlags
                    showNames
                    searchable
                  />
                </div>

                <div>
                  <Typography variant="h4" className="mb-3">Menu Items</Typography>
                  <div className="space-y-2">
                    <MenuItem>Regular Menu Item</MenuItem>
                    <MenuItem active>Active Menu Item</MenuItem>
                    <MenuItem disabled>Disabled Menu Item</MenuItem>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accordion Components */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Accordion Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Typography variant="h4" className="mb-3">Standard Accordion</Typography>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Section 1</AccordionTrigger>
                      <AccordionContent>
                        Content for section 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Section 2</AccordionTrigger>
                      <AccordionContent>
                        Content for section 2. Sed do eiusmod tempor incididunt ut labore.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div>
                  <Typography variant="h4" className="mb-3">S2PI Accordion</Typography>
                  <S2PIAccordion type="single" variant="default">
                    <S2PIAccordion.Item title="Isolation Thermique" defaultOpen>
                      <Typography variant="body">
                        Information détaillée sur nos solutions d'isolation thermique par projection.
                      </Typography>
                    </S2PIAccordion.Item>
                    <S2PIAccordion.Item title="Protection Incendie">
                      <Typography variant="body">
                        Découvrez nos produits de protection incendie certifiés.
                      </Typography>
                    </S2PIAccordion.Item>
                  </S2PIAccordion>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cards & Info Components */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Cards & Information Display</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InfoCard
                  title="Info Card"
                  description="This is an example info card with description text."
                  variant="light"
                  icon={<InfoIcon />}
                />
                
                <InfoCard
                  title="Primary Card"
                  description="Primary variant info card with different styling."
                  variant="primary"
                  icon={<StarIcon />}
                />

                <InfoCard
                  title="Interactive Card"
                  description="This card has hover effects and is interactive."
                  variant="secondary"
                  icon={<ShieldIcon />}
                />
              </div>

              <div className="mt-6">
                <Typography variant="h4" className="mb-3">Certification Badges</Typography>
                <div className="flex flex-wrap gap-4">
                  <CertificationBadge type="thermal" size="md" />
                  <CertificationBadge type="fire" size="md" />
                  <CertificationBadge type="acoustic" size="md" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Media Components */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Media Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Typography variant="h4" className="mb-3">Image Slider</Typography>
                  <div className="max-w-md">
                    <ImageSlider images={sampleImages} />
                  </div>
                </div>

                <div>
                  <Typography variant="h4" className="mb-3">Slider Card</Typography>
                  <div className="max-w-md">
                    <SliderCard
                      title="Protection Incendie"
                      description="Solutions complètes de protection contre l'incendie pour tous types de bâtiments."
                      variant="fireProtection"
                      imageSrc="/images/backgrounds/header-02.jpg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Components */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Social Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Typography variant="h4" className="mb-3">Social Icons</Typography>
                  <div className="flex space-x-3">
                    <SocialIcon platform="linkedin" href="#" variant="s2pi-standard" />
                    <SocialIcon platform="facebook" href="#" variant="s2pi-standard" />
                    <SocialIcon platform="twitter" href="#" variant="s2pi-standard" />
                    <SocialIcon platform="email" href="#" variant="s2pi-standard" />
                  </div>
                </div>

                <div>
                  <Typography variant="h4" className="mb-3">Social Share</Typography>
                  <SocialShare
                    url="https://www.s2pi.fr"
                    title="S2PI - Solutions d'isolation"
                    platforms={['facebook', 'linkedin', 'email']}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Utility Components */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Utility Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <Typography variant="h4" className="mb-3">Dividers</Typography>
                  <DottedDivider variant="default" />
                  <Divider />
                </div>

                <div>
                  <Typography variant="h4" className="mb-3">Skeleton Loading</Typography>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>

                <div>
                  <Typography variant="h4" className="mb-3">Tooltip</Typography>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>This is a tooltip!</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              <div className="mt-6">
                <Typography variant="h4" className="mb-3">Cookie Consent</Typography>
                <Button 
                  onClick={() => setShowCookieConsent(true)}
                  variant="outline"
                >
                  Show Cookie Consent
                </Button>
                {showCookieConsent && (
                  <CookieConsent
                    onAccept={() => setShowCookieConsent(false)}
                    onDecline={() => setShowCookieConsent(false)}
                    onSettings={() => console.log('Settings')}
                  />
                )}
              </div>
            </CardContent>
          </Card>

          {/* Icons Collection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Icons Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="flex flex-col items-center space-y-2">
                  <MembershipIcon />
                  <Typography variant="small">Membership</Typography>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <LocationIcon />
                  <Typography variant="small">Location</Typography>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <CelebrationIcon />
                  <Typography variant="small">Celebration</Typography>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <InfoIcon />
                  <Typography variant="small">Info</Typography>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <StarIcon />
                  <Typography variant="small">Star</Typography>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <ShieldIcon />
                  <Typography variant="small">Shield</Typography>
                </div>
              </div>

              <div className="mt-6">
                <Typography variant="h4" className="mb-3">Social Icons</Typography>
                <div className="flex space-x-4">
                  <div className="flex flex-col items-center space-y-2">
                    <EmailIcon className="w-8 h-8" />
                    <Typography variant="small">Email</Typography>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <FacebookIcon className="w-8 h-8" />
                    <Typography variant="small">Facebook</Typography>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <LinkedInIcon className="w-8 h-8" />
                    <Typography variant="small">LinkedIn</Typography>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <TwitterIcon className="w-8 h-8" />
                    <Typography variant="small">Twitter</Typography>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Component Groups Links */}
          <Card>
            <CardHeader>
              <CardTitle>Component Groups</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href="/storyBook/actions"
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Typography variant="h5" className="mb-2">Action Buttons</Typography>
                  <Typography variant="body">Explore all action button variants and configurations</Typography>
                </Link>
                
                <Link
                  href="/storyBook/socials"
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Typography variant="h5" className="mb-2">Social Components</Typography>
                  <Typography variant="body">Social sharing and social media integration components</Typography>
                </Link>
                
                <Link
                  href="/storyBook/info-card"
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Typography variant="h5" className="mb-2">Info Cards</Typography>
                  <Typography variant="body">Information display cards with various styles</Typography>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  )
}