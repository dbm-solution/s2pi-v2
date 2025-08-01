"use client"

import { useState } from "react"
import { PDFImage, type ImageSize } from "../../pdf-image/pdfImage"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../cn-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../forms/Select"
import { Badge } from "../../badge/badge"
import { Switch } from "../../ switch/switch"
import { Label } from "../../forms/label"
import { Separator } from "../../separator/separator"
import { Input } from "../../forms/Input"

export function S2PIPDFSectionShowcase() {
  const [imagePosition, setImagePosition] = useState<"left" | "right">("left")
  const [imageSize, setImageSize] = useState<ImageSize>("a4")
  const [customWidth, setCustomWidth] = useState(297)
  const [customHeight, setCustomHeight] = useState(420)
  const [enableAnimation, setEnableAnimation] = useState(true)
  const [showCustomContent, setShowCustomContent] = useState(false)

  const promatContent = `
    En bâtiment neuf comme en rénovation, le défi des concepteurs et des agenceurs d'allier, au sein d'un même lieu, beauté des structures et sécurité des habitants, les peintures intumescentes à base aqueuse (sans solvant) <strong>PROMAPAINT®-SC3</strong> et <strong>PROMAPAINT®-SC4</strong> répondent à ces exigences.<br><br>
    <strong>PROMAPAINT®SC4</strong> a pour principal objectif d'assurer la stabilité au feu jusqu'à 90 minutes des éléments structurels en acier (dont profils tubulaires) et planchers collaborant tout en préservant les qualités esthétiques de la structure qui conserve sa forme originelle.<br><br>
    <strong>PROMAPAINT®-SC3</strong> : au-delà de ses performances de protection au feu (R 120 mn) pour des éléments en acier, cette peinture est capable de répondre également aux besoins de tenue au feu des planchers et structures béton. Ainsi, les hauteurs d'origine sous poutres et plafonds sont conservées rendant ainsi l'ambiance des sous-sols plus agréable.<br><br>
    Ces deux types de revêtements sont pérennes dans le temps. Ils peuvent également recevoir une peinture de finition (support acier uniquement) pour offrir une ambiance lumineuse et chaleureuse. De plus, ces peintures intumescentes ont une classe des émissions COV A+ permettant de maintenir une qualité d'air intérieur sain.
  `

  const sampleContent2 = `
    Les solutions S2PI sont adaptées tant aux ouvrages neufs qu'existants en secteur résidentiel et non résidentiel.<br><br>
    <strong>INNOSPRAY-FTH</strong> est destiné à l'isolation thermique par projection des dalles en béton, des planchers à poutrelles et hourdis béton, des planchers béton à bac collaborant en acier. Il limite les ponts thermiques et évite tout percement dans la dalle. Il est particulièrement adapté dans les configurations de dalles avec passage des réseaux ou de dalles précontraintes. <strong>INNOSPRAY-FTH</strong> satisfait parfaitement les exigences réglementaires pour les bâtiments neufs ou existants.
  `

  const customContent = (
    <div>
      <p>
        En bâtiment neuf comme en rénovation, le défi des concepteurs et des agenceurs d'allier, au sein d'un même lieu,
        beauté des structures et sécurité des habitants.
      </p>
      <p>
        <strong>PROMAPAINT®-SC3</strong> et <strong>PROMAPAINT®-SC4</strong> répondent à ces exigences avec des
        performances exceptionnelles.
      </p>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Enhanced S2PI PDF Section Component</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A reusable component with customizable image sizes (A4 default), scroll-triggered slide animations, and
            exact S2PI design matching.
          </p>
          <div className="flex justify-center gap-2 mt-6">
            <Badge variant="default">A4 Format</Badge>
            <Badge variant="secondary">Scroll Animations</Badge>
            <Badge variant="outline">Customizable</Badge>
          </div>
        </div>

        {/* Controls */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>Component Controls</span>
            </CardTitle>
            <CardDescription>Customize the component appearance and behavior</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-2">
                <Switch
                  id="image-position"
                  checked={imagePosition === "right"}
                  onCheckedChange={(checked) => setImagePosition(checked ? "right" : "left")}
                />
                <Label htmlFor="image-position">Image on right side</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="enable-animation" checked={enableAnimation} onCheckedChange={setEnableAnimation} />
                <Label htmlFor="enable-animation">Enable scroll animations</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="custom-content" checked={showCustomContent} onCheckedChange={setShowCustomContent} />
                <Label htmlFor="custom-content">Use React component content</Label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="image-size">Image Size</Label>
                <Select value={imageSize} onValueChange={(value: ImageSize) => setImageSize(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select image size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a4">A4 (297×420px)</SelectItem>
                    <SelectItem value="a3">A3 (420×594px)</SelectItem>
                    <SelectItem value="a5">A5 (210×297px)</SelectItem>
                    <SelectItem value="large">Large (400×300px)</SelectItem>
                    <SelectItem value="medium">Medium (320×240px)</SelectItem>
                    <SelectItem value="small">Small (240×180px)</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {imageSize === "custom" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="custom-width">Custom Width (px)</Label>
                    <Input
                      id="custom-width"
                      type="number"
                      value={customWidth}
                      onChange={(e) => setCustomWidth(Number(e.target.value))}
                      min="100"
                      max="800"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom-height">Custom Height (px)</Label>
                    <Input
                      id="custom-height"
                      type="number"
                      value={customHeight}
                      onChange={(e) => setCustomHeight(Number(e.target.value))}
                      min="100"
                      max="1000"
                    />
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Live Examples */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Live Example - PROMAPAINT® Solution (Scroll to see animation)
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <PDFImage
                title="La nouvelle solution stabilité au feu « tout en esthétisme »"
                description={showCustomContent ? customContent : promatContent}
                pdfUrl="/placeholder.pdf"
                pdfImageSrc="/s2pi-promat-section.png"
                pdfImageAlt="PROMAPAINT PDF Preview"
                imagePosition={imagePosition}
                imageSize={imageSize}
                customImageWidth={imageSize === "custom" ? customWidth : undefined}
                customImageHeight={imageSize === "custom" ? customHeight : undefined}
                enableScrollAnimation={enableAnimation}
                onImageClick={() => console.log("PDF image clicked")}
                onDownloadClick={() => console.log("Download button clicked")}
              />
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Live Example - INNOSPRAY-FTH (Opposite Layout)</h2>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <PDFImage
                title="Solutions d'isolation thermique avancées"
                description={sampleContent2}
                pdfUrl="/placeholder.pdf"
                pdfImageSrc="/s2pi-pdf-section-right.png"
                pdfImageAlt="INNOSPRAY-FTH PDF Preview"
                imagePosition={imagePosition === "left" ? "right" : "left"}
                imageSize={imageSize}
                customImageWidth={imageSize === "custom" ? customWidth : undefined}
                customImageHeight={imageSize === "custom" ? customHeight : undefined}
                enableScrollAnimation={enableAnimation}
                onImageClick={() => console.log("PDF image clicked")}
                onDownloadClick={() => console.log("Download button clicked")}
              />
            </div>
          </div>

          <Separator />

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Multiple Sections Demo</h2>
            <div className="space-y-8">
              {[1, 2, 3].map((index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                  <PDFImage
                    title={`Section ${index} - Product Information`}
                    description={`This is section ${index} demonstrating the scroll animation effect. Each section slides in from different directions when scrolled into view.`}
                    pdfUrl="/placeholder.pdf"
                    pdfImageSrc="/s2pi-promat-section.png"
                    pdfImageAlt={`Section ${index} PDF Preview`}
                    imagePosition={index % 2 === 0 ? "right" : "left"}
                    imageSize="a4"
                    enableScrollAnimation={enableAnimation}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Enhanced Component Features</CardTitle>
            <CardDescription>New features and capabilities of the enhanced S2PI PDF Section component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-green-700">✅ A4 Default Format</h4>
                <p className="text-sm text-gray-600">Book cover-like A4 format (297×420px) as default</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-700">✅ Multiple Size Options</h4>
                <p className="text-sm text-gray-600">A3, A4, A5, Large, Medium, Small, and Custom sizes</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-700">✅ Scroll Animations</h4>
                <p className="text-sm text-gray-600">Smooth slide-in animations triggered by scroll</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-700">✅ Directional Slides</h4>
                <p className="text-sm text-gray-600">Content slides from opposite edges of screen</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-700">✅ Custom Dimensions</h4>
                <p className="text-sm text-gray-600">Fully customizable width and height options</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-700">✅ Intersection Observer</h4>
                <p className="text-sm text-gray-600">Performance-optimized scroll detection</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Example */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Usage Example</CardTitle>
            <CardDescription>How to use the enhanced S2PI PDF Section component</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`<S2PIPDFSection
  title="La nouvelle solution stabilité au feu"
  description="<strong>PROMAPAINT®-SC3</strong> et <strong>PROMAPAINT®-SC4</strong>..."
  pdfUrl="/path/to/your/pdf"
  pdfImageSrc="/path/to/pdf-preview.png"
  imagePosition="left"
  imageSize="a4" // a3, a4, a5, large, medium, small, custom
  customImageWidth={350} // only for custom size
  customImageHeight={495} // only for custom size
  enableScrollAnimation={true}
  animationThreshold={0.2}
  onImageClick={() => console.log('PDF clicked')}
  onDownloadClick={() => console.log('Download clicked')}
/>`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
