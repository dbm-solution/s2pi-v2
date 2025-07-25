'use client';

import React from 'react';
import Link from 'next/link';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div role="navigation" className={`dt-mobile-header mobile-menu-show-divider ${isOpen ? 'open' : ''}`}>
      <div className="dt-close-mobile-menu-icon" onClick={onClose}>
        <div className="close-line-wrap">
          <span className="close-line"></span>
          <span className="close-line"></span>
          <span className="close-line"></span>
        </div>
      </div>
      
      <ul id="mobile-menu" className="mobile-main-nav">
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-13 act first depth-0">
          <Link href="/" data-level="1">
            <span className="menu-item-text">
              <span className="menu-text">ACCUEIL</span>
            </span>
          </Link>
        </li>
        
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-444 depth-0">
          <Link href="/a-propos" data-level="1">
            <span className="menu-item-text">
              <span className="menu-text">A PROPOS</span>
            </span>
          </Link>
        </li>
        
        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1225 depth-0">
          <Link href="/isolation-thermique-par-lexterieur" data-level="1">
            <span className="menu-item-text">
              <span className="menu-text">
                <span style={{ color: '#D8722D' }}>NOUVEAUTÉ</span>
              </span>
            </span>
          </Link>
        </li>
        
        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1032 has-children depth-0">
          <a href="#" data-level="1">
            <span className="menu-item-text">
              <span className="menu-text">NOS PRODUITS</span>
            </span>
          </a>
          <ul className="sub-nav hover-style-bg level-arrows-on">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1222 first depth-1">
              <Link href="/isolation-thermique-par-lexterieur" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">
                    <span style={{ color: '#D8722D' }}>ITARN – ISOLATION THERMIQUE PAR L'EXTÉRIEUR</span>
                  </span>
                </span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-592 depth-1">
              <Link href="/produits-fibreux-de-projection" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">PRODUITS FIBREUX DE PROJECTION & PANNEAUX RIGIDES</span>
                </span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-778 depth-1">
              <Link href="/produits-pateux-de-projection" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">PRODUITS PÂTEUX DE PROJECTION</span>
                </span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-912 depth-1">
              <Link href="/peintures-intumescentes-promapaint-sc4-et-promapaint-sc3" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">PEINTURES INTUMESCENTES PROMAPAINT®-SC4 ET PROMAPAINT®-SC3</span>
                </span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1031 depth-1">
              <Link href="/primaires-daccrochage" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">PRIMAIRES D'ACCROCHAGE</span>
                </span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1030 depth-1">
              <Link href="/enduits-de-finition" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">ENDUITS DE FINITION</span>
                </span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1029 depth-1">
              <Link href="/materiels-et-accessoires" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">MATÉRIELS ET ACCESSOIRES</span>
                </span>
              </Link>
            </li>
          </ul>
        </li>
        
        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-153 has-children depth-0">
          <a href="#" data-level="1">
            <span className="menu-item-text">
              <span className="menu-text">SOLUTIONS TECHNIQUES</span>
            </span>
          </a>
          <ul className="sub-nav hover-style-bg level-arrows-on">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-265 first depth-1">
              <Link href="/solutions-acoustiques" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">CORRECTION ACOUSTIQUE – ISOLATION ACOUSTIQUE & THERMIQUE</span>
                </span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-269 depth-1">
              <Link href="/solutions-isolation-thermique" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">SOLUTIONS ISOLATION THERMIQUE</span>
                </span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-931 depth-1">
              <Link href="/solutions-protection-securite-incendie" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">SOLUTIONS PROTECTION SÉCURITÉ INCENDIE</span>
                </span>
              </Link>
            </li>
          </ul>
        </li>
        
        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-933 has-children depth-0">
          <a href="#" data-level="1">
            <span className="menu-item-text">
              <span className="menu-text">RÈGLES DE MISES EN ŒUVRE</span>
            </span>
          </a>
          <ul className="sub-nav hover-style-bg level-arrows-on">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-938 first depth-1">
              <Link href="/projection-produits-fibreux" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">PROJECTION PRODUITS FIBREUX</span>
                </span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-949 depth-1">
              <Link href="/projection-produits-pateux" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">PROJECTION PRODUITS PÂTEUX</span>
                </span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-954 depth-1">
              <Link href="/revetements-peintures-intumescentes" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">REVÊTEMENTS PEINTURES INTUMESCENTES</span>
                </span>
              </Link>
            </li>
          </ul>
        </li>
        
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-963 depth-0">
          <Link href="/informations-utiles" data-level="1">
            <span className="menu-item-text">
              <span className="menu-text">INFORMATIONS UTILES</span>
            </span>
          </Link>
        </li>
        
        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-16 has-children depth-0">
          <a href="#" data-level="1">
            <span className="menu-item-text">
              <span className="menu-text">CHARTE QUALITÉ</span>
            </span>
          </a>
          <ul className="sub-nav hover-style-bg level-arrows-on">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-603 first depth-1">
              <Link href="/service-client-s2pi" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">SERVICE CLIENT S2PI</span>
                </span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-662 depth-1">
              <Link href="/zero-casse-machine" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">ZÉRO CASSE MACHINE</span>
                </span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-810 depth-1">
              <Link href="/politique-qualite" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">POLITIQUE QUALITÉ</span>
                </span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-816 depth-1">
              <Link href="/certification-iso-90012015" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">CERTIFICATION ISO 9001:2015</span>
                </span>
              </Link>
            </li>
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-540 depth-1">
              <Link href="/enquete-de-satisfaction" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">ENQUÊTE DE SATISFACTION</span>
                </span>
              </Link>
            </li>
          </ul>
        </li>
        
        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-558 last has-children depth-0">
          <Link href="/nos-depots" data-level="1">
            <span className="menu-item-text">
              <span className="menu-text">NOS DEPÔTS</span>
            </span>
          </Link>
          <ul className="sub-nav hover-style-bg level-arrows-on">
            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-680 first depth-1">
              <Link href="/contact" data-level="2">
                <span className="menu-item-text">
                  <span className="menu-text">CONTACT</span>
                </span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      
      <div className="mobile-mini-widgets-in-menu"></div>
    </div>
  );
};

export default MobileNavigation;