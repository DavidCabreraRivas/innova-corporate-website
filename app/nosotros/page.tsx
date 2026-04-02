import { Metadata } from "next";
import { ArrowRight, Linkedin, Award, GraduationCap, Briefcase, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros — Innova Gestión Hotelera",
  description:
    "David Cabrera: Economista Colegiado, MSc Data Science, 15 años en revenue management. Partner estratégico para hoteles independientes en Canarias.",
};

export default function NosotrosPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
            Quién soy
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
            David Cabrera
          </h1>
          <p className="text-cream/70 text-lg max-w-2xl">
            Economista Colegiado &middot; MSc Data Science &middot; 15 años Revenue Management
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="bg-cream rounded-lg aspect-[3/4] flex items-center justify-center sticky top-28">
                <div className="text-center text-brand/40">
                  <div className="w-24 h-24 bg-brand/10 rounded-full mx-auto mb-4" />
                  <p className="text-sm">Foto profesional</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-10">
              {/* Story */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-brand mb-4">Mi historia</h2>
                <div className="space-y-4 text-text leading-relaxed">
                  <p>
                    He gestionado revenue en Barceló, RIU, Bahía Príncipe y cadenas
                    internacionales durante más de 15 años. Conozco las herramientas,
                    los procesos y la mentalidad que hacen que un hotel maximice su rentabilidad.
                  </p>
                  <p>
                    Ahora aplico esa misma metodología de cadena de 5 estrellas a
                    hoteles independientes en Canarias. Porque un hotel de 80 habitaciones
                    merece la misma estrategia de pricing que uno de 800.
                  </p>
                  <p>
                    No soy una consultoría fría que te manda un PDF y desaparece.
                    Soy tu partner en el día a día del negocio. Cuando me llamas,
                    contesto yo. Cuando necesitas una decisión de pricing, la tomamos juntos.
                  </p>
                </div>
              </div>

              {/* Credentials */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-brand mb-6">Credenciales</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: GraduationCap, title: "Economista Colegiado", desc: "Colegio de Economistas de Las Palmas" },
                    { icon: GraduationCap, title: "MSc Data Science", desc: "Aplicación de IA y análisis de datos al sector hotelero" },
                    { icon: Briefcase, title: "15+ años Revenue", desc: "Barceló, RIU, Bahía Príncipe, cadenas internacionales" },
                    { icon: Award, title: "50+ hoteles", desc: "Gestionados en España y Caribe" },
                    { icon: MapPin, title: "Base en Lanzarote", desc: "Conocimiento local del mercado canario" },
                    { icon: Linkedin, title: "LinkedIn", desc: "Perfil profesional verificable" },
                  ].map((cred) => (
                    <div key={cred.title} className="flex items-start gap-3 bg-cream rounded-lg p-4">
                      <cred.icon className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-brand text-sm">{cred.title}</p>
                        <p className="text-text-muted text-xs">{cred.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Philosophy */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-brand mb-4">Mi filosofía</h2>
                <div className="space-y-4">
                  {[
                    { title: "Directo", desc: "Sin rodeos. El hotelero no tiene tiempo para presentaciones de 50 diapositivas." },
                    { title: "Orientado a resultados", desc: "Siempre cifras, nunca solo conceptos. Si no se puede medir, no se puede mejorar." },
                    { title: "Partner, no proveedor", desc: "Me involucro en tu negocio como si fuera mío. Porque tu éxito es mi mejor tarjeta de visita." },
                    { title: "Local con visión global", desc: "Conozco Canarias y su mercado, pero he trabajado con estándares internacionales." },
                  ].map((item) => (
                    <div key={item.title} className="border-l-2 border-gold pl-4">
                      <p className="font-semibold text-brand">{item.title}</p>
                      <p className="text-text-muted text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-brand px-8 py-4 rounded font-semibold transition-colors"
                >
                  Habla conmigo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="https://es.linkedin.com/company/innova-gestion-hotelera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-brand/20 hover:border-gold text-brand hover:text-gold px-8 py-4 rounded font-semibold transition-colors"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Ver en LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
