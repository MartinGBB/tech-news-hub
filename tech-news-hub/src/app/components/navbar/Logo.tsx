"use client"

import { useRouter } from "next/navigation"

export default function Logo() {
	const router = useRouter()

	return (
		<h1
			onClick={() => router.push("/")}
			className="
				text-5xl
				font-roboto-condensed
				cursor-pointer
				flex
				justify-center
				p-2
			"
		>
			NewsHub
		</h1>
	)
}