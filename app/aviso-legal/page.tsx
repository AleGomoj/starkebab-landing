"use client"

import { ArrowLeft, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AvisoLegal() {
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
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Aviso Legal</h1>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 mb-0">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Información General</h2>
            <p className="mb-4">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
              Información y de Comercio Electrónico, se informa de los datos identificativos del titular de este sitio
              web:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Denominación social:</strong> StarKebab
              </li>
              <li>
                <strong>Titular del negocio:</strong> Aziz Jabri Ezaouia
              </li>
              <li>
                <strong>Dirección:</strong> Av. Universidad de Salamanca, 8, 41930 Bormujos, Sevilla
              </li>
              <li>
                <strong>Teléfono:</strong> 613 20 95 20
              </li>
              <li>
                <strong>Actividad:</strong> Restauración
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Información del Sitio Web</h2>
            <p className="mb-4">
              El desarrollo y mantenimiento técnico de este sitio web ha sido realizado por un desarrollador
              independiente. El dominio y la infraestructura técnica están registrados a nombre del desarrollador,
              actuando como prestador de servicios técnicos para StarKebab.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Objeto</h2>
            <p className="mb-4">
              Este sitio web tiene como finalidad proporcionar información sobre StarKebab, incluyendo:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Información sobre nuestros productos y servicios</li>
              <li>Datos de contacto y ubicación</li>
              <li>Horarios de atención</li>
              <li>Carta y especialidades</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Condiciones de Uso</h2>
            <p className="mb-4">
              El acceso y uso de este sitio web implica la aceptación de las presentes condiciones. El usuario se
              compromete a:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Hacer un uso adecuado y lícito del sitio web</li>
              <li>No utilizar el sitio para fines ilegales o no autorizados</li>
              <li>Respetar los derechos de propiedad intelectual</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Propiedad Intelectual</h2>
            <p className="mb-4">
              Todos los contenidos de este sitio web, incluyendo textos, imágenes, diseño gráfico, código fuente,
              logotipos y cualquier otro elemento, están protegidos por derechos de propiedad intelectual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Limitación de Responsabilidad</h2>
            <p className="mb-4">
              StarKebab no se hace responsable de los daños y perjuicios que pudieran derivarse del uso de la
              información contenida en este sitio web. La información puede ser modificada sin previo aviso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Enlaces Externos</h2>
            <p className="mb-4">
              Este sitio web puede contener enlaces a sitios web de terceros. StarKebab no se hace responsable del
              contenido de dichos sitios web externos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Modificaciones</h2>
            <p className="mb-4">
              StarKebab se reserva el derecho de modificar el presente aviso legal en cualquier momento. Las
              modificaciones serán efectivas desde su publicación en el sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Legislación Aplicable</h2>
            <p className="mb-4">
              Las presentes condiciones se rigen por la legislación española. Para cualquier controversia será
              competente la jurisdicción de los tribunales de Sevilla.
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
