import Link from "next/link"

export default async function News() {
	const response = await fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=xAYf0i3l1zJLZwClpi1VQH1GkB7GPUDS", {
		next: { revalidate: 30 }
	})
	const notice = await response.json()

	return (
		<section>
			<h1>news</h1>
			<h1 className="text-3xl text-blue-500 font-bold underline">Hello, Next.js!</h1>
			<pre>{JSON.stringify(notice, null)}</pre>
			<Link href="/">Home</Link>
		</section>
	)
}
