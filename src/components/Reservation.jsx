import React, { useState } from 'react'

const Reservation = () => {
  const [form, setForm] = useState({ name: '', email: '', date: '', time: '', guests: 2 })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Invio in corso...')
    try {
      // In un progetto full-stack questo chiamerebbe il backend per salvare la prenotazione.
      await new Promise(r => setTimeout(r, 800))
      setStatus('Prenotazione ricevuta! Ti abbiamo inviato un’email di conferma.')
      setForm({ name: '', email: '', date: '', time: '', guests: 2 })
    } catch (e) {
      setStatus('Si è verificato un errore. Riprova più tardi.')
    }
  }

  return (
    <section id="reservation" className="relative bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_0%,rgba(251,191,36,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Prenota un tavolo</h2>
            <p className="mt-3 text-white/70">Siamo aperti dal martedì alla domenica, cena dalle 19:30. Per gruppi oltre 8 persone, contattaci via email.</p>
            <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-6 text-white/80">
              <p><span className="text-white">Indirizzo:</span> Via delle Stelle 18, Milano</p>
              <p className="mt-2"><span className="text-white">Telefono:</span> +39 02 1234 5678</p>
              <p className="mt-2"><span className="text-white">Email:</span> prenotazioni@aurora.it</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Nome" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300/60" />
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300/60" />
              <div className="grid grid-cols-2 gap-4">
                <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300/60" />
                <input type="time" name="time" value={form.time} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300/60" />
              </div>
              <div>
                <select name="guests" value={form.guests} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-300/60">
                  {[...Array(8)].map((_,i)=> <option key={i+1} value={i+1} className="bg-slate-900">{i+1} ospiti</option>)}
                </select>
              </div>
              <button className="mt-2 px-6 py-3 rounded-xl bg-amber-400 text-slate-900 font-semibold hover:shadow-[0_10px_30px_rgba(251,191,36,0.45)] transition">Invia richiesta</button>
              {status && <p className="text-amber-200/90 text-sm mt-1">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Reservation
