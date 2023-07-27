'use client'

import { useState } from 'react'

export default function useLanguage() {
  const [language, setLanguage] = useState<string>('es')

  function handleLanguage(value: string) {
    setLanguage(value)
  }

  return {
    language,
    handleLanguage,
  }
}
