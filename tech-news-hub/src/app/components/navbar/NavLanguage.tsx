"use client"

import { Language } from "@/app/utils/language.enum"
import useLanguage from "../hooks/useLanguage"

export default function NavLanguage() {
	const { handleLanguage } = useLanguage()

	const languageConfig = Object.entries(Language)

	function handleChangeButton(event: React.MouseEvent<HTMLButtonElement>) {
		const { value } = event.target as HTMLButtonElement
		handleLanguage(value)
	}

	return (
		<section
			className="flex justify-center gap-3"
		>
			{
				languageConfig.map(([name, currentLanguage]) => (
					<button
						className=""
						key={currentLanguage}
						onClick={handleChangeButton}
						value={currentLanguage}
					>
						{name}
					</button>
				))
			}
		</section>
	)
}
