"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-s2pi-background-body section-padding">
      <div className="container-responsive">
        <div className="error-page-content bg-s2pi-white p-xl text-center">
          <div className="error-icon mb-lg">
          <svg
              className="error-svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
          <div className="error-content">
            <h1 className="heading-primary text-s2pi-text-primary">
              Page non trouvée
          </h1>
            <p className="text-s2pi-text-secondary mb-lg">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
              Vous pouvez retourner à l'accueil ou parcourir nos solutions.
          </p>
            <div className="error-actions">
              <Link 
              href="/"
                className="btn-s2pi-primary"
            >
              Retour à l'accueil
              </Link>
              <Link 
                href="/solutions"
                className="btn-s2pi-secondary"
              >
                Nos solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
