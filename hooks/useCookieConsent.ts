"use client"

import { useState, useEffect } from "react"

export function useCookieConsent() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem("cookie-consent")
      setHasConsent(consent === "accepted")
      setIsLoading(false)
    }

    checkConsent()

    // Escuchar cambios en localStorage (por si se acepta/rechaza en otra pestaña)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "cookie-consent") {
        checkConsent()
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    localStorage.setItem("cookie-consent-date", new Date().toISOString())
    setHasConsent(true)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    localStorage.setItem("cookie-consent-date", new Date().toISOString())
    setHasConsent(false)
  }

  const resetConsent = () => {
    localStorage.removeItem("cookie-consent")
    localStorage.removeItem("cookie-consent-date")
    setHasConsent(null)
  }

  return {
    hasConsent,
    isLoading,
    acceptCookies,
    rejectCookies,
    resetConsent,
  }
}
