"use client"

import { InfoCard } from "@/components/ui/cards/info-card/info-card"
import {
  MembershipIcon,
  LocationIcon,
  CelebrationIcon,
  InfoIcon,
  StarIcon,
  ShieldIcon,
} from "@/components/ui/icons/card-icons/card-icons"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Info Card Component System</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional information cards matching the S2PI design with multiple color variants and layouts.
          </p>
        </div>

        {/* Original S2PI Cards Recreation */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Original S2PI Cards</h2>

          <div className="flex justify-center mb-6 space-x-4">
            <img src="/card-member-1.png" alt="Member card 1" className="rounded border" />
            <img src="/card-access-plan.png" alt="Access plan card" className="rounded border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <InfoCard
              variant="primary"
              size="md"
              layout="standard"
              textAlign="left"
              icon={<MembershipIcon />}
              title="Nous sommes membre de l'association, Ambassadeur des Alpes"
              fullWidth
            />

            <InfoCard
              variant="primary"
              size="md"
              layout="compact"
              textAlign="left"
              icon={<LocationIcon />}
              title="PLAN D'ACCÈS"
              fullWidth
            />

            <InfoCard
              variant="primary"
              size="md"
              layout="standard"
              textAlign="left"
              icon={<InfoIcon />}
              title="Informations Importantes"
              description="Découvrez nos dernières actualités et informations essentielles."
              fullWidth
            />
          </div>

          <div className="mb-6">
            <img src="/card-new-year-banner.png" alt="New Year banner" className="rounded border w-full" />
          </div>

          <InfoCard
            variant="primary"
            size="lg"
            layout="banner"
            textAlign="center"
            icon={<CelebrationIcon />}
            title="Bonne année 2025 à tous nos clients et partenaires !"
            description="Nous savons que nous sommes un peu en retard, mais mieux vaut tard que jamais ! Nous vous souhaitons une année remplie de bonheur, de santé et de succès. Que cette nouvelle année soit synonyme de nouvelles opportunités, de moments inoubliables et de réalisations personnelles et professionnelles."
            footer={
              <p className="text-sm opacity-90 font-medium">
                Merci à tous pour votre soutien et votre confiance. Ensemble, faisons de 2025 une année exceptionnelle !
              </p>
            }
            fullWidth
          />
        </section>

        {/* Color Variants */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Color Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard variant="primary" icon={<ShieldIcon />} title="Primary" description="S2PI brand color #1D4572" />

            <InfoCard variant="secondary" icon={<InfoIcon />} title="Secondary" description="Lighter blue variant" />

            <InfoCard variant="success" icon={<StarIcon />} title="Success" description="Green for positive actions" />

            <InfoCard variant="warning" icon={<InfoIcon />} title="Warning" description="Orange for attention" />

            <InfoCard variant="danger" icon={<ShieldIcon />} title="Danger" description="Red for critical alerts" />

            <InfoCard variant="info" icon={<InfoIcon />} title="Info" description="Blue for information" />

            <InfoCard variant="coral" icon={<CelebrationIcon />} title="Coral" description="Warm orange tone" />

            <InfoCard variant="teal" icon={<LocationIcon />} title="Teal" description="Professional teal" />

            <InfoCard variant="purple" icon={<StarIcon />} title="Purple" description="Creative purple" />

            <InfoCard variant="pink" icon={<CelebrationIcon />} title="Pink" description="Vibrant pink" />

            <InfoCard variant="dark" icon={<ShieldIcon />} title="Dark" description="Dark theme variant" />

            <InfoCard variant="light" icon={<InfoIcon />} title="Light" description="Light theme variant" />
          </div>
        </section>

        {/* Size Variations */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Size Variations</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700">Small</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InfoCard
                  variant="primary"
                  size="sm"
                  icon={<InfoIcon />}
                  title="Small Card"
                  description="Compact information card"
                />
                <InfoCard
                  variant="success"
                  size="sm"
                  icon={<StarIcon />}
                  title="Small Success"
                  description="Success message"
                />
                <InfoCard
                  variant="warning"
                  size="sm"
                  icon={<InfoIcon />}
                  title="Small Warning"
                  description="Warning notice"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700">Medium (Default)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard
                  variant="primary"
                  size="md"
                  icon={<MembershipIcon />}
                  title="Medium Card"
                  description="Standard size for most use cases with balanced content and spacing."
                />
                <InfoCard
                  variant="secondary"
                  size="md"
                  icon={<LocationIcon />}
                  title="Medium Secondary"
                  description="Perfect for detailed information and descriptions."
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700">Large</h3>
              <InfoCard
                variant="gradient"
                size="lg"
                icon={<CelebrationIcon />}
                title="Large Gradient Card"
                description="Large cards are perfect for hero sections, important announcements, or detailed content that needs more space and visual prominence."
                badge="Featured"
                fullWidth
              />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-gray-700">Extra Large</h3>
              <InfoCard
                variant="primary"
                size="xl"
                layout="hero"
                textAlign="center"
                icon={<ShieldIcon />}
                title="Extra Large Hero Card"
                subtitle="Premium Content Section"
                description="Extra large cards provide maximum impact and are ideal for landing pages, feature highlights, or comprehensive information displays that require significant visual presence."
                footer={
                  <div className="flex justify-center space-x-4">
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-colors">
                      Learn More
                    </button>
                    <button className="bg-white text-[#1D4572] hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors">
                      Get Started
                    </button>
                  </div>
                }
                fullWidth
              />
            </div>
          </div>
        </section>

        {/* Layout Variations */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Layout Variations</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <InfoCard
                variant="primary"
                layout="compact"
                icon={<InfoIcon />}
                title="Compact"
                description="Minimal height"
              />
              <InfoCard
                variant="secondary"
                layout="standard"
                icon={<StarIcon />}
                title="Standard"
                description="Default layout"
              />
              <InfoCard
                variant="success"
                layout="banner"
                icon={<CelebrationIcon />}
                title="Banner"
                description="Medium height for announcements"
              />
              <InfoCard
                variant="warning"
                layout="hero"
                icon={<ShieldIcon />}
                title="Hero"
                description="Maximum height for impact"
              />
            </div>
          </div>
        </section>

        {/* Interactive Cards */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Interactive Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              variant="primary"
              icon={<LocationIcon />}
              title="Clickable Card"
              description="Click me to see the interaction"
              onClick={() => alert("Card clicked!")}
              animation="hover"
            />

            <InfoCard
              variant="success"
              icon={<StarIcon />}
              title="Link Card"
              description="Opens external link"
              href="https://www.s2pi.fr"
              target="_blank"
              animation="hover"
            />

            <InfoCard
              variant="info"
              icon={<InfoIcon />}
              title="Loading Card"
              description="Shows loading state"
              loading={false}
              onClick={() => {}}
              animation="hover"
            />
          </div>
        </section>

        {/* Special Features */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Special Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
              variant="purple"
              icon={<CelebrationIcon />}
              title="Card with Badge"
              description="Features a badge indicator in the top-right corner"
              badge="NEW"
              overlay
            />

            <InfoCard
              variant="pink"
              shape="pill"
              textAlign="center"
              icon={<StarIcon />}
              title="Pill Shape Card"
              description="Fully rounded corners for a modern look"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
