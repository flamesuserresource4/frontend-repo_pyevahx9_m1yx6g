import React from 'react'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Reservation from './components/Reservation'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Menu />
      <Gallery />
      <Reservation />
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70">© {new Date().getFullYear()} Ristorante Aurora • Tutti i diritti riservati</p>
          <div className="flex items-center gap-6 text-white/70">
            <a href="#menu" className="hover:text-white transition">Menu</a>
            <a href="#gallery" className="hover:text-white transition">Galleria</a>
            <a href="#reservation" className="hover:text-white transition">Prenota</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
