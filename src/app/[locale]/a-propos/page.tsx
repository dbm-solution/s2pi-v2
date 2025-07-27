import { ImageSlider } from "@/components/ui/slider/image-slider/imageSlider";
import { Typography } from "@/components/ui/typography/typography";
import { S2PIAccordion, S2PIAccordionItem } from "@/components/ui/accordion.tsx/simple-accordion/simple-accordion";
import { Divider } from "@/components/ui/ditted-divider/empty-divider";
import { SocialButton } from "@/components/ui/buttons/social-button/Social-button";
import { aboutPageContent } from "@/content/pages/about/about";
import { ReactNode } from "react";
import Image from "next/image";

interface AProposPageProps {
  params: Promise<{
    locale: string;
  }>;
}

// Social Media Icons
const FacebookIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

export default async function AProposPage({ params }: AProposPageProps) {
  const { locale } = await params;
  const content = aboutPageContent;

  return (
    <div>
      <Typography className="heading-primary text-s2pi-text-heading mb-lg">
        {content.title}
      </Typography>

      <div className="grid-responsive-2">
        <div className="grid-item">
          <Typography>
            {content.introduction.paragraphs[0]}
          </Typography>
        </div>
        <div className="grid-item">
          <Typography>
            {content.introduction.paragraphs[1]}
          </Typography>
        </div>
      </div>
      
      <ImageSlider images={content.slider.images} />

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
          {content.commitments.title}
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
            {content.commitments.items.map((item, index) => (
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
            {content.environmental.paragraphs[0]}
          </Typography>
        </div>
        <div className="grid-item">
          <Typography>
            {content.environmental.paragraphs[1]}
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
          {content.associations.title}
        </Typography>

        {/* Professional Associations Accordions */}
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <S2PIAccordion 
            type="single" 
            variant="default"
            borderRadius="sm"
            animationDuration="normal"
          >
            {content.associations.items.map((association, index) => (
              <S2PIAccordionItem
                key={association.id}
                title={`${association.title} • ${association.subtitle}`}
                defaultOpen={index === 0} // First accordion open by default
              >
                <div style={{ padding: '20px 0' }}>
                  {/* Logo and Description */}
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

                  {/* Points List */}
                  <ul style={{ 
                    listStyleType: 'disc',
                    paddingLeft: '20px',
                    margin: 0
                  }}>
                    {association.points.map((point, pointIndex) => (
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
  );
}