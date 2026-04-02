import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal — Innova Gestión Hotelera",
};

export default function AvisoLegalPage() {
  return (
    <main>
      <section className="bg-brand pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-cream">
            Aviso Legal
          </h1>
        </div>
      </section>
      <section className="py-16 bg-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm text-text">
          <p className="text-text-muted text-sm mb-8">Última actualización: abril 2026</p>

          <h2 className="font-serif text-xl font-bold text-brand mt-8 mb-3">1. Datos identificativos</h2>
          <p>
            Titular: David Cabrera<br />
            Actividad: Consultoría de gestión hotelera y revenue management<br />
            Domicilio: Puerto del Carmen, Lanzarote, España<br />
            Email: info@innovagestionhotelera.com
          </p>

          <h2 className="font-serif text-xl font-bold text-brand mt-8 mb-3">2. Objeto</h2>
          <p>Este sitio web tiene como finalidad informar sobre los servicios de consultoría hotelera de Innova Gestión Hotelera.</p>

          <h2 className="font-serif text-xl font-bold text-brand mt-8 mb-3">3. Propiedad intelectual</h2>
          <p>Todos los contenidos de este sitio web (textos, imágenes, diseño, logotipos) son propiedad de Innova Gestión Hotelera o se utilizan con autorización, y están protegidos por la legislación de propiedad intelectual vigente.</p>

          <h2 className="font-serif text-xl font-bold text-brand mt-8 mb-3">4. Limitación de responsabilidad</h2>
          <p>Innova Gestión Hotelera no se hace responsable de los daños derivados del uso de este sitio web ni de la información contenida en el mismo, que tiene carácter meramente informativo.</p>

          <h2 className="font-serif text-xl font-bold text-brand mt-8 mb-3">5. Legislación aplicable</h2>
          <p>Este aviso legal se rige por la legislación española. Para la resolución de cualquier conflicto serán competentes los juzgados y tribunales de Las Palmas de Gran Canaria.</p>
        </div>
      </section>
    </main>
  );
}
