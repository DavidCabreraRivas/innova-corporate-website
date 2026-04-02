import { Metadata } from "next";
import { Mail, Phone, MapPin, Linkedin, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto — Innova Gestión Hotelera",
  description:
    "Contacta con Innova Gestión Hotelera. Reserva una llamada gratuita de diagnóstico para tu hotel. Puerto del Carmen, Lanzarote.",
};

export default function ContactoPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
            Contacto
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
            Hablemos de tu hotel
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">
            30 minutos de diagnóstico gratuito. Sin compromiso, sin letra pequeña.
            Solo analizar juntos el potencial de mejora de tu hotel.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand mb-6">
                Envíame un mensaje
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-brand mb-1.5">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      className="w-full px-4 py-3 rounded border border-border bg-white text-text focus:outline-none focus:border-gold transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded border border-border bg-white text-text focus:outline-none focus:border-gold transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="hotel" className="block text-sm font-medium text-brand mb-1.5">
                    Hotel / Empresa
                  </label>
                  <input
                    type="text"
                    id="hotel"
                    name="hotel"
                    className="w-full px-4 py-3 rounded border border-border bg-white text-text focus:outline-none focus:border-gold transition-colors"
                    placeholder="Nombre de tu hotel o empresa"
                  />
                </div>
                <div>
                  <label htmlFor="habitaciones" className="block text-sm font-medium text-brand mb-1.5">
                    N&ordm; de habitaciones
                  </label>
                  <select
                    id="habitaciones"
                    name="habitaciones"
                    className="w-full px-4 py-3 rounded border border-border bg-white text-text focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="1-50">1 - 50 habitaciones</option>
                    <option value="51-100">51 - 100 habitaciones</option>
                    <option value="101-200">101 - 200 habitaciones</option>
                    <option value="201-300">201 - 300 habitaciones</option>
                    <option value="300+">Más de 300</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-brand mb-1.5">
                    &iquest;Cómo puedo ayudarte?
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    className="w-full px-4 py-3 rounded border border-border bg-white text-text focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Cuéntame brevemente tu situación y qué necesitas..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-brand py-4 rounded font-semibold text-base transition-colors"
                >
                  Enviar mensaje
                </button>
                <p className="text-text-muted/60 text-xs text-center">
                  Respondo en menos de 24 horas. Tus datos están seguros y no los comparto con terceros.
                </p>
              </form>
            </div>

            {/* Info + Calendly */}
            <div className="space-y-10">
              {/* Calendly */}
              <div className="bg-cream rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6 text-gold" />
                  <h3 className="font-serif text-xl font-bold text-brand">
                    Reserva una llamada directa
                  </h3>
                </div>
                <p className="text-text-muted text-sm mb-6">
                  Si prefieres hablar directamente, reserva un hueco en mi agenda.
                  30 minutos de diagnóstico gratuito por videollamada.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-brand hover:bg-brand-light text-cream px-6 py-3 rounded font-semibold transition-colors"
                >
                  Reservar videollamada
                  <Calendar className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Contact info */}
              <div>
                <h3 className="font-serif text-xl font-bold text-brand mb-6">
                  Información de contacto
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand">Email</p>
                      <a href="mailto:info@innovagestionhotelera.com" className="text-text-muted text-sm hover:text-gold transition-colors">
                        info@innovagestionhotelera.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand">Teléfono</p>
                      <a href="tel:+34928000000" className="text-text-muted text-sm hover:text-gold transition-colors">
                        +34 928 000 000
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand">Ubicación</p>
                      <p className="text-text-muted text-sm">Puerto del Carmen, Lanzarote</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Linkedin className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand">LinkedIn</p>
                      <a
                        href="https://es.linkedin.com/company/innova-gestion-hotelera"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted text-sm hover:text-gold transition-colors"
                      >
                        Innova Gestión Hotelera
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand">Horario</p>
                      <p className="text-text-muted text-sm">Lun - Vie: 9:00 - 18:00 (hora Canarias)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
