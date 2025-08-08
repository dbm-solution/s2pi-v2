import { useClientTranslations } from '@/components/providers/ClientTranslationProvider';
import { Typography } from '@/components/ui/typography/typography'
import React from 'react'

const Parallex = () => {


  const t = useClientTranslations('home');
  return (
    <div 
    style={{
      position: 'relative',
      width: '100%',
      height: '496px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundImage: 'url(/images/home-page/background/10020.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed', // C'est la clé de l'effet !
      marginTop: '80px',
      marginBottom: '0px'
    }}
    aria-label="S2PI Parallax Statement"
  >
    {/* Overlay léger pour la lisibilité */}
    <div 
      style={{
        position: 'absolute',
        inset: '0',
        background: 'rgba(255, 255, 255, 0.7)', // Plus transparent que votre version
        zIndex: 1
      }}
    />
    
    {/* Contenu texte */}
    <div 
      style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        padding: '0 40px',
        textAlign: 'center'
      }}
    >
      <Typography
        as="h3"
        variant="h2"
        align="center"
        fontFamily="openSans"
        style={{
          fontFamily: 'Prata, Helvetica, Arial, Verdana, sans-serif',
          fontWeight: 400,
          color: '#2d2d2d',
          fontSize: '42px',
          lineHeight: '58px',
          textAlign: 'center',
          letterSpacing: '0.5px',
          margin: 0,
        }}
      >
        {t('protection.parallaxTitle')}
      </Typography>
    </div>
  </div>
  )
}

export default Parallex