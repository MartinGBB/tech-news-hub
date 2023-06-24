import Link from 'next/link'

export default function NavLinks() {
  const Routes = {
    general: '/general',
    business: '/business',
    entertainment: '/entertainment',
    health: '/health',
    science: '/science',
    sports: '/sports',
    technology: '/technology',
  }

  return (
    <section>
      <ul className="flex justify-between">
        {Object.entries(Routes).map(([name, route]) => (
          <li
            className="hover:border-b text-sm hover:border-black border-b-2 border-transparent"
            key={route}
          >
            <Link href={`/category${route}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
