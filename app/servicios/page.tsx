import { Metadata } from "next";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { TrendingUp, BarChart3, Globe, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios — Innova Gestión Hotelera",
  description:
    "Revenue management, data intelligence, distribución y gestión integral para hoteles independientes en Canarias.",
};

export default function ServiciosPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
            Nuestros Servicios
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
            Los 4 pilares de tu rentabilidad
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">
            Soluciones integrales de revenue management y gestión hotelera
            diseñadas para hoteles independientes que quieren competir como las grandes cadenas.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={TrendingUp}
              title="Revenue Management"
              subtitle="Maximizar el RevPAR con pricing dinámico, forecast y estrategia."
              description="Gestión profesional de tarifas como en cadenas de 5 estrellas, aplicada a tu hotel independiente."
              features={[
                "Gestión de tarifas y disponibilidad",
                "Segmentación y displacement analysis",
                "Setup de RMS (propio o externo)",
                "Presupuesto y KPIs",
              ]}
            />
            <ServiceCard
              icon={BarChart3}
              title="Data Intelligence"
              subtitle="Convertir tus datos en decisiones que mueven el negocio."
              description="Dashboards personalizados y alertas automáticas para que tomes decisiones basadas en datos reales."
              features={[
                "Dashboards de rendimiento",
                "Análisis compset y benchmarking",
                "Alertas de demanda y competencia",
                "BI hotelero personalizado",
              ]}
            />
            <ServiceCard
              icon={Globe}
              title="Distribución & Ecommerce"
              subtitle="Vender más directo, depender menos de las OTAs."
              description="Estrategia de canales para equilibrar tu revenue mix y aumentar la venta directa."
              features={[
                "Estrategia de canales (OTA, GDS, directo)",
                "Optimización de Booking y Expedia",
                "Venta directa y motor de reservas",
                "Paridad de precios y revenue mix",
              ]}
            />
            <ServiceCard
              icon={Building2}
              title="Gestión Hotelera Integral"
              subtitle="Para hoteles que necesitan un Director de Operaciones externo."
              description="Asset management y reestructuración operativa con reporting profesional al propietario."
              features={[
                "Asset management",
                "Reestructuración operativa",
                "Reporting a propietario/inversor",
                "Proyectos de apertura o reposicionamiento",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand">
              Cómo trabajamos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnóstico", desc: "Analizamos tu hotel, tus datos, tu compset y tu situación actual en 30 minutos." },
              { step: "02", title: "Propuesta", desc: "Te presentamos un plan de acción a medida con objetivos claros y medibles." },
              { step: "03", title: "Ejecución", desc: "Implementamos la estrategia. Tú ves los resultados, nosotros hacemos el trabajo." },
              { step: "04", title: "Resultados", desc: "Reporting mensual con KPIs reales. Sin humo, solo números que puedes verificar." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="font-serif text-5xl font-bold text-gold/30">{item.step}</span>
                <h3 className="font-serif text-xl font-bold text-brand mt-2 mb-3">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-6">
            &iquest;Quieres saber qué pilar necesita tu hotel?
          </h2>
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
