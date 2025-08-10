"use client";

import { ClientTranslationProvider } from '@/components/providers/ClientTranslationProvider';
import { ImageSlider } from "@/components/ui/slider/image-slider/imageSlider";
import { Typography } from "@/components/ui/typography/typography";
import { S2PIAccordion, S2PIAccordionItem } from "@/components/ui/accordion.tsx/simple-accordion/simple-accordion";
import { Divider } from "@/components/ui/ditted-divider/empty-divider";
import { SocialButton } from "@/components/ui/buttons/social-button/Social-button";
import { aboutPageContent } from "@/content/pages/about/about";
import { ReactNode, useMemo } from "react";
import Image from "next/image";
import { FacebookIcon } from "@/components/ui/icons/socials/Facebook-icon";
import { LinkedInIcon } from "@/components/ui/icons/socials/LinkedIn-icon";
import { EmailIcon } from "@/components/ui/icons/socials/Email-icon";
import { useAutoScrollAnimation } from '@/hooks/use-scroll-animation';
import { useTypedTranslations } from '@/hooks/useTypedTranslations';
import { DottedDivider } from '@/components/ui/dotted-divider';

interface AProposContentProps {
  locale: string;
}

export default function AProposContent({ locale }: AProposContentProps) {
  const { t, raw } = useTypedTranslations('about'); // One hook for all! ✨
  const config = aboutPageContent;
  useAutoScrollAnimation();

  // Build slider images - now just simple image paths
  const sliderImages = useMemo(() => {
    return config.slider.images.map((imagePath) => ({
      src: imagePath,
      alt: "Chantier S2PI",
      title: "S2PI Chantier"
    }));
  }, [config.slider.images]);

  // Build associations with translations
  const associations = useMemo(() => {
    return config.associations.items.map((assocConfig) => ({
      id: assocConfig.id,
      title: t.associations.items[assocConfig.id as keyof typeof t.associations.items].title,
      subtitle: t.associations.items[assocConfig.id as keyof typeof t.associations.items].subtitle,
      description: t.associations.items[assocConfig.id as keyof typeof t.associations.items].description,
      logo: assocConfig.logoPath,
      points: raw(`associations.items.${assocConfig.id}.points`) || []
    }));
  }, [config.associations.items, t, raw]);

  return (
    <ClientTranslationProvider initialLocale={locale}>
      <div className="container-s2pi">

        <div
        className="scroll-fade-in-large"
        style={{ height: '125px' }}>

        <Typography
        style={{
          color: '#565656',
          fontSize: '42px',
          lineHeight: '52px',
          textAlign: 'center',
        }}
        >
          {t.title}
        </Typography>

        <DottedDivider style={{ height: '38px' }} dotCount={80} dotSize={2} dotColor="#b52626" spacing="superTight" />
      </div>

        <div className="grid-responsive-2" style={{ gap: '50px' }}>
          <div className="grid-item" >
            <Typography
            className="scroll-fade-left-to-right"
              style={{
                color: '#232323',
                fontSize: '17px',
                fontWeight: '300',
                lineHeight: '31px',
                textAlign: 'justify',
                fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif',
              }}
            >
              <span style={{ fontWeight: 700 }}>{t.introduction.left.bolder}</span> {t.introduction.left.text}
            </Typography>
          </div>
          <div className="grid-item" >
            <Typography
            className="scroll-fade-right-to-left"
              style={{
                color: '#232323',
                fontSize: '17px',
                fontWeight: '300',
                lineHeight: '31px',
                gap: '50px',
              }}
            >
              {t.introduction.right}
            </Typography>
          </div>
        </div>


        <div style={{ marginTop: '50px' }}>
          <ImageSlider  showDots={false} images={sliderImages} rounded={5} />
        </div>

        {/* S2PI Engagements Section */}
        <div style={{ marginTop: '40px', marginBottom: '40px' }}>
          <Typography
            variant="h2"
            className="text-s2pi-text-heading mb-lg"
            style={{
              fontSize: '24px',
              fontWeight: '600',
              marginBottom: '30px',
              color: '#333'
            }}
          >
            {t.commitments.title}
          </Typography>

          <div style={{ maxWidth: '1000px', width: '100%' }}>
            <ul style={{
              listStyleImage: 'none',
              listStylePosition: 'outside',
              listStyleType: 'disc',
              padding: 0,
              margin: 0,
              width: '100%'
            }}>
              {(raw('commitments.items') || []).map((item: string, index: number) => (
                <Typography key={index} variant="listItem">
                  {item}
                </Typography>
              ))}
            </ul>
          </div>

          <Divider
            spacerHeight={15}
            spacerHeightBottom={25}
            lineColor="#CEC2AB"
            borderWidth={4}
            withShadow={true}
            separatorWidth={50}
          />
        </div>

        {/* Environmental Section */}
        <div className="grid-responsive-2">
          <div className="grid-item">
            <Typography>
              {t.environmental.left}
            </Typography>
          </div>
          <div className="grid-item">
            <Typography>
              {t.environmental.right}
            </Typography>
          </div>
        </div>

        {/* Associations Section */}
        <div style={{ marginTop: '60px', marginBottom: '40px' }}>
          <Typography
            variant="h2"
            className="text-s2pi-text-heading mb-lg"
            style={{
              fontSize: '32px',
              fontWeight: '400',
              marginBottom: '40px',
              color: '#002347',
              textAlign: 'center'
            }}
          >
            {t.associations.title}
          </Typography>

          {/* Professional Associations Accordions */}
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <S2PIAccordion
              type="single"
              variant="default"
              borderRadius="sm"
              animationDuration="normal"
            >
              {associations.map((association, index) => (
                <S2PIAccordionItem
                  key={association.id}
                  title={`${association.title} • ${association.subtitle}`}
                  defaultOpen={index === 0}
                >
                  <div style={{ padding: '20px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px', gap: '20px' }}>
                      {association.logo && (
                        <div style={{ flexShrink: 0 }}>
                          <Image
                            src={association.logo}
                            alt={`Logo ${association.subtitle}`}
                            width={80}
                            height={80}
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                      )}
                      <div style={{ flex: 1 }}>
                        <Typography variant="body" style={{
                          color: '#333',
                          lineHeight: '1.6',
                          marginBottom: '20px'
                        }}>
                          {association.description}
                        </Typography>
                      </div>
                    </div>

                    <ul style={{
                      listStyleType: 'disc',
                      paddingLeft: '20px',
                      margin: 0
                    }}>
                      {association.points.map((point: string, pointIndex: number) => (
                        <li key={pointIndex} style={{
                          color: '#333',
                          fontSize: '16px',
                          lineHeight: '1.6',
                          marginBottom: '10px',
                          fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
                        }}>
                          <Typography variant="body" style={{ margin: 0 }}>
                            {point}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>
                </S2PIAccordionItem>
              ))}
            </S2PIAccordion>
          </div>

          {/* Ambassador des Alpes Section */}
          <div style={{
            marginTop: '40px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            maxWidth: '1200px',
            margin: '40px auto 0'
          }}>
            <Typography variant="body" style={{
              fontStyle: 'italic',
              color: '#666',
              textAlign: 'center',
              lineHeight: '1.6'
            }}>
              Nous sommes membre de l'association, <strong>Ambassadeur des Alpes</strong>
              <br />
              Association d'entreprises engagées dans la promotion de notre territoire alpin et de ses valeurs,
              partenaire de l'association de la Descente des Alpages, aide aux associations caritatives locales
              ayant des interactions avec la montagne.
            </Typography>
          </div>
        </div>

        {/* Social Sharing Section */}
        <div style={{
          marginTop: '50px',
          marginBottom: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <SocialButton
              variant="facebook"
              size="sm"
              shape="rectangle"
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.s2pi.fr/a-propos/"
              target="_blank"
              rel="noopener noreferrer"
              icon={<FacebookIcon />}
              ariaLabel="Partager sur Facebook"
            />

            <SocialButton
              variant="linkedin"
              size="sm"
              shape="rectangle"
              href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.s2pi.fr/a-propos/"
              target="_blank"
              rel="noopener noreferrer"
              icon={<LinkedInIcon />}
              ariaLabel="Partager sur LinkedIn"
            />

            <SocialButton
              variant="email"
              size="sm"
              shape="rectangle"
              href="mailto:?subject=S2PI - Une entreprise à votre écoute&body=Découvrez cette page de S2PI: https://www.s2pi.fr/a-propos/"
              target="_self"
              icon={<EmailIcon />}
              ariaLabel="Partager par email"
            />
          </div>
        </div>
      </div>
    </ClientTranslationProvider>
  );
}