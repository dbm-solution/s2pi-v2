"use client";

import { useClientTranslations } from '@/components/providers/ClientTranslationProvider';
import { DottedDivider } from '@/components/ui/dotted-divider/DottedDivider';
import ResponsiveGrid from '@/components/ui/grid/ResponsiveGrid';
import { Typography } from '@/components/ui/typography/typography';
import Image from 'next/image';

export default function ProtectionSection() {
  const t = useClientTranslations('home');

  return (
    <section className="py-20 scroll-fade-in">
      <div className="container-s2pi">

        {/* Title */}
        <div className="text-center mb-10">
          <Typography
            as="h2"
            variant="h2"
            align="center"
            fontFamily="openSans"
            color="secondary"
            style={{
              fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
              fontWeight: 300,
              color: '#565656',
              fontSize: '36px',
              lineHeight: '46px',
              textAlign: 'center',
              margin: '0 0 20px 0'
            }}
          >
            {t('protection.title')}
          </Typography>
          <DottedDivider
            dotCount={100}
            dotSize={2}
            spacing="superTight"
            dotColor="#b52626"
            align="center"
            style={{ margin: '10px auto 0', maxWidth: 900 }}
          />
        </div>

        <ResponsiveGrid columnsMobile={1} columnsTablet={1} columnsDesktop={2} gap={60}>
          <Typography
            as="div"
            variant="body"
            align="justify"
            fontFamily="roboto"
            style={{
              color: '#232323',
              fontSize: '17px',
              lineHeight: '31px',
              fontWeight: 300
            }}
          >
            <Image
              src="/images/home-page/10015.jpg"
              alt={t('protection.images.ceo')}
              width={160}
              height={160}
              priority
              className="shadow-md object-cover mr-7  float-none lg:float-left"
              style={{ shapeOutside: 'inset(0 round 8px)' }}
            />
            <span style={{ fontWeight: 700 }}> {t('protection.content.part1.bold')}</span>
            {t('protection.content.part1.text')}
          </Typography>
          <div>


            <Typography
              variant="body"
              align="justify"
              fontFamily="roboto"
              style={{
                color: '#232323',
                fontSize: '17px',
                lineHeight: '31px',
                fontWeight: 400
              }}
            >
              {t('protection.content.part2.text')}
            </Typography>


            <div  style={{  background: '#f7f7f7' }}>
              <blockquote
                className="px-5 py-6"
                style={{
                  color: '#232323',
                  fontSize: '16px',
                  lineHeight: '26px',
                  margin: 0,
                  fontWeight: 400,
                  fontFamily: 'Prata, Helvetica, Arial, Verdana, sans-serif'
                }}
              >
                « {t('protection.content.quote')} »
              </blockquote>
              <cite
                style={{
                  color: 'rgb(35, 35, 35)',
                  fontSize: '12.75px',
                  display: 'block',
                  textAlign: 'right',
                  fontStyle: 'normal',
                  lineHeight: '31px',
                  fontWeight: 300,
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
                }}
              >
                {t('protection.content.quoteAuthor')}
              </cite>
            </div>



            <div >
              <div
                style={{
                  color: '#232323',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: '31px',
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                }}
              >
                {t('protection.content.signature')}
              </div>
              <div
                style={{
                  color: '#232323',
                  fontSize: '17px',
                  fontWeight: 300,
                  lineHeight: '31px',
                  fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
                }}
              >
                {t('protection.content.title')}
              </div>
            </div>



          </div>
        </ResponsiveGrid>

 








      </div >
    </section >
  );
}