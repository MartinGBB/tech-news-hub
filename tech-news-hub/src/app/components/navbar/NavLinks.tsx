import Link from "next/link"

export default function NavLinks() {

	const Routes = {
		general: "/general",
		world: "/world",
		nation: "/nation",
		business: "/business",
		technology: "/technology",
		entertainment: "/entertainment",
		sports: "/sports",
		science: "/science",
		health: "/health"
	}

	return (
		<section>
			<ul>{
				Object.entries(Routes).map(([name, route]) => (
					<li key={route}><Link href={`/news${route}`}>{name}</Link></li>
				)
				)
			}
			</ul>
		</section>
	)
}
