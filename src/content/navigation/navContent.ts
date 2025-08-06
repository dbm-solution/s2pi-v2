import { useClientTranslations } from '@/components/providers/ClientTranslationProvider';

interface NavItem {
  href: string;
  label: string;
  isExternal?: boolean;
  highlight?: 'nouveaute';
  children?: NavItem[];
}

export function useNavContent(): NavItem[] {
  const t = useClientTranslations('nav.menu');
  const tSub = useClientTranslations('nav.submenu');

  return [
    {
      href: "/",
      label: t('home')
    },
    {
      href: "/a-propos",
      label: t('about')
    },
    {
      href: "/nouveaute",
      label: t('novelty'),
      highlight: 'nouveaute'
    },
    {
      href: "/#",
      label: t('products'),
      children: [
        { href: "/isolation-thermique-par-lexterieur", label: tSub('thermal.ite') },
        { href: "/produits-fibreux-de-projection", label: tSub('products.fibrous') },
        { href: "/produits-pateux-de-projection", label: tSub('products.paste') },
        { href: "/peintures-intumescentes-promapaint-sc4-et-sc3", label: tSub('products.paints') },
        { href: "/primaires-daccrochage", label: tSub('products.primers') },
        { href: "/enduits-de-finition", label: tSub('products.finishes') },
        { href: "/materiels-et-accessoires", label: tSub('products.materials') }
      ]
    },
    {
      href: "/#",
      label: t('solutions'),
      children: [
        { href: "/solutions-acoustique", label: tSub('solutions.acoustic') },
        { href: "/solutions-isolation-thermique", label: tSub('solutions.thermal') },
        { href: "/solutions-protection-securite-incendie", label: tSub('solutions.fire') }
      ]
    },
    {
      href: "#",
      label: t('implementation'),
      children: [
        { href: "projection-produits-fibreux", label: tSub('implementation.fibrous') },
        { href: "projection-produits-pateux", label: tSub('implementation.paste') },
        { href: "revetements-peintures-intumescentes", label: tSub('implementation.paints') }
      ]
    },
    {
      href: "/informations-utiles",
      label: t('information')
    },
    {
      href: "#",
      label: t('quality'),
      children: [
        { href: "/service-client-s2pi", label: tSub('quality.service') },
        { href: "/zero-casse-machine", label: tSub('quality.zerocasse') },
        { href: "/politique-qualite", label: tSub('quality.policy') },
        { href: "/certification-iso-90012015", label: tSub('quality.certification') },
        { href: "/enquete-de-satisfaction", label: tSub('quality.survey') }
      ]
    },
    {
      href: "/nos-depots",
      label: t('depots'),
      children: [
        { href: "/contact", label: tSub('contact') }
      ]
    }
  ];
}