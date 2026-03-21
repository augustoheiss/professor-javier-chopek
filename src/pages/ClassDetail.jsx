import { useParams, Link, Navigate } from 'react-router-dom'
import { classesData } from '../data/classesData'
import WhatsAppIcon from '../components/WhatsAppIcon'

export default function ClassDetail() {
  const { slug } = useParams()
  const lesson = classesData.find((c) => c.slug === slug)

  if (!lesson) {
    return <Navigate to="/clases" replace />
  }

  const prevLesson = classesData[lesson.number - 2] ?? null
  const nextLesson = classesData[lesson.number] ?? null

  return (
    <article className="space-y-8">

      {/* Header card */}
      <div className="bg-white rounded-2xl border border-[#eedfc0] p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c69a44]">
            Episodio {lesson.number}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#2c2825]/20" aria-hidden="true" />
          <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2.5 py-0.5 rounded-full">
            Disponible
          </span>
        </div>
        <h1
          className="font-serif text-2xl sm:text-3xl font-bold text-[#2c2825] leading-snug mb-3"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          {lesson.title}
        </h1>
        <p
          className="text-[#2c2825]/70 leading-relaxed max-w-2xl"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          {lesson.description}
        </p>
      </div>

      {/* YouTube embed */}
      <div className="bg-white rounded-2xl border border-[#eedfc0] shadow-sm overflow-hidden">
        <div className="p-2 sm:p-3">
          <iframe
            className="aspect-video w-full rounded-xl shadow-lg"
            src={`https://www.youtube.com/embed/${lesson.id}?rel=0&modestbranding=1`}
            title={lesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="px-4 pb-4 pt-1 flex items-center justify-between flex-wrap gap-2">
          <span
            className="text-sm text-[#2c2825]/60"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Episodio {lesson.number} · {lesson.title}
          </span>
          <a
            href={`https://www.youtube.com/watch?v=${lesson.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#d9582a] font-medium hover:underline"
            aria-label={`Ver ${lesson.title} en YouTube`}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Ver en YouTube
          </a>
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevLesson ? (
          <Link
            to={`/clases/${prevLesson.slug}`}
            className="group flex items-center gap-4 bg-white hover:bg-[#fdf4f0] border border-[#eedfc0] hover:border-[#d9582a]/30 rounded-2xl p-5 transition-all duration-150 shadow-sm"
            aria-label={`Episodio anterior: ${prevLesson.title}`}
          >
            <span className="text-2xl text-[#d9582a]/40 group-hover:text-[#d9582a] transition-colors" aria-hidden="true">←</span>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-[#c69a44] mb-0.5">
                Episodio anterior
              </div>
              <div className="text-sm font-semibold text-[#2c2825] truncate leading-snug">
                {prevLesson.title}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <Link
            to={`/clases/${nextLesson.slug}`}
            className="group flex items-center gap-4 bg-white hover:bg-[#fdf4f0] border border-[#eedfc0] hover:border-[#d9582a]/30 rounded-2xl p-5 transition-all duration-150 shadow-sm text-right sm:flex-row-reverse"
            aria-label={`Siguiente episodio: ${nextLesson.title}`}
          >
            <span className="text-2xl text-[#d9582a]/40 group-hover:text-[#d9582a] transition-colors" aria-hidden="true">→</span>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-[#c69a44] mb-0.5">
                Siguiente episodio
              </div>
              <div className="text-sm font-semibold text-[#2c2825] truncate leading-snug">
                {nextLesson.title}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}
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
