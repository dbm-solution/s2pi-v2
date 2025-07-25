'use client';

export const ProtectionSection = () => {
  return (
    <>
      <div className="bg-white py-16 px-4">
        <div className="container mx-auto" style={{ maxWidth: '1200px' }}>
          <div style={{ height: '32px' }}></div>

          {/* Title */}
          <h3 style={{
            fontSize: '36px',
            color: '#565656',
            lineHeight: '46px',
            textAlign: 'center',
            fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
            fontWeight: '300',
            margin: '0 0 30px 0',
            letterSpacing: 'normal'
          }}>
            PROTECTION DES PERSONNES & DÉFIS ENVIRONNEMENTAUX
          </h3>

          {/* Dotted Separator */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 0 40px 0'
          }}>
            <div style={{
              width: '50px',
              borderTop: '2px dotted #a52626',
              marginRight: '10px'
            }}></div>
            <div style={{
              width: '50px',
              borderTop: '2px dotted #a52626',
              marginLeft: '10px'
            }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div style={{
                color: 'rgb(35, 35, 35)',
                fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif',
                fontSize: '17px',
                fontWeight: '300',
                lineHeight: '31px',
                textAlign: 'justify'
              }}>
                <p style={{ marginBottom: '0' }}>
                  <img
                    src="/images/jean-luc-belli.jpg"
                    alt="Jean-Luc Belli"
                    style={{
                      width: '160px',
                      float: 'left',
                      marginRight: '20px',
                      marginBottom: '10px'
                    }}
                  />
                </p>
                <div>
                  <strong>Si la sécurité incendie des bâtiments doit conjuguer l'ensemble</strong> des actions comme faciliter l'évacuation des personnes, mettre en place des dispositifs d'alerte, des équipements de désenfumage,… la protection passive reste la plus efficace et se décide dès le début du projet en prévoyant des systèmes constructifs ayant recours à des matériaux non combustibles ne participant ni à alimenter l'incendie ni à le propager. La protection passive en sécurité incendie s'allie aussi avec l'efficacité énergétique pour répondre aux objectifs nationaux de lutte contre le changement climatique. Cette conviction profonde m'anime depuis plusieurs années et guide mon action.
                </div>
              </div>
            </div>

            <div>
              <div style={{ height: '9px' }}></div>

              <div style={{
                color: 'rgb(35, 35, 35)',
                fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif',
                fontSize: '17px',
                fontWeight: '300',
                lineHeight: '31px',
                textAlign: 'justify'
              }}>
                <div style={{ marginBottom: '31px' }}>
                  Pour répondre aux défis environnementaux, ceux de protection des personnes et des biens, il faut être convaincu et agir avec détermination. C'est l'ambition que j'ai fixée en créant la société S2PI de fabriquer des solutions techniques, économiques, innovantes et fiables issues du partage de l'expertise et de l'expérience de ses membres.
                </div>

                <div></div>

                <blockquote style={{
                  fontStyle: 'italic',
                  margin: '31px 0',
                  padding: '0',
                  borderLeft: 'none',
                  quotes: 'none'
                }}>
                  <p style={{ margin: '0' }}>
                    « Dans le monde des idées tout dépend de l'enthousiasme. Dans le monde du réel tout dépend de la persévérance. »
                  </p>
                </blockquote>

                <p style={{
                  textAlign: 'right',
                  margin: '10px 0 31px 0',
                  color: '#565656'
                }}>
                  <small>Johann Wolfgang von Goethe</small>
                </p>

                <p style={{ margin: '0' }}>
                  <strong>Jean-Luc Belli</strong><br />
                  Président Directeur Général
                </p>
              </div>
            </div>
          </div>

          <div style={{ height: '35px' }}></div>
        </div>
      </div>

      <div
        className="relative w-full py-32"
        style={{
          backgroundImage: 'url("/images/backgrounds/header-02.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
          minHeight: '500px'
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(255,255,255,0.65)' }}
        />

        <div className="relative z-10 container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <h2
              style={{
                clear: 'both',
                color: 'rgb(45, 45, 45)',
                display: 'block',
                fontFamily: 'Prata, Helvetica, Arial, Verdana, sans-serif',
                fontSize: '42px',
                fontWeight: '400',
                height: '116px',
                letterSpacing: 'normal',
                lineHeight: '58px',
                marginBlockEnd: '0px',
                marginBlockStart: '0px',
                marginBottom: '0px',
                marginInlineEnd: '0px',
                marginInlineStart: '0px',
                marginLeft: '0px',
                marginRight: '0px',
                marginTop: '0px',
                paddingBottom: '0px',
                paddingLeft: '0px',
                paddingRight: '0px',
                paddingTop: '0px',
                textAlign: 'center',
                textTransform: 'none',
                width: '100%',
                maxWidth: '1185px',
                wordSpacing: '0px',
                margin: '0 auto'
              }}
            >
              S2PI s'inscrit dans une recherche permanente d'amélioration de ses process de production.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}; 