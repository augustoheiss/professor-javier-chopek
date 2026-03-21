import { Link } from 'react-router-dom'
import WhatsAppIcon from './WhatsAppIcon'

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
                  href="https://wa.me/5511952098958?text=¡Hola,%20profesor%20Javier!%20Me%20gustaría%20tener%20más%20información%20sobre%20las%20clases%20de%20español."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#faf7f2]/70 hover:text-[#25D366] transition-colors"
                  aria-label="Contactar a Javier por WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0 text-[#c69a44]" />
                  WhatsApp
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
