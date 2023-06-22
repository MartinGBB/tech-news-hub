import { News } from "../category/[category]/NewsListCategory"

export default function NewsCategoryCard({ news }: { news: News }) {
	return (
		<div className="bg-white rounded-lg shadow-md p-4">
			<div className="mb-2">
			</div>
			<h2 className="text-xl font-bold mb-2">{news.name}</h2>
			<p className="text-gray-600 mb-4">{news.description}</p>
			<a href={news.url} className="text-blue-500 font-bold hover:underline">
				Read More
			</a>
		</div>
	)
}


