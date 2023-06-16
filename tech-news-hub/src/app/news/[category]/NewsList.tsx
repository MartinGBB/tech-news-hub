"use client"
import useLanguage from "@/app/components/hooks/useLanguage"
import { useEffect, useState } from "react"

interface CategoryProps {
	category: string
}

export default function NewsList({ category }: CategoryProps) {
	const [news, setNews] = useState<string[]>([""])

	const { language } = useLanguage()

	const currentCategory = category ?? "general"


	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await fetch(
					`https://gnews.io/api/v4/top-headlines?category=${currentCategory}&lang=${language}&apikey=4493512c06fe7bc0b594d706bf7e9410`
				)

				const data = await response.json()
				setNews(data)
			} catch (error) {
				console.error("Error fetching news:", error)
			}
		}
		console.log(language)
		fetchNews()
	}, [currentCategory, language])



	return (
		<section>
			<h1 className="text-3xl text-red-500 font-bold underline">{currentCategory}</h1>
			<pre className="max-w-full overflow-x-auto whitespace-pre-wrap">{JSON.stringify(news, null, 2)}</pre>
		</section>
	)
}
