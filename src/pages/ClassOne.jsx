import WhatsAppIcon from '../components/WhatsAppIcon'

export default function ClassOne() {
  return (
    <article className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-[#eedfc0] p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c69a44]">
            Módulo 1
          </span>
          <span className="w-1 h-1 rounded-full bg-[#2c2825]/20" aria-hidden="true" />
          <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2.5 py-0.5 rounded-full">
            Disponible
          </span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2c2825] mb-3">
          Español Latino: Los Fundamentos
        </h1>
        <p className="text-[#2c2825]/70 leading-relaxed max-w-2xl">
          En esta primera clase aprenderemos la pronunciación auténtica del español latinoamericano, sus variantes regionales y las diferencias clave que lo distinguen del español peninsular.
        </p>
      </div>

      {/* Video placeholder */}
      <div className="bg-white rounded-2xl border border-[#eedfc0] shadow-sm overflow-hidden">
        <div
          className="aspect-video bg-gradient-to-br from-[#2c2825] to-[#6c281b] flex flex-col items-center justify-center gap-4 relative"
          role="img"
          aria-label="Reproductor de video de la Clase 1"
        >
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors cursor-pointer group">
            <svg className="w-9 h-9 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-white/60 text-sm">Video de la clase próximamente disponible</p>
        </div>
        <div className="p-4 border-t border-[#eedfc0] flex items-center justify-between">
          <span className="text-sm text-[#2c2825]/60">Clase 1 · Español Latino: Los Fundamentos</span>
          <span className="text-xs text-[#a87c35] font-medium">Duración: ~45 min</span>
        </div>
      </div>

      {/* Topics covered */}
      <div className="bg-white rounded-2xl border border-[#eedfc0] p-6 sm:p-8 shadow-sm">
        <h2 className="font-semibold text-[#2c2825] text-lg mb-5">
          ¿Qué aprenderás en esta clase?
        </h2>
        <ul className="space-y-4">
          {[
            {
              icon: '🔊',
              title: 'Pronunciación latinoamericana',
              desc: 'Las consonantes, vocales y patrones de entonación que definen el acento latino.',
            },
            {
              icon: '🗺️',
              title: 'Variedades regionales',
              desc: 'Diferencias entre el español rioplatense, caribeño, andino y centroamericano.',
            },
            {
              icon: '📚',
              title: 'Vocabulario esencial de presentación',
              desc: 'Las palabras y frases clave para presentarte y entablar conversaciones básicas.',
            },
            {
              icon: '🎯',
              title: 'Errores comunes de principiantes',
              desc: 'Los malentendidos más frecuentes y cómo evitarlos desde el primer día.',
            },
          ].map(({ icon, title, desc }) => (
            <li key={title} className="flex gap-4">
              <span className="text-2xl shrink-0" aria-hidden="true">{icon}</span>
              <div>
                <h3 className="font-semibold text-[#2c2825] text-sm">{title}</h3>
                <p className="text-sm text-[#2c2825]/60 mt-0.5 leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA contact */}
      <div className="bg-gradient-to-br from-[#d9582a]/10 to-[#f7f0e0] rounded-2xl border border-[#eedfc0] p-6 sm:p-8">
        <h2 className="font-serif text-xl font-bold text-[#2c2825] mb-2">
          ¿Quieres clases personalizadas?
        </h2>
        <p className="text-sm text-[#2c2825]/70 mb-5">
          Contáctame directamente para clases individuales adaptadas a tu nivel y objetivos.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://wa.me/5511952098958?text=¡Hola,%20profesor%20Javier!%20Me%20gustaría%20tener%20más%20información%20sobre%20las%20clases%20de%20español."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1ebe5d] transition-colors shadow-md"
            aria-label="Contactar a Javier por WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="mailto:javichopek@hotmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#d9582a] text-[#d9582a] text-sm font-semibold hover:bg-[#fdf4f0] transition-colors"
            aria-label="Enviar email a javichopek@hotmail.com"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Enviar Email
          </a>
        </div>
      </div>
    </article>
  )
}
