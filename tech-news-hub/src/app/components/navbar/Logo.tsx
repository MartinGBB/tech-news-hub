"use client"

// import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Logo() {
	const router = useRouter()

	return (
		<h1
			onClick={() => router.push("/")}
			className="text-5xl font-roboto-condensed cursor-pointer"
		>
			NewsHub
		</h1>
	)
}