import Logo from './Logo'
import NavLinks from './NavCategory'

export default function Navbar() {
  return (
    <section className="p-1 mb-5 border-b border-black">
      <Logo />
      <NavLinks />
    </section>
  )
}
