"use client"

import { Phone, Star, Award, Clock, MapPin, Menu, X, Download, ChefHat, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import CookieBanner from "@/components/CookieBanner"
import { useCookieConsent } from "@/hooks/useCookieConsent"
import { downloadStarKebabMenu } from "@/utils/downloadPDF"
import Link from "next/link"

export default function StarKebabLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { hasConsent, isLoading } = useCookieConsent()

  const menuItems = [
    {
      name: "Menú Durum Mixto",
      description:
        "Selección de carnes marinadas con especias tradicionales, verduras frescas y salsas artesanales, acompáñalo con arroz o patatas fritas.",
      image: "https://res.cloudinary.com/dqqfnbpmk/image/upload/v1753789330/menudurumweb_upmgat.jpg",
      category: "Menú",
    },
    {
      name: "Plato Star",
      description: "Plato completo, compuesto por nuestra carne marinada, patatas o arroz y nuestra salsa casera.",
      image: "https://res.cloudinary.com/dqqfnbpmk/image/upload/v1753789912/platostarweb_bwh1jp.jpg",
      category: "Platos Individuales",
    },
    {
      name: "Cabsaló Gratinado",
      description: "Cazuela de patatas con carne especiada, salsas y queso, todo ello gratinado al horno",
      image: "https://res.cloudinary.com/dqqfnbpmk/image/upload/v1753790444/cabsaloweb_vfokvz.png",
      category: "Platos Individuales",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleDownloadMenu = () => {
    try {
      downloadStarKebabMenu()
    } catch (error) {
      console.error("Error al descargar la carta:", error)
      // Fallback: abrir el PDF en una nueva pestaña
      window.open("/carta-starkebab.pdf", "_blank")
    }
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-sm opacity-30"></div>
                <Star className="relative w-10 h-10 text-red-500 fill-current" />
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  StarKebab
                </span>
                <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">Bormujos</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: "Inicio", id: "inicio" },
                { name: "Local", id: "chef" },
                { name: "Menú", id: "menu" },
                { name: "Contacto", id: "contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-gray-700 hover:text-red-600 font-medium text-sm transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                {[
                  { name: "Inicio", id: "inicio" },
                  { name: "Local", id: "chef" },
                  { name: "Menú", id: "menu" },
                  { name: "Contacto", id: "contacto" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-700 hover:text-red-600 font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23dc2626' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-xl opacity-20 scale-150"></div>
              <Star className="relative w-20 h-20 mx-auto text-red-500 fill-current" />
            </div>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 leading-none">
            <span className="bg-gradient-to-r from-gray-900 via-red-600 to-orange-500 bg-clip-text text-transparent">
              Star
            </span>
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Kebab</span>
          </h1>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-gray-600 font-light mb-6 leading-relaxed">
              Sabores tradicionales del Mediterráneo oriental
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Más de 20 años de experiencia culinaria se fusionan con ingredientes premium para crear una experiencia
              gastronómica única en el corazón de Bormujos
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              onClick={() => scrollToSection("menu")}
              size="lg"
              className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Utensils className="w-5 h-5 mr-2" />
              Explorar Menú
            </Button>
            <Button
              onClick={() => window.open("tel:+34613209520")}
              variant="outline"
              size="lg"
              className="border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "20+", label: "Años de Experiencia", icon: Award },
              { number: "100%", label: "Ingredientes Premium", icon: Star },
              { number: "24h", label: "Preparación Fresca", icon: ChefHat },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-4" />
                <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="chef" className="pt-40 pb-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-xl opacity-10"></div>
              <Image
                src="https://res.cloudinary.com/dqqfnbpmk/image/upload/v1753789026/starkebab-front1_pp9bac.jpg"
                alt="Nuestro local"
                width={600}
                height={700}
                className="relative rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-600 to-orange-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm font-medium">Años de Experiencia</div>
              </div>
            </div>

            <div>
              <div className="mb-8">
                <h2 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
                  Nuestro{" "}
                  <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                    Local
                  </span>
                </h2>
                <p className="text-xl text-gray-600 font-light">En el corazón de Bormujos</p>
              </div>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
                <p className="text-xl leading-relaxed">
                  <strong className="text-gray-900">Aziz</strong> trae a StarKebab más de{" "}
                  <strong className="text-red-600">20 años de experiencia culinaria</strong>, apostando por algo
                  diferente: comida auténtica, hecha con cariño y producto de primera calidad.
                </p>
                <p>
                  Originario de <strong className="text-gray-900">Marruecos</strong>, ha recorrido un largo camino entre
                  fogones antes de abrir su propio local, donde{" "}
                  <strong className="text-red-600">la calidad y el sabor real son la base de todo</strong>.
                </p>
                <p>
                  Si buscas algo más que un kebab cualquiera, ven a probar el resultado de
                  <strong className="text-gray-900"> dos décadas de experiencia y pasión culinaria</strong>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, title: "Maestro Cocinero", desc: "20 años de experiencia" },
                  { icon: Star, title: "Ingredientes Premium", desc: "Selección diaria" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <item.icon className="w-8 h-8 text-red-500 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Nuestras Especialidades</span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Carta{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Premium</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cada plato es una obra maestra culinaria, preparada con técnicas tradicionales y los ingredientes más
              selectos del Mediterráneo
            </p>
          </div>

          <div className="text-center mb-16">
            <Button
              onClick={handleDownloadMenu}
              className="bg-white border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-3"
            >
              <Download className="w-5 h-5" />
              <span>Descargar Carta Completa</span>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Visítanos</span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Contacto
              </span>
            </h2>
            <p className="text-xl text-gray-600">Llámanos para hacer tu pedido</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Phone,
                title: "Teléfono",
                content: "613 20 95 20",
                subtitle: "Para hacer pedidos",
                href: "tel:+34613209520",
              },
              {
                icon: Clock,
                title: "Horario",
                content: "Martes - Domingo",
                subtitle: "13:00-16:30 | 20:00-00:00",
                href: null,
              },
              {
                icon: MapPin,
                title: "Ubicación",
                content: "Av. Universidad de Salamanca, 8",
                subtitle: "41930 Bormujos, Sevilla",
                href: null,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-lg opacity-20"></div>
                  <item.icon className="relative w-12 h-12 text-red-500 mx-auto" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-2xl font-bold text-gray-900 hover:text-red-500 transition-colors duration-300 block mb-2"
                  >
                    {item.content}
                  </a>
                ) : (
                  <div className="text-2xl font-bold text-gray-900 mb-2">{item.content}</div>
                )}
                <p className="text-gray-600">{item.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Google Maps */}
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              {isLoading ? (
                <div className="bg-gray-100 h-[500px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">Cargando mapa...</p>
                  </div>
                </div>
              ) : hasConsent ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.7939494076345!2d-6.086985423690228!3d37.37105213531271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd12134fdca767ab%3A0x35a82764b20d23ec!2sSTARKEBAB!5e0!3m2!1ses!2ses!4v1753705134080!5m2!1ses!2ses"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="StarKebab Location"
                />
              ) : (
                <div className="bg-gray-100 h-[500px] flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Mapa no disponible</h3>
                    <p className="text-gray-600 mb-4 max-w-md">
                      Para ver el mapa interactivo de nuestra ubicación, necesitas aceptar el uso de cookies.
                    </p>
                    <p className="text-sm text-gray-500">
                      <strong>Dirección:</strong> Av. Universidad de Salamanca, 8<br />
                      41930 Bormujos, Sevilla
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-sm opacity-50"></div>
              <Star className="relative w-10 h-10 text-red-500 fill-current mr-4" />
            </div>
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                StarKebab
              </span>
              <p className="text-sm text-gray-400">Bormujos, Sevilla</p>
            </div>
          </div>
          <p className="text-gray-400 mb-4">Auténticos sabores del Mediterráneo Oriental.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
            <Link href="/aviso-legal" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
              Aviso Legal
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/politica-cookies" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
              Política de Cookies
            </Link>
          </div>
          <p className="text-gray-500 text-sm">© 2025 StarKebab. Todos los derechos reservados.</p>
        </div>
      </footer>
      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  )
}
