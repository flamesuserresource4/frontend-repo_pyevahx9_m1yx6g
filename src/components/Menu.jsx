import React from 'react'

const sections = [
  {
    name: 'Antipasti',
    items: [
      { name: 'Battuta di Fassona', desc: 'con crema di capperi e cialda di pane', price: '14' },
      { name: 'Polpo scottato', desc: 'con patate affumicate e salsa al prezzemolo', price: '16' }
    ]
  },
  {
    name: 'Primi',
    items: [
      { name: 'Tagliolino al tartufo', desc: 'burro nocciola e Parmigiano 36 mesi', price: '18' },
      { name: 'Risotto allo zafferano', desc: 'midollo croccante e limone', price: '17' }
    ]
  },
  {
    name: 'Secondi',
    items: [
      { name: 'Guancia di manzo brasata', desc: 'purea di topinambur e riduzione al Nebbiolo', price: '22' },
      { name: 'Ricciola alla griglia', desc: 'asparagi, salsa al bergamotto', price: '24' }
    ]
  },
  {
    name: 'Dolci',
    items: [
      { name: 'Tiramisù Aurora', desc: 'al cacao amaro e caffè freddo', price: '8' },
      { name: 'Meringata al limone', desc: 'cremoso allo yuzu', price: '9' }
    ]
  }
]

const Menu = () => {
  return (
    <section id="menu" className="relative bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_30%_0%,rgba(251,191,36,0.08),transparent)]"></div>
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Il nostro Menu</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Tecnica contemporanea e ingredienti italiani selezionati. Ogni piatto nasce per esaltare gusto, equilibrio e leggerezza.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {sections.map((sec, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <h3 className="text-amber-300 text-lg font-semibold mb-4">{sec.name}</h3>
              <ul className="space-y-4">
                {sec.items.map((it, j) => (
                  <li key={j} className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-white font-medium">{it.name}</p>
                      <p className="text-white/70 text-sm">{it.desc}</p>
                    </div>
                    <span className="text-white/80 font-semibold whitespace-nowrap">€ {it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
