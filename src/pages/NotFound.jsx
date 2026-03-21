import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#faf7f2] flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-md">
          <p className="font-serif text-[8rem] font-bold leading-none text-[#d9582a]/15 select-none" aria-hidden="true">
            404
          </p>
          <div className="-mt-8">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2c2825] mb-4">
              ¡Página no encontrada!
            </h1>
            <p className="text-[#2c2825]/60 leading-relaxed mb-8">
              Lo sentimos, esta página no existe o fue movida. Vuelve al inicio y sigue aprendiendo español latino.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button as={Link} to="/" size="md">
                Ir al Inicio
              </Button>
              <Button as={Link} to="/clases" variant="secondary" size="md">
                Ver las Clases
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
