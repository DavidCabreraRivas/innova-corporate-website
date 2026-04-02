import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog — Innova Gestión Hotelera",
  description:
    "Artículos sobre revenue management, data intelligence y distribución hotelera. Contenido práctico para hoteleros independientes.",
};

const posts = [
  {
    slug: "guia-revenue-management-hoteles-independientes",
    category: "Revenue Basics",
    title: "Guía completa de Revenue Management para hoteles independientes",
    excerpt:
      "Todo lo que necesitas saber para implementar revenue management en tu hotel sin un equipo dedicado. Desde lo básico hasta estrategias avanzadas.",
    date: "Próximamente",
    readTime: "12 min",
  },
  {
    slug: "reducir-dependencia-booking",
    category: "Distribución",
    title: "Cómo reducir dependencia de Booking.com sin perder ventas",
    excerpt:
      "Estrategias probadas para equilibrar tu revenue mix y aumentar la venta directa de forma sostenible. Con datos reales de hoteles en Canarias.",
    date: "Próximamente",
    readTime: "8 min",
  },
  {
    slug: "revpar-adr-ocupacion-que-medir",
    category: "Data Hotelera",
    title: "RevPAR, ADR y Ocupación: qué medir y cómo actuar",
    excerpt:
      "Los KPIs esenciales del revenue management y cómo convertirlos en acciones concretas para tu hotel. Guía práctica con ejemplos.",
    date: "Próximamente",
    readTime: "10 min",
  },
  {
    slug: "pricing-dinamico-hotel-pequeno",
    category: "Revenue Basics",
    title: "Pricing dinámico para hoteles pequeños: por dónde empezar",
    excerpt:
      "No necesitas un software de miles de euros. Te explicamos cómo implementar pricing dinámico paso a paso con herramientas accesibles.",
    date: "Próximamente",
    readTime: "7 min",
  },
  {
    slug: "dashboard-bi-hotelero",
    category: "Data Hotelera",
    title: "Tu primer dashboard de BI hotelero: qué incluir y qué no",
    excerpt:
      "Los errores más comunes al crear un dashboard hotelero y cómo diseñar uno que realmente uses para tomar decisiones.",
    date: "Próximamente",
    readTime: "9 min",
  },
  {
    slug: "mercado-hotelero-canarias-2026",
    category: "Mercado",
    title: "Estado del mercado hotelero en Canarias 2026",
    excerpt:
      "Análisis de tendencias, ocupación, ADR y perspectivas para el mercado hotelero canario. Datos actualizados y proyecciones.",
    date: "Próximamente",
    readTime: "11 min",
  },
];

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
            Blog
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
            Revenue Management al grano
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">
            Artículos prácticos sobre revenue management, data intelligence y
            distribución hotelera. Sin teoría innecesaria, solo lo que puedes aplicar hoy.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-cream py-6 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {["Todos", "Revenue Basics", "Data Hotelera", "Distribución", "Mercado"].map(
              (cat) => (
                <span
                  key={cat}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                    cat === "Todos"
                      ? "bg-brand text-cream"
                      : "bg-white text-text-muted hover:bg-brand hover:text-cream"
                  }`}
                >
                  {cat}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow group"
              >
                {/* Image placeholder */}
                <div className="bg-brand/5 h-48 flex items-center justify-center">
                  <span className="text-brand/30 text-sm font-medium">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-text-muted/40">&middot;</span>
                    <span className="text-text-muted/60 text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="font-serif text-lg font-bold text-brand mb-2 group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <p className="text-text-muted/50 text-xs italic">{post.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-brand text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-cream mb-4">
            No te pierdas ningún artículo
          </h2>
          <p className="text-cream/70 mb-8">
            Suscríbete y recibe contenido práctico de revenue management directamente en tu bandeja.
            Sin spam, solo valor.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded bg-white/10 border border-white/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold"
            />
            <button className="bg-gold hover:bg-gold-light text-brand px-6 py-3 rounded font-semibold transition-colors whitespace-nowrap">
              Suscribirme
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
