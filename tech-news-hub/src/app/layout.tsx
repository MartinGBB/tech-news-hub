import { Roboto } from "next/font/google"
import "../globals.css"

const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
})

export const metadata = {
	title: "news-hub",
	description: "",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>{children}</body>
		</html>
	)
}
