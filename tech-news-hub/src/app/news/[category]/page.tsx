interface ParamsProps {
	params?: {
		category: string
	}
}

export default async function News({ params }: ParamsProps) {
	const currentCategory = params?.category ?? "general"

	const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=${currentCategory}&lang=en&apikey=4493512c06fe7bc0b594d706bf7e9410`, {
		next: { revalidate: 30 }
	})
	const notice = await response.json()

	return (
		<section>
			<h1 className="text-3xl text-red-500 font-bold underline">{currentCategory}</h1>
			<pre>{JSON.stringify(notice, null, 2)}</pre>
		</section>
	)
}
