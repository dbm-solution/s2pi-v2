// src/components/ui/slider/hero-slider/S2PILayerSlider.tsx
"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SliderCard } from './slider-card';
import styles from './S2PILayerSlider.module.css';

interface SlideConfig {
  id: string;
  slideNumber: number;
  backgroundImage: string;
  logoImage: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  variant: "default" | "fireProtection" | "thermalIsolation" | "acousticSolutions" | "generalSolutions";
  accentColor: string;
  accentColorHover: string;
}

type AnimationPhase = 'idle' | 'exit' | 'sliceRolling' | 'cardExpanding' | 'logoIn' | 'textIn' | 'buttonIn' | 'complete';

export function S2PILayerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>('idle');
  const [isPaused, setIsPaused] = useState(false);
  const [sliceAnimations, setSliceAnimations] = useState<string[]>(Array(8).fill(''));
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Slide configurations using numbered folder structure
  const slideConfigs: SlideConfig[] = [
    {
      id: 'itarn',
      slideNumber: 1,
      backgroundImage: '/images/home-page/slider-cards/1/10005.jpg',
      logoImage: '/images/home-page/slider-cards/1/logo.png',
      title: 'ITARN - ISOLATION THERMIQUE PAR L\'EXTÉRIEUR',
      description: 'Un produit à base de laine minérale de laitier associé à un liant hydraulique. Destiné à l\'isolation thermique des parois verticales par l\'extérieur sous bardage ventilé des bâtiments résidentiels individuels, collectifs ou tertiaires.',
      ctaText: 'En savoir +',
      ctaLink: '/isolation-thermique-par-lexterieur',
      variant: 'thermalIsolation',
      accentColor: '#13abd1',
      accentColorHover: '#0f96b8'
    },
    {
      id: 'thermal',
      slideNumber: 2,
      backgroundImage: '/images/home-page/slider-cards/2/10006.jpg',
      logoImage: '/images/home-page/slider-cards/2/logo.png',
      title: 'SOLUTIONS ISOLATION THERMIQUE',
      description: 'L\'isolation par projection de laine de laitier, la solution pour l\'efficacité énergétique, la protection incendie et acoustique des bâtiments.',
      ctaText: 'En savoir +',
      ctaLink: '/solutions-isolation-thermique',
      variant: 'thermalIsolation',
      accentColor: '#1d4572',
      accentColorHover: '#163659'
    },
    {
      id: 'fire',
      slideNumber: 3,
      backgroundImage: '/images/home-page/slider-cards/3/10007.jpg',
      logoImage: '/images/home-page/slider-cards/3/logo.png',
      title: 'SOLUTIONS PROTECTION SÉCURITÉ INCENDIE',
      description: 'Les enduits de protection incendie sont des revêtements projetés sur support de type métal déployé, à base de laine minérale et liants spéciaux.',
      ctaText: 'En savoir +',
      ctaLink: '/solutions-protection-securite-incendie',
      variant: 'fireProtection',
      accentColor: '#ad0309',
      accentColorHover: '#8a0207'
    },
    {
      id: 'acoustic',
      slideNumber: 4,
      backgroundImage: '/images/home-page/slider-cards/4/10008.jpg',
      logoImage: '/images/home-page/slider-cards/4/logo.png',
      title: 'SOLUTIONS ACOUSTIQUES',
      description: 'La solution idéale pour les isolements horizontaux entre logement et locaux d\'activités ou logement et garages collectifs ou individuels.',
      ctaText: 'En savoir +',
      ctaLink: '/solutions-acoustiques',
      variant: 'acousticSolutions',
      accentColor: '#7b6a58',
      accentColorHover: '#635546'
    }
  ];

  // Auto-advance management
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    autoPlayRef.current = setTimeout(() => {
      if (!isTransitioning && !isPaused) {
        nextSlideTransition();
      }
    }, 6000);
  }, [isTransitioning, isPaused]);

  const pauseAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isPaused && !isTransitioning) {
      startAutoPlay();
    } else {
      pauseAutoPlay();
    }

    return () => pauseAutoPlay();
  }, [currentSlide, isTransitioning, isPaused, startAutoPlay, pauseAutoPlay]);

  // Vertical slice rolling animation
  const animateSlices = useCallback((direction: 'out' | 'in') => {
    const delays = [0, 100, 200, 300, 400, 500, 600, 700]; // Staggered animation
    
    delays.forEach((delay, index) => {
      setTimeout(() => {
        setSliceAnimations(prev => {
          const newAnimations = [...prev];
          newAnimations[index] = direction === 'out' ? styles.sliceRollingOut : styles.sliceRollingIn;
          return newAnimations;
        });
      }, delay);
    });

    // Reset slice animations after completion
    setTimeout(() => {
      setSliceAnimations(Array(8).fill(''));
    }, 1600);
  }, []);

  // Enhanced slide transition with vertical slice rolling
  const nextSlideTransition = useCallback(() => {
    if (isTransitioning) return;

    const newNextSlide = (currentSlide + 1) % slideConfigs.length;
    setNextSlide(newNextSlide);

    setIsTransitioning(true);
    setAnimationPhase('exit');
    
    // Phase 1: Exit current content (300ms)
    setTimeout(() => {
      setAnimationPhase('sliceRolling');
      animateSlices('out');
    }, 300);
    
    // Phase 2: Slice rolling animation (800ms) + change slide
    setTimeout(() => {
      setCurrentSlide(newNextSlide);
      setNextSlide((newNextSlide + 1) % slideConfigs.length);
      animateSlices('in');
    }, 1100);
    
    // Phase 3: Start card expansion (200ms after slices start rolling in)
    setTimeout(() => {
      setAnimationPhase('cardExpanding');
    }, 1300);
    
    // Phase 4: Logo animates in (400ms)
    setTimeout(() => {
      setAnimationPhase('logoIn');
    }, 1700);
    
    // Phase 5: Text content slides in from right (300ms)
    setTimeout(() => {
      setAnimationPhase('textIn');
    }, 2000);
    
    // Phase 6: Button slides in from right (300ms)
    setTimeout(() => {
      setAnimationPhase('buttonIn');
    }, 2300);
    
    // Phase 7: Complete transition
    setTimeout(() => {
      setAnimationPhase('complete');
    }, 2600);
    
    // Phase 8: Reset to idle
    setTimeout(() => {
      setIsTransitioning(false);
      setAnimationPhase('idle');
    }, 2900);
  }, [slideConfigs.length, isTransitioning, currentSlide, animateSlices]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return;

    const newNextSlide = (index + 1) % slideConfigs.length;
    setNextSlide(newNextSlide);

    setIsTransitioning(true);
    setAnimationPhase('exit');
    
    setTimeout(() => {
      setAnimationPhase('sliceRolling');
      animateSlices('out');
    }, 300);
    
    setTimeout(() => {
      setCurrentSlide(index);
      setNextSlide(newNextSlide);
      animateSlices('in');
    }, 1100);
    
    setTimeout(() => {
      setAnimationPhase('cardExpanding');
    }, 1300);
    
    setTimeout(() => {
      setAnimationPhase('logoIn');
    }, 1700);
    
    setTimeout(() => {
      setAnimationPhase('textIn');
    }, 2000);
    
    setTimeout(() => {
      setAnimationPhase('buttonIn');
    }, 2300);
    
    setTimeout(() => {
      setAnimationPhase('complete');
    }, 2600);
    
    setTimeout(() => {
      setIsTransitioning(false);
      setAnimationPhase('idle');
    }, 2900);
  }, [isTransitioning, currentSlide, slideConfigs.length, animateSlices]);

  // Pause/Resume functionality
  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  const currentConfig = slideConfigs[currentSlide];
  const nextConfig = slideConfigs[nextSlide];

  // CSS class builders
  const getSliderCardClasses = () => {
    const classes = [styles.sliderCardContainer];
    
    switch (animationPhase) {
      case 'exit':
        classes.push(styles.slideOut);
        break;
      case 'sliceRolling':
        classes.push(styles.slideInitial);
        break;
      case 'cardExpanding':
      case 'logoIn':
      case 'textIn':
      case 'buttonIn':
        classes.push(styles.slideIn);
        break;
      default:
        classes.push(styles.slideIdle);
    }
    
    return classes.join(' ');
  };

  const getDotClasses = (index: number) => {
    const classes = [styles.dot];
    
    if (index === currentSlide) {
      classes.push(styles.activeDot);
    }
    
    if (isTransitioning) {
      classes.push(styles.disabled);
    }
    
    return classes.join(' ');
  };

  const getProgressClasses = () => {
    const classes = [styles.progressFill];
    classes.push(styles[`progress${currentConfig.id}`]);
    return classes.join(' ');
  };

  // Mouse event handlers for pause/resume
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Render vertical slices for current background
  const renderBackgroundSlices = (config: SlideConfig, isNext = false) => {
    return (
      <div className={styles.sliceContainer}>
        {Array(8).fill(null).map((_, index) => (
          <div
            key={index}
            className={`${styles.slice} ${!isNext ? sliceAnimations[index] : ''}`}
            style={{
              backgroundImage: `url(${config.backgroundImage})`,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div 
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Current Background with Vertical Slices */}
      <div 
        className={`${styles.backgroundLayer} ${styles[`bg${currentConfig.slideNumber}`]}`}
        data-slide={currentConfig.id}
      >
        {renderBackgroundSlices(currentConfig)}
      </div>

      {/* Next Background Layer */}
      <div 
        className={`${styles.backgroundLayerNext} ${styles[`bg${nextConfig.slideNumber}`]}`}
        data-slide={nextConfig.id}
      >
        {renderBackgroundSlices(nextConfig, true)}
      </div>

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Slider Content */}
      <div className={styles.sliderContent}>
        <div className={getSliderCardClasses()}>
          <SliderCard
            title={currentConfig.title}
            description={currentConfig.description}
            buttonText={currentConfig.ctaText}
            buttonHref={currentConfig.ctaLink}
            imageSrc={currentConfig.logoImage}
            imageAlt={`${currentConfig.title} Logo`}
            variant={currentConfig.variant}
            size="default"
            animation="none"
            accentColor={currentConfig.accentColor}
            accentColorHover={currentConfig.accentColorHover}
            animationPhase={animationPhase}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className={styles.navigation}>
        {/* Dots */}
        <div className={styles.dots}>
          {slideConfigs.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={getDotClasses(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              data-slide-index={index}
            />
          ))}
        </div>

        {/* Counter */}
        <div className={styles.counter}>
          {currentSlide + 1} / {slideConfigs.length}
        </div>

        {/* Spinner Timer */}
        <div className={styles.spinnerContainer}>
          <div className={`${styles.spinner} ${isPaused ? styles.spinnerPaused : ''}`} />
        </div>

        {/* Progress Bar */}
        <div className={styles.progressBar}>
          <div 
            className={getProgressClasses()}
            data-progress={((currentSlide + 1) / slideConfigs.length) * 100}
          />
        </div>

        {/* Pause Indicator */}
        <div className={`${styles.pauseIndicator} ${isPaused ? styles.visible : ''}`}>
          Paused
        </div>
      </div>
    </div>
  );
}