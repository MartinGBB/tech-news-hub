import NewsList from "./NewsList"

interface ParamsProps {
	params?: {
		category: string
	}
}

export default async function News({ params }: ParamsProps) {
	const currentCategory = params?.category ?? "general"

	return (
		<section>
			<NewsList category={currentCategory} />
		</section>
	)
}
