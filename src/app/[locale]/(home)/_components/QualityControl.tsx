'use client';

import { Typography } from "@/components/ui/typography/typography";

export const QualityControl = () => {
  return (
    <div className="relative w-full">
      {/* Top Angled Shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ height: '60px', transform: 'translateY(-1px)' }}>
        <svg 
          className="absolute bottom-0 w-full h-full" 
          viewBox="0 0 2000 90" 
          preserveAspectRatio="none"
          style={{ fill: '#f9f9f9' }}
        >
          <polygon points="535.084,64.886 0,0 0,90 2000,90 2000,0" />
        </svg>
      </div>

      {/* Main Content Section */}
      <div 
        className="relative w-full py-36"
        style={{
          backgroundImage: 'url("/images/backgrounds/header-01.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '400px'
        }}
      >
        {/* Semi-transparent white overlay */}
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
        />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <Typography 
              as="h2"
              className="text-center"
              style={{
                fontFamily: 'Prata, serif',
                fontSize: '42px',
                lineHeight: '1.4',
                fontWeight: 'normal',
                color: '#2d2d2d',
                textAlign: 'center',
                letterSpacing: 'normal',
                wordSpacing: 'normal',
                maxWidth: '1000px',
                margin: '0 auto',
                padding: '0 20px'
              }}
            >
              Chaque produit est conforme aux besoins et aux normes du marché. Il est soumis à un contrôle de qualité extrêmement rigoureux par des laboratoires d'essais accrédités.
            </Typography>
          </div>
        </div>
      </div>

      {/* Bottom Angled Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: '60px', transform: 'translateY(1px)' }}>
        <svg 
          className="absolute top-0 w-full h-full" 
          viewBox="0 0 2000 90" 
          preserveAspectRatio="none"
          style={{ fill: '#f9f9f9' }}
        >
          <polygon points="535.084,64.886 0,0 0,90 2000,90 2000,0" />
        </svg>
      </div>
    </div>
  );
}; 