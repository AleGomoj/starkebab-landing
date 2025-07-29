"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll al principio de la página cuando cambie la ruta
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
