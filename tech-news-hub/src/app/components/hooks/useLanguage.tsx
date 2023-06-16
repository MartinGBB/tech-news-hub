"use client"

import { useState } from "react"

export default function useLanguage() {
	const [language, setLanguage] = useState<string>("en")

	function handleLanguage(value: string) {
		setLanguage(value)
	}
	console.log(language)

	return {
		language,
		handleLanguage,
	}
}	
