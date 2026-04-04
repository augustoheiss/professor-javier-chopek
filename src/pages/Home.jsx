import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppIcon from '../components/WhatsAppIcon'

const WA_LINK =
  'https://wa.me/5511952098958?text=¡Hola,%20profesor%20Javier!%20Me%20gustaría%20tener%20más%20información%20sobre%20las%20clases.'

/* ─── Wave Section Divider ─── */
function WaveDivider({ topColor = '#ffffff', bottomColor = '#faf7f2', flip = false }) {
  return (
    <div
      className={`relative overflow-hidden ${flip ? '-scale-y-100' : ''}`}
      style={{ height: 64, background: bottomColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        style={{ fill: topColor }}
      >
        <path d="M0,32 C360,64 1080,0 1440,32 L1440,0 L0,0 Z" />
      </svg>
    </div>
  )
}

/* ─── Profile Photo with JC fallback ─── */
function ProfilePhoto() {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#fdf4f0] to-[#f7f0e0] flex items-center justify-center">
        <span className="font-serif text-7xl sm:text-9xl text-[#d9582a]/30 select-none" aria-hidden="true">
          JC
        </span>
      </div>
    )
  }

  return (
    <img
      src="/profile.jpg"
      alt="Profesor Javier Chopek — Español Latino Nativo"
      className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      onError={() => setHasError(true)}
    />
  )
}

/* ═══════════════════════════════════════════════════
   SECCIÓN 1 — HERO (Sobre la Pantalla)
═══════════════════════════════════════════════════ */
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, #fdf4f0 0%, #faf7f2 55%, #eff8ff 100%)',
      }}
      aria-label="Sección principal"
    >
      {/* Blob decorativo terracota */}
      <div
        className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(217,88,42,0.13) 0%, transparent 68%)' }}
        aria-hidden="true"
      />
      {/* Blob decorativo azul */}
      <div
        className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(58,155,245,0.11) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      {/* Patrón sutil de puntos */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='22' cy='22' r='2' fill='%23d9582a'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d9582a]/10 text-[#c04420] text-sm font-semibold mb-8 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[#d9582a] animate-pulse" aria-hidden="true" />
          Clases Online · Español Latino Nativo · Para Brasileños
        </span>

        {/* Titular principal */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#2c2825] leading-[1.1] mb-6">
          Deja de hablar{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#d9582a]">"Portuñol".</span>
            <span
              className="absolute bottom-1 left-0 w-full h-3 -z-10 rounded opacity-25"
              style={{ background: '#d9582a' }}
              aria-hidden="true"
            />
          </span>
          <br />
          Descubre tu verdadera{' '}
          <span className="text-[#3a9bf5]">voz en español.</span>
        </h1>

        {/* Subtítulo */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#2c2825]/70 leading-relaxed mb-8">
          Para brasileños que leen y escuchan bien, pero se bloquean al hablar. Domina el
          español latino auténtico con el Profesor Javier Chopek — supera el miedo, entiende
          la velocidad real y conecta{' '}
          <em className="text-[#c04420] not-italic font-medium">genuinamente</em>.
        </p>

        {/* Bullets de valor */}
        <ul className="inline-flex flex-col items-start gap-3 text-left mb-10 mx-auto" role="list">
          {[
            { icon: '🌎', text: 'Español latino nativo — sin traducciones robóticas ni textbook' },
            { icon: '🗣️', text: 'Velocidad conversacional real, expresiones cotidianas y regionalismos' },
            { icon: '🎵', text: 'Entiende la "música" y la lógica del idioma desde la raíz' },
          ].map(({ icon, text }) => (
            <li key={text} className="flex items-start gap-3 text-[#2c2825]/80 text-base sm:text-lg">
              <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">{icon}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            id="hero-cta-whatsapp"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d9582a]/50"
            style={{
              background: 'linear-gradient(135deg, #d9582a 0%, #e67a4c 100%)',
              boxShadow: '0 4px 24px rgba(217,88,42,0.4)',
            }}
            aria-label="Empieza a hablar hoy — WhatsApp Profesor Javier Chopek"
          >
            <WhatsAppIcon className="w-6 h-6 text-white" />
            Empieza a Hablar Hoy
          </a>
          <a
            id="hero-cta-learn-more"
            href="#el-problema"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('el-problema')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-semibold text-[#c04420] border-2 border-[#d9582a]/40 hover:border-[#d9582a] hover:bg-[#fdf4f0] transition-all duration-200 text-base"
          >
            Descubre más ↓
          </a>
        </div>

        {/* Prueba social — estadísticas */}
        <div className="mt-16 flex flex-wrap justify-center gap-10">
          {[
            { valor: '9+', etiqueta: 'Años Enseñando Online' },
            { valor: '500+', etiqueta: 'Estudiantes en Todo el Mundo' },
            { valor: '100%', etiqueta: 'Español Culturalmente Auténtico' },
          ].map(({ valor, etiqueta }) => (
            <div key={etiqueta} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#d9582a] font-serif">{valor}</div>
              <div className="text-xs sm:text-sm text-[#2c2825]/55 mt-1 font-medium tracking-wide uppercase">
                {etiqueta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECCIÓN 2 — EL ANTES (Puntos de Dolor)
═══════════════════════════════════════════════════ */
function SeccionDolor() {
  const dolores = [
    {
      emoji: '🤯',
      titulo: 'La Ilusión del Portuñol',
      cita:
        '"Pensaba que entendía español, pero cuando tuve que hablar con nativos, me quedé en blanco. Hablan tan rápido que me sentí completamente perdido."',
    },
    {
      emoji: '😨',
      titulo: 'El Miedo a la Gramática',
      cita:
        '"Leo perfectamente, pero al abrir la boca, me paraliza el miedo a equivocarme con los tiempos verbales y sonar poco profesional."',
    },
    {
      emoji: '📱',
      titulo: 'El Español de Aplicación',
      cita:
        '"Llevo meses usando aplicaciones, pero solo sé palabras sueltas. No me enseñaron cómo conectar de verdad ni cómo expresar mis emociones en otra cultura."',
    },
  ]

  return (
    <section
      id="el-problema"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="dolor-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c69a44]">
            El Antes
          </span>
          <h2
            id="dolor-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c2825] mt-3"
          >
            La trampa de creer que{' '}
            <span className="text-[#d9582a]">"es casi igual al portugués"</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#2c2825]/60 mt-4 text-lg">
            Si eres brasileño, el español se siente tan cercano… hasta que tienes que hablarlo de verdad.
          </p>
        </div>

        {/* Tarjetas de pain points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dolores.map(({ emoji, titulo, cita }) => (
            <article
              key={titulo}
              className="rounded-2xl border border-[#eedfc0] bg-[#fdfaf5] p-7 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col"
            >
              <span className="text-4xl mb-4" aria-hidden="true">{emoji}</span>
              <h3 className="font-semibold text-[#2c2825] text-lg mb-3">{titulo}</h3>
              <blockquote className="text-[#2c2825]/65 text-sm leading-relaxed italic border-l-4 border-[#d9582a]/25 pl-4 flex-1">
                {cita}
              </blockquote>
            </article>
          ))}
        </div>

        {/* Conector visual hacia el "Después" */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col items-center gap-2">
            <p className="text-[#2c2825]/50 text-sm font-medium">
              ¿Te suena familiar? Hay una manera mejor.
            </p>
            <div className="w-px h-12 bg-gradient-to-b from-[#d9582a]/40 to-transparent" aria-hidden="true" />
            <div className="w-3 h-3 rounded-full border-2 border-[#d9582a]/40" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECCIÓN 3 — EL DESPUÉS (Resultados Deseados)
═══════════════════════════════════════════════════ */
function SeccionResultados() {
  const resultados = [
    {
      numero: '01',
      icono: '🤝',
      titulo: 'Participa con Confianza Total',
      cuerpo:
        'Participa en reuniones o viajes por América Latina entendiendo la velocidad real — sin tener que pedir constantemente que repitan, sin filtros ni intermediarios.',
    },
    {
      numero: '02',
      icono: '🎵',
      titulo: 'Habla Como Música, No Como Fórmula',
      cuerpo:
        'Habla con fluidez sin entrar en pánico. Una vez que entiendes la "fórmula matemática" detrás de la gramática, hablar se convierte en pura música, en algo natural.',
    },
    {
      numero: '03',
      icono: '🌍',
      titulo: 'Conexiones Reales en Toda Latinoamérica',
      cuerpo:
        'Deja atrás el "Portuñol" y construye conexiones reales y profundas con personas de toda América Latina — en el trabajo, en los viajes y en la vida.',
    },
  ]

  return (
    <section
      id="el-despues"
      className="py-20 md:py-28"
      style={{ background: 'linear-gradient(180deg, #faf7f2 0%, #fdf4f0 100%)' }}
      aria-labelledby="resultados-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#3a9bf5]">
            El Después
          </span>
          <h2
            id="resultados-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c2825] mt-3"
          >
            Imagina hablar con{' '}
            <span className="text-[#3a9bf5]">total naturalidad y confianza</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#2c2825]/60 mt-4 text-lg">
            Esta es la realidad que te espera al otro lado de la metodología correcta.
          </p>
        </div>

        {/* Tarjetas de resultado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resultados.map(({ numero, icono, titulo, cuerpo }) => (
            <article
              key={numero}
              className="relative rounded-2xl bg-white border border-[#eedfc0] p-7 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 overflow-hidden"
            >
              {/* Número fantasma como decoración */}
              <span
                className="absolute -top-4 -right-2 font-serif text-8xl font-bold select-none leading-none"
                style={{ color: 'rgba(58,155,245,0.07)' }}
                aria-hidden="true"
              >
                {numero}
              </span>
              <span className="text-4xl mb-4 block" aria-hidden="true">{icono}</span>
              <h3 className="font-semibold text-[#2c2825] text-lg mb-3">{titulo}</h3>
              <p className="text-[#2c2825]/65 text-sm leading-relaxed">{cuerpo}</p>
              {/* Barra de acento inferior */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                style={{ background: 'linear-gradient(90deg, #3a9bf5, #60b8fb)' }}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECCIÓN 4 — EL PUENTE (Presentación del Profesor)
═══════════════════════════════════════════════════ */
function SeccionPuente() {
  const caracteristicas = [
    {
      icono: '🎯',
      titulo: 'Clases Personalizadas',
      descripcion:
        'Cada sesión está diseñada para tus metas específicas — tu sector profesional, tu variante regional preferida, tu ritmo de aprendizaje.',
    },
    {
      icono: '🧾',
      titulo: 'Facturación (CNPJ)',
      descripcion:
        'Cumplimiento fiscal completo para estudiantes y empresas que necesitan facturas oficiales para reembolso o declaración de impuestos.',
    },
    {
      icono: '🧪',
      titulo: 'Software de Evaluación Propio',
      descripcion:
        'Herramientas exclusivas de diagnóstico y seguimiento que revelan exactamente qué necesitas trabajar para progresar más rápido.',
    },
    {
      icono: '💚',
      titulo: 'Entorno "Agonista" de Apoyo',
      descripcion:
        'Un espacio 100% seguro, positivo y sin juicios. Sin estrés. Sin presión. Solo crecimiento, disfrute y confianza genuina.',
    },
  ]

  return (
    <section
      id="sobre-javier"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="puente-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c69a44]">
            El Puente
          </span>
          <h2
            id="puente-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c2825] mt-3"
          >
            Conoce a tu Profesor:{' '}
            <span className="text-[#d9582a]">Javier Chopek</span>
          </h2>
        </div>

        {/* Foto + Biografía */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Foto de perfil */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-none">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div
                className="absolute inset-0 rounded-3xl rotate-3"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(217,88,42,0.25), rgba(58,155,245,0.25))',
                }}
                aria-hidden="true"
              />
              <ProfilePhoto />
            </div>
          </div>

          {/* Texto biográfico */}
          <div className="space-y-5">
            <blockquote className="text-2xl font-serif italic text-[#2c2825]/80 border-l-4 border-[#d9582a] pl-5 leading-snug">
              "El idioma no es solo gramática. Es cultura, música y emoción — todo en uno."
            </blockquote>
            <p className="text-[#2c2825]/70 leading-relaxed text-lg">
              Con <strong className="text-[#2c2825]">más de 9 años de experiencia enseñando online</strong>, el
              Profesor Javier Chopek ha guiado a cientos de brasileños — desde principiantes totales hasta
              profesionales que participan en reuniones en toda América Latina.
            </p>
            <p className="text-[#2c2825]/70 leading-relaxed">
              Su metodología única va mucho más allá de los libros de texto: entrelaza gramática sólida con
              expresiones coloquiales reales, regionalismos y una profunda inmersión en la cultura
              latinoamericana — para que no solo hables español, sino que lo{' '}
              <em className="text-[#c04420] not-italic font-medium">sientas</em>.
            </p>
            <a
              id="puente-cta-whatsapp"
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-white transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d9582a]/50"
              style={{
                background: 'linear-gradient(135deg, #d9582a 0%, #e67a4c 100%)',
                boxShadow: '0 4px 20px rgba(217,88,42,0.35)',
              }}
              aria-label="Contacta al Profesor Javier por WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              Habla conmigo por WhatsApp
            </a>
          </div>
        </div>

        {/* Grilla de características */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {caracteristicas.map(({ icono, titulo, descripcion }) => (
            <div
              key={titulo}
              className="rounded-2xl border border-[#eedfc0] bg-[#fdfaf5] p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <span className="text-3xl mb-3 block" aria-hidden="true">{icono}</span>
              <h3 className="font-semibold text-[#2c2825] text-base mb-2">{titulo}</h3>
              <p className="text-[#2c2825]/60 text-sm leading-relaxed">{descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECCIÓN 5 — CTA FINAL (Captura de Leads)
═══════════════════════════════════════════════════ */
function SeccionCTAFinal() {
<<<<<<< HEAD
=======
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      // Aquí se integraría con un CRM o plataforma de email marketing
      setEnviado(true)
    }
  }
>>>>>>> 84ea84f358615e222bf4bc062bf956beea770906

  return (
    <section
      id="contacto"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2c2825 0%, #1a1210 100%)' }}
      aria-labelledby="cta-heading"
    >
      {/* Resplandor decorativo */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #d9582a, transparent)',
          top: '5%',
          right: '2%',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute w-64 h-64 rounded-full pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle, #3a9bf5, transparent)',
          bottom: '10%',
          left: '5%',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Etiqueta de sección */}
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c69a44]">
          ¿Listo para dominar el español latino?
        </span>

        <h2
          id="cta-heading"
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#faf7f2] mt-3 mb-5 leading-tight"
        >
          Tu voz en español auténtico{' '}
          <span className="text-[#efa47f]">te está esperando</span>
        </h2>

        <p className="text-[#faf7f2]/60 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Empieza con una Evaluación de Nivel gratuita y dejemos encontrar juntos el camino
          más rápido desde el "Portuñol" hasta el español que siempre soñaste hablar.
        </p>

<<<<<<< HEAD
        {/* CTA principal — WhatsApp */}
        <a
          id="cta-final-whatsapp"
          href="https://wa.me/5511952098958?text=¡Hola,%20profesor%20Javier!%20Me%20gustaría%20agendar%20una%20evaluación%20de%20nivel%20gratuita."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white text-xl transition-all duration-200 hover:scale-105 hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/60 mb-4"
          style={{
            background: 'linear-gradient(135deg, #1ebe57 0%, #25D366 100%)',
            boxShadow: '0 6px 32px rgba(37,211,102,0.5)',
          }}
          aria-label="Agendar evaluación de nivel gratuita por WhatsApp con el Profesor Javier Chopek"
        >
          <WhatsAppIcon className="w-7 h-7 text-white shrink-0" />
          Agendar Evaluación por WhatsApp ✨
        </a>

=======
        {/* Formulario de captura de leads */}
        {!enviado ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-8"
            aria-label="Formulario para evaluación de nivel gratuita"
          >
            <label htmlFor="captura-email" className="sr-only">
              Tu correo electrónico
            </label>
            <input
              id="captura-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
              className="flex-1 px-5 py-3.5 rounded-full border text-base transition-all focus:outline-none focus:ring-2 focus:ring-[#d9582a] focus:border-transparent"
              style={{
                background: 'rgba(255,255,255,0.08)',
                borderColor: 'rgba(255,255,255,0.18)',
                color: '#faf7f2',
              }}
            />
            <button
              id="btn-evaluacion-gratuita"
              type="submit"
              className="px-6 py-3.5 rounded-full font-bold text-white whitespace-nowrap transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#c69a44]/60"
              style={{
                background: 'linear-gradient(135deg, #c69a44 0%, #d4ae65 100%)',
                boxShadow: '0 4px 20px rgba(198,154,68,0.4)',
              }}
            >
              Realiza tu Evaluación de Nivel Gratuita ✨
            </button>
          </form>
        ) : (
          <div
            className="max-w-lg mx-auto mb-8 p-5 rounded-2xl border text-[#faf7f2]"
            style={{
              background: 'rgba(255,255,255,0.08)',
              borderColor: 'rgba(198,154,68,0.4)',
            }}
            role="alert"
          >
            <span className="text-2xl" aria-hidden="true">🎉</span>
            <p className="font-semibold mt-2">¡Perfecto! El Profesor Javier se pondrá en contacto contigo muy pronto.</p>
            <p className="text-sm text-[#faf7f2]/60 mt-1">
              Revisa tu bandeja de entrada — tu camino al español auténtico comienza ahora.
            </p>
          </div>
        )}

        {/* Separador */}
        <div className="flex items-center gap-4 max-w-xs mx-auto mb-8">
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.15)' }} />
          <span className="text-sm font-medium" style={{ color: 'rgba(250,247,242,0.4)' }}>o</span>
          <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.15)' }} />
        </div>

        {/* CTA secundario — WhatsApp */}
        <a
          id="cta-final-whatsapp"
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-lg transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
          style={{
            background: 'linear-gradient(135deg, #1ebe57 0%, #25D366 100%)',
            boxShadow: '0 4px 24px rgba(37,211,102,0.4)',
          }}
          aria-label="Contactar al Profesor Javier Chopek por WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6 text-white" />
          Habla conmigo por WhatsApp
        </a>

>>>>>>> 84ea84f358615e222bf4bc062bf956beea770906
        {/* Microcopia de confianza */}
        <p className="mt-8 text-sm" style={{ color: 'rgba(250,247,242,0.35)' }}>
          Sin ventas agresivas. Sin compromisos. Solo una conversación sobre dónde estás y
          adónde quieres llegar. 🌎
        </p>
      </div>
    </section>
  )
}

/* ─── Ensamblaje de la Página ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WaveDivider topColor="#ffffff" bottomColor="#faf7f2" />
        <SeccionDolor />
        <WaveDivider topColor="#faf7f2" bottomColor="#ffffff" flip />
        <SeccionResultados />
        <WaveDivider topColor="#fdf4f0" bottomColor="#ffffff" />
        <SeccionPuente />
        <WaveDivider topColor="#1a1210" bottomColor="#ffffff" flip />
        <SeccionCTAFinal />
      </main>
      <Footer />
    </>
  )
}
