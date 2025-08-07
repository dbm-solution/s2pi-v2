"use client";

export default function QualityControl() {
  return (
    <div className="relative w-full" style={{ backgroundColor: '#f9f9f9' }}>
      <div 
        className="relative w-full"
        style={{
          backgroundImage: 'url("/images/home-page/background/10019.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          paddingTop: '330px',
          paddingBottom: '330px',
          clipPath: 'polygon(74% 1%, 100% 7%, 100% 91%, 75% 100%, 0 91%, 0 9%)',
        }}
      >
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.6)',
            zIndex: 1
          }}
        >
          <div className="z-10 w-full">
            <div className="container mx-auto px-4">
              <h2 
                style={{
                  textAlign: 'center',
                  fontFamily: 'Prata',
                  fontSize: '42px',
                  fontWeight: '300',
                  lineHeight: '1.4',
                  color: '#000000',
                  letterSpacing: 'normal',
                  margin: '0 auto',
                  maxWidth: '1199px',
                  padding: '0 20px',
                  unicodeBidi: 'isolate',
                  position: 'relative',
                  zIndex: '99999'
                }}
              >
                Chaque produit est conforme aux besoins et aux normes du marché. Il est soumis à un contrôle de qualité extrêmement rigoureux par des laboratoires d'essais accrédités.
              </h2>
            </div>
          </div>
        </div>

    
      </div>
    </div>
  );
}