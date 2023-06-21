import { Roboto, Roboto_Condensed } from "next/font/google"
import "../globals.css"
import Navbar from "./components/navbar/Navbar"

const roboto = Roboto({
	weight: "400",
	variable: "--font-roboto",
	subsets: ["latin"],
	display: "swap",
})

export const roboto_condensed = Roboto_Condensed({
	subsets: ["latin"],
	variable: "--font-roboto-condensed",
	weight: "400",
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
			<body className={`${roboto_condensed.variable} ${roboto.variable}`}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
