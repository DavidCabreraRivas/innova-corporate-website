import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — Innova Gestión Hotelera",
};

export default function PoliticaPrivacidadPage() {
  return (
    <main>
      <section className="bg-brand pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-cream">
            Política de Privacidad
          </h1>
        </div>
      </section>
      <section className="py-16 bg-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm text-text">
          <p className="text-text-muted text-sm mb-8">Última actualización: abril 2026</p>

          <h2 className="font-serif text-xl font-bold text-brand mt-8 mb-3">1. Responsable del tratamiento</h2>
          <p>Innova Gestión Hotelera<br />Puerto del Carmen, Lanzarote, España<br />info@innovagestionhotelera.com</p>

          <h2 className="font-serif text-xl font-bold text-brand mt-8 mb-3">2. Datos que recopilamos</h2>
          <p>Recopilamos únicamente los datos que nos proporcionas voluntariamente a través de nuestros formularios de contacto: nombre, email, nombre del hotel y mensaje.</p>

          <h2 className="font-serif text-xl font-bold text-brand mt-8 mb-3">3. Finalidad</h2>
          <p>Los datos se utilizan exclusivamente para responder a tu consulta y, si lo autorizas, enviarte información sobre nuestros servicios.</p>

          <h2 className="font-serif text-xl font-bold text-brand mt-8 mb-3">4. Base legal</h2>
          <p>El tratamiento se basa en tu consentimiento expreso al enviar el formulario (Art. 6.1.a RGPD).</p>

          <h2 className="font-serif text-xl font-bold text-brand mt-8 mb-3">5. Conservación</h2>
          <p>Conservaremos tus datos mientras sea necesario para atender tu solicitud y durante los plazos legales aplicables.</p>

          <h2 className="font-serif text-xl font-bold text-brand mt-8 mb-3">6. Derechos</h2>
          <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, portabilidad, limitación y oposición escribiendo a info@innovagestionhotelera.com.</p>

          <h2 className="font-serif text-xl font-bold text-brand mt-8 mb-3">7. Cookies</h2>
          <p>Este sitio utiliza cookies técnicas necesarias para su funcionamiento y cookies analíticas (Google Analytics) para medir el tráfico de forma anónima.</p>
        </div>
      </section>
    </main>
  );
}
