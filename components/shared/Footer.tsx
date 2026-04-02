import Link from "next/link";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-cream mb-4">Innova</h3>
            <p className="text-cream/60 text-sm leading-relaxed mb-4">
              El partner estratégico de los hoteleros que quieren rentabilidad real.
              Revenue management, data intelligence y distribución.
            </p>
            <div className="flex items-center gap-2 text-cream/40 text-sm">
              <MapPin className="h-4 w-4" />
              Puerto del Carmen, Lanzarote
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/servicios", label: "Servicios" },
                { href: "/casos", label: "Casos de Éxito" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/blog", label: "Blog" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/60 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@innovagestionhotelera.com"
                  className="flex items-center gap-2 text-cream/60 hover:text-gold text-sm transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  info@innovagestionhotelera.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+34928000000"
                  className="flex items-center gap-2 text-cream/60 hover:text-gold text-sm transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +34 928 000 000
                </a>
              </li>
              <li>
                <a
                  href="https://es.linkedin.com/company/innova-gestion-hotelera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream/60 hover:text-gold text-sm transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-sm">
            &copy; {new Date().getFullYear()} Innova Gestión Hotelera. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-cream/40 text-xs">
            <a href="/politica-privacidad" className="hover:text-gold transition-colors">
              Política de Privacidad
            </a>
            <a href="/aviso-legal" className="hover:text-gold transition-colors">
              Aviso Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
