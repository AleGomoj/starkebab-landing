"use client"

import { ArrowLeft, Star, Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PoliticaCookies() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-sm opacity-30"></div>
                <Star className="relative w-8 h-8 text-red-500 fill-current" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                StarKebab
              </span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <ArrowLeft className="w-4 h-4" />
                <span>Volver</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="flex items-center space-x-3 mb-8">
            <Cookie className="w-8 h-8 text-red-500" />
            <h1 className="text-4xl font-bold text-gray-900 mb-0">Política de Cookies</h1>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 mb-0">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">¿Qué son las cookies?</h2>
            <p className="mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.
              Nos ayudan a mejorar tu experiencia de navegación y a recordar tus preferencias.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">¿Qué cookies utiliza StarKebab?</h2>
            <p className="mb-4">
              Nuestro sitio web utiliza un número mínimo de cookies, clasificadas de la siguiente manera:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-900">Cookies Técnicas (Necesarias)</h3>
              <ul className="list-disc pl-6 space-y-2 text-blue-800">
                <li>
                  <strong>cookie-consent:</strong> Almacena tu decisión sobre el uso de cookies
                </li>
                <li>
                  <strong>Duración:</strong> 1 año
                </li>
                <li>
                  <strong>Finalidad:</strong> Recordar tus preferencias de cookies
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3 text-orange-900">Cookies de Terceros</h3>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li>
                  <strong>Google Maps:</strong> Utilizamos Google Maps para mostrar nuestra ubicación
                </li>
                <li>
                  <strong>Cookies instaladas:</strong> Google puede instalar cookies para el funcionamiento del mapa
                </li>
                <li>
                  <strong>Finalidad:</strong> Mostrar el mapa interactivo de nuestra ubicación
                </li>
                <li>
                  <strong>Más información:</strong>{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-800 underline"
                  >
                    Política de Privacidad de Google
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">¿Recopilamos datos personales?</h2>
            <div className="bg-green-50 border-l-4 border-green-400 p-6">
              <p className="text-green-800 mb-0">
                <strong>No.</strong> StarKebab no recopila datos personales a través de este sitio web. No tenemos
                formularios de contacto, registro de usuarios, ni sistemas de análisis que recojan información personal.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">¿Cómo gestionar las cookies?</h2>
            <p className="mb-4">Puedes gestionar las cookies de las siguientes maneras:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Banner de cookies:</strong> Al visitar nuestro sitio, aparecerá un banner donde puedes aceptar o
                rechazar las cookies
              </li>
              <li>
                <strong>Configuración del navegador:</strong> Puedes configurar tu navegador para bloquear o eliminar
                cookies
              </li>
              <li>
                <strong>Google Maps:</strong> Si no aceptas las cookies, el mapa no se cargará y verás un mensaje
                informativo
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Configuración por navegador</h2>
            <p className="mb-4">Puedes configurar las cookies directamente desde tu navegador:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-800 underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-800 underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-800 underline"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-800 underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contacto</h2>
            <p className="mb-4">Si tienes alguna pregunta sobre nuestra política de cookies, puedes contactarnos:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Teléfono:</strong> 613 20 95 20
              </li>
              <li>
                <strong>Dirección:</strong> Av. Universidad de Salamanca, 8, 41930 Bormujos, Sevilla
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Actualizaciones</h2>
            <p className="mb-4">
              Esta política de cookies puede ser actualizada ocasionalmente. Te recomendamos revisarla periódicamente
              para estar informado de cualquier cambio.
            </p>
          </section>

          {/* Botón volver arriba */}
          <div className="text-center mt-12">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Volver arriba
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
