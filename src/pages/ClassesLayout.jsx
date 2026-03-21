import { NavLink, Outlet, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { classesData } from '../data/classesData'

export default function ClassesLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#faf7f2] pt-16 sm:pt-20">

        {/* Header bar */}
        <div className="bg-[#2c2825] text-[#faf7f2]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link
              to="/"
              className="text-xs text-[#faf7f2]/40 hover:text-[#efa47f] transition-colors"
            >
              ← Volver al inicio
            </Link>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#faf7f2] mt-1">
              Portal de Clases
            </h1>
            <p className="text-sm text-[#faf7f2]/60 mt-1">
              Español Latino con el Prof. Javier Chopek
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0" aria-label="Navegación de episodios">
              <div className="bg-white rounded-2xl border border-[#eedfc0] p-4 shadow-sm sticky top-24">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-[#c69a44] mb-4 px-2">
                  Episodios del Curso
                </h2>
                <nav>
                  <ul className="space-y-1" role="list">
                    {classesData.map(({ slug, number, title }) => (
                      <li key={slug}>
                        <NavLink
                          to={`/clases/${slug}`}
                          className={({ isActive }) =>
                            [
                              'flex items-start gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150',
                              isActive
                                ? 'bg-[#fdf4f0] text-[#d9582a]'
                                : 'text-[#2c2825]/70 hover:bg-[#faf7f2] hover:text-[#d9582a]',
                            ].join(' ')
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <span
                                className={[
                                  'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5',
                                  isActive
                                    ? 'bg-[#d9582a] text-white'
                                    : 'bg-[#d9582a]/10 text-[#d9582a]',
                                ].join(' ')}
                              >
                                {number}
                              </span>
                              <span
                                className={[
                                  'text-sm leading-snug line-clamp-2',
                                  isActive ? 'font-semibold' : 'font-medium',
                                ].join(' ')}
                              >
                                {title}
                              </span>
                            </>
                          )}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 min-w-0">
              <Outlet />
            </main>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
