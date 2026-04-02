import { Metadata } from "next";
import { ArrowRight, TrendingUp, BarChart3, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casos de Éxito — Innova Gestión Hotelera",
  description:
    "Resultados reales de revenue management y data intelligence en hoteles de Canarias. Casos de éxito con datos verificables.",
};

const casos = [
  {
    icon: TrendingUp,
    type: "Hotel vacacional 80 hab.",
    location: "Lanzarote",
    result: "+28% RevPAR",
    period: "en 4 meses",
    challenge: "Tarifas fijas por temporada, sin segmentación, dependencia del 60% en un solo touroperador.",
    solution: "Implementación de pricing dinámico, apertura de nuevos canales OTA, segmentación por mercado emisor.",
    results: [
      "+28% de RevPAR en los primeros 4 meses",
      "Diversificación: touroperador bajó del 60% al 38%",
      "Incremento del ADR en un 15% sin pérdida de ocupación",
      "Setup de dashboard con KPIs en tiempo real",
    ],
  },
  {
    icon: Globe,
    type: "Aparthotel 120 uds.",
    location: "Tenerife",
    result: "45% → 30%",
    period: "dependencia OTA",
    challenge: "El 45% de las ventas venía de Booking.com con comisiones del 18%. Sin motor de reservas propio ni estrategia directa.",
    solution: "Optimización de venta directa, implementación de motor de reservas, campaña de fidelización, revenue mix balanceado.",
    results: [
      "Reducción de dependencia OTA del 45% al 30%",
      "Ahorro de €120.000/año en comisiones",
      "Venta directa creció del 12% al 28%",
      "Programa de fidelización con 2.400 clientes activos",
    ],
  },
  {
    icon: BarChart3,
    type: "Cadena familiar 3 hoteles",
    location: "Canarias",
    result: "Primer BI operativo",
    period: "3 hoteles conectados",
    challenge: "Cero visibilidad de KPIs. Datos dispersos en Excel, PMS y papel. El propietario no sabía su RevPAR real.",
    solution: "Integración de datos de los 3 PMS, diseño de dashboard unificado, alertas automáticas, reporting mensual al propietario.",
    results: [
      "Dashboard unificado con datos de los 3 hoteles",
      "Reporting automatizado semanal al propietario",
      "Detección de un error de pricing que costaba €45K/año",
      "Tiempo de decisión reducido de días a minutos",
    ],
  },
];

export default function CasosPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
            Resultados reales
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
            Casos de Éxito
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">
            Números que hablan por sí solos. Cada caso representa un hotel real
            con resultados verificables y medibles.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {casos.map((caso, i) => (
            <div
              key={caso.type}
              className="bg-white rounded-lg border border-border overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Result highlight */}
                <div className="bg-brand p-8 lg:p-12 flex flex-col justify-center">
                  <caso.icon className="h-8 w-8 text-gold mb-4" />
                  <p className="text-cream/60 text-sm mb-1">{caso.type} &middot; {caso.location}</p>
                  <p className="font-serif text-4xl md:text-5xl font-bold text-cream mb-2">
                    {caso.result}
                  </p>
                  <p className="text-gold font-medium">{caso.period}</p>
                </div>

                {/* Details */}
                <div className="lg:col-span-2 p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="font-serif text-lg font-bold text-brand mb-2">El reto</h3>
                    <p className="text-text-muted leading-relaxed">{caso.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-serif text-lg font-bold text-brand mb-2">La solución</h3>
                    <p className="text-text-muted leading-relaxed">{caso.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-brand mb-3">Resultados</h3>
                    <ul className="space-y-2">
                      {caso.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-text-muted text-sm">
                          <span className="text-gold font-bold mt-0.5">&check;</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand mb-4">
            &iquest;Tu hotel podría ser el próximo caso de éxito?
          </h2>
          <p className="text-text-muted mb-8">
            Analicemos juntos el potencial de mejora de tu hotel. Sin compromiso.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center bg-gold hover:bg-gold-light text-brand px-8 py-4 rounded font-semibold transition-colors"
          >
            Solicitar diagnóstico gratuito
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
