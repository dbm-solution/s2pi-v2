import { ImageSlider } from "@/components/ui/slider/image-slider/imageSlider";
import { Typography } from "@/components/ui/typography/typography";
import { S2PIAccordion, S2PIAccordionItem } from "@/components/ui/accordion.tsx/simple-accordion/simple-accordion";
import { Divider } from "@/components/ui/ditted-divider/empty-divider";
import { SocialButton } from "@/components/ui/buttons/social-button/Social-button";
import { aboutPageContent } from "@/content/pages/about/about";
import { ReactNode } from "react";
import Image from "next/image";
import { FacebookIcon } from "@/components/ui/icons/socials/Facebook-icon";
import { LinkedInIcon } from "@/components/ui/icons/socials/LinkedIn-icon";
import { EmailIcon } from "@/components/ui/icons/socials/Email-icon";
import AProposContent from "./_components/a-propos-content";

interface AProposPageProps {
  params: Promise<{
    locale: string;
  }>;
}



export default async function AProposPage({ params }: AProposPageProps) {
  const { locale } = await params;

  return (
    <AProposContent locale={locale} />
  );
}