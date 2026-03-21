import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { classesData } from '../data/classesData'

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fdf4f0] via-[#faf7f2] to-[#f7f0e0] pt-20"
      aria-label="Sección de bienvenida"
    >
      {/* Decorative background circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#d9582a]/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#3a9bf5]/10 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d9582a]/10 text-[#c04420] text-sm font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d9582a] animate-pulse" aria-hidden="true" />
          Clases Online · Español Latino Auténtico
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2c2825] leading-tight mb-6">
          Aprende Español{' '}
          <span className="text-[#d9582a]">con Pasión</span>
          <br />y Cultura Latina
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#2c2825]/70 leading-relaxed mb-10">
          Clases personalizadas con el Profesor Javier Chopek. Domina el español
          latino con métodos dinámicos, contexto cultural real y apoyo continuo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button as={Link} to="/clases" size="lg">
            Ver Mis Clases
          </Button>
          <Button
            as="a"
            href="#contacto"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
            }}
            variant="secondary"
            size="lg"
          >
            Contáctame
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '10+', label: 'Años enseñando' },
            { value: '500+', label: 'Estudiantes' },
            { value: '100%', label: 'Satisfacción' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#d9582a] font-serif">{value}</div>
              <div className="text-xs sm:text-sm text-[#2c2825]/60 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Profile Photo with JC fallback ─── */
function ProfilePhoto() {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#fdf4f0] to-[#f7f0e0] flex items-center justify-center">
        <span className="font-serif text-7xl sm:text-9xl text-[#d9582a]/30 select-none" aria-hidden="true">JC</span>
      </div>
    )
  }

  return (
    <img
      src="/profile.jpg"
      alt="Profesor Javier Chopek"
      className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      onError={() => setHasError(true)}
    />
  )
}

/* ─── About Section ─── */
function About() {
  return (
    <section
      id="sobre-javier"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Profile photo */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-none">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#d9582a]/20 to-[#3a9bf5]/20 rotate-3" aria-hidden="true" />
              <ProfilePhoto />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c69a44]">
              Sobre el Profesor
            </span>
            <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl font-bold text-[#2c2825]">
              Hola, soy Javier Chopek
            </h2>
            <p className="text-[#2c2825]/70 leading-relaxed">
              Soy profesor de español con más de una década de experiencia enseñando a estudiantes de todo el mundo. Mi metodología combina gramática sólida, expresiones coloquiales reales y una profunda inmersión en la cultura latinoamericana.
            </p>
            <p className="text-[#2c2825]/70 leading-relaxed">
              Creo que aprender un idioma no es solo memorizar palabras — es conectar con las personas, la historia y el alma de una cultura. Por eso mis clases son dinámicas, contextualizadas y, sobre todo, apasionadas.
            </p>
            <ul className="space-y-3 pt-2">
              {[
                'Clases adaptadas a tu nivel y objetivos',
                'Español rioplatense y latinoamericano auténtico',
                'Materiales propios y ejercicios prácticos',
                'Seguimiento personalizado y flexible',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#2c2825]/80 text-sm">
                  <svg className="w-5 h-5 text-[#d9582a] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─── Classes Preview Section ─── */
function ClassesPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#faf7f2]" aria-labelledby="classes-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#c69a44]">
          Contenido Didáctico
        </span>
        <h2 id="classes-heading" className="font-serif text-3xl sm:text-4xl font-bold text-[#2c2825] mt-2 mb-4">
          Mis Clases Online
        </h2>
        <p className="max-w-xl mx-auto text-[#2c2825]/70 mb-12">
          Video clases grabadas con explicaciones claras, ejemplos culturales y ejercicios para practicar a tu ritmo.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {classesData.map(({ number, slug, title, description, id }) => (
            <article
              key={slug}
              className="bg-white rounded-2xl border border-[#eedfc0] p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col group"
            >
              {/* YouTube thumbnail */}
              <Link
                to={`/clases/${slug}`}
                aria-label={`Ver clase: ${title}`}
                tabIndex={-1}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-5 bg-[#2c2825]">
                  <img
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                    alt={`Miniatura del episodio ${number}: ${title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-[#d9582a] ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="flex items-start justify-between mb-3">
                <span className="font-serif text-3xl font-bold text-[#d9582a]/15 leading-none">
                  {String(number).padStart(2, '0')}
                </span>
                <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2.5 py-0.5 rounded-full">
                  Disponible
                </span>
              </div>

              <h3 className="font-semibold text-[#2c2825] text-base leading-snug mb-2">{title}</h3>
              <p className="text-sm text-[#2c2825]/60 leading-relaxed flex-1 line-clamp-3">{description}</p>

              <div className="mt-5">
                <Button as={Link} to={`/clases/${slug}`} variant="secondary" size="sm">
                  Ver Episodio →
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Button as={Link} to="/clases" size="lg">
            Ver Todas las Clases
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ─── Contact Section ─── */
function Contact() {
  return (
    <section
      id="contacto"
      className="py-20 md:py-28 bg-[#2c2825]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#c69a44]">
          ¿Listo para empezar?
        </span>
        <h2 id="contact-heading" className="font-serif text-3xl sm:text-4xl font-bold text-[#faf7f2] mt-2 mb-4">
          Contáctame Directamente
        </h2>
        <p className="text-[#faf7f2]/60 max-w-xl mx-auto mb-12">
          ¿Tienes preguntas sobre las clases? ¿Quieres saber si soy el profesor adecuado para ti? Escríbeme por WhatsApp o email — ¡estoy aquí para ayudarte!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
          <a
            href="https://wa.me/5511952098958?text=¡Hola,%20profesor%20Javier!%20Me%20gustaría%20tener%20más%20información%20sobre%20las%20clases%20de%20español."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 bg-[#faf7f2]/5 hover:bg-[#25D366] border border-[#faf7f2]/10 hover:border-[#25D366] rounded-2xl p-6 transition-all duration-200"
            aria-label="Contactar a Javier por WhatsApp"
          >
            <WhatsAppIcon className="w-8 h-8 text-[#efa47f] group-hover:text-white transition-colors" />
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#c69a44] group-hover:text-white/70 transition-colors mb-1">WhatsApp</div>
              <div className="text-[#faf7f2] font-semibold text-lg">11-95209-8958</div>
            </div>
          </a>

          <a
            href="mailto:javichopek@hotmail.com"
            className="group flex flex-col items-center gap-3 bg-[#faf7f2]/5 hover:bg-[#3a9bf5] border border-[#faf7f2]/10 hover:border-[#3a9bf5] rounded-2xl p-6 transition-all duration-200"
            aria-label="Enviar email a javichopek@hotmail.com"
          >
            <svg className="w-8 h-8 text-[#93d1fd] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#c69a44] group-hover:text-white/70 transition-colors mb-1">Email</div>
              <div className="text-[#faf7f2] font-semibold">javichopek@hotmail.com</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ClassesPreview />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
