import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#2c2825] text-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Brand */}
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-[#efa47f]">
              Prof. Javier Chopek
            </h2>
            <p className="text-sm text-[#faf7f2]/70 leading-relaxed max-w-xs">
              Aprende el auténtico español latino con clases personalizadas, didácticas y apasionadas.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#c69a44]">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Inicio' },
                { to: '/#sobre-javier', label: 'Sobre Javier' },
                { to: '/clases', label: 'Mis Clases' },
                { to: '/#contacto', label: 'Contacto' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[#faf7f2]/70 hover:text-[#efa47f] transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#c69a44]">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+5491195209898"
                  className="flex items-center gap-2 text-[#faf7f2]/70 hover:text-[#efa47f] transition-colors"
                  aria-label="Llamar a Javier"
                >
                  <svg className="w-4 h-4 shrink-0 text-[#c69a44]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  11-95209-8958
                </a>
              </li>
              <li>
                <a
                  href="mailto:javichopek@hotmail.com"
                  className="flex items-center gap-2 text-[#faf7f2]/70 hover:text-[#efa47f] transition-colors"
                  aria-label="Enviar email a Javier"
                >
                  <svg className="w-4 h-4 shrink-0 text-[#c69a44]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  javichopek@hotmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-[#faf7f2]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#faf7f2]/40">
          <p>© {new Date().getFullYear()} Prof. Javier Chopek. Todos los derechos reservados.</p>
          <p>Hecho con ♥ para estudiantes de español latino</p>
        </div>
      </div>
    </footer>
  )
}
