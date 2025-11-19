import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526312426976-593c2b5a4537?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543353071-087092ec393e?q=80&w=1600&auto=format&fit=crop'
]

const Gallery = () => {
  return (
    <section id="gallery" className="relative bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Galleria</h2>
            <p className="mt-3 text-white/70 max-w-xl">Uno sguardo sul nostro ambiente e sui piatti che raccontano la stagione. Ogni scatto è un invito.</p>
          </div>
          <a href="#reservation" className="hidden md:inline-flex px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">Prenota</a>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10">
              <img src={src} alt="galleria" className="w-full h-48 md:h-56 object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
