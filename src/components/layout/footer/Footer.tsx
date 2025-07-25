"use client";

import React from 'react';
import Link from 'next/link';

interface FooterProps {
  locale?: string;
}

export default function Footer({ locale = 'fr' }: FooterProps) {
  return (
    <footer className="bg-s2pi-gray-100 mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-start">
          {/* Logo and Company Info */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-s2pi-blue-600 via-s2pi-blue-500 to-s2pi-red-600 rounded-lg flex items-center justify-center shadow-s2pi">
                <div className="relative">
                  <div className="w-8 h-8 bg-s2pi-red-600 rounded transform rotate-45"></div>
                  <div className="absolute top-1 left-1 w-6 h-6 bg-s2pi-blue-600 rounded transform -rotate-45"></div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-s2pi-gray-800 tracking-wide">S2PI</h2>
              <p className="text-sm text-s2pi-gray-600 font-medium">Société de Production de Produits Isolants</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-s2pi-blue-800 text-white px-8 py-6 rounded-s2pi-lg shadow-s2pi-lg">
            <div className="bg-s2pi-blue-700 text-white px-4 py-2 rounded-s2pi text-center mb-4">
              <h3 className="font-bold text-sm tracking-wide">NOS COORDONNÉES</h3>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-bold text-base">S2PI</p>
              <p className="font-medium">15 rue Jean Rostand</p>
              <p className="font-bold text-base">69740 GENAS</p>
              <p className="font-medium">04 58 00 02 20</p>
              <p className="font-medium">contact@s2pi.fr</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Year Message */}
      <div className="bg-s2pi-blue-800 text-white py-4 px-4">
        <div className="container mx-auto text-center">
          <p className="text-base font-medium">
            <strong>Bonne année 2025 à tous nos clients et partenaires !</strong>
          </p>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t-4 border-s2pi-red-600 bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center text-sm text-s2pi-gray-600">
            <div className="flex flex-wrap items-center space-x-1">
              <span className="font-medium">S2PI ©2022</span>
              <span className="text-s2pi-gray-400">|</span>
              <span>Tous droits réservés</span>
              <span className="text-s2pi-gray-400">|</span>
              <Link 
                href={`/${locale}/legal`} 
                className="hover:text-s2pi-blue-600 transition-colors font-medium"
              >
                Mentions légales
              </Link>
              <span className="text-s2pi-gray-400">|</span>
              <Link 
                href="/privacy" 
                className="hover:text-s2pi-blue-600 transition-colors font-medium"
              >
                Politique de confidentialité
              </Link>
              <span className="text-s2pi-gray-400">|</span>
              <span>Création par <strong className="text-s2pi-blue-600">WEBECCO</strong></span>
            </div>
            
            {/* Scroll to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 bg-s2pi-gray-300 hover:bg-s2pi-gray-400 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-s2pi"
              aria-label="Aller en haut"
              title="Aller en haut"
            >
              <svg
                className="w-5 h-5 text-s2pi-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
