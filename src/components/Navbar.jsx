import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Button from './Button'

const navLinks = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/#sobre-javier', label: 'Sobre Javier', hash: true },
  { to: '/#contacto', label: 'Contacto', hash: true },
  { to: '/clases', label: 'Mis Clases' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const handleHashClick = (e, hash) => {
    if (location.pathname === '/') {
      e.preventDefault()
      const id = hash.replace('/#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#faf7f2]/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent',
      ].join(' ')}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-col leading-tight group"
          aria-label="Inicio - Profesor Javier Chopek"
        >
          <span className="font-serif text-xl font-bold text-[#d9582a] group-hover:text-[#c04420] transition-colors">
            Prof. Javier
          </span>
          <span className="text-xs font-medium text-[#a87c35] tracking-widest uppercase">
            Español Latino
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map(({ to, label, end, hash }) => (
            <li key={to}>
              {hash ? (
                <a
                  href={to}
                  onClick={(e) => handleHashClick(e, to)}
                  className="px-4 py-2 rounded-full text-sm font-medium text-[#2c2825]/80 hover:text-[#d9582a] hover:bg-[#fdf4f0] transition-all duration-150"
                >
                  {label}
                </a>
              ) : (
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    [
                      'px-4 py-2 rounded-full text-sm font-medium transition-all duration-150',
                      isActive
                        ? 'text-[#d9582a] bg-[#fdf4f0]'
                        : 'text-[#2c2825]/80 hover:text-[#d9582a] hover:bg-[#fdf4f0]',
                    ].join(' ')
                  }
                >
                  {label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            as={Link}
            to="/clases"
            size="sm"
            aria-label="Acceder a las clases"
          >
            ¡Empieza Ahora!
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-2 rounded-md text-[#2c2825] hover:text-[#d9582a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9582a]"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#faf7f2]/98 backdrop-blur-sm border-t border-[#eedfc0] px-4 pb-6 pt-2 shadow-lg">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map(({ to, label, end, hash }) => (
              <li key={to}>
                {hash ? (
                  <a
                    href={to}
                    onClick={(e) => handleHashClick(e, to)}
                    className="block px-4 py-3 rounded-xl text-base font-medium text-[#2c2825]/80 hover:text-[#d9582a] hover:bg-[#fdf4f0] transition-all"
                  >
                    {label}
                  </a>
                ) : (
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      [
                        'block px-4 py-3 rounded-xl text-base font-medium transition-all',
                        isActive
                          ? 'text-[#d9582a] bg-[#fdf4f0]'
                          : 'text-[#2c2825]/80 hover:text-[#d9582a] hover:bg-[#fdf4f0]',
                      ].join(' ')
                    }
                  >
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 px-4">
            <Button as={Link} to="/clases" size="md" className="w-full">
              ¡Empieza Ahora!
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
