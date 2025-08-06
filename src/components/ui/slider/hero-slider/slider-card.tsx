"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import styles from "./slider-card.module.css"

type AnimationPhase = 'idle' | 'exit' | 'sliceRolling' | 'cardExpanding' | 'logoIn' | 'textIn' | 'buttonIn' | 'complete';

export interface SliderCardProps {
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
  onButtonClick?: () => void
  imageSrc?: string
  imageAlt?: string
  variant?: "default" | "fireProtection" | "thermalIsolation" | "acousticSolutions" | "generalSolutions" | "custom"
  size?: "compact" | "small" | "default" | "large"
  animation?: "slideIn" | "fadeIn" | "scaleIn" | "none"
  accentColor?: string
  accentColorHover?: string
  className?: string
  style?: React.CSSProperties
  animationPhase?: AnimationPhase
}

export const SliderCard: React.FC<SliderCardProps> = ({
  title,
  description,
  buttonText = "En savoir +",
  buttonHref,
  onButtonClick,
  imageSrc,
  imageAlt = "Card image",
  variant = "default",
  size = "default",
  animation = "none",
  accentColor,
  accentColorHover,
  className,
  style,
  animationPhase = 'idle',
}) => {
  const cardStyle = {
    ...style,
    ...(accentColor && { "--accent-color": accentColor }),
    ...(accentColorHover && { "--accent-color-hover": accentColorHover }),
  } as React.CSSProperties

  const handleButtonClick = (e: React.MouseEvent) => {
    if (onButtonClick) {
      e.preventDefault()
      onButtonClick()
    }
  }

  // Helper function to get card container classes with expansion animation
  const getCardClasses = () => {
    const classes = [
      styles.sliderCard,
      styles[variant],
      styles[size],
      animation !== "none" && styles[animation],
      className,
    ].filter(Boolean);

    // Add expansion animation classes
    switch (animationPhase) {
      case 'exit':
      case 'sliceRolling':
        classes.push(styles.cardExpandInitial);
        break;
      case 'cardExpanding':
        classes.push(styles.cardExpandAnimating);
        break;
      case 'logoIn':
      case 'textIn':
      case 'buttonIn':
      case 'complete':
      case 'idle':
      default:
        classes.push(styles.cardExpandComplete);
    }

    return classes;
  };

  // Helper function to get content animation classes
  const getContentClasses = () => {
    const classes = [styles.content];
    
    switch (animationPhase) {
      case 'exit':
      case 'sliceRolling':
      case 'cardExpanding':
        classes.push(styles.cardContentHidden);
        break;
      case 'logoIn':
      case 'textIn':
      case 'buttonIn':
      case 'complete':
      case 'idle':
      default:
        classes.push(styles.cardContentVisible);
    }
    
    return classes.join(' ');
  };

  const getLogoClasses = () => {
    const classes = [styles.imageContainer];
    
    switch (animationPhase) {
      case 'exit':
      case 'sliceRolling':
      case 'cardExpanding':
        classes.push(styles.logoHidden);
        break;
      case 'logoIn':
      case 'textIn':
      case 'buttonIn':
      case 'complete':
      case 'idle':
      default:
        classes.push(styles.logoVisible);
    }
    
    return classes.join(' ');
  };

  const getTextClasses = () => {
    const classes = [styles.textContent];
    
    switch (animationPhase) {
      case 'exit':
      case 'sliceRolling':
      case 'cardExpanding':
      case 'logoIn':
        classes.push(styles.textHidden);
        break;
      case 'textIn':
      case 'buttonIn':
      case 'complete':
      case 'idle':
      default:
        classes.push(styles.textVisible);
    }
    
    return classes.join(' ');
  };

  const getButtonClasses = () => {
    const classes = [styles.button];
    
    switch (animationPhase) {
      case 'exit':
      case 'sliceRolling':
      case 'cardExpanding':
      case 'logoIn':
      case 'textIn':
        classes.push(styles.buttonHidden);
        break;
      case 'buttonIn':
      case 'complete':
      case 'idle':
      default:
        classes.push(styles.buttonVisible);
    }
    
    return classes.join(' ');
  };

  const ButtonComponent = buttonHref ? "a" : "button"

  return (
    <div
      className={cn(...getCardClasses())}
      style={cardStyle}
    >
      <div className={styles.accentBar} />

      <div className={getContentClasses()}>
        <div className={styles.header}>
          <div className={getTextClasses()}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>

          <div className={getLogoClasses()}>
            {imageSrc ? (
              <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className={styles.image} />
            ) : (
              <div className={styles.image}>
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="#f3f4f6" />
                  <path
                    d="M30 70L45 55L60 70M70 40L85 55L70 70"
                    stroke="#9ca3af"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="40" cy="35" r="5" fill="#9ca3af" />
                </svg>
              </div>
            )}
          </div>
        </div>

        <ButtonComponent
          className={getButtonClasses()}
          href={buttonHref}
          onClick={handleButtonClick}
          {...(buttonHref && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {buttonText}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </ButtonComponent>
      </div>
    </div>
  )
}

// Predefined S2PI Cards with exact color specifications
export const S2PIDefaultCard: React.FC<Partial<SliderCardProps>> = (props) => (
  <SliderCard
    title="SOLUTIONS PROTECTION SÉCURITÉ INCENDIE"
    description="Les enduits de protection incendie sont des revêtements projetés sur support de type métal déployé, à base de laine minérale et liants spéciaux destiné à la protection au feu des planchers non exposés aux intempéries. INNOSPRAY-FFM est un revêtement projeté, à base de laine minérale de laitier et de liants spéciaux, destiné à la protection au feu des structures acier non exposées aux intempéries."
    variant="default"
    imageSrc="/general-solutions-badge.png"
    accentColor="#13abd1"
    accentColorHover="#0f96b8"
    {...props}
  />
)

export const S2PIFireProtectionCard: React.FC<Partial<SliderCardProps>> = (props) => (
  <SliderCard
    title="SOLUTIONS PROTECTION SÉCURITÉ INCENDIE"
    description="Les enduits de protection incendie sont des revêtements projetés sur support de type métal déployé, à base de laine minérale et liants spéciaux destiné à la protection au feu des planchers non exposés aux intempéries. INNOSPRAY-FFM est un revêtement projeté, à base de laine minérale de laitier et de liants spéciaux, destiné à la protection au feu des structures acier non exposées aux intempéries."
    variant="fireProtection"
    imageSrc="/fire-protection-badge.png"
    accentColor="#ad0309"
    accentColorHover="#8a0207"
    {...props}
  />
)

export const S2PIThermalIsolationCard: React.FC<Partial<SliderCardProps>> = (props) => (
  <SliderCard
    title="SOLUTIONS ISOLATION THERMIQUE"
    description="L'isolation par projection de laine de laitier, la solution pour l'efficacité énergétique, la protection incendie et acoustique des bâtiments. INNOSPRAY-FTH est destiné à l'isolation thermique par projection des dalles en béton, des planchers à poutrelles et hourdis béton, des planchers béton à bac collaborant en acier. Il limite les ponts thermiques et évite tout percement dans la dalle."
    variant="thermalIsolation"
    imageSrc="/thermal-isolation-badge.png"
    accentColor="#1d4572"
    accentColorHover="#163659"
    {...props}
  />
)

export const S2PIThermalExteriorCard: React.FC<Partial<SliderCardProps>> = (props) => (
  <SliderCard
    title="ITARN - ISOLATION THERMIQUE PAR L'EXTÉRIEUR"
    description="Un produit à base de laine minérale de laitier associé à un liant hydraulique. Destiné à l'isolation thermique des parois verticales par l'extérieur sous bardage ventilé des bâtiments résidentiels individuels, collectifs ou tertiaires. Ses performances acoustiques et de sécurité incendie complètent la performance thermique pour une isolation optimale. Projeté via un système pneumatique par des entreprises qualifiées pour les travaux de façades, de maçonnerie et d'isolation par l'extérieur."
    variant="thermalIsolation"
    imageSrc="/thermal-isolation-badge.png"
    accentColor="#1d4572"
    accentColorHover="#163659"
    {...props}
  />
)

export const S2PIAcousticSolutionsCard: React.FC<Partial<SliderCardProps>> = (props) => (
  <SliderCard
    title="SOLUTIONS ACOUSTIQUES"
    description="La solution idéale pour les isolements horizontaux entre logement et locaux d'activités ou logement et garages collectifs ou individuels. Les solutions S2PI sont adaptées tant aux ouvrages neufs qu'existants en secteur résidentiel et non résidentiel. Nos produits offrent une performance acoustique optimale tout en respectant les normes environnementales les plus strictes."
    variant="acousticSolutions"
    imageSrc="/acoustic-protection-badge.png"
    accentColor="#7b6a58"
    accentColorHover="#635546"
    {...props}
  />
)

export const S2PIGeneralSolutionsCard: React.FC<Partial<SliderCardProps>> = (props) => (
  <SliderCard
    title="SOLUTIONS GÉNÉRALES"
    description="Des solutions complètes et innovantes pour tous vos besoins en isolation, protection incendie et acoustique. Nos produits s'adaptent à tous types de projets résidentiels et tertiaires. Avec plus de 20 ans d'expérience, S2PI vous accompagne dans tous vos projets de construction et de rénovation avec des solutions techniques performantes et durables."
    variant="generalSolutions"
    imageSrc="/general-solutions-badge.png"
    accentColor="#13abd1"
    accentColorHover="#0f96b8"
    {...props}
  />
)
