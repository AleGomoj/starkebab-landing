"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CookieBannerProps {
  onAccept?: () => void;
  onReject?: () => void;
}

export default function CookieBanner({
  onAccept,
  onReject,
}: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya ha tomado una decisión
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
    if (onAccept) {
      onAccept();
    }
    window.location.reload();
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setIsVisible(false);
    if (onReject) {
      onReject();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-start space-x-4 flex-1">
            <div className="flex-shrink-0 mt-1">
              <Cookie className="w-6 h-6 text-red-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🍪 Uso de Cookies
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Utilizamos cookies técnicas necesarias y Google Maps (que puede
                instalar cookies de terceros) para mejorar tu experiencia. No
                recopilamos datos personales.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <Link
                  href="/politica-cookies"
                  className="text-red-600 hover:text-red-800 underline"
                >
                  Política de Cookies
                </Link>
                <span className="text-gray-400">•</span>
                <Link
                  href="/aviso-legal"
                  className="text-red-600 hover:text-red-800 underline"
                >
                  Aviso Legal
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <Button
              onClick={handleReject}
              variant="outline"
              size="sm"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
            >
              Rechazar
            </Button>
            <Button
              onClick={handleAccept}
              size="sm"
              className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white"
            >
              Aceptar Cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
