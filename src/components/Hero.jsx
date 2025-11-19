import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1528697203043-733bfdcaad06?q=80&w=2000&auto=format&fit=crop"
          alt="ristorante elegante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_20%,rgba(255,255,255,0.12),transparent)] mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Top nav */}
        <div className="max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
              <span className="text-white text-xl">🍝</span>
            </div>
            <span className="text-white/90 font-semibold tracking-wide">Ristorante Aurora</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#menu" className="hover:text-white transition">Menu</a>
            <a href="#gallery" className="hover:text-white transition">Galleria</a>
            <a href="#reservation" className="px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition">Prenota</a>
          </nav>
        </div>

        {/* Centered content */}
        <div className="max-w-7xl mx-auto px-6 mt-20 md:mt-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/10 border border-white/20 text-white/80 backdrop-blur">Cucina contemporanea italiana</span>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Un'esperienza culinaria che resta nel cuore
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
              Ingredienti di stagione, tecnica impeccabile e un ambiente che esalta ogni momento. Benvenuti dove gusto e atmosfera si incontrano.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#reservation" className="px-6 py-3 rounded-xl bg-amber-400 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(251,191,36,0.4)] hover:shadow-[0_10px_40px_rgba(251,191,36,0.55)] transition">Prenota un tavolo</a>
              <a href="#menu" className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">Scopri il menu</a>
            </div>
          </div>

          {/* Floating cards */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              title: 'Chef tasting',
              desc: 'Sei portate ispirate al mare e alla terra',
              img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop'
            },{
              title: 'Cantina selezionata',
              desc: 'Oltre 120 etichette tra classici e naturali',
              img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c76fd?q=80&w=1200&auto=format&fit=crop'
            },{
              title: 'Dessert signature',
              desc: 'Finali dolci che sorprendono senza appesantire',
              img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop'
            }].map((c, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/15 backdrop-blur hover:translate-y-[-4px] transition will-change-transform">
                <img src={c.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
                <div className="relative p-6 h-48 flex flex-col justify-end">
                  <h3 className="text-white text-xl font-semibold">{c.title}</h3>
                  <p className="text-white/80 text-sm">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg className="absolute bottom-[-1px] left-0 right-0 w-full" viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60 C 240 20, 480 100, 720 60 C 960 20, 1200 100, 1440 60 L 1440 120 L 0 120 Z" fill="rgb(15,23,42)"/>
      </svg>
    </section>
  )
}

export default Hero
