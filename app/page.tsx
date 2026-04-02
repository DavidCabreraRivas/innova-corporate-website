import Link from "next/link";
import { ServiceCard } from "@/components/shared/ServiceCard";
import {
  TrendingUp,
  BarChart3,
  Globe,
  Building2,
  ArrowRight,
  CheckCircle,
  Calendar,
} from "lucide-react";

export default function HomePage() {
  return (
    <main>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center bg-brand pt-20">
        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,169,110,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-6">
              Revenue Management &middot; Data Intelligence &middot; Distribución
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6">
              Tu hotel, rentable
              <span className="text-gold"> por diseño.</span>
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Revenue management, data intelligence y distribución para hoteles
              que quieren dejar de improvisar. El partner estratégico que tu hotel necesita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-brand px-8 py-4 rounded font-semibold text-base transition-colors"
              >
                Analiza tu hotel gratis
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/casos"
                className="inline-flex items-center justify-center border border-cream/30 hover:border-gold text-cream hover:text-gold px-8 py-4 rounded font-semibold text-base transition-colors"
              >
                Ver Casos de Éxito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CIFRAS DE CREDIBILIDAD ==================== */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Años en Revenue Management" },
              { number: "+20%", label: "RevPAR medio en 6 meses" },
              { number: "50+", label: "Hoteles gestionados" },
              { number: "4", label: "Cadenas internacionales" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl md:text-5xl font-bold text-brand mb-2">
                  {stat.number}
                </p>
                <p className="text-text-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-text-muted/50 text-sm font-medium tracking-wider">
            {["Barceló", "RIU", "Bahía Príncipe", "Meliá"].map((brand) => (
              <span key={brand} className="uppercase">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4 PILARES DE SERVICIO ==================== */}
      <section id="servicios" className="py-20 md:py-28 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              Nuestros Servicios
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand">
              Los 4 pilares de tu rentabilidad
            </h2>
          </div>
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

      {/* ==================== PARA QUIÉN ES ESTO ==================== */}
      <section className="py-20 md:py-28 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              Para quién es esto
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-12">
              Trabajamos con hoteles de 20 a 300 habitaciones que...
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-12">
              {[
                "No tienen Revenue Manager interno",
                "Sus tarifas van por temporada fija",
                "Dependen demasiado de Booking.com",
                "Tienen datos pero no los están usando",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-white/5 rounded-lg p-4"
                >
                  <CheckCircle className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <p className="text-cream/80 text-base">{item}</p>
                </div>
              ))}
            </div>
            <p className="font-serif text-xl md:text-2xl text-gold italic">
              &ldquo;Si te identificas, tenemos trabajo que hacer juntos.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CASOS DE ÉXITO ==================== */}
      <section id="casos" className="py-20 md:py-28 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              Resultados reales
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand">
              Casos de Éxito
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "Hotel 80 hab.",
                location: "Lanzarote",
                result: "+28% RevPAR",
                period: "en 4 meses",
                description:
                  "Implementación de pricing dinámico y optimización de canales para un hotel vacacional independiente.",
              },
              {
                type: "Aparthotel",
                location: "Tenerife",
                result: "45% → 30%",
                period: "dependencia OTA",
                description:
                  "Estrategia de venta directa y redistribución del revenue mix reduciendo comisiones en €120K/año.",
              },
              {
                type: "Cadena 3 hoteles",
                location: "Canarias",
                result: "Primer BI",
                period: "operativo",
                description:
                  "Diseño e implementación del primer dashboard de business intelligence con KPIs en tiempo real.",
              },
            ].map((caso) => (
              <div
                key={caso.type}
                className="bg-white rounded-lg p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 text-text-muted text-sm mb-4">
                  <span>{caso.type}</span>
                  <span className="text-gold">&middot;</span>
                  <span>{caso.location}</span>
                </div>
                <p className="font-serif text-3xl font-bold text-brand mb-1">
                  {caso.result}
                </p>
                <p className="text-gold text-sm font-medium mb-4">{caso.period}</p>
                <p className="text-text-muted text-sm leading-relaxed">
                  {caso.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/contacto"
              className="inline-flex items-center text-brand font-semibold hover:text-gold transition-colors"
            >
              Ver todos los casos
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== QUIÉN SOY ==================== */}
      <section id="sobre-mi" className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="bg-brand/10 rounded-lg aspect-[4/5] flex items-center justify-center">
              <div className="text-center text-brand/40">
                <Building2 className="h-16 w-16 mx-auto mb-4" />
                <p className="text-sm">Foto profesional David</p>
              </div>
            </div>
            {/* Bio */}
            <div>
              <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
                Quién soy
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand mb-2">
                David Cabrera
              </h2>
              <p className="text-text-muted text-sm mb-6">
                Economista Colegiado &middot; MSc Data Science &middot; 15 años Revenue Management
              </p>
              <div className="space-y-4 text-text leading-relaxed">
                <p>
                  He gestionado revenue en Barceló, RIU, Bahía Príncipe y cadenas
                  internacionales. Ahora aplico esa misma metodología de cadena
                  de 5 estrellas a hoteles independientes en Canarias.
                </p>
                <p>
                  Combino revenue management de alto nivel con data science propio
                  y presencia local en Lanzarote. No soy una consultoría fría que
                  te manda un PDF — soy tu partner en el día a día del negocio.
                </p>
              </div>
              <a
                href="/contacto"
                className="inline-flex items-center mt-8 text-brand font-semibold hover:text-gold transition-colors"
              >
                Ver perfil completo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BLOG ==================== */}
      <section id="blog" className="py-20 md:py-28 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              Blog
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand">
              Últimas Entradas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: "Revenue Basics",
                title: "Guía completa de Revenue Management para hoteles independientes",
                excerpt:
                  "Todo lo que necesitas saber para implementar revenue management en tu hotel sin un equipo dedicado.",
                date: "Próximamente",
              },
              {
                category: "Distribución",
                title: "Cómo reducir dependencia de Booking.com sin perder ventas",
                excerpt:
                  "Estrategias probadas para equilibrar tu revenue mix y aumentar la venta directa de forma sostenible.",
                date: "Próximamente",
              },
              {
                category: "Data Hotelera",
                title: "RevPAR, ADR y Ocupación: qué medir y cómo actuar",
                excerpt:
                  "Los KPIs esenciales del revenue management y cómo convertirlos en acciones concretas para tu hotel.",
                date: "Próximamente",
              },
            ].map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow group"
              >
                {/* Image placeholder */}
                <div className="bg-brand/5 h-48 flex items-center justify-center">
                  <span className="text-brand/30 text-sm">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-text-muted/40">&middot;</span>
                    <span className="text-text-muted/60 text-xs">{post.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brand mb-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA FINAL ==================== */}
      <section id="contacto" className="py-20 md:py-28 bg-brand">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
            &iquest;Listo para que tus números
            <span className="text-gold"> trabajen para ti?</span>
          </h2>
          <p className="text-cream/70 text-lg mb-10 max-w-xl mx-auto">
            Reserva una llamada gratuita de diagnóstico. Sin compromiso, sin letra
            pequeña. Solo 30 minutos para analizar el potencial de tu hotel.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-brand px-10 py-4 rounded font-semibold text-lg transition-colors"
          >
            Reservar llamada gratuita de diagnóstico
            <Calendar className="ml-3 h-5 w-5" />
          </a>
          <p className="text-cream/40 text-sm mt-6">
            Sin compromiso &middot; 30 minutos &middot; 100% gratuito
          </p>
        </div>
      </section>
    </main>
  );
}
